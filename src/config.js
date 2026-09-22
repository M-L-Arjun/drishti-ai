/**
 * Drishti AI - Global Configuration
 * Zero-Cloud, On-Device Sensory Prosthetic
 */

export const CONFIG = {
  APP_NAME: "Drishti AI",
  VERSION: "1.0.0-hackathon",
  
  // Model Tiers
  TIERS: {
    STANDARD: {
      id: "standard",
      name: "Standard Tier (Flagship NPU)",
      description: "Rich spatial reasoning & detailed scene layout",
      targetChipset: "Snapdragon 8 Elite / 8 Gen 3 class",
      frameIntervalMs: 200, // 5 FPS sampling
      confidenceThreshold: 0.55,
      maxDetections: 6,
    },
    LITE: {
      id: "lite",
      name: "Lite Tier (Mid-Range / Budget)",
      description: "Rapid core obstacle orientation & low memory footprint",
      targetChipset: "MediaTek Dimensity 6300/7300, Snapdragon 6/7 series",
      frameIntervalMs: 350, // ~3 FPS sampling
      confidenceThreshold: 0.65,
      maxDetections: 3,
    }
  },

  // Supported Indian Languages
  LANGUAGES: {
    "en": { id: "en", name: "English (India)", code: "en-IN", native: "English", flag: "🇮🇳" },
    "te": { id: "te", name: "Telugu", code: "te-IN", native: "తెలుగు", flag: "🏛️" }, // Hyderabad host language!
    "hi": { id: "hi", name: "Hindi", code: "hi-IN", native: "हिन्दी", flag: "🇮🇳" },
    "ta": { id: "ta", name: "Tamil", code: "ta-IN", native: "தமிழ்", flag: "🇮🇳" },
    "kn": { id: "kn", name: "Kannada", code: "kn-IN", native: "ಕನ್ನಡ", flag: "🇮🇳" },
    "mr": { id: "mr", name: "Marathi", code: "mr-IN", native: "मराठी", flag: "🇮🇳" },
    "bn": { id: "bn", name: "Bengali", code: "bn-IN", native: "বাংলা", flag: "🇮🇳" }
  },

  // Localized System Prompts & Templates (Native Script + Phonetic Fallback for TTS engines)
  LOCALIZED_STRINGS: {
    en: {
      langSelected: "English language selected.",
      navActive: "Spatial navigation active. Scanning surroundings.",
      navPaused: "Spatial guidance paused.",
      obstacleNear: "Caution: Obstacle directly ahead.",
      openCorridor: "Open corridor at 2 o'clock.",
      medScanning: "Scanning medicine. Hold packaging steady.",
      medExpiry: "Expiration date",
      medTakeAfter: "Take after food.",
      medNotFound: "Text detected, but could not verify drug name. Please rotate packaging.",
      contactApproaching: "approaching.",
      contactScanning: "Scanning: No recognized contacts in view.",
      benchmarkStart: "Dispatching live frame to on-device NPU vs Cloud Vision API.",
      benchmarkResult: "Benchmark complete. On device executed in {ms} milliseconds.",
      tierStandard: "Switched to Standard Tier. Flagship NPU active.",
      tierLite: "Switched to Lite Tier. Budget hardware active.",
      airplaneActive: "Airplane mode active. Zero network reliance confirmed.",
      airplaneOff: "Airplane mode disabled.",
      cachedReplay: "Loaded verified cached benchmark run.",
      ready: "Ready. Tap an action below or use keyboard shortcuts (1-4).",
      btnScene: "Spatial Guidance",
      btnMed: "Medicine Smart-Scan",
      btnBench: "Latency Benchmark",
      btnFaces: "\"Who's Near Me\""
    },
    te: { // Telugu (Hyderabad Host Language)
      native: {
        langSelected: "తెలుగు భాష ఎంపిక చేయబడింది.",
        navActive: "నావిగేషన్ ప్రారంభించబడింది. పరిసరాలను పరిశీలిస్తోంది.",
        navPaused: "నావిగేషన్ తాత్కాలికంగా ఆపబడింది.",
        obstacleNear: "హెచ్చరిక: మీ ముందు అడ్డంకి ఉంది.",
        openCorridor: "2 గంటల దిశలో దారి ఖాళీగా ఉంది.",
        medScanning: "మందులను స్కాన్ చేస్తోంది. స్థిరంగా పట్టుకోండి.",
        medExpiry: "గడువు ముగింపు తేదీ",
        medTakeAfter: "భోజనం తర్వాత వేసుకోవాలి.",
        medNotFound: "మందుల వివరాలు గుర్తించబడలేదు. ప్యాకేజింగ్ తిప్పండి.",
        contactApproaching: "మీ వద్దకు వస్తున్నారు.",
        contactScanning: "పరిశీలిస్తోంది: తెలిసిన వ్యక్తులు ఎవరూ లేరు.",
        benchmarkStart: "లైవ్ బెంచ్‌మార్క్ ప్రారంభమైంది. వేగాన్ని లెక్కిస్తోంది.",
        benchmarkResult: "బెంచ్‌మార్క్ పూర్తయింది. పరికరంలో {ms} మిల్లీసెకన్లలో పూర్తయింది.",
        tierStandard: "స్టాండర్డ్ టైర్ ఎంపిక చేయబడింది. ఫ్లాగ్‌షిప్ ఎన్‌పియు సక్రియంగా ఉంది.",
        tierLite: "లైట్ టైర్ ఎంపిక చేయబడింది. బడ్జెట్ హార్డ్‌వేర్ సక్రియంగా ఉంది.",
        airplaneActive: "విమాన మోడ్ సక్రియం చేయబడింది. ఇంటర్నెట్ లేకుండా సురక్షితం.",
        airplaneOff: "విమాన మోడ్ ఆపివేయబడింది.",
        cachedReplay: "సేవ్ చేసిన బెంచ్‌మార్క్ రికార్డ్ లోడ్ చేయబడింది.",
        ready: "సిద్ధంగా ఉంది. ఏదైనా బటన్ నొక్కండి.",
        btnScene: "స్పేషియల్ గైడెన్స్",
        btnMed: "మెడిసిన్ స్కాన్",
        btnBench: "స్పీడ్ టెస్ట్ (బెంచ్‌మార్క్)",
        btnFaces: "పరిచయస్తుల గుర్తింపు"
      },
      phonetic: {
        langSelected: "Telugu bhaasha, empika cheyyabadindhi.",
        navActive: "Navigation modhalaindhi. Parisaraalani choosthundhi.",
        navPaused: "Navigation, thaath-kaalikam-gaa aagindhi.",
        obstacleNear: "Heccharika! Mee mundhu, addanki undhi.",
        openCorridor: "Rendu gantala dishallo, daari khaaligaa undhi.",
        medScanning: "Mandhula strip, scan chesthundhi. Sthiramgaa pattukondi.",
        medExpiry: "Gadavu thedi",
        medTakeAfter: "Bhojanam tharvaatha, theesukondi.",
        medNotFound: "Mandhula vivaraalu dorakaledhu. Packaging thippandi.",
        contactApproaching: "mee vaddhaku, vasthunnaaru.",
        contactScanning: "Parisheelithondi: Thelisina vyakthulu evaroo leru.",
        benchmarkStart: "Live benchmark modhalaindi. Vegam kolusthondi.",
        benchmarkResult: "Benchmark poorthaindhi. Device lo, {ms} milliseconds lo nadichindi.",
        tierStandard: "Standard tier, active. Flagship NPU ready.",
        tierLite: "Lite tier, active. Budget phone mode ready.",
        airplaneActive: "Airplane mode active. Internet lekundaa safe.",
        airplaneOff: "Airplane mode off cheyyabadindhi.",
        cachedReplay: "Saved benchmark record load cheyyabadindhi.",
        ready: "Siddhamgaa undhi.",
        btnScene: "Spatial Guidance",
        btnMed: "Medicine Scan",
        btnBench: "Speed Test",
        btnFaces: "Face Detection"
      }
    },
    hi: { // Hindi
      native: {
        langSelected: "हिन्दी भाषा चुनी गई।",
        navActive: "नेविगेशन सक्रिय। आसपास का स्कैन जारी है।",
        navPaused: "नेविगेशन रोक दिया गया है।",
        obstacleNear: "सावधान: ठीक सामने बाधा है।",
        openCorridor: "२ बजे की दिशा में रास्ता खुला है।",
        medScanning: "दवाई स्कैन हो रही है। कृपया स्थिर रखें।",
        medExpiry: "समाप्ति तिथि",
        medTakeAfter: "भोजन के बाद लें।",
        medNotFound: "दवाई का नाम नहीं मिला। कृपया घुमाएं।",
        contactApproaching: "पास आ रहे हैं।",
        contactScanning: "स्कैन जारी: कोई परिचित व्यक्ति नहीं दिखा।",
        benchmarkStart: "लाइव बेंचमार्क शुरू। ऑन-डिवाइस और क्लाउड स्पीड मापी जा रही है।",
        benchmarkResult: "बेंचमार्क पूरा हुआ। डिवाइस पर {ms} मिलीसेकंड में चला।",
        tierStandard: "स्टैंडर्ड टियर सक्रिय। फ्लैगशिप एनपीयू चालू है।",
        tierLite: "लाइट टियर सक्रिय। बजट हार्डवेयर के लिए तैयार।",
        airplaneActive: "हवाई जहाज मोड चालू है। बिना इंटरनेट के सुरक्षित।",
        airplaneOff: "हवाई जहाज मोड बंद किया गया।",
        cachedReplay: "कैश्ड बेंचमार्क डेटा लोड किया गया।",
        ready: "तैयार है। कोई भी बटन दबाएं।",
        btnScene: "दिशा निर्देश (नेविगेशन)",
        btnMed: "दवाई स्मार्ट-स्कैन",
        btnBench: "स्पीड बेंचमार्क",
        btnFaces: "पहचान (कौन पास है)"
      },
      phonetic: {
        langSelected: "Hindi bhaashaa, chuni gayi.",
        navActive: "Navigation shuru ho gaya. Aaspaas ka scan jaari hai.",
        navPaused: "Navigation, rok diya gaya hai.",
        obstacleNear: "Saavdhaan! Theek saamne, baadhaa hai.",
        openCorridor: "Do baje ki dishaa mein, raastaa khulaa hai.",
        medScanning: "Dawaai scan ho rahi hai. Kripya, sthir rakhein.",
        medExpiry: "Samaapti tithi",
        medTakeAfter: "Bhojan ke baad lein.",
        medNotFound: "Dawai ka naam nahi mila. Kripya ghumaayein.",
        contactApproaching: "paas aa rahe hain.",
        contactScanning: "Scan jaari: Koi parichit vyakti nahi mila.",
        benchmarkStart: "Live benchmark shuru hua. Speed naapi jaa rahi hai.",
        benchmarkResult: "Benchmark poora hua. Device par {ms} milliseconds lage.",
        tierStandard: "Standard tier active. Flagship NPU chalu hai.",
        tierLite: "Lite tier active. Budget hardware ready.",
        airplaneActive: "Airplane mode chalu hai. Bina internet ke safe.",
        airplaneOff: "Airplane mode band kiya gaya.",
        cachedReplay: "Cached benchmark data load kiya gaya.",
        ready: "Taiyaar hai.",
        btnScene: "Spatial Guidance",
        btnMed: "Medicine Scan",
        btnBench: "Speed Test",
        btnFaces: "Face Scan"
      }
    },
    ta: { // Tamil
      native: {
        langSelected: "தமிழ் மொழி தேர்ந்தெடுக்கப்பட்டது.",
        navActive: "வழிகாட்டுதல் செயல்படுகிறது. சுற்றியுள்ளவற்றை ஸ்கேன் செய்கிறது.",
        navPaused: "வழிகாட்டுதல் இடைநிறுத்தப்பட்டது.",
        obstacleNear: "எச்சரிக்கை: நேராக முன்னால் தடை உள்ளது.",
        openCorridor: "2 மணி திசையில் வழி திறந்துள்ளது.",
        medScanning: "மருந்து ஸ்கேன் செய்யப்படுகிறது. நிலையாகப் பிடிக்கவும்.",
        medExpiry: "காலாவதி தேதி",
        medTakeAfter: "உணவுக்குப் பின் உட்கொள்ளவும்.",
        medNotFound: "மருந்து விவரம் தெரியவில்லை. தயவுசெய்து திருப்பவும்.",
        contactApproaching: "அருகில் வருகிறார்.",
        contactScanning: "ஸ்கேன் செய்கிறது: தெரிந்த நபர்கள் யாரும் இல்லை.",
        benchmarkStart: "நேரலை வேக சோதனை தொடங்குகிறது.",
        benchmarkResult: "சோதனை முடிந்தது. சாதனத்தில் {ms} மில்லி விநாடிகள்.",
        tierStandard: "ஸ்டாண்டர்ட் முறை மாற்றப்பட்டது. உயர் செயல்திறன் தயார்.",
        tierLite: "லைட் முறை மாற்றப்பட்டது. எளிய போன்களுக்கு ஏற்றது.",
        airplaneActive: "விமான முறை இயக்கப்பட்டது. இணையம் இல்லாமல் பாதுகாப்பானது.",
        airplaneOff: "விமான முறை முடக்கப்பட்டது.",
        cachedReplay: "சேமிக்கப்பட்ட சோதனை தகவல் ஏற்றப்பட்டது.",
        ready: "தயாராக உள்ளது.",
        btnScene: "திசை வழிகாட்டுதல்",
        btnMed: "மருந்து ஸ்கேன்",
        btnBench: "வேக சோதனை",
        btnFaces: "யார் அருகில் உள்ளனர்"
      },
      phonetic: {
        langSelected: "Tamizh mozhi, therndhedukka pattadhu.",
        navActive: "Vazhikaattudhal thodangiyadhu. Sutri ullavatrai, scan seigiradhu.",
        navPaused: "Vazhikaattudhal, niruthappattadhu.",
        obstacleNear: "Eccharikkai! Neeraaga munnadi, thadai irukku.",
        openCorridor: "Rendu mani thisaiyil, vazhi thirandhirukku.",
        medScanning: "Marundhu scan seiyappadugiradhu. Nilaiyaaga, pidikkavum.",
        medExpiry: "Kaalaavathi thedhi",
        medTakeAfter: "Unavukku pin, saappidavum.",
        medNotFound: "Marundhu vivaram theriya villai. Thiruppavum.",
        contactApproaching: "arugil varugiraar.",
        contactScanning: "Scan nadakkiradhu: Therindha nabargal illai.",
        benchmarkStart: "Live benchmark thodangiyadhu.",
        benchmarkResult: "Benchmark mudindhadhu. Devicil {ms} milliseconds.",
        tierStandard: "Standard tier maatrapattadhu. Flagship NPU ready.",
        tierLite: "Lite tier maatrapattadhu. Budget mode ready.",
        airplaneActive: "Airplane mode on. Inaiyam thevaillai.",
        airplaneOff: "Airplane mode off.",
        cachedReplay: "Saved benchmark load aagiyaadhu.",
        ready: "Thayaaraaga ulladhu.",
        btnScene: "Spatial Guidance",
        btnMed: "Medicine Scan",
        btnBench: "Speed Test",
        btnFaces: "Face Scan"
      }
    },
    kn: { // Kannada
      native: {
        langSelected: "ಕನ್ನಡ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ.",
        navActive: "ನ್ಯಾವಿಗೇಷನ್ ಸಕ್ರಿಯವಾಗಿದೆ. ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಲಾಗುತ್ತಿದೆ.",
        navPaused: "ನ್ಯಾವಿಗೇಷನ್ ವಿರಾಮಗೊಳಿಸಲಾಗಿದೆ.",
        obstacleNear: "ಎಚ್ಚರಿಕೆ: ಮುಂದೆ ಅಡಚಣೆ ಇದೆ.",
        openCorridor: "2 ಗಂಟೆಯ ದಿಕ್ಕಿನಲ್ಲಿ ದಾರಿ ತೆರೆದಿದೆ.",
        medScanning: "ಔಷಧಿಯನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಲಾಗುತ್ತಿದೆ.",
        medExpiry: "ಮುಕ್ತಾಯ ದಿನಾಂಕ",
        medTakeAfter: "ಊಟದ ನಂತರ ತೆಗೆದುಕೊಳ್ಳಿ.",
        medNotFound: "ಔಷಧ ವಿವರ ಕಂಡುಬಂದಿಲ್ಲ. ಪ್ಯಾಕೆಟ್ ತಿರುಗಿಸಿ.",
        contactApproaching: "ಬರುತ್ತಿದ್ದಾರೆ.",
        contactScanning: "ಸ್ಕ್ಯಾನ್ ಆಗುತ್ತಿದೆ: ಪರಿಚಿತರು ಯಾರೂ ಇಲ್ಲ.",
        benchmarkStart: "ಲೈವ್ ಸ್ಪೀಡ್ ಪರೀಕ್ಷೆ ಪ್ರಾರಂಭವಾಗಿದೆ.",
        benchmarkResult: "ಬೆಂಚ್‌ಮಾರ್ಕ್ ಪೂರ್ಣಗೊಂಡಿದೆ. ಡಿವೈಸ್‌ನಲ್ಲಿ {ms} ಮಿಲಿಸೆಕೆಂಡುಗಳು.",
        tierStandard: "ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಟೈರ್ ಆಯ್ಕೆಯಾಗಿದೆ. ಪ್ರಬಲ ಎನ್‌ಪಿಯು ಸಕ್ರಿಯ.",
        tierLite: "ಲೈಟ್ ಟೈರ್ ಆಯ್ಕೆಯಾಗಿದೆ. ಬಜೆಟ್ ಫೋನ್‌ಗಳಿಗೆ ಸಿದ್ಧ.",
        airplaneActive: "ಏರ್‌ಪ್ಲೇನ್ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ. ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿದೆ.",
        airplaneOff: "ಏರ್‌ಪ್ಲೇನ್ ಮೋಡ್ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ.",
        cachedReplay: "ಉಳಿಸಿದ ಬೆಂಚ್‌ಮಾರ್ಕ್ ಲೋಡ್ ಮಾಡಲಾಗಿದೆ.",
        ready: "ಸಿದ್ಧವಾಗಿದೆ.",
        btnScene: "ಮಾರ್ಗದರ್ಶನ",
        btnMed: "ಔಷಧಿ ಸ್ಕ್ಯಾನ್",
        btnBench: "ವೇಗ ಪರೀಕ್ಷೆ",
        btnFaces: "ಯಾರು ಹತ್ತಿರವಿದ್ದಾರೆ"
      },
      phonetic: {
        langSelected: "Kannada bhaashe, aayke maadalaagide.",
        navActive: "Navigation sakriyavaagide. Suttamuttalina jaaga, scan maadalaaguttide.",
        navPaused: "Navigation, viraamagolisalaagide.",
        obstacleNear: "Eccharike! Munde, adachane ide.",
        openCorridor: "Eradu gante dikkinalli, daari theredide.",
        medScanning: "Aushadhiyannu scan maadalaaguthide. Sthiravaagi hidiyiri.",
        medExpiry: "Mukthaaya dinaanka",
        medTakeAfter: "Ootada nanthara, thegedukolli.",
        medNotFound: "Aushadhi vivara kandubandilla. Packet thirugisi.",
        contactApproaching: "hatthira barutthiddaare.",
        contactScanning: "Scan aaguttide: Parichitharu yaaroo illa.",
        benchmarkStart: "Live benchmark shuru aagide.",
        benchmarkResult: "Benchmark poornagondide. Devicenalli {ms} milliseconds.",
        tierStandard: "Standard tier, sakriya. Flagship NPU ready.",
        tierLite: "Lite tier, sakriya. Budget mode ready.",
        airplaneActive: "Airplane mode on aagide. Offline surakshitha.",
        airplaneOff: "Airplane mode off aagide.",
        cachedReplay: "Saved benchmark load maadalaagide.",
        ready: "Siddhavaagide.",
        btnScene: "Spatial Guidance",
        btnMed: "Medicine Scan",
        btnBench: "Speed Test",
        btnFaces: "Face Scan"
      }
    },
    mr: { // Marathi
      native: {
        langSelected: "मराठी भाषा निवडली गेली.",
        navActive: "नेव्हिगेशन सुरू झाले. परिसराचे स्कॅनिंग सुरू आहे.",
        navPaused: "नेव्हिगेशन थांबवले आहे.",
        obstacleNear: "सावधान: समोर अडथळा आहे.",
        openCorridor: "२ वाजताच्या दिशेने रस्ता मोकळा आहे.",
        medScanning: "औषध स्कॅन केले जात आहे.",
        medExpiry: "कालबाह्यता तारीख",
        medTakeAfter: "जेवणानंतर घ्यावे.",
        medNotFound: "औषधाचे नाव समजले नाही. कृपया फिरवून धरा.",
        contactApproaching: "जवळ येत आहेत.",
        contactScanning: "स्कॅनिंग सुरू: कोणतीही परिचित व्यक्ती दिसली नाही.",
        benchmarkStart: "थेट गती चाचणी सुरू आहे.",
        benchmarkResult: "बेंचमार्क पूर्ण. डिव्हाइसवर {ms} मिलीसेकंद लागले.",
        tierStandard: "स्टँडर्ड टियर निवडले. फ्लॅगशिप एनपीयू सक्रिय.",
        tierLite: "लाइट टियर निवडले. बजेट उपकरणांसाठी सज्ज.",
        airplaneActive: "एअरप्लेन मोड सुरू आहे. इंटरनेट शिवाय सुरक्षित.",
        airplaneOff: "एअरप्लेन मोड बंद केला.",
        cachedReplay: "कॅश केलेला बेंचमार्क लोड केला.",
        ready: "तयार आहे.",
        btnScene: "दिशा मार्गदर्शन",
        btnMed: "औषध स्कॅनर",
        btnBench: "स्पीड बेंचमार्क",
        btnFaces: "जवळ कोण आहे"
      },
      phonetic: {
        langSelected: "Marathi bhaashaa, nivallee gelee.",
        navActive: "Navigation suru jhaale. Parisaraache scanning, suru aahe.",
        navPaused: "Navigation, thaambavle aahe.",
        obstacleNear: "Saavadhaan! Samor, adathlaa aahe.",
        openCorridor: "Don vaajtaa, rastaa moklaa aahe.",
        medScanning: "Aushadh scan kela jaat aahe. Sthir theva.",
        medExpiry: "Kaal-baahyataa taareekh",
        medTakeAfter: "Jevnaananthar, ghyaa.",
        medNotFound: "Aushadhaache naav samajle naahi. Phirva.",
        contactApproaching: "Javal yet aahet.",
        contactScanning: "Scanning suru: Olakhichi vyakti naahi.",
        benchmarkStart: "Live speed test suru aahe.",
        benchmarkResult: "Benchmark poorna. Device var {ms} milliseconds lagle.",
        tierStandard: "Standard tier nivalle. Flagship NPU active.",
        tierLite: "Lite tier nivalle. Budget mode ready.",
        airplaneActive: "Airplane mode suru jhaala. Internet shivaay safe.",
        airplaneOff: "Airplane mode band kela.",
        cachedReplay: "Cached benchmark load kela.",
        ready: "Taiyaar aahe.",
        btnScene: "Spatial Guidance",
        btnMed: "Medicine Scan",
        btnBench: "Speed Test",
        btnFaces: "Face Scan"
      }
    },
    bn: { // Bengali
      native: {
        langSelected: "বাংলা ভাষা নির্বাচিত হয়েছে।",
        navActive: "ন্যাভিগেশন সক্রিয়। চারপাশ স্ক্যান করা হচ্ছে।",
        navPaused: "ন্যাভিগেশন বিরতি দেওয়া হয়েছে।",
        obstacleNear: "সতর্কতা: সরাসরি সামনে বাধা রয়েছে।",
        openCorridor: "২ টার দিকে পথ পরিষ্কার।",
        medScanning: "ওষুধ স্ক্যান করা হচ্ছে।",
        medExpiry: "মেয়াদ শেষ হওয়ার তারিখ",
        medTakeAfter: "খাবারের পরে গ্রহণ করুন।",
        medNotFound: "ওষুধের নাম বোঝা যায়নি। ঘুরিয়ে ধরুন।",
        contactApproaching: "কাছে আসছেন।",
        contactScanning: "স্ক্যান চলছে: পরিচিত কেউ দৃশ্যমান নয়।",
        benchmarkStart: "লাইভ স্পিড টেস্ট শুরু হয়েছে।",
        benchmarkResult: "বেঞ্চমার্ক সম্পন্ন। ডিভাইসে {ms} মিলিসেকেন্ড লেগেছে।",
        tierStandard: "স্ট্যান্ডার্ড টিয়ার সক্রিয়। ফ্ল্যাগশিপ এনপিইউ প্রস্তুত।",
        tierLite: "লাইট টিয়ার সক্রিয়। সাধারণ ফোনের উপযোগী।",
        airplaneActive: "বিমান মোড সক্রিয়। সম্পূর্ণ অফলাইনে সুরক্ষিত।",
        airplaneOff: "বিমান মোড বন্ধ করা হয়েছে।",
        cachedReplay: "সংরক্ষিত বেঞ্চমার্ক লোড হয়েছে।",
        ready: "প্রস্তুত।",
        btnScene: "দিক নির্দেশনা",
        btnMed: "ওষুধ স্ক্যান",
        btnBench: "গতি পরীক্ষা",
        btnFaces: "কাছে কে আছেন"
      },
      phonetic: {
        langSelected: "Bangla bhaashaa, nirbaachito hoyechhe.",
        navActive: "Navigation shuru hoyechhe. Chaarpash scan kora hochhe.",
        navPaused: "Navigation, thamaano hoyechhe.",
        obstacleNear: "Shotorko! Shamne, baadha aachhe.",
        openCorridor: "Duto baje, rastaa porishkaar aachhe.",
        medScanning: "Oushodh scan kora hochhe. Sthir bhabe dhorun.",
        medExpiry: "Meyaad shesh din",
        medTakeAfter: "Khabarer por, grahan korun.",
        medNotFound: "Oushodher naam bojha jaayni. Ghuriye dhorun.",
        contactApproaching: "Kachhe ashchhen.",
        contactScanning: "Scan cholchhe: Porichito keu nei.",
        benchmarkStart: "Live speed test shuru holo.",
        benchmarkResult: "Benchmark shomponno. Device e {ms} milliseconds laglo.",
        tierStandard: "Standard tier sokriyo. Flagship NPU ready.",
        tierLite: "Lite tier sokriyo. Budget mode ready.",
        airplaneActive: "Airplane mode on. Offline e cholchhe.",
        airplaneOff: "Airplane mode bondho kora holo.",
        cachedReplay: "Saved benchmark load hoyechhe.",
        ready: "Prostut.",
        btnScene: "Spatial Guidance",
        btnMed: "Medicine Scan",
        btnBench: "Speed Test",
        btnFaces: "Face Scan"
      }
    }
  },

  // Spatial Navigation Settings
  SPATIAL: {
    DISTANCE_ZONES: {
      NEAR: 1.0,   // < 1 meter / 3 feet (Immediate hazard)
      MID: 2.0,    // 1-2 meters / 3-6 feet
      FAR: 3.5,    // > 2 meters
    },
    CLOCK_SECTORS: [
      { name: "12 o'clock", minAngle: -15, maxAngle: 15, direction: "directly ahead" },
      { name: "1 o'clock",  minAngle: 15,  maxAngle: 45, direction: "slight right" },
      { name: "2 o'clock",  minAngle: 45,  maxAngle: 75, direction: "ahead to your right" },
      { name: "3 o'clock",  minAngle: 75,  maxAngle: 105, direction: "to your right" },
      { name: "9 o'clock",  minAngle: -105, maxAngle: -75, direction: "to your left" },
      { name: "10 o'clock", minAngle: -75, maxAngle: -45, direction: "ahead to your left" },
      { name: "11 o'clock", minAngle: -45, maxAngle: -15, direction: "slight left" },
    ]
  },

  // Haptic Feedback Patterns (milliseconds)
  HAPTICS: {
    TAP_ACK: [60],
    MODE_CHANGE: [80, 50, 80],
    OBSTACLE_NEAR: [180, 80, 180, 80, 250],
    OBSTACLE_MID: [120, 100, 120],
    TRUSTED_CONTACT: [200, 60, 200], // Distinctive double heartbeat pulse
    MEDICINE_SCANNED: [100, 50, 150],
    AIRPLANE_MODE_TOGGLED: [150, 100, 150, 100, 150]
  },

  // Live Cloud Benchmark Configuration (Unsimulated)
  BENCHMARK: {
    // Endpoints for unsimulated real network requests
    // Can be configured to Gemini Vision API, Google Cloud Vision, or direct REST endpoint
    ENDPOINT_URL: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
    FALLBACK_ENDPOINT_URL: "https://httpbin.org/post", // Verifiable live payload roundtrip if API key not supplied
    MAX_TIMEOUT_MS: 10000,
    STORAGE_KEY_CACHED_RUN: "drishti_cached_benchmark_run"
  },

  // Security & Storage
  SECURITY: {
    ENCRYPTION_ALGO: "AES-GCM",
    KEY_LENGTH: 256,
    TRUSTED_CONTACTS_KEY: "drishti_trusted_contacts_encrypted",
    SALT_KEY: "drishti_crypto_salt"
  }
};
