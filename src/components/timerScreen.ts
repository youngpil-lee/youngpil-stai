import { PoseEngine } from '../engine/poseEngine';

export const renderTimerScreen = (container: HTMLElement) => {
  container.innerHTML = `
    <div class="flex flex-col h-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div class="flex items-center p-4 pb-2 justify-between sticky top-0 z-10">
        <div class="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start">
          <span class="material-symbols-outlined text-2xl">settings</span>
        </div>
        <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
          STAI 몰입 타이머</h2>
        <div class="flex w-12 items-center justify-end">
          <span class="material-symbols-outlined text-2xl text-primary">help</span>
        </div>
      </div>

      <main class="flex-1 flex flex-col items-center justify-center px-6 gap-8 overflow-y-auto">
        <!-- Warning Badge -->
        <div id="warning-badge" class="w-full max-w-sm flex flex-col items-center gap-3 transition-opacity duration-300 opacity-0">
          <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-500">
            <span class="material-symbols-outlined text-sm">warning</span>
            <span class="text-sm font-bold tracking-tight">거북목 경고: 자세 상태 위험</span>
          </div>
        </div>

        <div class="relative group">
          <!-- Pause Overlay -->
          <div id="pause-overlay" class="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-full timer-blur bg-background-dark/70 border border-red-500/30 transition-all duration-500 opacity-0 pointer-events-none">
            <span class="material-symbols-outlined text-5xl text-white mb-3">pause_circle</span>
            <p class="text-white text-sm font-bold tracking-tight text-center px-6 leading-relaxed">
              타이머 일시정지<br /><span class="text-xs font-normal opacity-80">올바른 자세를 취해주세요</span>
            </p>
          </div>

          <div class="relative flex items-center justify-center w-72 h-72">
            <!-- Camera & Canvas Overlay -->
            <div class="absolute inset-0 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800 z-0">
              <video id="webcam" autoplay playsinline class="w-full h-full object-cover scale-x-[-1]"></video>
              <canvas id="pose-canvas" class="absolute inset-0 w-full h-full"></canvas>
            </div>

            <!-- Progress Ring -->
            <svg class="w-full h-full transform -rotate-90 z-10 pointer-events-none">
              <circle class="text-slate-200/20 dark:text-slate-800/50" cx="144" cy="144" fill="transparent" r="130" stroke="currentColor" stroke-width="8"></circle>
              <circle id="progress-circle" class="text-primary transition-all duration-300" cx="144" cy="144" fill="transparent" r="130" stroke="currentColor" stroke-dasharray="816" stroke-dashoffset="816" stroke-linecap="round" stroke-width="12"></circle>
            </svg>

            <!-- Stats Central -->
            <div class="absolute flex flex-col items-center z-10 pointer-events-none">
              <span class="text-primary text-xs font-bold tracking-widest mb-1 uppercase">STAI 몰입 지수</span>
              <span id="stai-score" class="text-6xl font-bold font-display">--</span>
              <div class="flex items-center gap-1 mt-2 text-slate-400">
                <span class="material-symbols-outlined text-sm">timer</span>
                <span id="time-count" class="text-lg font-medium font-display">00:00</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Dashboard Widgets -->
        <div class="w-full max-w-sm grid grid-cols-2 gap-4">
          <div class="bg-slate-100 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 flex flex-col items-center">
            <span class="text-xs text-slate-500 dark:text-primary/60 font-bold tracking-tight mb-1">몰입 포인트</span>
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-primary text-sm">bolt</span>
              <span id="points" class="text-2xl font-bold font-display">1,240</span>
            </div>
          </div>
          <div class="bg-slate-100 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 flex flex-col items-center">
            <span class="text-xs text-slate-500 dark:text-primary/60 font-bold tracking-tight mb-1">연속 달성</span>
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-orange-400 text-sm">local_fire_department</span>
              <span id="streak" class="text-2xl font-bold font-display">12일</span>
            </div>
          </div>
        </div>

        <!-- Progress Bar & Actions -->
        <div class="w-full max-w-sm flex flex-col gap-4 mb-8">
          <div class="flex flex-col gap-2">
            <div class="flex justify-between text-xs font-bold tracking-tight text-slate-500">
              <span>현재 몰입도</span>
              <span id="focus-level-text" class="text-primary">분석 중...</span>
            </div>
            <div class="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div id="focus-progress-bar" class="h-full bg-primary rounded-full transition-all duration-500" style="width: 0%;"></div>
            </div>
          </div>
          <div class="flex gap-4">
            <button id="stop-btn" class="flex-1 py-4 rounded-xl bg-slate-200 dark:bg-slate-800 font-bold hover:opacity-90 transition-opacity">
              세션 종료
            </button>
            <button id="start-btn" class="flex-[1.5] py-4 rounded-xl bg-primary text-background-dark font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">play_arrow</span>
              몰입 시작
            </button>
          </div>
        </div>
      </main>

      <!-- Bottom Nav -->
      <div class="mt-auto border-t border-slate-200 dark:border-white/10 bg-background-light dark:bg-[#0d1b26] px-4 pb-8 pt-2">
        <div class="flex gap-2">
          <a class="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-primary" href="/" onclick="event.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate'))">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined font-variation-fill">timer</span>
            </div>
            <p class="text-[10px] font-bold tracking-tight">몰입</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="/leaderboard" onclick="event.preventDefault(); window.history.pushState({}, '', '/leaderboard'); window.dispatchEvent(new PopStateEvent('popstate'))">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined">emoji_events</span>
            </div>
            <p class="text-[10px] font-bold tracking-tight">랭킹</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="/study-room" onclick="event.preventDefault(); window.history.pushState({}, '', '/study-room'); window.dispatchEvent(new PopStateEvent('popstate'))">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined">groups</span>
            </div>
            <p class="text-[10px] font-bold tracking-tight">공부방</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="/profile" onclick="event.preventDefault(); window.history.pushState({}, '', '/profile'); window.dispatchEvent(new PopStateEvent('popstate'))">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined">account_circle</span>
            </div>
            <p class="text-[10px] font-bold tracking-tight">프로필</p>
          </a>
        </div>
      </div>
    </div>
  `;

  // UI Elements
  const video = container.querySelector<HTMLVideoElement>('#webcam')!;
  const canvas = container.querySelector<HTMLCanvasElement>('#pose-canvas')!;
  const statusOverlay = container.querySelector<HTMLElement>('#pause-overlay')!;
  const warningBadge = container.querySelector<HTMLElement>('#warning-badge')!;
  const timeDisplay = container.querySelector<HTMLElement>('#time-count')!;
  const scoreDisplay = container.querySelector<HTMLElement>('#stai-score')!;
  const progressCircle = container.querySelector<SVGCircleElement>('#progress-circle')!;
  const progressBar = container.querySelector<HTMLElement>('#focus-progress-bar')!;
  const focusText = container.querySelector<HTMLElement>('#focus-level-text')!;

  let seconds = 0;
  let timerInterval: any = null;
  const MAX_CIRCLE_DASH = 816;

  // Sync video/canvas size & Handle Dynamic Resize
  const syncLayout = () => {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
  };

  video.onloadedmetadata = syncLayout;
  window.addEventListener('resize', syncLayout);

  const engine = new PoseEngine(video, canvas, (isFocused) => {
    if (isFocused) {
      statusOverlay.style.opacity = '0';
      statusOverlay.style.pointerEvents = 'none';
      warningBadge.style.opacity = '0';
      focusText.textContent = "최상";
      focusText.classList.replace('text-red-500', 'text-primary');
      if (!timerInterval) startTimer();
    } else {
      statusOverlay.style.opacity = '1';
      statusOverlay.style.pointerEvents = 'auto';
      warningBadge.style.opacity = '1';
      focusText.textContent = "경고";
      focusText.classList.replace('text-primary', 'text-red-500');
      stopTimer();
    }
  });

  const startTimer = () => {
    timerInterval = setInterval(() => {
      seconds++;
      const m = Math.floor(seconds / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      timeDisplay.textContent = `${m}:${s}`;

      // Update UI visual elements
      const progress = (seconds % 3600) / 3600; // Mock 1 hour cycle
      const offset = MAX_CIRCLE_DASH - (progress * MAX_CIRCLE_DASH);
      progressCircle.style.strokeDashoffset = offset.toString();

      // STAI Score Mockup
      const currentScore = 80 + Math.floor(Math.random() * 20);
      scoreDisplay.textContent = currentScore.toString();
      progressBar.style.width = `${currentScore}%`;
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
    timerInterval = null;
  };

  container.querySelector('#start-btn')?.addEventListener('click', () => {
    engine.start();
    (container.querySelector('#start-btn') as HTMLElement).style.opacity = '0.5';
    (container.querySelector('#start-btn') as HTMLButtonElement).disabled = true;
    (container.querySelector('#start-btn') as HTMLElement).innerText = '몰입 중...';
  });

  container.querySelector('#stop-btn')?.addEventListener('click', async () => {
    engine.stop();
    stopTimer();
    const { saveSession, auth } = await import('../services/firebase');
    const userId = auth.currentUser?.uid || 'guest_user';
    await saveSession(userId, seconds, parseInt(scoreDisplay.textContent || '0'));
    alert(`고생하셨습니다! 총 ${seconds}초 동안 몰입하셨습니다.`);

    // 글로벌 라우팅 활용
    window.history.pushState({}, '', '/leaderboard');
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
};
