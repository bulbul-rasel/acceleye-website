// Every picture slot on the site. Edit the briefs freely.
// kind "photo": needs a real photograph (people appear here). Until a file exists a labeled placeholder shows.
// kind "illustration": a generated illustration is used (no people shown). You can still override it with a photo.
// See public/images/README.md and the guide page at /image-slots.

export type SlotKind = "photo" | "illustration";
export type Slot = { kind: SlotKind; alt: string; brief: string; usedOn: string[]; size: string };

export const slots = {
  understandSafety: { kind: "photo", alt: "AI that understands school safety", brief: "Wide photo of a school hallway or campus with students walking, safety and calm.", usedOn: ["Home: Why AI"], size: "1600x1000 px, JPG or WebP" },
  aiUnderstandsSafety: { kind: "photo", alt: "AI that understands safety", brief: "Security camera view or screenshot of a school corridor showing an AI detection box.", usedOn: ["Home: Why AI"], size: "1600x1000 px, JPG or WebP" },
  aiReducesCost: { kind: "illustration", alt: "AI that reduces cost", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Home: Why AI"], size: "1600x1000 px, JPG or WebP" },
  collaboration: { kind: "photo", alt: "AI and human monitoring team collaboration", brief: "Two or three people (security staff and educators) reviewing a screen together. Collaboration between AI and humans.", usedOn: ["AI Weapon Detector: Core technology", "Home: Why AI"], size: "1600x1000 px, JPG or WebP" },
  roleSecurity: { kind: "photo", alt: "Security directors and chiefs", brief: "Security director in a school or campus control room, looking at the camera, monitors with camera feeds behind them. Natural, confident, professional.", usedOn: ["Home: Who benefits"], size: "1600x1000 px, JPG or WebP" },
  roleAdmin: { kind: "photo", alt: "School administrators", brief: "School administrator (principal or superintendent) with a tablet in a school hallway or office. Natural light.", usedOn: ["Home: Who benefits"], size: "1600x1000 px, JPG or WebP" },
  roleTeacher: { kind: "photo", alt: "Teachers", brief: "Teacher in a classroom with students softly blurred behind them. Warm and approachable.", usedOn: ["Home: Who benefits"], size: "1600x1000 px, JPG or WebP" },
  roleParent: { kind: "photo", alt: "Parents", brief: "Parent checking a phone or walking a child to school. Candid, warm.", usedOn: ["Home: Who benefits"], size: "1600x1000 px, JPG or WebP" },
  roleSafety: { kind: "photo", alt: "AI and human collaboration for safety", brief: "Safety or security team member in uniform at an entrance or on patrol.", usedOn: ["AI Weapon Detector: Core technology"], size: "1600x1000 px, JPG or WebP" },
  skyward: { kind: "illustration", alt: "AccelEye and Skyward partnership", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["(not used yet)"], size: "1600x1000 px, JPG or WebP" },
  library: { kind: "photo", alt: "Gun detected in a school library", brief: "School library with students; reference for the 'gun detected in a school library in 90 ms' case. Use a staged or permitted image.", usedOn: ["(not used yet)"], size: "1600x1000 px, JPG or WebP" },
  metalGate: { kind: "photo", alt: "Metal detector gate versus AI detection", brief: "Students lining up at a walk-through metal detector at a school entrance. Used beside AI detection.", usedOn: ["(not used yet)"], size: "1600x1000 px, JPG or WebP" },
  aiCamera: { kind: "illustration", alt: "AI security camera", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["(not used yet)"], size: "1600x1000 px, JPG or WebP" },
  weapon: { kind: "photo", alt: "Visual weapon detection", brief: "Real or staged detection screenshot: a person on camera with an AI detection box (use a safe, staged scene).", usedOn: ["AI Weapon Detector: Core technology", "Unified AI Safety", "src/content/faq.ts"], size: "1600x1000 px, JPG or WebP" },
  gunshot: { kind: "illustration", alt: "Gunshot detection", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["AI Weapon Detector: Core technology"], size: "1600x1000 px, JPG or WebP" },
  violence: { kind: "photo", alt: "Violence detection", brief: "Camera view of a crowded hallway or playground where a fight or aggressive behavior is flagged. Staged or permitted image.", usedOn: ["AI Weapon Detector: Core technology", "src/content/faq.ts"], size: "1600x1000 px, JPG or WebP" },
  intruder: { kind: "photo", alt: "Intruder detection", brief: "Camera view of an entrance or door where an unauthorized person is flagged.", usedOn: ["AI Weapon Detector: Core technology"], size: "1600x1000 px, JPG or WebP" },
  gunBanner: { kind: "photo", alt: "AccelEye detecting a gun on camera", brief: "Wide banner: security operations center or detection screenshot, cinematic, dark.", usedOn: ["AI Box"], size: "1600x1000 px, JPG or WebP" },
  infraDetect: { kind: "photo", alt: "Multi-weapon detection example", brief: "Infrared or low-light camera frame with an AI detection box.", usedOn: ["AI Weapon Detector: Accuracy"], size: "1600x1000 px, JPG or WebP" },
  infraredFrame: { kind: "photo", alt: "Infrared low-light detection frame", brief: "Infrared night-vision frame of a person outdoors with a detection box.", usedOn: ["AI Weapon Detector: Accuracy"], size: "1600x1000 px, JPG or WebP" },
  liveTest: { kind: "photo", alt: "Live test detection", brief: "Photo of a live detection test with staff observing a monitor.", usedOn: ["AI Weapon Detector: Accuracy"], size: "1600x1000 px, JPG or WebP" },
  cctv: { kind: "illustration", alt: "CCTV camera", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["AI Weapon Detector", "AI Weapon Detector: Integrations", "Unified AI Safety"], size: "1600x1000 px, JPG or WebP" },
  drone: { kind: "illustration", alt: "UAV drone camera", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["AI Weapon Detector: Integrations"], size: "1600x1000 px, JPG or WebP" },
  bodycam: { kind: "photo", alt: "Body-worn camera", brief: "Security officer or police officer wearing a body-worn camera, shoulder-up, camera visible on the chest.", usedOn: ["AI Weapon Detector: Integrations"], size: "1600x1000 px, JPG or WebP" },
  saveAlertApp: { kind: "illustration", alt: "SaveAlert app", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["(not used yet)"], size: "1600x1000 px, JPG or WebP" },
  saveAlertBanner: { kind: "illustration", alt: "How SaveAlert works", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["AI Weapon Detector: SaveAlert", "SaveAlert App"], size: "1600x1000 px, JPG or WebP" },
  aiBoxStarter: { kind: "illustration", alt: "AI Box Starter", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["AI Box", "AI Weapon Detector: AI Box"], size: "1600x1000 px, JPG or WebP" },
  aiBoxPro: { kind: "illustration", alt: "AI Box Pro rack server", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["AI Box", "AI Weapon Detector: AI Box"], size: "1600x1000 px, JPG or WebP" },
  aiAnalysis: { kind: "illustration", alt: "AI analysis", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Unified AI Safety"], size: "1600x1000 px, JPG or WebP" },
  weaponSquare: { kind: "photo", alt: "Weapon detection", brief: "Square crop of a detection screenshot with the AI bounding box.", usedOn: ["(not used yet)"], size: "1600x1000 px, JPG or WebP" },
  digitalSafety: { kind: "illustration", alt: "Digital safety and wellness", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Unified AI Safety"], size: "1600x1000 px, JPG or WebP" },
  collaborationSquare: { kind: "photo", alt: "24/7 live monitoring and verification", brief: "Square crop of staff collaborating around a screen or table.", usedOn: ["Unified AI Safety"], size: "1600x1000 px, JPG or WebP" },
  aiEnhance: { kind: "illustration", alt: "AI-enhanced BTAM", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Unified AI Safety"], size: "1600x1000 px, JPG or WebP" },
  accessControl: { kind: "illustration", alt: "Access control", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Unified AI Safety"], size: "1600x1000 px, JPG or WebP" },
  iosDevice: { kind: "illustration", alt: "iOS device", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Unified AI Safety"], size: "1600x1000 px, JPG or WebP" },
  chromebook: { kind: "illustration", alt: "Chromebook", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Unified AI Safety"], size: "1600x1000 px, JPG or WebP" },
  solarField: { kind: "illustration", alt: "SolarEye trailers guarding an open soccer field", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["AI SolarEye Trailer"], size: "1600x1000 px, JPG or WebP" },
  solarTrailer: { kind: "illustration", alt: "SolarEye solar-powered trailer", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["AI SolarEye Trailer"], size: "1600x1000 px, JPG or WebP" },
  mission: { kind: "illustration", alt: "AccelEye mission", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["About"], size: "1600x1000 px, JPG or WebP" },
  aboutCommitments: { kind: "illustration", alt: "AccelEye commitments", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["About"], size: "1600x1000 px, JPG or WebP" },
  coreValues: { kind: "illustration", alt: "AccelEye core values", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["About"], size: "1600x1000 px, JPG or WebP" },
  faithHero: { kind: "illustration", alt: "Faith communities protected by AI threat detection", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Faith"], size: "1600x1000 px, JPG or WebP" },
  faithCare: { kind: "illustration", alt: "Self-harm and bullying prevention", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Faith"], size: "1600x1000 px, JPG or WebP" },
  faithAlert: { kind: "illustration", alt: "Direct Connect emergency alert", brief: "Illustration. Replace with a photo only if you prefer; use the same file name.", usedOn: ["Faith"], size: "1600x1000 px, JPG or WebP" },
} as const satisfies Record<string, Slot>;

export type ImageKey = keyof typeof slots;
