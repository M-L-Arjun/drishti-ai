/**
 * Drishti AI - Unit Tests for Indian Languages & Localized Strings
 */

import { CONFIG } from '../src/config.js';
import { SpeechEngine } from '../src/core/speech-engine.js';

console.log("=== RUNNING INDIAN MULTILINGUAL UNIT TESTS ===");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ ${message}`);
    passed++;
  } else {
    console.error(`❌ FAILED: ${message}`);
    failed++;
  }
}

// Test 1: Verify all 7 major Indian languages are registered
const expectedLangs = ['en', 'te', 'hi', 'ta', 'kn', 'mr', 'bn'];
for (const l of expectedLangs) {
  const langObj = CONFIG.LANGUAGES[l];
  assert(langObj && langObj.code && langObj.native, `Language [${l}] registered: ${langObj?.native} (${langObj?.code})`);
}

// Test 2: Verify essential localized strings exist for each language (native + phonetic)
for (const l of expectedLangs) {
  const loc = CONFIG.LOCALIZED_STRINGS[l];
  const dict = loc.native || loc;
  assert(
    dict && dict.navActive && dict.obstacleNear && dict.medScanning && dict.contactApproaching,
    `Localized templates complete for [${l}]`
  );
}

// Test 3: SpeechEngine language switcher
const speech = new SpeechEngine();
speech.setLanguage('te');
assert(speech.getLanguage() === 'te', "SpeechEngine correctly updated to Telugu ('te')");

speech.setLanguage('hi');
assert(speech.getLanguage() === 'hi', "SpeechEngine correctly updated to Hindi ('hi')");

// Test 4: Verify getLocalized returns display (Telugu script) and vocalize (vocalizable string)
speech.setLanguage('te');
const teLoc = speech.getLocalized('langSelected');
assert(teLoc.display.includes('తెలుగు'), "Telugu display text contains authentic Telugu script");
assert(typeof teLoc.vocalize === 'string' && teLoc.vocalize.length > 0, "Telugu vocalize string populated for TTS");

// Test 5: Verify button labels exist for all 7 languages
for (const l of expectedLangs) {
  const loc = CONFIG.LOCALIZED_STRINGS[l];
  const dict = loc.native || loc;
  assert(
    dict.btnScene && dict.btnMed && dict.btnBench && dict.btnFaces,
    `All 4 action button labels exist for [${l}]`
  );
}

// Test 6: Verify speakKey method with placeholder substitution
speech.setLanguage('te');
const benchRes = speech.speakKey('benchmarkResult', 2, true, { ms: 42 });
assert(benchRes.display.includes('42'), "speakKey correctly replaced {ms} in display string (42)");
assert(benchRes.vocalize.includes('42'), "speakKey correctly replaced {ms} in vocalize string (42)");

// Test 7: Verify all option keys return vocalizable strings for all 7 languages
const optionKeys = ['navActive', 'navPaused', 'medScanning', 'medNotFound', 'benchmarkStart', 'benchmarkResult', 'tierStandard', 'tierLite', 'airplaneActive', 'airplaneOff', 'cachedReplay', 'contactScanning'];
for (const l of expectedLangs) {
  speech.setLanguage(l);
  for (const k of optionKeys) {
    const res = speech.getLocalized(k);
    assert(res.display && res.vocalize, `Option [${k}] has display and vocalize for [${l}]`);
  }
}

console.log(`\nResults: ${passed} Passed, ${failed} Failed`);
if (failed > 0) process.exit(1);

