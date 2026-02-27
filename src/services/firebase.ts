import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase 설정값 (사용자 프로젝트 정보로 대체 필요)
const firebaseConfig = {
    apiKey: "AIzaSyDUrqlHHHQ1eSkFr3Qu6a8QwOahnzbo8Yg",
    authDomain: "ai-focus-solution.firebaseapp.com",
    projectId: "ai-focus-solution",
    storageBucket: "ai-focus-solution.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

let app;
let auth: any;
let db: any;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
} catch (error) {
    console.error("Firebase initialization failed:", error);
    // 더미 객체 또는 null을 제공하여 앱 중단 방지
}

export { auth, db };

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const saveSession = async (userId: string, duration: number, staiScore: number) => {
    try {
        await addDoc(collection(db, "sessions"), {
            userId,
            duration,
            staiScore,
            timestamp: serverTimestamp()
        });
        console.log("Session saved successfully");
    } catch (e) {
        console.error("Error saving session: ", e);
    }
};

export const getRanking = async () => {
    // 실시간 랭킹 데이터 조회 로직
    return [];
};
