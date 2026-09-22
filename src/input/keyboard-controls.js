/**
 * Drishti AI - Keyboard Controls for Stage Presentations & Testing
 * Enables hands-free demo transitions with physical keys
 */

export class KeyboardControls {
  constructor(handlers = {}) {
    this.handlers = handlers;
    this.init();
  }

  init() {
    if (typeof window === 'undefined') return;

    window.addEventListener('keydown', (e) => {
      // Ignore if typing in an input field
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toUpperCase();

      switch (key) {
        case '1':
          if (this.handlers.onSceneNarration) this.handlers.onSceneNarration();
          break;
        case '2':
          if (this.handlers.onMedicineScan) this.handlers.onMedicineScan();
          break;
        case '3':
        case 'B': // 'B' for Benchmark
          if (this.handlers.onLatencyBenchmark) this.handlers.onLatencyBenchmark();
          break;
        case '4':
        case 'F': // 'F' for Face Scan
          if (this.handlers.onFaceScan) this.handlers.onFaceScan();
          break;
        case 'T': // 'T' for Tier Toggle (Standard vs Lite)
          if (this.handlers.onToggleTier) this.handlers.onToggleTier();
          break;
        case 'A': // 'A' for Airplane Mode visual stage proof
          if (this.handlers.onToggleAirplaneMode) this.handlers.onToggleAirplaneMode();
          break;
        case 'L': // 'L' for cycling Indian Languages
          if (this.handlers.onCycleLanguage) this.handlers.onCycleLanguage();
          break;
        case 'R': // 'R' for Replay cached benchmark
          if (this.handlers.onCachedReplay) this.handlers.onCachedReplay();
          break;
        case ' ': // Space to silence immediately
          e.preventDefault();
          if (this.handlers.onSilence) this.handlers.onSilence();
          break;
        default:
          break;
      }
    });
  }
}
