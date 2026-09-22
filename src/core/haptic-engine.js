/**
 * Drishti AI - Haptic Feedback Engine
 * Directional and proximity vibration patterns for eyes-free navigation
 */

import { CONFIG } from '../config.js';

export class HapticEngine {
  constructor() {
    this.isSupported = typeof navigator !== 'undefined' && 'vibrate' in navigator;
    this.isEnabled = true;
  }

  /**
   * Trigger a vibration pattern
   * @param {number|number[]} pattern - Duration in ms or pattern array
   */
  vibrate(pattern) {
    if (!this.isEnabled || !this.isSupported) return;
    try {
      navigator.vibrate(pattern);
    } catch (err) {
      console.warn('Haptic vibration failed:', err);
    }
  }

  tapAck() {
    this.vibrate(CONFIG.HAPTICS.TAP_ACK);
  }

  modeChange() {
    this.vibrate(CONFIG.HAPTICS.MODE_CHANGE);
  }

  obstacleNear() {
    this.vibrate(CONFIG.HAPTICS.OBSTACLE_NEAR);
  }

  obstacleMid() {
    this.vibrate(CONFIG.HAPTICS.OBSTACLE_MID);
  }

  trustedContact() {
    // Distinct double-heartbeat pattern for recognizing a loved one or colleague
    this.vibrate(CONFIG.HAPTICS.TRUSTED_CONTACT);
  }

  medicineScanned() {
    this.vibrate(CONFIG.HAPTICS.MEDICINE_SCANNED);
  }

  airplaneModeToggled() {
    this.vibrate(CONFIG.HAPTICS.AIRPLANE_MODE_TOGGLED);
  }

  cancel() {
    if (this.isSupported) {
      navigator.vibrate(0);
    }
  }
}
