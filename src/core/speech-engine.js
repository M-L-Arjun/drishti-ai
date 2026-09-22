import { CONFIG } from '../config.js';

export class SpeechEngine {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voice = null;
    this.currentLang = 'en'; // default
    this.rate = 0.92; // Warm, natural, human pacing (not rushed)
    this.pitch = 1.0;
    this.isMuted = false;
    this.currentUtterance = null;
    this.hasNativeVoice = false;
    this.priorityLevels = {
      EMERGENCY: 3,  // Immediate obstacle / fall hazard
      HIGH: 2,       // Medicine dosage, face recognition
      NORMAL: 1,     // General scene narration
      LOW: 0         // Status info
    };
    this.currentPriority = -1;

    this.init();
  }

  init() {
    if (!this.synth) return;

    const loadVoices = () => {
      this.updateVoiceForLanguage();
    };

    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  /**
   * Set active language and pick matching native voice
   * @param {string} langKey - 'en', 'te', 'hi', 'ta', 'kn', 'mr', 'bn'
   */
  setLanguage(langKey) {
    if (!CONFIG.LANGUAGES[langKey]) return;
    this.currentLang = langKey;
    this.updateVoiceForLanguage();
  }

  getLanguage() {
    return this.currentLang;
  }

  /**
   * Intelligent neural/natural voice selector
   * Prioritizes high-fidelity neural voices (Natural/Online/Google) and Indian enunciation
   */
  updateVoiceForLanguage() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return;

    const langObj = CONFIG.LANGUAGES[this.currentLang] || CONFIG.LANGUAGES['en'];
    const targetCode = langObj.code.toLowerCase();
    const prefix = targetCode.split('-')[0];

    // Score all available voices to pick the most intelligible, human-sounding voice
    const scoredVoices = voices.map(v => {
      let score = 0;
      const vLang = (v.lang || '').toLowerCase().replace('_', '-');
      const vName = (v.name || '').toLowerCase();

      // 1. Language matching
      if (vLang === targetCode) score += 200;
      else if (vLang.startsWith(prefix)) score += 150;
      else if (vLang === 'en-in') score += 90;
      else if (vLang.startsWith('hi')) score += 70;
      else if (vLang.startsWith('en')) score += 40;

      // 2. High-quality neural / natural voice indicators (Edge, Chrome, Google Speech)
      if (vName.includes('natural') || vName.includes('neural')) score += 60;
      if (vName.includes('online')) score += 30;
      if (vName.includes('google')) score += 35;
      if (vName.includes('enhanced') || vName.includes('premium')) score += 25;
      if (vName.includes('neerja') || vName.includes('swara') || vName.includes('heera') || vName.includes('mohan')) score += 20;

      // Penalize robotic sounding legacy desktop synths
      if (vName.includes('desktop') || vName.includes('david') || vName.includes('zira')) score -= 25;

      return { voice: v, score };
    });

    scoredVoices.sort((a, b) => b.score - a.score);
    const best = scoredVoices[0]?.voice;

    const bestLang = (best?.lang || '').toLowerCase().replace('_', '-');
    const isDirectMatch = bestLang === targetCode || bestLang.startsWith(prefix);

    this.voice = best || null;
    this.hasNativeVoice = isDirectMatch;
  }

  /**
   * Get localized pair { display, vocalize } for a given message key
   * @param {string} key - e.g. 'langSelected', 'navActive', 'obstacleNear'
   */
  getLocalized(key) {
    const lang = this.currentLang;
    const loc = CONFIG.LOCALIZED_STRINGS[lang] || CONFIG.LOCALIZED_STRINGS['en'];
    
    // If it's English, native and phonetic are identical
    if (lang === 'en' || !loc.native) {
      const text = loc[key] || CONFIG.LOCALIZED_STRINGS['en'][key] || '';
      return { display: text, vocalize: text };
    }

    const nativeText = loc.native[key] || '';
    const phoneticText = loc.phonetic[key] || nativeText;

    return {
      display: nativeText,
      // If the device has a real native voice installed, speak native script; otherwise speak phonetic
      vocalize: this.hasNativeVoice ? nativeText : phoneticText
    };
  }

  /**
   * Speak a message with a specific priority level
   * @param {string} text - Message to vocalize
   * @param {number} priority - Priority level (0-3)
   * @param {boolean} interruptLower - Whether to cancel lower-priority speech
   * @param {string} [phoneticFallback] - Optional phonetic transliteration if native voice missing
   */
  speak(text, priority = 1, interruptLower = true, phoneticFallback = null) {
    if (this.isMuted || !this.synth || !text) return;

    if (interruptLower && priority >= this.currentPriority) {
      this.stop();
    } else if (this.synth.speaking && priority < this.currentPriority) {
      return;
    }

    // Determine vocalization string
    let speechText = text;
    if (!this.hasNativeVoice) {
      if (phoneticFallback) {
        speechText = phoneticFallback;
      } else {
        // Auto-match against known localized strings if native script is passed without explicit fallback
        const langObj = CONFIG.LOCALIZED_STRINGS[this.currentLang];
        if (langObj && langObj.native && langObj.phonetic) {
          for (const [k, val] of Object.entries(langObj.native)) {
            if (val === text && langObj.phonetic[k]) {
              speechText = langObj.phonetic[k];
              break;
            }
          }
        }
      }
    }

    const utterance = new SpeechSynthesisUtterance(speechText);
    
    // Adaptive rate: for regional phonetic pronunciation, use 0.88 so every syllable is crystal-clear
    const targetRate = (!this.hasNativeVoice && this.currentLang !== 'en') ? 0.88 : this.rate;
    utterance.rate = targetRate;
    utterance.pitch = this.pitch;

    // Assign voice and explicit language tag
    if (this.voice) {
      utterance.voice = this.voice;
      utterance.lang = this.voice.lang || 'en-IN';
    } else {
      const langObj = CONFIG.LANGUAGES[this.currentLang] || CONFIG.LANGUAGES['en'];
      utterance.lang = langObj.code || 'en-IN';
    }

    this.currentPriority = priority;
    this.currentUtterance = utterance;

    utterance.onend = () => {
      this.currentPriority = -1;
      this.currentUtterance = null;
    };

    utterance.onerror = (e) => {
      if (e.error !== 'interrupted') {
        console.warn('Speech synthesis notice:', e.error);
      }
      this.currentPriority = -1;
      this.currentUtterance = null;
    };

    this.synth.speak(utterance);
  }

  /**
   * Speak a localized key with optional template replacements
   * @param {string} key - e.g. 'benchmarkResult', 'navPaused'
   * @param {number} priority - 0 to 3
   * @param {boolean} interruptLower - cancel lower priority
   * @param {object} replacements - e.g. { ms: 24 }
   * @returns {{ display: string, vocalize: string }}
   */
  speakKey(key, priority = 1, interruptLower = true, replacements = {}) {
    const loc = this.getLocalized(key);
    let display = loc.display;
    let vocalize = loc.vocalize;
    for (const [k, v] of Object.entries(replacements)) {
      display = display.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      vocalize = vocalize.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    this.speak(display, priority, interruptLower, vocalize);
    return { display, vocalize };
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentPriority = -1;
      this.currentUtterance = null;
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted) this.stop();
  }
}
