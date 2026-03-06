function applyLang(lang: string): void {
  document.querySelectorAll<HTMLElement>('[data-lang-en]').forEach(el => {
    const text = el.getAttribute(`data-lang-${lang}`)
    if (text) el.innerHTML = text
  })

  document.getElementById('lang-dropdown')
    ?.querySelectorAll('.lang-option')
    .forEach(opt => {
      opt.classList.toggle('selected', (opt as HTMLElement).dataset.lang === lang)
    })
}

export function setupLanguageSelector(): void {
  let currentLang = localStorage.getItem('preferred-lang') || 'en'

  const langBtn = document.getElementById('lang-tab')
  const langDropdown = document.getElementById('lang-dropdown')
  const menuDropdown = document.getElementById('menu-dropdown')

  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation()
    langDropdown?.classList.toggle('show')
    menuDropdown?.classList.remove('show')
  })

  langDropdown?.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation()
      currentLang = (opt as HTMLElement).dataset.lang || 'en'
      localStorage.setItem('preferred-lang', currentLang)
      applyLang(currentLang)
      langDropdown?.classList.remove('show')
    })
  })

  applyLang(currentLang)
}
