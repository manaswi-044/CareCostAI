// Comprehensive Indian healthcare treatment benchmarks
const treatments = [
  {
    id: "cataract-surgery",
    name: "Cataract Surgery (Phaco + Foldable IOL)",
    shortName: "Cataract Surgery",
    category: "Ophthalmology",
    description: "Phacoemulsification with Foldable Monofocal / Toric Intraocular Lens implantation under local anesthesia.",
    typicalStay: "Daycare (3-5 hours)",
    recoveryDays: "3 to 7 days",
    icon: "visibility",
    popular: true,
    costs: {
      govt: { min: 0, typical: 1500, max: 3500 },
      trust: { min: 8000, typical: 16000, max: 24000 },
      privateTier2: { min: 22000, typical: 32000, max: 42000 },
      privateTier1: { min: 38000, typical: 52000, max: 75000 }
    },
    breakdownPercents: {
      consultation: 0.05,
      diagnostics: 0.12,
      procedure: 0.52,
      medication: 0.11,
      facilityCharges: 0.14,
      followUp: 0.06
    },
    cghsRate: 14500,
    pmjayPackage: { code: "SU0401", coverageAmount: 20000, label: "PM-JAY Empanelled Daycare" },
    aarogyasriPackage: { code: "OPH-CAT-01", coverageAmount: 18000, label: "Telangana Aarogyasri" },
    carePath: [
      { step: 1, title: "Initial Vision & Slit-lamp Consult", duration: "Day 0", cost: 800, support: "OPD consultation cover", facility: "Eye Clinic / OPD" },
      { step: 2, title: "Biometry & Pre-op A-Scan", duration: "Day 2", cost: 2400, support: "Diagnostic allowance", facility: "Diagnostic Lab" },
      { step: 3, title: "Phacoemulsification & IOL OT", duration: "Day 7", cost: 28000, support: "PM-JAY / Cashless TPA", facility: "NABH Surgical Daycare" },
      { step: 4, title: "Day 1 Post-op Pressure Check", duration: "Day 8", cost: 0, support: "Included in package", facility: "Eye Clinic" },
      { step: 5, title: "Post-op Eye Drops & Recovery", duration: "Weeks 1-3", cost: 1400, support: "Pharmacy discount", facility: "Home Care" },
      { step: 6, title: "Week 4 Final Refraction & Glasses", duration: "Day 28", cost: 1200, support: "Follow-up benefit", facility: "Optical Centre" }
    ]
  },
  {
    id: "knee-replacement",
    name: "Total Knee Replacement (Unilateral)",
    shortName: "Knee Replacement",
    category: "Orthopaedics",
    description: "Minimally invasive total knee arthroplasty with high-flexion titanium/cobalt chrome implant and computer navigation.",
    typicalStay: "3 to 4 days Inpatient",
    recoveryDays: "4 to 6 weeks",
    icon: "orthopedics",
    popular: true,
    costs: {
      govt: { min: 25000, typical: 45000, max: 70000 },
      trust: { min: 95000, typical: 140000, max: 180000 },
      privateTier2: { min: 160000, typical: 210000, max: 260000 },
      privateTier1: { min: 240000, typical: 320000, max: 420000 }
    },
    breakdownPercents: {
      consultation: 0.03,
      diagnostics: 0.10,
      procedure: 0.55,
      medication: 0.08,
      facilityCharges: 0.18,
      followUp: 0.06
    },
    cghsRate: 110000,
    pmjayPackage: { code: "OR0201", coverageAmount: 130000, label: "PM-JAY Joint Replacement Package" },
    aarogyasriPackage: { code: "ORT-TKR-01", coverageAmount: 125000, label: "Aarogyasri Ortho Grid" },
    carePath: [
      { step: 1, title: "Orthopaedic Specialist Evaluation", duration: "Day 0", cost: 1200, support: "Specialist consultation", facility: "Super-Specialty OPD" },
      { step: 2, title: "Weight-bearing X-Rays & Cardiac Clearance", duration: "Day 3", cost: 5800, support: "Pre-op testing coverage", facility: "NABH Radiology" },
      { step: 3, title: "Surgical Arthroplasty + Prosthesis", duration: "Day 7", cost: 195000, support: "Full Cashless TPA / NPPA capped", facility: "Tertiary Inpatient OT" },
      { step: 4, title: "Inpatient Physiotherapy & Mobilization", duration: "Days 8-10", cost: 14000, support: "Inpatient hospital stay", facility: "Ward / Physio Unit" },
      { step: 5, title: "Home Physiotherapy & Walker Assistance", duration: "Weeks 2-6", cost: 12000, support: "Rehab add-on", facility: "Home Rehab" },
      { step: 6, title: "Week 6 Suture Check & ROM Assessment", duration: "Day 42", cost: 1500, support: "Post-op review", facility: "Ortho Clinic" }
    ]
  },
  {
    id: "normal-delivery",
    name: "Normal Vaginal Delivery (Maternity)",
    shortName: "Normal Delivery",
    category: "Obstetrics & Gynecology",
    description: "Spontaneous vaginal delivery with fetal heart monitoring, epidural option, paediatrician newborn check, and post-natal care.",
    typicalStay: "1 to 2 days Inpatient",
    recoveryDays: "1 to 2 weeks",
    icon: "pregnant_woman",
    popular: true,
    costs: {
      govt: { min: 0, typical: 0, max: 2000 },
      trust: { min: 18000, typical: 28000, max: 38000 },
      privateTier2: { min: 42000, typical: 60000, max: 78000 },
      privateTier1: { min: 75000, typical: 105000, max: 145000 }
    },
    breakdownPercents: {
      consultation: 0.08,
      diagnostics: 0.12,
      procedure: 0.40,
      medication: 0.10,
      facilityCharges: 0.22,
      followUp: 0.08
    },
    cghsRate: 22000,
    pmjayPackage: { code: "OB0101", coverageAmount: 9000, label: "Janani Shishu Suraksha Karyakram (JSSK)" },
    aarogyasriPackage: { code: "OBS-NVD-01", coverageAmount: 14000, label: "KCR Kit / Aarogyasri Mother Care" },
    carePath: [
      { step: 1, title: "Third Trimester Obstetric Review", duration: "Week 36", cost: 900, support: "Maternity OPD", facility: "Maternity Clinic" },
      { step: 2, title: "Growth Scan & Doppler Ultrasound", duration: "Week 37", cost: 3200, support: "Ultrasound diagnostic", facility: "Diagnostic Imaging" },
      { step: 3, title: "Labor Suite Admission & Delivery", duration: "Day of Birth", cost: 48000, support: "Cashless Maternity Cover", facility: "NABH Birthing Centre" },
      { step: 4, title: "Newborn APGAR & First Immunization", duration: "Day 1", cost: 4500, support: "Newborn baby cover", facility: "Neonatal Care" },
      { step: 5, title: "Postpartum Lactation Support", duration: "Weeks 1-2", cost: 1800, support: "Maternal counselling", facility: "Home / Clinic" },
      { step: 6, title: "6-Week Maternal Wellness Check", duration: "Day 42", cost: 800, support: "Follow-up", facility: "OB/GYN OPD" }
    ]
  },
  {
    id: "hemodialysis",
    name: "Maintenance Hemodialysis (Per Month, 8-12 Sessions)",
    shortName: "Dialysis",
    category: "Nephrology",
    description: "Regular high-flux bicarbonate hemodialysis sessions including dialyzer, blood tubing, and dialysate consumables.",
    typicalStay: "Daycare (4 hours/session)",
    recoveryDays: "Same day",
    icon: "water_drop",
    popular: true,
    costs: {
      govt: { min: 0, typical: 0, max: 1000 },
      trust: { min: 9000, typical: 14000, max: 18000 },
      privateTier2: { min: 18000, typical: 26000, max: 34000 },
      privateTier1: { min: 32000, typical: 48000, max: 65000 }
    },
    breakdownPercents: {
      consultation: 0.08,
      diagnostics: 0.15,
      procedure: 0.50,
      medication: 0.15,
      facilityCharges: 0.08,
      followUp: 0.04
    },
    cghsRate: 1550,
    pmjayPackage: { code: "NP0101", coverageAmount: 2200, label: "PM National Dialysis Programme" },
    aarogyasriPackage: { code: "NEP-DIA-01", coverageAmount: 1800, label: "Telangana Free Dialysis Network" },
    carePath: [
      { step: 1, title: "Nephrologist Monthly Assessment", duration: "Month Start", cost: 1000, support: "Consultation benefit", facility: "Nephrology OPD" },
      { step: 2, title: "Serum Electrolytes, Urea & Creatinine", duration: "Bi-weekly", cost: 1800, support: "Diagnostic bundle", facility: "Biochemistry Lab" },
      { step: 3, title: "High-Flux Hemodialysis Sessions", duration: "8-12x / month", cost: 24000, support: "100% Free under PM-NDP", facility: "Dialysis Centre" },
      { step: 4, title: "Erythropoietin (EPO) & Iron Injections", duration: "Post-dialysis", cost: 4200, support: "Subsidized generic", facility: "Daycare Pharmacy" },
      { step: 5, title: "AV Fistula Patency & Doppler", duration: "Quarterly", cost: 2200, support: "Vascular review", facility: "Vascular Lab" },
      { step: 6, title: "Nutritional & Fluid Guidance", duration: "Continuous", cost: 500, support: "Dietetic consult", facility: "Dietary Clinic" }
    ]
  },
  {
    id: "mri-knee",
    name: "MRI Knee Joint (1.5T / 3.0T High Resolution)",
    shortName: "MRI Knee",
    category: "Radiology",
    description: "Non-invasive magnetic resonance imaging of knee joint ligaments (ACL/PCL), meniscus, and articular cartilage.",
    typicalStay: "Outpatient (45 minutes)",
    recoveryDays: "Immediate",
    icon: "radiology",
    popular: true,
    costs: {
      govt: { min: 800, typical: 1500, max: 2500 },
      trust: { min: 2800, typical: 4200, max: 5500 },
      privateTier2: { min: 4500, typical: 6500, max: 8500 },
      privateTier1: { min: 7500, typical: 10500, max: 14000 }
    },
    breakdownPercents: {
      consultation: 0.10,
      diagnostics: 0.75,
      procedure: 0.00,
      medication: 0.05,
      facilityCharges: 0.10,
      followUp: 0.00
    },
    cghsRate: 3500,
    pmjayPackage: { code: "DX0301", coverageAmount: 4000, label: "Empanelled Diagnostic Referral" },
    aarogyasriPackage: { code: "RAD-MRI-01", coverageAmount: 3800, label: "Govt Diagnostic Voucher" },
    carePath: [
      { step: 1, title: "Clinical Referral & Ortho Examination", duration: "Day 0", cost: 800, support: "OPD consult", facility: "Ortho Clinic" },
      { step: 2, title: "Pre-scan Metal & Pacemaker Screening", duration: "Day of Scan", cost: 0, support: "Standard safety protocol", facility: "Radiology Center" },
      { step: 3, title: "3.0T MRI Sequence Acquisition", duration: "45 mins", cost: 6500, support: "Cashless Diagnostic / Scheme", facility: "Diagnostic Center" },
      { step: 4, title: "Senior Musculoskeletal Radiologist Report", duration: "Within 24 hrs", cost: 0, support: "Included in scan fee", facility: "Digital Portal" },
      { step: 5, title: "Review with Treating Specialist", duration: "Day 2", cost: 800, support: "Report consult", facility: "Specialist Clinic" }
    ]
  },
  {
    id: "angioplasty",
    name: "Coronary Angioplasty (PTCA with Drug-Eluting Stent)",
    shortName: "Angioplasty",
    category: "Cardiology",
    description: "Percutaneous transluminal coronary angioplasty with radial artery access and US-FDA approved drug-eluting stent (DES).",
    typicalStay: "2 to 3 days Inpatient",
    recoveryDays: "1 to 2 weeks",
    icon: "cardiology",
    popular: false,
    costs: {
      govt: { min: 35000, typical: 60000, max: 90000 },
      trust: { min: 110000, typical: 165000, max: 220000 },
      privateTier2: { min: 175000, typical: 240000, max: 310000 },
      privateTier1: { min: 280000, typical: 380000, max: 520000 }
    },
    breakdownPercents: {
      consultation: 0.04,
      diagnostics: 0.14,
      procedure: 0.52,
      medication: 0.12,
      facilityCharges: 0.14,
      followUp: 0.04
    },
    cghsRate: 98000,
    pmjayPackage: { code: "CA0101", coverageAmount: 115000, label: "PM-JAY Cardiac Stenting" },
    aarogyasriPackage: { code: "CAR-PTCA-01", coverageAmount: 110000, label: "Telangana Aarogyasri Cardiac" },
    carePath: [
      { step: 1, title: "Emergency / Elective Cardiac Triage", duration: "Day 0", cost: 1500, support: "Cardiac emergency triage", facility: "Cardiac Emergency" },
      { step: 2, title: "Coronary Angiography (CAG)", duration: "Day 1", cost: 18000, support: "Diagnostic pre-auth", facility: "Cath Lab" },
      { step: 3, title: "PTCA + Drug Eluting Stent Placement", duration: "Day 1", cost: 185000, support: "NPPA price capped / TPA", facility: "Advanced Cath Lab" },
      { step: 4, title: "24-Hour Cardiac ICU Monitoring", duration: "Day 1-2", cost: 32000, support: "ICU cashless room coverage", facility: "Coronary Care Unit" },
      { step: 5, title: "Dual Antiplatelet Therapy (DAPT)", duration: "Month 1", cost: 3200, support: "Generic Jan Aushadhi", facility: "Hospital Pharmacy" },
      { step: 6, title: "Cardiac Rehab & Treadmill Test", duration: "Day 30", cost: 2500, support: "Follow-up", facility: "Cardiac Rehab" }
    ]
  },
  {
    id: "laparoscopic-cholecystectomy",
    name: "Laparoscopic Gallbladder Removal (Cholecystectomy)",
    shortName: "Gallbladder Surgery",
    category: "General Surgery",
    description: "Keyhole minimally invasive surgical removal of gallbladder with gallstones under general anesthesia.",
    typicalStay: "1 to 2 days Inpatient",
    recoveryDays: "1 week",
    icon: "healing",
    popular: false,
    costs: {
      govt: { min: 5000, typical: 12000, max: 20000 },
      trust: { min: 35000, typical: 55000, max: 75000 },
      privateTier2: { min: 65000, typical: 95000, max: 130000 },
      privateTier1: { min: 110000, typical: 155000, max: 210000 }
    },
    breakdownPercents: {
      consultation: 0.05,
      diagnostics: 0.12,
      procedure: 0.50,
      medication: 0.10,
      facilityCharges: 0.18,
      followUp: 0.05
    },
    cghsRate: 36000,
    pmjayPackage: { code: "GS0101", coverageAmount: 42000, label: "PM-JAY Laparoscopic Package" },
    aarogyasriPackage: { code: "GEN-LAP-01", coverageAmount: 40000, label: "Aarogyasri General Surgery" },
    carePath: [
      { step: 1, title: "General Surgeon Consultation", duration: "Day 0", cost: 800, support: "Surgical OPD", facility: "Surgical OPD" },
      { step: 2, title: "Whole Abdomen USG & LFT Profile", duration: "Day 2", cost: 3400, support: "Lab coverage", facility: "Ultrasound & Path Lab" },
      { step: 3, title: "4-Port Laparoscopic Cholecystectomy", duration: "Day 5", cost: 68000, support: "Cashless Daycare / Inpatient", facility: "NABH Surgical OT" },
      { step: 4, title: "Same-Day Oral Fluids & Ambulation", duration: "Day 5 PM", cost: 0, support: "Post-op nursing care", facility: "Surgical Recovery" },
      { step: 5, title: "Post-op Antibiotics & Diet Adaptation", duration: "Days 6-12", cost: 1600, support: "Prescription benefit", facility: "Home Care" },
      { step: 6, title: "Stitch Removal & Pathology Biopsy", duration: "Day 10", cost: 900, support: "Follow-up", facility: "Surgical Clinic" }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.CareCostTreatments = treatments;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = treatments;
}
