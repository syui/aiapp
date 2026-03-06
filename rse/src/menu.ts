export function setupMenu(): void {
  const menuBtn = document.getElementById('menu-btn')
  const menuDropdown = document.getElementById('menu-dropdown')
  const langDropdown = document.getElementById('lang-dropdown')

  menuBtn?.addEventListener('click', (e) => {
    e.stopPropagation()
    menuDropdown?.classList.toggle('show')
    langDropdown?.classList.remove('show')
  })

  document.addEventListener('click', () => {
    langDropdown?.classList.remove('show')
    menuDropdown?.classList.remove('show')
  })
}
