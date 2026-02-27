export const renderStudyRoomScreen = (container: HTMLElement) => {
  container.innerHTML = `
    <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden">
      <header class="flex items-center justify-between p-4 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button class="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-primary/10 transition-colors" onclick="window.location.hash='#/'">
          <span class="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back_ios_new</span>
        </button>
        <div class="flex flex-col items-center text-center">
          <h1 class="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 uppercase text-[10px] opacity-60">세션 활성 중</h1>
          <h2 class="text-xl font-bold text-primary font-display">가상 집중 공부방</h2>
        </div>
        <button class="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-primary/10 transition-colors">
          <span class="material-symbols-outlined text-slate-900 dark:text-slate-100">settings</span>
        </button>
      </header>

      <main class="flex-1 overflow-y-auto px-4 pb-24 h-full">
        <div class="flex gap-3 my-6">
          <div class="flex-1 timer-blur bg-primary/5 rounded-xl p-4 flex flex-col gap-1 border border-primary/20">
            <p class="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">나의 STAI 지수</p>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold text-slate-900 dark:text-slate-100 font-display">0.94</span>
              <span class="text-primary text-xs font-bold">최고조</span>
            </div>
            <div class="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
              <div class="bg-primary h-full w-[94%]"></div>
            </div>
          </div>
          <div class="flex-1 timer-blur bg-primary/5 rounded-xl p-4 flex flex-col gap-1 border border-primary/20">
            <p class="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">공부방 분위기</p>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold text-slate-900 dark:text-slate-100">높음</span>
              <span class="text-primary text-xs font-bold">+5%</span>
            </div>
            <div class="flex gap-1 mt-2">
              <div class="h-1 flex-1 bg-primary rounded-full"></div>
              <div class="h-1 flex-1 bg-primary rounded-full"></div>
              <div class="h-1 flex-1 bg-primary rounded-full"></div>
              <div class="h-1 flex-1 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mb-4">
          <h3 class="font-bold text-lg">바디 더블링 현황</h3>
          <span class="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full font-bold">라이무</span>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <!-- My Profile card in grid -->
          <div class="flex flex-col items-center gap-2 group">
            <div class="relative w-20 h-20 rounded-full border-2 border-primary shadow-[0_0_15px_rgba(19,236,128,0.4)] p-1">
              <div class="w-full h-full rounded-full bg-cover bg-center overflow-hidden"
                style="background-image: url('https://api.dicebear.com/7.x/avataaars/svg?seed=Me')">
              </div>
              <div class="absolute -bottom-1 -right-1 bg-primary text-background-dark text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase">나</div>
            </div>
            <p class="text-xs font-medium opacity-80">Me</p>
          </div>

          <!-- Other rivals -->
          ${[1, 2, 3, 4, 5, 6, 7].map(i => `
            <div class="flex flex-col items-center gap-2">
              <div class="relative w-20 h-20 rounded-full border-2 border-primary/40 p-1">
                <div class="w-full h-full rounded-full bg-cover bg-center grayscale opacity-80 overflow-hidden"
                  style="background-image: url('https://api.dicebear.com/7.x/avataaars/svg?seed=Rival${i}')">
                </div>
              </div>
              <p class="text-xs font-medium opacity-60">Rival ${i}</p>
            </div>
          `).join('')}
          
          <div class="flex flex-col items-center gap-2">
            <div class="w-20 h-20 rounded-full border-2 border-dashed border-primary/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-primary/20 scale-150">add</span>
            </div>
            <p class="text-[10px] font-medium text-primary/30 uppercase tracking-tighter">친구 초대</p>
          </div>
        </div>

        <div class="mt-8 flex justify-center">
          <div class="timer-blur bg-primary/5 px-5 py-3 rounded-full flex items-center gap-3 border border-primary/30">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <p class="text-sm font-medium">
              <span class="opacity-60">시스템:</span> 현재 42명이 함께 몰입하고 있습니다
            </p>
          </div>
        </div>
      </main>

      <nav class="fixed bottom-0 left-0 right-0 timer-blur bg-background-light/90 dark:bg-background-dark/90 border-t border-primary/10 px-6 pb-8 pt-4 z-50">
        <div class="flex justify-between items-center max-w-md mx-auto">
          <a class="flex flex-col items-center gap-1 text-primary" href="#/study-room">
            <span class="material-symbols-outlined font-variation-fill">grid_view</span>
            <span class="text-[10px] font-bold uppercase">공부방</span>
          </a>
          <a class="flex flex-col items-center gap-1 text-slate-400" href="#/leaderboard">
            <span class="material-symbols-outlined">emoji_events</span>
            <span class="text-[10px] font-bold uppercase">랭킹</span>
          </a>
          <div class="relative -top-10">
            <button class="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 border-4 border-background-dark" onclick="window.location.hash='#/'">
              <span class="material-symbols-outlined text-background-dark font-bold text-3xl">play_arrow</span>
            </button>
          </div>
          <a class="flex flex-col items-center gap-1 text-slate-400" href="#" onclick="alert('준비 중입니다!')">
            <span class="material-symbols-outlined">group</span>
            <span class="text-[10px] font-bold uppercase">친구</span>
          </a>
          <a class="flex flex-col items-center gap-1 text-slate-400" href="#/profile">
            <span class="material-symbols-outlined">person</span>
            <span class="text-[10px] font-bold uppercase">프로필</span>
          </a>
        </div>
      </nav>
    </div>
  `;
};
