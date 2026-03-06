export interface InputState {
  targetX: number
  targetY: number
  smoothX: number
  smoothY: number
}

export function createInputState(): InputState {
  return { targetX: 0, targetY: 0, smoothX: 0, smoothY: 0 }
}

export function setupInputListeners(state: InputState): void {
  document.addEventListener('mousemove', (e) => {
    state.targetX = (e.clientX / window.innerWidth - 0.5) * 2
    state.targetY = (e.clientY / window.innerHeight - 0.5) * 2
  })

  document.addEventListener('touchmove', (e) => {
    const t = e.touches[0]
    state.targetX = (t.clientX / window.innerWidth - 0.5) * 2
    state.targetY = (t.clientY / window.innerHeight - 0.5) * 2
  }, { passive: true })
}

export function smoothInput(state: InputState): void {
  state.smoothX += (state.targetX - state.smoothX) * 0.025
  state.smoothY += (state.targetY - state.smoothY) * 0.025
}
