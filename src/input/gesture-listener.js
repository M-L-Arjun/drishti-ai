/**
 * Drishti AI - Gesture & Accelerometer Listener
 * Detects back-of-phone taps and eyes-free touch gestures
 */

export class GestureListener {
  constructor(callbacks = {}) {
    this.callbacks = callbacks;
    this.lastTapTime = 0;
    this.tapThreshold = 18.0; // Acceleration spike threshold for back tap
    this.lastAcceleration = { x: 0, y: 0, z: 0 };
    
    this.initTouchGestures();
    this.initMotionSensors();
  }

  initTouchGestures() {
    if (typeof window === 'undefined') return;

    let touchStartY = 0;
    let touchStartX = 0;
    let lastTap = 0;

    window.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;

      // Detect Double Tap anywhere on screen
      if (tapLength < 350 && tapLength > 50) {
        if (this.callbacks.onDoubleTap) this.callbacks.onDoubleTap();
      } else if (Math.abs(diffX) > 60) {
        // Horizontal Swipe
        if (diffX > 0 && this.callbacks.onSwipeRight) this.callbacks.onSwipeRight();
        if (diffX < 0 && this.callbacks.onSwipeLeft) this.callbacks.onSwipeLeft();
      } else if (Math.abs(diffY) > 60) {
        // Vertical Swipe
        if (diffY < 0 && this.callbacks.onSwipeUp) this.callbacks.onSwipeUp();
        if (diffY > 0 && this.callbacks.onSwipeDown) this.callbacks.onSwipeDown();
      }
      lastTap = currentTime;
    }, { passive: true });
  }

  initMotionSensors() {
    if (typeof window === 'undefined' || !window.DeviceMotionEvent) return;

    window.addEventListener('devicemotion', (e) => {
      const acc = e.accelerationIncludingGravity || e.acceleration;
      if (!acc) return;

      const deltaZ = Math.abs(acc.z - this.lastAcceleration.z);
      const currentTime = Date.now();

      // Sharp pulse in Z axis indicates a physical tap on the back of the device
      if (deltaZ > this.tapThreshold && (currentTime - this.lastTapTime > 600)) {
        this.lastTapTime = currentTime;
        if (this.callbacks.onBackTap) {
          this.callbacks.onBackTap();
        }
      }

      this.lastAcceleration = { x: acc.x || 0, y: acc.y || 0, z: acc.z || 0 };
    }, { passive: true });
  }
}
