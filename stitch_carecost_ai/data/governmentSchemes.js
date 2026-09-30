// Indian Government Healthcare Schemes & Welfare Financial Assistance Dataset
const governmentSchemes = [
  {
    id: "pmjay",
    name: "Ayushman Bharat PM-JAY (Pradhan Mantri Jan Arogya Yojana)",
    shortName: "Ayushman Bharat PM-JAY",
    tagline: "World's largest government-funded health assurance scheme",
    badge: "Central Govt • 100% Cashless",
    sponsor: "Government of India (National Health Authority)",
    coverageLimit: "₹5,00,000 per family / year",
    coverageAmountNum: 500000,
    cashless: true,
    color: "#006194",
    icon: "health_and_safety",
    whoItsFor: "Bottom 40% vulnerable families identified under SECC 2011 data, NFSA ration card holders, and all Indian senior citizens aged 70+ regardless of income.",
    eligibilityOverview: "Automatically eligible if name appears on PM-JAY database or family possesses an eligible NFSA ration card, or any citizen aged 70 and above.",
    incomeCeilingAnnual: 250000,
    benefits: [
      "1,949+ medical & surgical procedures covered cashless",
      "Includes pre-hospitalization (3 days) & post-hospitalization (15 days medicines)",
      "Zero registration fees, zero medicine charges, zero implant surcharges at empanelled centres",
      "Universal coverage for senior citizens aged 70+ without waiting period"
    ],
    procedureSupport: {
      "cataract-surgery": "Full package covered up to ₹20,000 (Daycare + Monofocal IOL)",
      "knee-replacement": "Covered up to ₹1,40,000 per knee at empanelled tertiary centres",
      "normal-delivery": "Covered 100% up to ₹15,000 package",
      "hemodialysis": "Covered 100% (National Dialysis Programme integration)",
      "mri-knee": "Covered when bundled with inpatient/daycare pre-auth",
      "angioplasty": "Covered up to ₹90,000 - ₹1,20,000 per stent package",
      "lap-cholecystectomy": "Covered up to ₹42,000 package"
    },
    howItReducesOOP: "Replaces standard hospital billing with standardized pre-authorized national package rates, bringing patient out-of-pocket costs to ₹0 at participating hospitals.",
    officialPortal: "https://beneficiary.nha.gov.in/",
    helpdesk: "National Helpline: 14555",
    matchingRules: {
      minAge: 0,
      maxIncome: 250000,
      rationCardTypes: ["BPL", "Antyodaya (AAY)", "White Ration Card", "Food Security Card"],
      seniorCitizenExemption: true // 70+ eligible regardless of income
    }
  },
  {
    id: "aarogyasri",
    name: "Telangana Rajiv Aarogyasri Health Scheme",
    shortName: "Aarogyasri (Telangana)",
    tagline: "Comprehensive tertiary health protection for Telangana families",
    badge: "Telangana State • ₹10 Lakh Cover",
    sponsor: "Government of Telangana (Aarogyasri Health Care Trust)",
    coverageLimit: "₹10,00,000 per family / year",
    coverageAmountNum: 1000000,
    cashless: true,
    color: "#006a61",
    icon: "verified_user",
    whoItsFor: "Families residing in Telangana holding a valid Food Security Card (White Ration Card), state government employees, and journalists.",
    eligibilityOverview: "Must possess an active Telangana Food Security Card (FSC) or Aarogyasri Health Card. Annual household income below ₹2,00,000 in rural or ₹2,50,000 in urban areas.",
    incomeCeilingAnnual: 250000,
    benefits: [
      "1,672 identified surgical and medical treatments covered",
      "Free follow-up consultations and prescription medicines for 1 year post-surgery",
      "Transportation allowance provided for patients undergoing major surgeries",
      "Dedicated Aarogya Mithra assistance counters at every empanelled hospital"
    ],
    procedureSupport: {
      "cataract-surgery": "100% free with Foldable IOL (up to ₹18,000 package)",
      "knee-replacement": "Covered 100% at government & empanelled trust centres",
      "normal-delivery": "100% Free + KCR Kit nutritional incentive",
      "hemodialysis": "100% free lifelong dialysis sessions with free EPO injections",
      "mri-knee": "Free if prescribed by empanelled government doctor",
      "angioplasty": "100% cashless treatment with approved DES stent",
      "lap-cholecystectomy": "100% covered package (code GEN-LAP-01)"
    },
    howItReducesOOP: "Completely eliminates hospital bed, surgery, anesthesia, and implant fees at participating private and public hospitals for registered cardholders.",
    officialPortal: "https://aarogyasri.telangana.gov.in/",
    helpdesk: "Toll-Free: 104 / 1800 599 4455",
    matchingRules: {
      states: ["Telangana", "Andhra Pradesh"],
      maxIncome: 250000,
      rationCardTypes: ["White Ration Card", "Food Security Card", "Aarogyasri Card"]
    }
  },
  {
    id: "cghs",
    name: "Central Government Health Scheme (CGHS)",
    shortName: "CGHS",
    tagline: "Comprehensive healthcare for Central Government employees and pensioners",
    badge: "Central Employees & Pensioners",
    sponsor: "Ministry of Health & Family Welfare, Govt. of India",
    coverageLimit: "Full package as per prescribed CGHS tariff rates",
    coverageAmountNum: 750000,
    cashless: true,
    color: "#006947",
    icon: "shield_with_heart",
    whoItsFor: "Current and retired Central Government civil servants, autonomous bodies staff, sitting and ex-MPs, and eligible dependents.",
    eligibilityOverview: "Possession of a plastic CGHS Beneficiary Card linked with primary employee/pensioner service book number.",
    incomeCeilingAnnual: null,
    benefits: [
      "Both OPD (doctor visits, diagnostic scans) and Inpatient treatments covered",
      "Subsidized capped package rates across NABH/NABL private empanelled hospitals",
      "Cashless hospitalization for pensioners; reimbursement/cashless for serving staff",
      "Lifelong wellness centre supply of branded & generic chronic medications"
    ],
    procedureSupport: {
      "cataract-surgery": "CGHS tariff: ₹14,500 + standard IOL allowance",
      "knee-replacement": "CGHS package: ₹1,60,000 to ₹1,90,000",
      "normal-delivery": "CGHS package: ₹30,000 to ₹40,000",
      "hemodialysis": "CGHS fixed rate: ₹1,400 per session",
      "mri-knee": "CGHS approved rate: ₹2,500 (vs ₹8,000 commercial)",
      "angioplasty": "CGHS capped rate: ₹1,45,000 including single DES stent",
      "lap-cholecystectomy": "CGHS rate: ₹36,000 package"
    },
    howItReducesOOP: "Caps all hospital bill line items to strict government schedule rates, preventing private hospital surcharge inflation.",
    officialPortal: "https://cghs.nic.in/",
    helpdesk: "CGHS Helpline: 1800 208 8900",
    matchingRules: {
      employment: ["Central Government", "Pensioner", "Defense Civilian", "Autonomous Central Body"]
    }
  },
  {
    id: "esic",
    name: "Employees' State Insurance (ESIC)",
    shortName: "ESIC Health Protection",
    tagline: "Social security and healthcare for organized sector workers",
    badge: "Formal Workforce & Families",
    sponsor: "Ministry of Labour & Employment, Govt. of India",
    coverageLimit: "100% Medical Care Without Upper Monetary Limit",
    coverageAmountNum: 1000000,
    cashless: true,
    color: "#006f66",
    icon: "domain_verification",
    whoItsFor: "Employees drawing monthly wages up to ₹21,000 (₹25,000 for persons with disabilities) in factories and notified commercial establishments.",
    eligibilityOverview: "Active ESIC Insurance Number (IP Card) with statutory employer/employee monthly contribution made for at least 78 days in the contribution period.",
    incomeCeilingAnnual: 252000,
    benefits: [
      "Full medical care for insured worker and dependent family members from day 1",
      "Cash sickness benefit of 70% of wages during temporary disablement / hospitalization",
      "Maternity benefit of 100% wages for 26 weeks for female beneficiaries",
      "Referral to tie-up super-specialty private hospitals at zero patient expense"
    ],
    procedureSupport: {
      "cataract-surgery": "100% free at ESIC Model Hospitals & tie-up centres",
      "knee-replacement": "Full cashless coverage upon super-specialty tie-up referral",
      "normal-delivery": "100% free + 26 weeks paid maternity leave",
      "hemodialysis": "Free sessions at ESIC tie-up dialysis centres",
      "mri-knee": "100% covered upon in-house radiologist requisition",
      "angioplasty": "100% cashless tie-up authorization",
      "lap-cholecystectomy": "100% free surgical care"
    },
    howItReducesOOP: "Provides zero-deductible healthcare with full wage replacement protection during surgical recovery.",
    officialPortal: "https://www.esic.gov.in/",
    helpdesk: "Toll Free: 1800 11 2526",
    matchingRules: {
      maxIncome: 252000,
      employment: ["Organized Sector Worker", "Factory Worker", "Retail / Private Firm Staff (Wage <= 21k/mo)"]
    }
  },
  {
    id: "janaushadhi",
    name: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)",
    shortName: "Jan Aushadhi Generic Medicines",
    tagline: "High-quality generic medicines at 50% to 90% lower prices",
    badge: "Universal • All Indian Citizens",
    sponsor: "Department of Pharmaceuticals, Govt. of India",
    coverageLimit: "50% to 90% Direct Discount on 2,000+ Formulations",
    coverageAmountNum: 50000,
    cashless: false,
    color: "#005236",
    icon: "medication",
    whoItsFor: "All Indian citizens without any income, age, or documentation criteria. Walk into any of 10,000+ Kendras with a valid doctor prescription.",
    eligibilityOverview: "Open to 100% of Indian residents without restriction.",
    incomeCeilingAnnual: null,
    benefits: [
      "Over 2,047 generic formulations & 300 surgical consumables available",
      "WHO-GMP certified quality tested in NABL accredited labs",
      "Saves ₹5,000 to ₹25,000 per year on chronic therapies (diabetes, hypertension, cardiac)",
      "Available across every major district hospital compound"
    ],
    procedureSupport: {
      "cataract-surgery": "Post-op antibiotic & steroid eye drops (Moxifloxacin, Prednisolone) at ₹35 vs ₹180 branded",
      "knee-replacement": "Post-op blood thinners, analgesics, and calcium supplements at 75% discount",
      "normal-delivery": "Iron, folic acid, calcium, and post-natal antibiotics at ₹40 total kit",
      "hemodialysis": "EPO injections (4000 IU) at ₹380 vs ₹1,400 retail pharmacy",
      "mri-knee": "Not applicable (pharmaceutical only)",
      "angioplasty": "Dual antiplatelet (Aspirin + Clopidogrel) & Atorvastatin 40mg at ₹28/month vs ₹240",
      "lap-cholecystectomy": "Post-op analgesics and antiemetics at ₹65 total course"
    },
    howItReducesOOP: "Dramatically cuts ongoing out-of-pocket pharmacy expenditures which represent up to 60% of outpatient healthcare drain.",
    officialPortal: "https://janaushadhi.gov.in/",
    helpdesk: "Toll-Free: 1800 180 8080",
    matchingRules: {
      minAge: 0,
      universal: true
    }
  }
];

if (typeof window !== 'undefined') {
  window.CareCostSchemes = governmentSchemes;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = governmentSchemes;
}
