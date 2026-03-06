import './style.css'
import * as THREE from 'three'
import { createScene, updateScene } from './scene'
import { createInputState, setupInputListeners, smoothInput } from './input'
import { setupNavigation } from './navigation'
import { setupLanguageSelector } from './language'
import { setupMenu } from './menu'

// Scene
const canvas = document.getElementById('space-canvas') as HTMLCanvasElement
const sceneObjs = createScene(canvas)

// Input
const input = createInputState()
setupInputListeners(input)

// Animation loop
const clock = new THREE.Clock()
let time = 0

function animate(): void {
  requestAnimationFrame(animate)
  const dt = clock.getDelta()
  time += dt

  smoothInput(input)
  updateScene(sceneObjs, time, dt, input.smoothX, input.smoothY)
  sceneObjs.renderer.render(sceneObjs.scene, sceneObjs.camera)
}

animate()

// Resize
window.addEventListener('resize', () => {
  sceneObjs.camera.aspect = window.innerWidth / window.innerHeight
  sceneObjs.camera.updateProjectionMatrix()
  sceneObjs.renderer.setSize(window.innerWidth, window.innerHeight)
})

// UI
setupNavigation()
setupLanguageSelector()
setupMenu()

document.body.style.opacity = '1'
