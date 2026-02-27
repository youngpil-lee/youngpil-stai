export const renderProfileScreen = (container: HTMLElement) => {
  container.innerHTML = `
    <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header class="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200/10">
        <button class="flex items-center justify-center size-10 rounded-full bg-slate-200/50 dark:bg-primary/10 text-slate-900 dark:text-primary" onclick="window.location.hash='#/'">
          <span class="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 class="text-xl font-bold tracking-tight">사용자 프로필 등록</h1>
        <div class="size-10"></div>
      </header>
      <main class="flex-1 px-6 pt-4 pb-12 max-w-md mx-auto w-full">
        <section class="flex flex-col items-center mb-10">
          <div class="relative group">
            <div class="size-40 rounded-full bg-gradient-to-tr from-primary/20 to-primary/40 p-1 mb-4 shadow-[0_0_30px_rgba(37,244,157,0.2)]">
              <div class="size-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-primary/30">
                <img alt="3D Avatar" class="size-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                  src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=STAI" />
              </div>
            </div>
            <button class="absolute bottom-2 right-2 bg-primary text-background-dark size-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
              <span class="material-symbols-outlined font-bold">photo_camera</span>
            </button>
          </div>
          <div class="text-center mt-2">
            <h2 class="text-2xl font-bold font-display">동반 캐릭터 선택</h2>
            <p class="text-slate-500 dark:text-primary/70 text-sm">함께 학습할 3D 파트너를 선택하세요</p>
          </div>
        </section>
        <form class="space-y-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-primary/60 px-1" for="nickname">닉네임</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-primary/40">person</span>
              <input class="w-full h-16 pl-12 pr-4 bg-white dark:bg-slate-800/40 border-2 border-slate-200 dark:border-primary/20 rounded-xl focus:border-primary focus:ring-0 text-lg font-medium transition-all"
                id="nickname" placeholder="어떤 이름으로 불러드릴까요?" type="text" value="김몰입" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-primary/60 px-1" for="focus-goal">집중 목표</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-primary/40">target</span>
              <select class="w-full h-16 pl-12 pr-12 bg-white dark:bg-slate-800/40 border-2 border-slate-200 dark:border-primary/20 rounded-xl focus:border-primary focus:ring-0 text-lg font-medium transition-all appearance-none" id="focus-goal">
                <option value="exam">자격증 및 시험 공부</option>
                <option value="coding" selected>소프트웨어 개발/코딩</option>
                <option value="reading">독서 및 자료 조사</option>
              </select>
            </div>
          </div>
        </form>

        <!-- Premium Membership Link -->
        <a href="#/subscription" class="mt-8 block p-5 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 group hover:border-primary transition-all duration-300">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="size-12 rounded-xl bg-primary flex items-center justify-center text-background-dark shadow-[0_0_15px_rgba(19,236,128,0.3)]">
                <span class="material-symbols-outlined font-black">workspace_premium</span>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-slate-100 italic">STAI 프리미엄 멤버십</h4>
                <p class="text-xs text-slate-500 dark:text-primary/70 font-medium">더 심층적인 AI 분석 리포트 확인</p>
              </div>
            </div>
            <span class="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </a>

        <div class="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary">analytics</span>
            <div>
              <h4 class="font-bold text-primary text-sm uppercase">STAI 지수 활성화됨</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                시스템이 사용자의 몰입 상태를 최적으로 분석하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer class="p-6 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent">
        <button class="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold text-lg h-16 rounded-2xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2" onclick="window.location.hash='#/'">
          <span>설정 저장 및 시작</span>
          <span class="material-symbols-outlined">bolt</span>
        </button>
      </footer>
    </div>
  `;
};
