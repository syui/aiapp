import * as THREE from 'three'

export interface SceneObjects {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  starsFar: THREE.Points
  starsMid: THREE.Points
  starsClose: THREE.Points
  dust: THREE.Points
  nebulaGroup: THREE.Group
  light1: THREE.PointLight
  light2: THREE.PointLight
}

function createStarLayer(
  count: number, spread: number, size: number, opacity: number
): THREE.Points {
  const geo = new THREE.BufferGeometry()
  const pos = new Float32Array(count * 3)
  const col = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    pos[i3]     = (Math.random() - 0.5) * spread
    pos[i3 + 1] = (Math.random() - 0.5) * spread
    pos[i3 + 2] = (Math.random() - 0.5) * spread

    // Dark particles on white background
    const shade = Math.random() * 0.08
    col[i3] = shade; col[i3+1] = shade; col[i3+2] = shade + 0.02
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3))

  const mat = new THREE.PointsMaterial({
    size, vertexColors: true, transparent: true, opacity,
    sizeAttenuation: true, depthWrite: false,
  })

  return new THREE.Points(geo, mat)
}

export function createScene(canvas: HTMLCanvasElement): SceneObjects {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0) // transparent, CSS handles bg

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0xf5f5f8, 0.00025)

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000)
  camera.position.set(0, 0, 600)

  // Stars (dark particles)
  const starsFar   = createStarLayer(6000, 4000, 1.0, 0.3)
  const starsMid   = createStarLayer(3000, 2500, 1.8, 0.45)
  const starsClose = createStarLayer(1000, 1500, 2.5, 0.6)
  scene.add(starsFar, starsMid, starsClose)

  // Dust (dark)
  const dustGeo = new THREE.BufferGeometry()
  const dustCount = 2000
  const dustPos = new Float32Array(dustCount * 3)
  for (let i = 0; i < dustCount; i++) {
    dustPos[i*3]   = (Math.random() - 0.5) * 3000
    dustPos[i*3+1] = (Math.random() - 0.5) * 3000
    dustPos[i*3+2] = (Math.random() - 0.5) * 3000
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
    size: 0.5, color: 0x222233, transparent: true, opacity: 0.3,
    depthWrite: false, sizeAttenuation: true,
  }))
  scene.add(dust)

  const nebulaGroup = new THREE.Group()

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.6))

  const light1 = new THREE.PointLight(0xccddee, 1.5, 1200)
  light1.position.set(200, 200, 200)
  scene.add(light1)

  const light2 = new THREE.PointLight(0xbbbbdd, 1.0, 1000)
  light2.position.set(-300, -100, 100)
  scene.add(light2)

  return {
    renderer, scene, camera,
    starsFar, starsMid, starsClose, dust, nebulaGroup,
    light1, light2,
  }
}

export function updateScene(objs: SceneObjects, time: number, _dt: number, smoothX: number, smoothY: number) {
  const {
    camera, starsFar, starsMid, starsClose, dust, nebulaGroup,
    light1, light2,
  } = objs

  // Camera
  camera.position.x = smoothX * 150
  camera.position.y = -smoothY * 100
  camera.position.z = 600 + Math.sin(time * 0.08) * 30
  camera.lookAt(smoothX * 30, -smoothY * 20, -150)

  // Star parallax
  starsFar.rotation.y   = time * 0.008 + smoothX * 0.015
  starsFar.rotation.x   = time * 0.004 + smoothY * 0.015
  starsMid.rotation.y   = time * 0.015 + smoothX * 0.03
  starsMid.rotation.x   = time * 0.008 + smoothY * 0.03
  starsClose.rotation.y = time * 0.025 + smoothX * 0.05
  starsClose.rotation.x = time * 0.012 + smoothY * 0.05

  // Dust
  dust.rotation.y = time * 0.005 + smoothX * 0.01
  dust.rotation.x = time * 0.003 + smoothY * 0.01


  // Lights
  light1.position.x = 200 + Math.sin(time * 0.25) * 120
  light2.position.y = -100 + Math.cos(time * 0.3) * 100
}
