export const renderLeaderboardScreen = (container: HTMLElement) => {
  container.innerHTML = `
    <div class="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden border-x border-primary/10 shadow-2xl bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div class="sticky top-0 z-20 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between">
        <div class="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 cursor-pointer" onclick="window.location.hash='#/'">
          <span class="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
          상대적 리더보드</h2>
        <div class="flex w-10 items-center justify-end">
          <div class="text-slate-900 dark:text-slate-100 flex size-10 items-center justify-center rounded-full bg-primary/10">
            <span class="material-symbols-outlined">info</span>
          </div>
        </div>
      </div>

      <div class="flex px-4 py-4">
        <div class="flex h-12 flex-1 items-center justify-center rounded-xl bg-primary/10 p-1.5">
          <label class="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 transition-all duration-200 bg-primary text-background-dark font-bold text-sm">
            <span class="truncate">내 주변 라이벌</span>
          </label>
          <label class="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 transition-all duration-200 text-slate-600 dark:text-primary font-bold text-sm">
            <span class="truncate">전체 순위</span>
          </label>
        </div>
      </div>

      <div class="px-4 py-2">
        <div class="flex items-center gap-2 mb-1">
          <span class="material-symbols-outlined text-primary text-sm">location_on</span>
          <h3 class="text-slate-500 dark:text-primary/70 text-xs font-bold uppercase tracking-widest">서울 지역 라이벌</h3>
        </div>
        <p class="text-slate-900 dark:text-slate-100 text-sm font-medium">STAI (초단위 몰입 지수) 기준 순위</p>
      </div>

      <div id="leaderboard-list" class="flex flex-col gap-2 px-4 py-2 flex-grow overflow-y-auto hide-scrollbar">
        <!-- User Rank (My High Score Mockup) -->
        <div class="relative flex items-center gap-4 bg-primary p-4 rounded-xl shadow-lg shadow-primary/20 ring-4 ring-primary/20 my-2">
          <div class="text-background-dark font-black w-6 text-sm italic">121</div>
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 border-background-dark"
            style="background-image: url('https://api.dicebear.com/7.x/avataaars/svg?seed=Me')">
          </div>
          <div class="flex flex-col flex-1">
            <div class="flex items-center gap-2">
              <p class="text-background-dark text-lg font-black uppercase">나 (김몰입)</p>
              <span class="bg-background-dark text-primary text-[10px] px-1.5 py-0.5 rounded font-black tracking-widest">활동 중</span>
            </div>
            <p class="text-background-dark/70 text-xs font-bold">자세 유지: 98%</p>
          </div>
          <div class="text-right">
            <p class="text-background-dark text-xl font-black">145</p>
            <p class="text-background-dark/60 text-[10px] uppercase font-bold tracking-tighter">STAI</p>
          </div>
        </div>

        <!-- Rival Items -->
        ${[1, 2, 3, 4, 5].map(i => `
          <div class="flex items-center gap-4 bg-white dark:bg-slate-800/40 p-4 rounded-xl border border-primary/5 shadow-sm">
            <div class="text-slate-400 dark:text-slate-500 font-bold w-6 text-sm">${115 + i}</div>
            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 border-2 border-slate-200 dark:border-primary/20"
              style="background-image: url('https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}')">
            </div>
            <div class="flex flex-col flex-1">
              <p class="text-slate-900 dark:text-slate-100 text-base font-bold">User ${i}</p>
              <div class="flex items-center gap-1">
                <span class="size-2 rounded-full ${i % 2 === 0 ? 'bg-primary animate-pulse' : 'bg-slate-300'}"></span>
                <p class="${i % 2 === 0 ? 'text-primary' : 'text-slate-500'} text-xs">${i % 2 === 0 ? '현재 몰입 중' : '2시간 전'}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-primary text-sm font-bold">${150 - i * 5}</p>
              <p class="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">STAI</p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Bottom Nav -->
      <nav class="mt-auto border-t border-primary/10 bg-background-light dark:bg-background-dark px-4 pb-8 pt-2">
        <div class="flex gap-2">
          <a class="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-slate-500 dark:text-primary/40" href="#/">
            <span class="material-symbols-outlined">timer</span>
            <p class="text-[10px] font-bold uppercase tracking-wider">몰입</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-primary border-t-2 border-primary" href="#/leaderboard">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">groups</span>
            <p class="text-[10px] font-bold uppercase tracking-wider">라이벌</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-slate-500 dark:text-primary/40" href="#/study-room">
            <span class="material-symbols-outlined">grid_view</span>
            <p class="text-[10px] font-bold uppercase tracking-wider">공부방</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-slate-500 dark:text-primary/40" href="#/profile">
            <span class="material-symbols-outlined">person</span>
            <p class="text-[10px] font-bold uppercase tracking-wider">프로필</p>
          </a>
        </div>
      </nav>
    </div>
  `;
};
