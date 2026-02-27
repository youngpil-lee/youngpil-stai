import './style.css'
import { renderTimerScreen } from './components/timerScreen'
import { renderLeaderboardScreen } from './components/leaderboardScreen'
import { renderStudyRoomScreen } from './components/studyRoomScreen'
import { renderProfileScreen } from './components/profileScreen'
import { renderSubscriptionScreen } from './components/subscriptionScreen'

// SPA Router

class App {
  private appElement: HTMLDivElement;

  constructor() {
    this.appElement = document.querySelector<HTMLDivElement>('#app')!
    window.addEventListener('hashchange', () => this.handleRoute())
    this.initApp()
  }

  async initApp() {
    // Firebase 익명 로그인 연동
    const { auth } = await import('./services/firebase')
    const { signInAnonymously } = await import('firebase/auth')
    await signInAnonymously(auth).catch(console.error)

    // 전역 클릭 이벤트를 통한 라우팅 처리 (Zero Ops UX)
    document.body.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('a')
      if (target && target.getAttribute('href')?.startsWith('#/')) {
        // 해시 링크는 기본 브라우저 동작(hashchange 발생)을 따르도록 함
      }
    })

    // 초기 로드 시 해시가 없거나 잘못된 경로면 기본값 설정
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/'
    }

    this.handleRoute()
  }

  private handleRoute() {
    const hash = window.location.hash || '#/'
    const path = hash.replace(/^#/, '') // '#' 제거하여 경로 추출

    // 페이지 전환 시 스크롤을 최상단으로 이동 (UX 보완)
    window.scrollTo(0, 0)

    this.appElement.innerHTML = ''

    switch (path) {
      case '/':
        renderTimerScreen(this.appElement)
        break
      case '/leaderboard':
        renderLeaderboardScreen(this.appElement)
        break
      case '/study-room':
        renderStudyRoomScreen(this.appElement)
        break
      case '/profile':
        renderProfileScreen(this.appElement)
        break
      case '/subscription':
        renderSubscriptionScreen(this.appElement)
        break
      default:
        // 정의되지 않은 경로는 타이머(홈)로 리다이렉트
        window.location.hash = '#/'
        return
    }

    this.updateNavStatus(path)
  }

  private updateNavStatus(path: string) {
    // 모든 네비게이션 링크에서 active 스타일 제거 및 현재 경로와 일치하는 항목에 추가
    const navLinks = document.querySelectorAll('a[href]')
    navLinks.forEach(link => {
      const href = link.getAttribute('href')
      // href가 '#/path' 형식이므로 path와 비교
      const isMatch = href === `#${path}` || (path === '/' && href === '#/')

      // 텍스트 색상 및 아이콘 스타일 조정 (font-variation-fill)
      if (isMatch) {
        link.classList.add('text-primary')
        link.classList.remove('text-slate-400', 'text-slate-500')
        const icon = link.querySelector('.material-symbols-outlined')
        if (icon) icon.classList.add('font-variation-fill')
      } else {
        link.classList.remove('text-primary')
        link.classList.add('text-slate-400')
        const icon = link.querySelector('.material-symbols-outlined')
        if (icon) icon.classList.remove('font-variation-fill')
      }
    })
  }

  navigateTo(path: string) {
    window.location.hash = `#${path}`
  }
}

new App()
