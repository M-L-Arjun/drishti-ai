# DRISHTI (दृष्टि) — HACKATHON PROBLEM STATEMENT & TECHNICAL SOLUTION SPECIFICATION

**Project Title:** Drishti (*दृष्टि*)  
**Tagline:** An Instant, Private, Offline Sensory Companion for the Visually Impaired  
**Event & Arena:** iQOO Hackathon 2026 — Hyderabad City Battle  
**Competition Domain / Track:** Smart Living / Accessibility Tech (*Strictly Assistive Tech — NOT Health Tech*)  
**GitHub Repository:** `https://github.com/M-L-Arjun/drishti-ai`  
**Live Production Web App:** `https://drishti-seven-mu.vercel.app`  
**Live Pitch Deck:** `https://drishti-seven-mu.vercel.app/pitch`  
**Hardware Strategy:** Tiered Edge Architecture (Flagship NPU + Budget SoC Optimization)  
**Deployment Model:** 100% On-Device Silicon, Zero Cloud Latency, Zero Telemetry  

---

## 1. EXECUTIVE SUMMARY

Over 40 million citizens across India live with severe visual impairment, representing one of the largest underserved populations in the world. Despite exponential advances in generative artificial intelligence and computer vision over the past two years, the contemporary assistive technology landscape remains fundamentally broken for visually impaired users. Mainstream assistive platforms rely almost universally on **cloud-tethered vision APIs**—architectures that transmit raw camera feeds over cellular networks to centralized data centers for inference.

This reliance on cloud processing creates a fatal trilemma for assistive technology:
1. **Dangerous Physical Latency:** Cloud round-trips take 2 to 5 seconds. For a visually impaired pedestrian moving at average walking speed (1.2 to 1.4 m/s), that delay translates to 4 to 6 feet of blind forward momentum, making real-time obstacle avoidance dangerous and leading to physical collisions, falls, and injuries.
2. **Catastrophic Privacy Exposure:** Blind and low-vision users are required to livestream continuous video feeds of their private living spaces, bedrooms, bathrooms, sensitive financial records, government identity documents (Aadhaar, PAN), and medical prescriptions to third-party corporate servers, sacrificing basic personal privacy for mobility.
3. **Connectivity Fragility:** Essential urban and rural environments—such as underground metro stations, high-rise elevators, concrete stairwells, basements, and rural transit corridors—consistently suffer from dead zones and intermittent cellular handoffs. The moment network connectivity drops, cloud-tethered assistive tools fail instantly, leaving users isolated and functionally blinded.

**Drishti (*दृष्टि*)** is an on-device AI sensory companion engineered specifically to resolve this crisis. Built for the **Smart Living / Accessibility Tech** track of the iQOO Hackathon 2026, Drishti operates entirely on local smartphone silicon without dispatching a single byte of sensory data to the cloud. By pairing an on-device quantized Vision-Language Model (VLM), local optical character recognition (OCR), edge text summarization, and vector face recognition with a spatial 12-sector clock-face audio engine and directional linear haptic pulses, Drishti delivers sub-second obstacle guidance, instant medicine verification, and contact proximity detection. Furthermore, its **Tiered Model Architecture** ensures that high-speed assistive intelligence runs not only on flagship NPU hardware like iQOO devices, but scales down gracefully to affordable sub-₹15,000 smartphones powered by entry-level silicon.

---

## 2. THE COMPREHENSIVE PROBLEM STATEMENT (PS)

### 2.1 The Demographic & Socioeconomic Context
India is home to an estimated 40 million individuals living with blindness or moderate-to-severe visual impairment. The vast majority of these individuals navigate congested urban environments, public transit hubs, and private households without dedicated sighted guides or expensive proprietary hardware aids. While high-income markets have seen the introduction of specialized smart glasses priced between $1,000 and $3,500, such devices are economically inaccessible to over 98% of the visually impaired population in the Global South. The ubiquitous smartphone—already possessed by hundreds of millions of Indian citizens—represents the only viable hardware vehicle capable of delivering scalable, universal assistive empowerment.

### 2.2 Critical Failure 1: The Physics of Cloud Latency and Physical Injury
The core technical premise of obstacle avoidance is temporal reflex. Human reflexes respond to tactile or auditory hazard cues within 150 to 250 milliseconds. When an assistive application delegates visual scene analysis to a remote cloud server, the pipeline involves multiple sequential bottlenecks:
* Frame capture and JPEG/WebP compression on the device (40–80 ms)
* Cellular uplink transmission over 4G/5G networks (300–800 ms)
* Cloud queue ingestion, batching, and remote GPU forward-pass (800–2,000 ms)
* Server response serialization and downlink transmission (300–600 ms)
* Client-side audio parsing and text-to-speech dispatch (200–400 ms)

The cumulative end-to-end latency of cloud vision APIs routinely ranges between **2,000 ms and 5,000 ms (2 to 5 seconds)** under real-world network conditions. A visually impaired person walking at a modest pace of 1.2 meters per second travels approximately 2.4 to 6.0 meters (8 to 20 feet) during that processing window. In dense Indian pedestrian spaces characterized by uneven footpaths, sudden open construction pits, low-hanging tree branches, street vendors, and moving two-wheelers, a multi-second delay transforms an assistive tool from a safety mechanism into a physical hazard. By the time a cloud API returns the message *"Low-hanging concrete awning ahead"*, the user has already sustained physical contact.

### 2.3 Critical Failure 2: Privacy Invasions and Biometric Data Harvester Exploitation
To use existing commercial assistive apps, visually impaired individuals must point their active phone cameras continuously at the world around them. In daily practice, this means transmitting unencrypted, identifiable video streams of private domestic spaces: bedrooms, personal wardrobes, family interactions, bathrooms, and confidential desk workspaces. 

Crucially, visually impaired users rely on assistive vision to read personal physical documents that sighted people inspect privately. This includes:
* Government identity cards (Aadhaar cards containing 12-digit UID numbers, father's names, and birth dates; PAN cards; Voter IDs)
* Banking paperwork, physical passbooks, credit card physical details, and cheque leaves
* Highly sensitive pharmaceutical prescriptions, medical discharge summaries, and diagnostic reports

When these visual streams are piped into commercial third-party cloud platforms, they are stored, tokenized, and frequently repurposed for corporate model training under vague terms of service. For the visually impaired community, this creates an intolerable dilemma: **surrender fundamental privacy rights and expose sensitive identity data, or remain cut off from independent daily living.**

### 2.4 Critical Failure 3: Connectivity Fragility and the "Tether Trap"
Assistive technology cannot be treated as a leisure application where network downtime is merely an inconvenience. Mobility is a safety-critical utility. Real-world transit environments in Indian metropolitan hubs (such as the Hyderabad Metro, underground railway subways, multi-level basements, elevators, high-density market alleys like Laad Bazaar, and rural state highways) suffer from continuous signal attenuation, cell tower congestion, and total RF shielding. 

When a cloud-dependent application encounters a network drop:
* Web sockets terminate and throw unhandled connection errors.
* Video frame requests buffer indefinitely or time out.
* Text-to-speech engines freeze mid-sentence.
* The user is left in complete silence, unable to determine whether the path ahead is clear or obstructed.

Assistive technology that functions only when within range of reliable broadband is fundamentally incompatible with the unpredictability of daily life.

### 2.5 Critical Failure 4: Economic Exclusion and Subscription Paywalls
Most existing commercial vision apps operate on venture-funded SaaS models. They offer limited free tiers (e.g., 5 to 10 queries per day) before locking continuous narration behind recurring monthly subscription paywalls ranging from ₹1,200 to ₹4,000 per month. In a country where the vast majority of visually impaired citizens belong to low- and middle-income households, recurring software fees represent an insurmountable barrier. Assistive autonomy must be structured as an air-gapped utility that incurs zero incremental cloud inference costs after initial installation.

---

## 3. THE PROPOSED SOLUTION — DRISHTI ARCHITECTURAL BLUEPRINT

**Drishti (*दृष्टि*)** is an edge-native AI sensory companion designed from first principles to break the cloud-tether trap. Operating as an eyes-free Progressive Web App (PWA) and standalone native engine, Drishti executes all sensory understanding, text parsing, biometric verification, and auditory/haptic synthesis directly on local phone silicon.

```
+-----------------------------------------------------------------------------------+
|                           DRISHTI ON-DEVICE SILICON PIPELINE                      |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ SENSORY INGESTION ]                                                            |
|  Camera Feed (640x480 @ 30fps) + Accelerometer / Gyroscope (IMU Motion Engine)    |
|                          |                                                        |
|                          v                                                        |
|  [ LOCAL SILICON DISPATCH: TIERED MODEL MANAGER ]                                 |
|  Hardware Profiler Auto-Detects SoC Class & Thermal Headroom                      |
|       |                                                    |                      |
|       |--> FLAGSHIP NPU TIER (iQOO Devices)                |--> LITE EDGE TIER    |
|            Quantized Mobile VLM (INT4/INT8)                     MobileNetV4 +     |
|            Deep Multi-Object Spatial Segmentation               Lightweight OCR   |
|                          |                                 |                      |
|                          +----------------+----------------+                      |
|                                           |                                       |
|                                           v                                       |
|  [ FOUR ON-DEVICE FUNCTIONAL PROCESSING ENGINES ]                                 |
|  +--------------------+---------------------+--------------------+----------------+
|  | 01. SPATIAL SCENE  | 02. MEDICINE SCAN   | 03. WHO'S NEAR ME  | 04. VERNACULAR |
|  | 12-Sector Clock    | High-Contrast OCR   | 128-d Vector Embed | 7 Pan-Indian   |
|  | Depth Estimation   | Local LLM Filter    | WebCrypto AES-GCM  | Acoustic Neural|
|  | Hazard Zones       | Drug/Dose/Expiry    | Proximity Pulses   | TTS Engine     |
|  +--------------------+---------------------+--------------------+----------------+
|                                           |                                       |
|                                           v                                       |
|  [ MULTI-MODAL EYES-FREE ACTUATION ]                                              |
|  * Spatial Directional Audio: "Obstacle 3ft at 12 o'clock; open corridor at 2"   |
|  * Linear Motor Haptics: Proximity Warning Bursts & Double-Heartbeat Alerts       |
|                                                                                   |
|  ===============================================================================  |
|  AIR-GAPPED NETWORK ISOLATION: Zero Outbound Sockets | 100% Offline Verifiable    |
+-----------------------------------------------------------------------------------+
```

---

## 4. DETAILED BREAKDOWN OF CORE CAPABILITIES

### 4.1 Capability 1: Spatial & Scene Guidance (The 12-Sector Clock-Face Engine)
Rather than inundating visually impaired users with verbose, literary scene descriptions that clutter auditory attention, Drishti employs a structured, deterministic spatial coordinate model based on the traditional **Clock-Face Orientation Paradigm**:

* **Horizontal Field-of-View Segmentation:** The camera's 68-degree horizontal field of view is discretized into 12 radial sectors. An obstacle situated directly ahead is indexed as *12 o'clock*, an opening to the right is *2 o'clock*, and a barrier on the left is *10 o'clock*.
* **Tri-Zone Depth Ranging:** Real-time monocular depth estimation assigns objects into three discrete urgency zones:
  1. *Immediate Hazard Zone (< 3 feet):* Triggers instant audio interruption and rapid 200 Hz continuous haptic vibration.
  2. *Navigation Zone (3 to 8 feet):* Spoken directionally to allow natural walking trajectory adjustments (*"Table at 11 o'clock, 5 feet"*).
  3. *Far Background Zone (> 8 feet):* Filtered out to avoid cognitive sensory overload.
* **Corridor & Path Extraction:** The model continuously identifies free ground plane space, directing users toward open pathways (*"Clear path ahead at 1 o'clock"*).

### 4.2 Capability 2: Smart-Scan for Medicine & Packaging
Reading pharmaceutical blister strips and packaging is one of the most hazardous daily tasks faced by visually impaired individuals and elderly citizens living alone. Blister strips in India are notoriously difficult to read: foil surfaces create specular reflection, text is densely printed in multiple languages, and critical clinical data is surrounded by marketing text, batch numbers, manufacturer licenses, and excipient chemical lists.

Drishti’s on-device medicine scanner utilizes a specialized two-stage processing filter:
1. **Adaptive Specular Binarization:** Local edge filters remove glare and reflections from metallic foils.
2. **On-Device OCR & Entity Distillation:** Instead of reading the entire package aloud (which takes over 45 seconds of irrelevant speech), a local quantized language model extracts and isolates exactly **three clinical data points**:
   * **Brand & Generic Name:** (e.g., *Dolo 650 / Paracetamol Tablets IP*)
   * **Active Strength & Dosage:** (e.g., *650 mg*)
   * **Expiration Date:** Normalized across diverse Indian pharmaceutical date notations (`EXP 11/27`, `EXP. DATE: 08/2026`, `BEST BEFORE DEC 2028`).
3. **Actionable Spoken Output:** The engine speaks the vital information immediately (*"Dolo 650 mg. Expiry November 2027. Safe to consume."*), followed by basic vernacular directions (*"Take after food"*). If a medicine is expired, it triggers an immediate urgent alert tone and high-frequency vibration warning.

### 4.3 Capability 3: "Who's Near Me" Contact Recognition (Local Vector Cryptography)
Social isolation is an acute, under-addressed challenge in the visually impaired community. In a crowded room, social gathering, or office corridor, visually impaired people cannot see who is approaching, standing nearby, or smiling at them, forcing them into a passive posture of waiting to be addressed.

Existing cloud-based facial recognition apps present severe ethical and legal risks by uploading facial imagery of friends and colleagues to third-party databases. Drishti solves this through **Local-Only Vector Cryptography**:
* **128-Dimensional Facial Embeddings:** When a user registers a trusted contact (e.g., *Arjun, Priya, Mother*), the on-device model extracts a compact 128-dimensional mathematical vector representation of facial landmarks. The raw photograph is immediately discarded and never stored.
* **WebCrypto AES-GCM 256-Bit Encryption:** Facial vector embeddings are encrypted at rest using AES-GCM with a user-controlled device key stored inside local hardware secure keystores (IndexedDB encrypted storage).
* **Ambient Whisper Proximity Alerts:** During background scene scanning, if a registered vector matches an approaching face with >88% cosine similarity, the phone does not announce the name loudly to the whole room. Instead, it triggers a discreet **double-heartbeat haptic pulse (`[200ms, 60ms, 200ms]`)** and whispers the identity into the user's earpiece (*"Arjun approaching at 1 o'clock, 4 feet"*).

### 4.4 Capability 4: Pure Tactile & Voice UX (Eyes-Free Paradigm)
Drishti is designed on the foundational premise that **assistive apps should never require looking at a screen**. The interface is built around high-contrast OLED black (`#05060A`) to maximize battery preservation on AMOLED displays while remaining completely controllable through gestures and spatial audio:
* **Tactile Gesture Controls:** 
  * Double-Tap anywhere on the screen: Toggle Spatial Navigation Narration.
  * Swipe Up: Trigger Instant Medicine / Document Smart-Scan.
  * Swipe Right: Toggle "Who's Near Me" Contact Scanner.
  * Accelerometer Back-Tap: Detects physical double-taps on the back of the smartphone chassis via IMU accelerometer peaks to silence audio instantly.
  * Two-Finger Hold: Speaks active hardware telemetry (battery level, active model tier, temperature, and air-gapped confirmation).
* **Multilingual Vernacular Voice Engine:** Supporting 7 major Indian languages (**Telugu, Hindi, Indian English, Tamil, Kannada, Marathi, and Bengali**), Drishti ensures that non-English speaking citizens have equal access to assistive technology. When native regional voice packs are absent on budget devices, an intelligent phonetic transcription fallback ensures intelligible pronunciation at optimized delivery rates.

### 4.5 Capability 5: Hardware-Adaptive Tiered Architecture
A major flaw in academic AI projects is building monolithic models that only execute on flagship developer workstations. To ensure massive real-world adoption across India, Drishti implements an automatic **Tiered Silicon Selector**:
* **Standard Tier (Flagship NPU):** Targeted at devices with dedicated neural processing units (such as iQOO flagship smartphones featuring Qualcomm Snapdragon 8 Gen series or MediaTek Dimensity 9000 series). Leverages 4-bit/8-bit quantized vision-language backbones to perform holistic multi-object semantic segmentation, complex text reasoning, and scene dynamics.
* **Lite Tier (Edge CPU / GPU):** Targeted at mainstream, affordable Indian smartphones (powered by chipsets like MediaTek Dimensity 6300/7300 or Snapdragon 6 Gen series). Replaces large generative transformers with streamlined edge vision architectures (quantized MobileNetV4 + fast Canny edge detection + lightweight Tesseract OCR), guaranteeing sub-second response times even on entry-level hardware without thermal throttling.

---

## 5. TECHNICAL ARCHITECTURE & DATA FLOW

The entire Drishti computational lifecycle occurs locally across five decoupled execution stages:

```
[ Camera Stream 640x480 ] 
         |
         v
[ Frame Downsampler & Normalizer (Canvas 2D / WebGL) ]
         |
         v
+-------------------------------------------------------------+
|               MODEL TIER MANAGER (Auto-Scaling)             |
|  - Standard Tier: Mobile quantized VLM tensor execution     |
|  - Lite Tier: Edge object classifier + specialized OCR      |
+-------------------------------------------------------------+
         |
         +---------------------------------------+
         |                                       |
         v                                       v
[ Spatial Radar & Obstacle Engine ]     [ OCR & Entity Filter ]
  * 12-Sector Clock Mapping               * Specular Glare Removal
  * Tri-Zone Depth Segmentation           * RegEx Entity Extractor
  * Directional Vector Output             * Brand / Dose / Expiry
         |                                       |
         +-------------------+-------------------+
                             |
                             v
              [ SENSORY ARBITRATION QUEUE ]
              * Priority 1: Hazard (<3ft) -> Interrupts All
              * Priority 2: Medicine Reading -> Continuous
              * Priority 3: Ambient Contact -> Whispered
                             |
                             v
           +-----------------+-----------------+
           |                                   |
           v                                   v
[ Web Audio & Speech Engine ]     [ Linear Haptic Actuator ]
  * Spatial Panning Audio           * Proximity Urgency Pulses
  * 7 Vernacular Languages          * Double-Heartbeat Waves
```

### 5.1 Real-World Latency Benchmark & Verification Protocol
To prove Drishti’s architectural superiority to hackathon judges, the application incorporates an **unsimulated, live side-by-side benchmark harness**:
* When triggered on stage, Drishti captures an identical camera frame.
* It passes the frame to the local on-device inference pipeline while concurrently dispatching a genuine network `fetch()` call transmitting the payload to a remote cloud vision endpoint.
* Using high-resolution browser timing (`performance.now()`), the application displays live dual stopwatches on the Telemetry HUD.
* **The Result:** The on-device pipeline consistently completes processing in sub-second time, while the cloud API is delayed by 2,000 to 4,500 milliseconds—visually demonstrating the dangerous latency window of cloud processing.
* **Airplane Mode Air-Gap Proof:** Judges can instruct the presenter to engage physical Airplane Mode on stage. Drishti continues executing real-time spatial navigation, medicine scanning, and voice synthesis without interruption, conclusively proving zero network dependency.

---

## 6. SMART LIVING TRACK ALIGNMENT & SOCIETAL IMPACT

### 6.1 Why Drishti Belongs to "Smart Living", NOT "Health Tech"
A critical architectural and regulatory distinction for the iQOO Hackathon is Drishti’s strict classification under **Smart Living (Accessibility & Assistive Tech)**:
* Drishti **does not** diagnose diseases, prescribe medical treatments, monitor biological vitals, or replace medical practitioners.
* Drishti **is** an ambient daily living companion that restores sensory environmental interaction—empowering users to navigate public streets, board metro coaches, read printed household labels, locate chairs, avoid physical obstacles, and recognize approaching friends.
* Just as smart lighting, smart doorbells, and robotic vacuums enhance autonomy in the smart home, Drishti brings **smart environmental perception** to the human body, democratizing independent living.

### 6.2 Tangible Impact Across Three Real-World Pillars

| Dimension | Legacy Cloud Assistive Tech | Drishti On-Device Sensory Companion |
|---|---|---|
| **Obstacle Avoidance Safety** | 2,000–5,000 ms cloud delay; causes pedestrian collisions with obstacles. | Sub-second local inference; immediate warning allows safe stopping. |
| **User Privacy & Confidentiality** | Private bedrooms, bathrooms, and IDs uploaded to commercial servers. | 100% on-device; zero bytes of visual or biometric data leave the phone. |
| **Connectivity & Reliability** | Completely disabled in metro basements, elevators, and rural areas. | Fully operational in Airplane Mode, underground subways, and dead zones. |
| **Economic Accessibility** | Recurring monthly subscriptions (₹1,200–₹4,000/mo) or ₹1.5L+ smart glasses. | 100% free, open-source, runs on existing affordable smartphones. |
| **Hardware Scalability** | Requires high-end smartphones with continuous 5G network plans. | Tiered models scale from flagship NPUs down to budget MediaTek chips. |

---

## 7. SCALABILITY, PERMANENCE, AND PRODUCTION HOSTING

To ensure that Drishti remains an enduring, verifiable utility for hackathon evaluation and real-world deployment, the project is architected for zero maintenance:

1. **24/7 Global Serverless Edge Hosting:**
   The production web app is deployed on **Vercel's Global Edge Network** (`https://drishti-seven-mu.vercel.app` and `/pitch`). Because Drishti executes all neural inference on client silicon, the web server only serves lightweight static PWA assets (HTML, CSS, JavaScript, and optimized media). There are zero backend GPU server instances to maintain, crash, or bill, ensuring the platform runs permanently 24/7/365 without human supervision.
2. **Progressive Web App (PWA) Offline Caching:**
   Equipped with a deterministic Service Worker and Web App Manifest, once Drishti is loaded in a mobile browser (Chrome, Edge, Safari), all static assets, scripts, and model weights are cached into local browser storage. The user can disconnect the phone from the internet completely, and the app continues to launch and run directly from the phone’s home screen.
3. **Future Hardware Roadmap:**
   * Direct integration with low-cost Bluetooth BLE spatial rings for discreet finger-worn directional vibration.
   * Integration with open-hardware camera frames (such as open-source ESP32-CAM glasses clips) broadcasting frames via low-energy local Wi-Fi/Bluetooth to the smartphone in the user's pocket.

---

## 8. CONCLUSION: BUILT ENTIRELY FOR INDEPENDENCE

assistive technology should never demand that a visually impaired person compromise their physical safety through cloud latency, sacrifice their dignity through server-side surveillance, or surrender their autonomy to connectivity blackouts.

By moving the entire sensory intelligence stack directly onto local phone hardware, **Drishti (*दृष्टि*)** proves that accessibility and high-performance edge AI are natural partners. Whether running on a flagship iQOO smartphone harnessing a cutting-edge NPU or an entry-level handset in a remote Indian village, Drishti delivers an instant, private, offline sensory companion that restores everyday autonomy to millions.

> *"Built entirely on-device. Built entirely for independence."*
