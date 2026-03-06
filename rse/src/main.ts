import './style.css'
import * as THREE from 'three'
import { createScene, updateScene } from './scene'

// Scene setup
const canvas = document.getElementById('space-canvas') as HTMLCanvasElement
const sceneObjs = createScene(canvas)

// Mouse / Touch
let targetX = 0
let targetY = 0
let smoothX = 0
let smoothY = 0

document.addEventListener('mousemove', (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 2
  targetY = (e.clientY / window.innerHeight - 0.5) * 2
})

document.addEventListener('touchmove', (e) => {
  const t = e.touches[0]
  targetX = (t.clientX / window.innerWidth - 0.5) * 2
  targetY = (t.clientY / window.innerHeight - 0.5) * 2
}, { passive: true })

// Animation loop
let time = 0
const clock = new THREE.Clock()

function animate() {
  requestAnimationFrame(animate)
  const dt = clock.getDelta()
  time += dt

  smoothX += (targetX - smoothX) * 0.025
  smoothY += (targetY - smoothY) * 0.025

  updateScene(sceneObjs, time, dt, smoothX, smoothY)
  sceneObjs.renderer.render(sceneObjs.scene, sceneObjs.camera)
}

animate()

// Resize
window.addEventListener('resize', () => {
  sceneObjs.camera.aspect = window.innerWidth / window.innerHeight
  sceneObjs.camera.updateProjectionMatrix()
  sceneObjs.renderer.setSize(window.innerWidth, window.innerHeight)
})

// Page navigation
const pageVideo = document.getElementById('page-video')
const pageLogo = document.getElementById('page-logo')
const pageMessage = document.getElementById('page-message')
const pageMessage2 = document.getElementById('page-message2')
const pageAbout = document.getElementById('page-about')
const pageTitle = document.getElementById('page-title')
const menuBtn = document.getElementById('menu-btn')
const menuDropdown = document.getElementById('menu-dropdown')

let currentPage: HTMLElement | null = null

const siteHeader = document.getElementById('site-header')
const siteFooter = document.getElementById('site-footer')
const subpages = [pageAbout]
const fullpages = [pageTitle]

function showPage(show: HTMLElement | null, hide: HTMLElement | null) {
  if (hide) {
    hide.classList.remove('visible')
    hide.classList.add('page-hidden')
  }
  if (show) {
    show.classList.remove('page-hidden')
    show.classList.add('visible')
  }
  currentPage = show
  const isFull = fullpages.includes(show)
  if (siteHeader) siteHeader.style.display = isFull ? 'none' : ''
  if (siteFooter) {
    siteFooter.style.display = isFull ? 'none' : ''
    siteFooter.classList.toggle('footer-solid', subpages.includes(show))
  }
}

// Main page navigation
document.getElementById('btn-next')?.addEventListener('click', () => showPage(pageLogo, pageVideo))
document.getElementById('btn-logo-back')?.addEventListener('click', () => showPage(pageVideo, pageLogo))
document.getElementById('btn-logo-next')?.addEventListener('click', () => showPage(pageMessage, pageLogo))
document.getElementById('btn-msg-back')?.addEventListener('click', () => showPage(pageLogo, pageMessage))
document.getElementById('btn-msg-next')?.addEventListener('click', () => showPage(pageMessage2, pageMessage))
document.getElementById('btn-msg2-back')?.addEventListener('click', () => showPage(pageMessage, pageMessage2))
document.getElementById('btn-msg2-next')?.addEventListener('click', () => showPage(pageAbout, pageMessage2))
document.getElementById('btn-about-back')?.addEventListener('click', () => showPage(pageMessage2, pageAbout))
document.getElementById('btn-about-next')?.addEventListener('click', () => showPage(pageTitle, pageAbout))
pageTitle?.addEventListener('click', () => showPage(pageAbout, pageTitle))

// Menu dropdown
menuBtn?.addEventListener('click', (e) => {
  e.stopPropagation()
  menuDropdown?.classList.toggle('show')
  langDropdown?.classList.remove('show')
})

// Language selector
let currentLang = localStorage.getItem('preferred-lang') || 'en'
const langBtn = document.getElementById('lang-tab')
const langDropdown = document.getElementById('lang-dropdown')

function applyLang(lang: string) {
  document.querySelectorAll<HTMLElement>('[data-lang-en]').forEach(el => {
    const text = el.getAttribute(`data-lang-${lang}`)
    if (text) el.innerHTML = text
  })
  langDropdown?.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('selected', (opt as HTMLElement).dataset.lang === lang)
  })
}

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

document.addEventListener('click', () => {
  langDropdown?.classList.remove('show')
  menuDropdown?.classList.remove('show')
})

applyLang(currentLang)

// Show first page immediately
pageVideo?.classList.add('visible')
currentPage = pageVideo
document.body.style.opacity = '1'
