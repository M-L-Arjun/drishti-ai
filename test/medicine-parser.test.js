/**
 * Drishti AI - Unit Tests for Medicine Packaging Parser
 */

import { MedicineScanner } from '../src/modules/medicine-scanner.js';

// Mock minimal dependencies
const mockCamera = { captureFrame: () => null };
const mockSpeech = { speak: () => {} };
const mockHaptics = { medicineScanned: () => {} };

const scanner = new MedicineScanner(mockCamera, mockSpeech, mockHaptics);

console.log("=== RUNNING MEDICINE SCANNER UNIT TESTS ===");

const testCases = [
  {
    name: "Dolo 650 with Indian Pharma Expiry format",
    rawText: `MICRO LABS LIMITED
DOLO-650 MG TABLETS
PARACETAMOL IP 650 MG
B.NO. 23D099
MFD. 03/2024
EXP: 11/2027
MRP RS. 33.60 INCL OF ALL TAXES`,
    expectedBrand: "Dolo 650",
    expectedExpiry: "11/2027",
    expectedDosage: "650 MG"
  },
  {
    name: "Pan 40 Gastro-Resistant Tablets",
    rawText: `ALKEM LABORATORIES
PAN 40 MG
PANTOPRAZOLE GASTRO-RESISTANT IP 40 MG
BATCH NO: PK120
EXP. DATE: 08/2026
KEEP IN A COOL DARK PLACE`,
    expectedBrand: "Pan 40",
    expectedExpiry: "08/2026",
    expectedDosage: "40 MG"
  },
  {
    name: "Azithral 500 Antibiotic strip",
    rawText: `ALEMBIC PHARMACEUTICALS
AZITHRAL 500
AZITHROMYCIN TABLETS IP 500 MG
EXP: DEC 2028
USE BEFORE: 12/2028`,
    expectedBrand: "Azithral 500",
    expectedDosage: "500 MG"
  }
];

let passed = 0;
let failed = 0;

for (const tc of testCases) {
  const res = scanner.parseMedicineText(tc.rawText);
  let ok = true;

  if (tc.expectedBrand && res.brandName !== tc.expectedBrand) {
    console.error(`❌ [${tc.name}] Brand mismatch: expected "${tc.expectedBrand}", got "${res.brandName}"`);
    ok = false;
  }

  if (tc.expectedExpiry && res.expiry !== tc.expectedExpiry) {
    console.error(`❌ [${tc.name}] Expiry mismatch: expected "${tc.expectedExpiry}", got "${res.expiry}"`);
    ok = false;
  }

  if (tc.expectedDosage && (!res.dosage || !res.dosage.includes(tc.expectedDosage))) {
    console.error(`❌ [${tc.name}] Dosage mismatch: expected to include "${tc.expectedDosage}", got "${res.dosage}"`);
    ok = false;
  }

  if (ok) {
    console.log(`✅ [${tc.name}] Passed! Extracted: ${res.brandName} | Expiry: ${res.expiry} | Dosage: ${res.dosage}`);
    passed++;
  } else {
    failed++;
  }
}

console.log(`\nResults: ${passed} Passed, ${failed} Failed`);
if (failed > 0) process.exit(1);
