interface NavigationElements {
  siteHeader: HTMLElement | null
  siteFooter: HTMLElement | null
}

type PageId = 'page-video' | 'page-logo' | 'page-message' | 'page-message2' | 'page-about' | 'page-title'

interface PageRoute {
  btnId: string
  from: PageId
  to: PageId
}

const routes: PageRoute[] = [
  { btnId: 'btn-next',       from: 'page-video',    to: 'page-logo' },
  { btnId: 'btn-logo-back',  from: 'page-logo',     to: 'page-video' },
  { btnId: 'btn-logo-next',  from: 'page-logo',     to: 'page-message' },
  { btnId: 'btn-msg-back',   from: 'page-message',  to: 'page-logo' },
  { btnId: 'btn-msg-next',   from: 'page-message',  to: 'page-message2' },
  { btnId: 'btn-msg2-back',  from: 'page-message2', to: 'page-message' },
  { btnId: 'btn-msg2-next',  from: 'page-message2', to: 'page-about' },
  { btnId: 'btn-about-back', from: 'page-about',    to: 'page-message2' },
  { btnId: 'btn-about-next', from: 'page-about',    to: 'page-title' },
]

const subpageIds: PageId[] = ['page-about']
const fullpageIds: PageId[] = ['page-title']

function getPage(id: PageId): HTMLElement | null {
  return document.getElementById(id)
}

function showPage(
  show: HTMLElement | null,
  hide: HTMLElement | null,
  showId: PageId,
  nav: NavigationElements,
): void {
  if (hide) {
    hide.classList.remove('visible')
    hide.classList.add('page-hidden')
  }
  if (show) {
    show.classList.remove('page-hidden')
    show.classList.add('visible')
  }

  const isFull = fullpageIds.includes(showId)
  if (nav.siteHeader) nav.siteHeader.style.display = isFull ? 'none' : ''
  if (nav.siteFooter) {
    nav.siteFooter.style.display = isFull ? 'none' : ''
    nav.siteFooter.classList.toggle('footer-solid', subpageIds.includes(showId))
  }
}

export function setupNavigation(): void {
  const nav: NavigationElements = {
    siteHeader: document.getElementById('site-header'),
    siteFooter: document.getElementById('site-footer'),
  }

  for (const route of routes) {
    document.getElementById(route.btnId)?.addEventListener('click', () => {
      showPage(getPage(route.to), getPage(route.from), route.to, nav)
    })
  }

  // Title page click returns to about
  getPage('page-title')?.addEventListener('click', () => {
    showPage(getPage('page-about'), getPage('page-title'), 'page-about', nav)
  })

  // Show first page
  const firstPage = getPage('page-video')
  firstPage?.classList.add('visible')
}
