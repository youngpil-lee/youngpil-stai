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
    window.addEventListener('popstate', () => this.handleRoute())
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
      if (target && target.href && target.href.startsWith(window.location.origin)) {
        e.preventDefault()
        this.navigateTo(target.pathname)
      }
    })

    this.handleRoute()
  }

  private handleRoute() {
    const path = window.location.pathname
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
        renderTimerScreen(this.appElement)
    }

    this.updateNavStatus(path)
  }

  private updateNavStatus(path: string) {
    // 모든 네비게이션 링크에서 active 스타일 제거 및 현재 경로와 일치하는 항목에 추가
    const navLinks = document.querySelectorAll('a[href]')
    navLinks.forEach(link => {
      const href = link.getAttribute('href')
      const isMatch = href === path || (path === '/' && href === '/')

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
    window.history.pushState({}, '', path)
    this.handleRoute()
  }
}

new App()
