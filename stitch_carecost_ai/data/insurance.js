// Indian Private & Corporate Health Insurance Rules & TPA Benchmarks
const insuranceRules = {
  providers: [
    { id: "star-health", name: "Star Health & Allied Insurance", marketShare: "Retail Leader", cashlessDeskRatio: "98%" },
    { id: "hdfc-ergo", name: "HDFC ERGO General Insurance (Optima Secure)", marketShare: "Private Multi-line", cashlessDeskRatio: "97%" },
    { id: "icici-lombard", name: "ICICI Lombard Health Shield", marketShare: "Private Major", cashlessDeskRatio: "96%" },
    { id: "care-health", name: "Care Health Insurance (Religare)", marketShare: "Specialist", cashlessDeskRatio: "96%" },
    { id: "psu-insurers", name: "PSU Group (New India / National / United / Oriental)", marketShare: "Public Sector", cashlessDeskRatio: "92%" }
  ],

  // IRDAI standard guidelines on non-payable medical consumables
  consumablesEstimates: {
    daycare: { min: 1200, typical: 2500, max: 4000, description: "Gloves, eye drapes, cannula, syringes, disinfectant kit" },
    inpatientShort: { min: 3500, typical: 6500, max: 9500, description: "OT PPE gown, spirometer, thermometer, cotton, administrative charges" },
    inpatientMajor: { min: 8000, typical: 14000, max: 22000, description: "Multi-day nursing consumables, monitoring electrodes, catheters, sanitation surcharges" }
  },

  // Room Rent Capping Rules (Major source of unexpected out-of-pocket bills in India)
  roomRentRules: {
    standardCapPercent: 1.0, // 1% of Sum Insured per day for normal room
    icuCapPercent: 2.0, // 2% of Sum Insured per day for ICU
    proportionateDeductionExplanation: "If a patient chooses a room with higher tariff than their policy cap (e.g. choosing a ₹7,000 deluxe room on a ₹4,000 cap), insurance companies legally reduce surgeon, OT, and nursing fees proportionately by the same fraction, multiplying out-of-pocket costs!"
  },

  // Simulated calculation engine
  calculateOutOfPocket: function(params) {
    const {
      procedureCost = 45000,
      hasInsurance = true,
      sumInsured = 500000,
      hasRoomRentCap = false,
      dailyRoomCap = 5000,
      actualDailyRoomRate = 4500,
      copayPercent = 10,
      hasGovtScheme = false,
      govtSchemeType = "none", // "pmjay", "aarogyasri", "cghs"
      isGovtOrTrustHospital = false,
      consumablesCoverRider = false
    } = params;

    let baseCost = procedureCost;
    let govtContribution = 0;
    let insuranceContribution = 0;
    let patientOOP = 0;
    let proportionatePenalty = 0;
    let copayAmount = 0;
    let consumablesCost = Math.round(baseCost * 0.08); // 8% typically non-payable consumables

    if (consumablesCoverRider) {
      consumablesCost = 0;
    }

    // Scenario 1: Government / State Welfare Scheme Active
    if (hasGovtScheme && (govtSchemeType === "pmjay" || govtSchemeType === "aarogyasri")) {
      if (isGovtOrTrustHospital) {
        // Near 100% cashless under government package
        govtContribution = Math.min(baseCost, baseCost * 0.95);
        patientOOP = Math.max(0, baseCost - govtContribution);
        return {
          totalCost: baseCost,
          govtContribution: Math.round(govtContribution),
          insuranceContribution: 0,
          patientOOP: Math.round(patientOOP),
          copayAmount: 0,
          consumablesCost: Math.round(patientOOP),
          proportionatePenalty: 0,
          notes: "Fully cashless package under Government Scheme at empanelled hospital."
        };
      } else {
        // Empanelled private hospital tier
        govtContribution = Math.min(baseCost * 0.70, 45000);
      }
    }

    // Scenario 2: Private Insurance Active
    if (hasInsurance) {
      let claimableAmount = baseCost - govtContribution;

      // Check room rent proportionate penalty
      if (hasRoomRentCap && actualDailyRoomRate > dailyRoomCap) {
        const allowedRatio = dailyRoomCap / actualDailyRoomRate;
        const subjectToDeduction = claimableAmount * 0.65; // ~65% of bill is tied to room-proportionate charges
        proportionatePenalty = Math.round(subjectToDeduction * (1 - allowedRatio));
        claimableAmount = claimableAmount - proportionatePenalty;
      }

      // Deduct non-payable consumables
      claimableAmount = Math.max(0, claimableAmount - consumablesCost);

      // Apply policy Co-pay
      copayAmount = Math.round(claimableAmount * (copayPercent / 100));
      insuranceContribution = Math.max(0, claimableAmount - copayAmount);

      // Remaining is patient out of pocket
      patientOOP = baseCost - govtContribution - insuranceContribution;
    } else {
      // No insurance
      patientOOP = baseCost - govtContribution;
    }

    return {
      totalCost: Math.round(baseCost),
      govtContribution: Math.round(govtContribution),
      insuranceContribution: Math.round(insuranceContribution),
      patientOOP: Math.round(Math.max(0, patientOOP)),
      copayAmount: Math.round(copayAmount),
      consumablesCost: Math.round(consumablesCost),
      proportionatePenalty: Math.round(proportionatePenalty),
      notes: hasInsurance
        ? `Insurance absorbs ₹${insuranceContribution.toLocaleString('en-IN')}; Out-of-pocket includes consumables & co-pay.`
        : "Direct out-of-pocket without private insurance."
    };
  }
};

if (typeof window !== 'undefined') {
  window.CareCostInsurance = insuranceRules;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = insuranceRules;
}
