/**
 * Drishti AI - Model Tier Manager
 * Assesses device capability (Flagship vs Budget) and manages Standard/Lite execution tiers
 */

import { CONFIG } from '../config.js';

export class ModelTierManager {
  constructor() {
    this.currentTier = CONFIG.TIERS.STANDARD;
    this.listeners = [];
    this.isAutoDetected = true;

    this.detectHardwareCapability();
  }

  /**
   * Assess hardware specs (GPU/NPU acceleration, RAM, CPU cores) to select initial tier
   */
  detectHardwareCapability() {
    const memory = typeof navigator !== 'undefined' ? (navigator.deviceMemory || 4) : 4;
    const cores = typeof navigator !== 'undefined' ? (navigator.hardwareConcurrency || 4) : 4;
    
    // Check WebGL / WebGPU acceleration support
    let hasHighEndGpu = false;
    if (typeof document !== 'undefined') {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        if (gl) {
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
            // Detect flagship Adreno / Mali / Apple Silicon
            if (/Adreno \(TM\) 7|Adreno \(TM\) 8|Mali-G7|Apple|M1|M2|M3|GeForce|RTX/i.test(renderer)) {
              hasHighEndGpu = true;
            }
          }
        }
      } catch (_) {
        hasHighEndGpu = false;
      }
    }

    // Flagship threshold: >= 6GB RAM, >= 6 cores, high-end GPU or NPU capability
    if (memory >= 6 && cores >= 6 && hasHighEndGpu) {
      this.currentTier = CONFIG.TIERS.STANDARD;
    } else {
      // Default to Lite tier for mid-range, budget, or constrained mobile environments
      this.currentTier = CONFIG.TIERS.LITE;
    }
  }

  getTier() {
    return this.currentTier;
  }

  isStandard() {
    return this.currentTier.id === CONFIG.TIERS.STANDARD.id;
  }

  isLite() {
    return this.currentTier.id === CONFIG.TIERS.LITE.id;
  }

  /**
   * Manually switch between Standard and Lite tiers (e.g. via keyboard shortcut 'T' or UI button)
   */
  toggleTier() {
    this.isAutoDetected = false;
    if (this.isStandard()) {
      this.currentTier = CONFIG.TIERS.LITE;
    } else {
      this.currentTier = CONFIG.TIERS.STANDARD;
    }
    this.notifyListeners();
    return this.currentTier;
  }

  setTier(tierId) {
    this.isAutoDetected = false;
    if (tierId === CONFIG.TIERS.STANDARD.id) {
      this.currentTier = CONFIG.TIERS.STANDARD;
    } else {
      this.currentTier = CONFIG.TIERS.LITE;
    }
    this.notifyListeners();
    return this.currentTier;
  }

  onTierChange(callback) {
    this.listeners.push(callback);
  }

  notifyListeners() {
    for (const cb of this.listeners) {
      cb(this.currentTier);
    }
  }
}
