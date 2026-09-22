# Drishti AI (*दृष्टि*) — On-Device Sensory Prosthetic for the Visually Impaired

[![Track](https://img.shields.io/badge/iQOO_Hackathon_2026-Hyderabad_City_Battle-FF6F00?style=for-the-badge)](https://iqoo.com)
[![Privacy](https://img.shields.io/badge/Architecture-100%25_On--Device-green?style=for-the-badge)](#privacy--air-gapped-security)
[![Offline](https://img.shields.io/badge/Cloud_Dependency-Zero_Calls-blue?style=for-the-badge)](#the-airplane-mode-proof)
[![Multilingual](https://img.shields.io/badge/Languages-7_Indian_Vernaculars-purple?style=for-the-badge)](#pan-indian-multilingual-vocal-engine)

> **"Vision shouldn't wait for a cloud round-trip, compromise your privacy, or stop working when connectivity drops."**

**Drishti AI** is a phone-first, fully on-device sensory companion engineered for over 40 million visually impaired people in India. Built for the **iQOO Hackathon 2026 (Hyderabad City Battle)**, Drishti operates entirely on local device silicon (NPU/GPU/CPU), guaranteeing **zero cloud calls**, **instant spatial reaction times**, and **100% offline air-gapped security**.

---

## 🚀 Key Differentiators & Architecture

### 1. Priority 1: Spatial Scene Narration & Tiered Models
- **Clock-Face Orientation:** Maps obstacles directly to familiar clock coordinates (*"Obstacle 3 feet ahead at 12 o'clock; open corridor at 2 o'clock"*).
- **Distance Zones:** Categorized into `NEAR` (< 3 ft hazard), `MID` (3-6 ft), and `FAR` (> 6 ft).
- **Directional Haptics:** Linear motor vibration pulses that dynamically escalate in urgency as hazards enter the critical near zone.
- **Hardware-Adaptive Tiered Models:**
  - **Standard Tier (NPU):** Larger quantized model utilizing flagship NPUs (e.g. Snapdragon 8 Elite class) for rich scene comprehension.
  - **Lite Tier (Edge):** Lightweight quantized model optimized for budget/mid-range chips (e.g. Dimensity 6300/7300 or Snapdragon 6 series), trading slight descriptive detail for high-frequency obstacle evasion.

### 2. Priority 2: Medicine Smart-Scan
- **Blister Pack & Box Isolation:** Solves one of the most critical daily challenges faced by visually impaired users — identifying medication.
- **On-Device OCR & RegEx Parsing:** Isolates brand formulations (e.g. *Dolo 650, Pan 40, Azithral 500*), Indian pharmaceutical expiry formats (`EXP 11/2027`, `USE BY: 08/2026`), and dosage strengths while stripping away batch codes and packaging clutter.
- **Dietary Instruction Voice Prompt:** Announces clear intake instructions (*"Take after food."*) in the user's native tongue.

### 3. Priority 3: Live Unsimulated Latency Benchmark
- **Real Benchmark Harness:** No mock numbers or static assumptions. Dispatches a real live frame via `fetch()` across the network and times both the genuine cloud round-trip and local on-device execution with `performance.now()`.
- **Live Speedup Proof:** Proves on stage that local execution is an order of magnitude faster and continues working even when network connections drop.
- **Cached Replay Fallback (`Key R`):** Built-in demo safety valve ensuring pitch flow isn't disrupted if venue Wi-Fi becomes completely unreachable.

### 4. Priority 4: "Who's Near Me" Face Recognition
- **Local Embeddings:** 128-dimensional facial vectors extracted and compared locally using cosine similarity.
- **AES-GCM 256-bit Encryption:** Sensitive biometric embeddings are encrypted at rest via the Web Crypto API (`PBKDF2` + `AES-GCM-256`), eliminating surveillance and third-party leakage risks.
- **Discreet Whispered Haptics:** Detects registered friends and family in the background, vibrating with a distinct double-heartbeat pattern and softly announcing their proximity.

---

## 🌐 Pan-Indian Multilingual Vocal Engine

Drishti features native vernacular support across 7 major Indian languages:

| Language | Native Script | Acoustic Phonetic Strategy |
| :--- | :--- | :--- |
| **Telugu** *(Host)* | 🏛️ **తెలుగు** | Native script + phonetic prosody fallback (*"Parisaraalani choosthundhi"*) |
| **Hindi** | 🇮🇳 **हिन्दी** | Native script + natural enunciation (*"Aaspaas ka scan jaari hai"*) |
| **English (India)** | 🇮🇳 **English** | Indian English neural voice at warm 0.92x cadence |
| **Tamil** | 🇮🇳 **தமிழ்** | Native script + phonetic fallback (*"Vazhikaattudhal thodangiyadhu"*) |
| **Kannada** | 🇮🇳 **ಕನ್ನಡ** | Native script + phonetic fallback (*"Suttamuttalina jaaga scan"*) |
| **Marathi** | 🇮🇳 **मराठी** | Native script + phonetic fallback (*"Parisaraache scanning suru aahe"*) |
| **Bengali** | 🇮🇳 **বাংলা** | Native script + phonetic fallback (*"Chaarpash scan kora hochhe"*) |

- **Instant Language Switching:** Tap any language pill in the top navigation bar or press <kbd>L</kbd>.
- **Full UI & Audio Localization:** Action buttons (`btnScene`, `btnMed`, `btnBench`, `btnFaces`), status cards, and verbal alerts instantly translate and vocalize in the selected tongue.
- **Acoustic Phonetics:** On systems lacking native regional TTS voices, automatically maps phonetics to Indian neural speech engines with natural pause markers, ensuring smooth, highly intelligible audio.

---

## ✈️ The "Airplane Mode" Proof

To unequivocally prove zero cloud reliance during hackathon evaluation:
1. Presenter visibly activates **Airplane Mode** on the device (or taps <kbd>A</kbd>).
2. The HUD displays `Airplane: ON (Air-Gapped)`.
3. Spatial Navigation, Medicine Smart-Scan, and Face Recognition execute with zero latency degradation.
4. The Cloud Benchmark visibly fails with network connection blocked, while on-device completes seamlessly.

---

## 🎮 Stage Demo Shortcuts & Gestures

| Key / Gesture | Action | What Judges See & Hear |
| :---: | :--- | :--- |
| **Pills / `L`** | **Select Language** | Switches all buttons, text, and vocal speech across 7 Indian languages. |
| **`1` / Double-Tap** | **Spatial Guidance** | Starts 12-sector clock navigation with linear proximity vibration. |
| **`2` / Swipe Up** | **Medicine Scan** | Reads medicine strips, expiry dates, and dosage in active language. |
| **`3` / `B`** | **Latency Benchmark** | Runs unsimulated on-device vs. cloud speed test. |
| **`4` / `F` / Swipe Right**| **Who's Near Me** | Heartbeat haptic + whispered contact proximity alert. |
| **`T`** | **Toggle Model Tier** | Toggles live between **Standard (NPU)** and **Lite (Edge)**. |
| **`A`** | **Airplane Mode** | Toggles air-gapped demo mode badge and vocal alert. |
| **`R`** | **Replay Cached Run**| Displays verified cached benchmark fallback. |
| **`Space`** | **Instant Silence** | Instantly stops all speech synthesis and vibrations. |

---

## 🛠️ Project Structure

```
drishti/
├── index.html                   # High-contrast OLED interface with accessible action grid
├── manifest.json                # PWA manifest for standalone mobile installation
├── package.json                 # ES module test runner & server scripts
├── styles/
│   └── main.css                 # Pure-black OLED styles, HUD panels, tactile buttons
├── src/
│   ├── config.js                # Global configuration & 7-language dictionaries
│   ├── core/
│   │   ├── camera-stream.js     # Low-latency camera ingestion & downsampling
│   │   ├── speech-engine.js     # Priority-queued multilingual speech with acoustic fallback
│   │   ├── haptic-engine.js     # Linear vibration patterns (proximity pulses, heartbeat)
│   │   └── model-tier-manager.js# Standard (Flagship NPU) vs. Lite (Edge) selector
│   ├── modules/
│   │   ├── scene-narrator.js    # Clock-face spatial obstacle mapping (12 sectors, 3 zones)
│   │   ├── medicine-scanner.js  # Blister pack OCR filter + Indian pharma expiry parser
│   │   ├── latency-benchmark.js # Live measured on-device vs. real cloud HTTP benchmark
│   │   └── face-recognizer.js   # Local 128-d face embeddings + WebCrypto AES-GCM-256
│   └── input/
│       ├── gesture-listener.js  # Accelerometer back-tap & screen touch gesture detector
│       └── keyboard-controls.js # Quick stage demo keyboard shortcuts
└── test/
    ├── medicine-parser.test.js  # Unit tests for Indian pharma text parsing
    ├── model-tier.test.js       # Unit tests for model tier switching
    ├── benchmark.test.js        # Unit tests for stopwatch timing & cached replay
    └── languages.test.js        # Multilingual vocabulary & voice switching tests (111 assertions)
```

---

## 🚦 Local Setup & Testing

### Prerequisites
- Node.js (v18+)
- Any modern web browser (Chrome / Edge / Firefox)

### Installation & Run
```bash
# Clone the repository
git clone https://github.com/M-L-Arjun/drishti.git
cd drishti

# Run automated tests (111 unit tests across all modules)
npm test

# Start local server
npm start
# Server starts at http://localhost:3000
```

---

## 👥 Hackathon Team
- **Built for:** iQOO Hackathon 2026 (Hyderabad City Battle)
- **Theme Track:** Phone-First, On-Device AI
- **Repository:** [https://github.com/M-L-Arjun/drishti](https://github.com/M-L-Arjun/drishti)
