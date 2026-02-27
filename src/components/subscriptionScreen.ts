import { initPayPalButton } from '../services/paypal';

export const renderSubscriptionScreen = (container: HTMLElement) => {
  container.innerHTML = `
    <div class="relative flex h-full min-h-screen w-full max-w-[430px] flex-col bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl mx-auto text-slate-900 dark:text-slate-100">
      <div class="flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 p-4 justify-between border-b border-primary/10">
        <div class="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors cursor-pointer" onclick="window.location.hash='#/profile'">
          <span class="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
          STAI 프리미엄</h2>
        <div class="size-10"></div>
      </div>

      <div class="relative px-4 pt-6 pb-4">
        <div class="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-primary/20 flex items-center justify-center group">
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
          <img class="absolute inset-0 w-full h-full object-cover grayscale opacity-50" src="https://api.dicebear.com/7.x/identicon/svg?seed=Premium" />
          <div class="relative z-20 text-center px-4">
            <span class="inline-block px-3 py-1 bg-primary text-background-dark text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">PRO ACCESS</span>
            <h1 class="text-white text-3xl font-bold leading-tight font-display">최고의 몰입 시작하기</h1>
          </div>
        </div>
      </div>

      <div class="px-4 space-y-3 mb-8">
        <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-primary/10">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <span class="material-symbols-outlined">accessibility_new</span>
          </div>
          <div>
            <h3 class="font-bold">고도화된 자세 AI</h3>
            <p class="text-sm opacity-60">실시간 자세 교정으로 피로를 방지하고 몰입을 유지합니다.</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-primary/10">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <span class="material-symbols-outlined">analytics</span>
          </div>
          <div>
            <h3 class="font-bold">심층 통계 리포트</h3>
            <p class="text-sm opacity-60">주간 몰입 지수를 분석하여 최적의 시간을 추천합니다.</p>
          </div>
        </div>
      </div>

      <div class="px-4 space-y-4 mb-32">
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-primary shadow-lg flex justify-between items-center cursor-pointer" id="paypal-plan-monthly">
           <div class="absolute -top-3 right-6 bg-primary text-background-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase">선택됨</div>
          <div>
            <p class="text-primary text-xs font-semibold uppercase tracking-wider">월간 구독</p>
            <h4 class="text-2xl font-bold font-display">₩12,000<span class="text-sm font-normal opacity-50">/월</span></h4>
          </div>
          <div class="size-6 rounded-full border-2 border-primary bg-primary flex items-center justify-center">
            <div class="size-2 rounded-full bg-background-dark"></div>
          </div>
        </div>
        <div id="paypal-button-container" class="mt-4"></div>
      </div>
    </div>
  `;

  setTimeout(() => {
    initPayPalButton('paypal-button-container', '12000');
  }, 300);
};
