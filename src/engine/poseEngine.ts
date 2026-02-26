import { Pose, Results } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { POSE_CONNECTIONS } from '@mediapipe/pose';

export class PoseEngine {
    private pose: Pose;
    private camera: Camera | null = null;
    private videoElement: HTMLVideoElement;
    private canvasElement: HTMLCanvasElement;
    private canvasCtx: CanvasRenderingContext2D;
    private audioContext: AudioContext | null = null;
    private onFocusChange: (isFocused: boolean) => void;

    constructor(videoElement: HTMLVideoElement, canvasElement: HTMLCanvasElement, onFocusChange: (isFocused: boolean) => void) {
        this.videoElement = videoElement;
        this.canvasElement = canvasElement;
        this.canvasCtx = canvasElement.getContext('2d')!;
        this.onFocusChange = onFocusChange;

        this.pose = new Pose({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
        });

        this.pose.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            enableSegmentation: false,
            smoothSegmentation: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        });

        this.pose.onResults((results) => this.processResults(results));

        window.addEventListener('resize', () => this.syncCanvasSize());

        this.camera = new Camera(videoElement, {
            onFrame: async () => {
                await this.pose.send({ image: videoElement });
            },
            width: 640,
            height: 480,
        });
    }

    private syncCanvasSize() {
        if (this.videoElement.videoWidth) {
            this.canvasElement.width = this.videoElement.clientWidth;
            this.canvasElement.height = this.videoElement.clientHeight;
        }
    }

    public start() {
        this.initSilentAudio();
        this.camera?.start();
    }

    private initSilentAudio() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            gainNode.gain.value = 0.001;
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            oscillator.start();
        } else if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    public stop() {
        this.camera?.stop();
    }

    private processResults(results: Results) {
        this.syncCanvasSize();

        // 시각화
        this.canvasCtx.save();
        this.canvasCtx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);

        // 거울 모드 대응 (좌우 반전)
        this.canvasCtx.scale(-1, 1);
        this.canvasCtx.translate(-this.canvasElement.width, 0);

        if (results.poseLandmarks) {
            drawConnectors(this.canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, { color: '#13EC80', lineWidth: 4 });
            drawLandmarks(this.canvasCtx, results.poseLandmarks, { color: '#FFFFFF', lineWidth: 1, radius: 3 });
        }
        this.canvasCtx.restore();

        if (!results.poseLandmarks) {
            this.onFocusChange(false);
            return;
        }

        // STAI Logic
        const leftEar = results.poseLandmarks[7];
        const rightEar = results.poseLandmarks[8];
        const leftShoulder = results.poseLandmarks[11];
        const rightShoulder = results.poseLandmarks[12];

        if (!leftEar || !rightEar || !leftShoulder || !rightShoulder) {
            this.onFocusChange(false);
            return;
        }

        const avgShoulderY = (leftShoulder.y + rightShoulder.y) / 2;
        const avgEarY = (leftEar.y + rightEar.y) / 2;

        // 임계값 완화: 귀가 어깨선보다 위에 있고 머리가 너무 작아지지 않았을 때
        const isFocused = avgEarY < avgShoulderY && Math.abs(leftEar.x - rightEar.x) > 0.03;
        this.onFocusChange(isFocused);
    }
}
