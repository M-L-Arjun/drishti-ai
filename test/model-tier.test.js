/**
 * Drishti AI - Unit Tests for Model Tier Manager
 */

import { ModelTierManager } from '../src/core/model-tier-manager.js';
import { CONFIG } from '../src/config.js';

console.log("=== RUNNING MODEL TIER MANAGER UNIT TESTS ===");

const manager = new ModelTierManager();
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

// Test 1: Initial tier exists
const initialTier = manager.getTier();
assert(initialTier && (initialTier.id === 'standard' || initialTier.id === 'lite'), "Initial tier is Standard or Lite");

// Test 2: Manual switching
const toggledTier = manager.toggleTier();
assert(toggledTier.id !== initialTier.id, `Toggled tier correctly changed from ${initialTier.id} to ${toggledTier.id}`);

// Test 3: Listener notification
let notified = false;
manager.onTierChange((newTier) => {
  notified = true;
});
manager.setTier(CONFIG.TIERS.STANDARD.id);
assert(notified && manager.isStandard(), "Listener fired on setTier(standard) and isStandard() is true");

manager.setTier(CONFIG.TIERS.LITE.id);
assert(manager.isLite(), "setTier(lite) updates tier and isLite() is true");

console.log(`\nResults: ${passed} Passed, ${failed} Failed`);
if (failed > 0) process.exit(1);
