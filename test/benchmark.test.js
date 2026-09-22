/**
 * Drishti AI - Unit Tests for Latency Benchmark Harness
 */

import { LatencyBenchmark } from '../src/modules/latency-benchmark.js';
import { ModelTierManager } from '../src/core/model-tier-manager.js';

console.log("=== RUNNING LATENCY BENCHMARK UNIT TESTS ===");

const tierManager = new ModelTierManager();
const mockCamera = {
  captureFrame: () => ({ data: new Uint8ClampedArray(320 * 240 * 4), width: 320, height: 240 }),
  captureJpegBase64: () => "data:image/jpeg;base64,mockjpegdata"
};

const benchmark = new LatencyBenchmark(mockCamera, tierManager);
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

// Test 1: Real on-device compute timer execution
const t0 = performance.now();
await benchmark.runLocalInference({ data: new Uint8ClampedArray(1000) }, tierManager.getTier());
const localDuration = performance.now() - t0;
assert(localDuration > 0, `On-device compute executed in ${localDuration.toFixed(1)}ms (greater than 0ms)`);

// Test 2: Local run caching for stage fallback
const mockRun = {
  timestamp: new Date().toISOString(),
  tier: "Standard Tier",
  onDeviceMs: 140,
  cloudMs: 3200,
  cloudStatus: "SUCCESS",
  speedupFactor: "22.8x"
};

// Mock localStorage for node environment
global.localStorage = {
  store: {},
  setItem(k, v) { this.store[k] = v; },
  getItem(k) { return this.store[k] || null; }
};

benchmark.cacheRunLocally(mockRun);
const reloaded = benchmark.loadCachedRun();

assert(reloaded !== null, "Cached benchmark loaded successfully");
assert(reloaded && reloaded.isCachedReplay === true, "Cached run tagged with isCachedReplay = true");
assert(reloaded && reloaded.speedupFactor === "22.8x", "Cached run retains speedup ratio");

console.log(`\nResults: ${passed} Passed, ${failed} Failed`);
if (failed > 0) process.exit(1);
