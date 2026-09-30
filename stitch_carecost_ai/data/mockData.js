// CareCost AI - Unified Mock Data & State Management Layer
// Connects treatments, facilities, government schemes, and out-of-pocket calculations

(function() {
  const CareCostData = {
    // Access core datasets
    getTreatments: function() {
      return (typeof window !== 'undefined' && window.CareCostTreatments) || treatments || [];
    },

    getFacilities: function() {
      return (typeof window !== 'undefined' && window.CareCostFacilities) || facilities || [];
    },

    getSchemes: function() {
      return (typeof window !== 'undefined' && window.CareCostSchemes) || governmentSchemes || [];
    },

    getInsurance: function() {
      return (typeof window !== 'undefined' && window.CareCostInsurance) || insuranceRules || null;
    },

    getTreatmentById: function(id) {
      const list = this.getTreatments();
      return list.find(t => t.id === id) || list[0];
    },

    getFacilityById: function(id) {
      const list = this.getFacilities();
      return list.find(f => f.id === id) || list[0];
    },

    // Search treatments, specialties, and hospitals
    search: function(query) {
      if (!query || query.trim() === '') return { treatments: this.getTreatments(), facilities: this.getFacilities() };
      const q = query.toLowerCase().trim();

      const matchedTreatments = this.getTreatments().filter(t => 
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.shortName.toLowerCase().includes(q)
      );

      const matchedFacilities = this.getFacilities().filter(f => 
        f.name.toLowerCase().includes(q) ||
        f.area.toLowerCase().includes(q) ||
        f.type.toLowerCase().includes(q) ||
        f.specialties.some(s => s.toLowerCase().includes(q))
      );

      return { treatments: matchedTreatments, facilities: matchedFacilities };
    },

    // Filter facilities based on dynamic criteria
    filterFacilities: function(criteria = {}) {
      let list = this.getFacilities();
      const {
        treatmentId,
        facilityType, // "all", "govt", "trust", "privateTier2", "privateTier1"
        maxDistance,
        pmjayOnly,
        cashlessOnly,
        maxOOP,
        searchQuery
      } = criteria;

      if (treatmentId) {
        list = list.filter(f => f.procedureCosts[treatmentId] !== null && f.procedureCosts[treatmentId] !== undefined);
      }

      if (facilityType && facilityType !== 'all') {
        if (facilityType === 'govt') list = list.filter(f => f.pricingTier === 'govt');
        else if (facilityType === 'trust') list = list.filter(f => f.pricingTier === 'trust');
        else if (facilityType === 'private') list = list.filter(f => f.pricingTier.startsWith('private'));
        else if (facilityType === 'pmjay') list = list.filter(f => f.govtSchemes.includes('PM-JAY') || f.govtSchemes.includes('Aarogyasri'));
      }

      if (pmjayOnly) {
        list = list.filter(f => f.govtSchemes.includes('PM-JAY') || f.govtSchemes.includes('Aarogyasri'));
      }

      if (cashlessOnly) {
        list = list.filter(f => f.cashlessInsurance === true);
      }

      if (maxDistance) {
        list = list.filter(f => f.distanceKm <= maxDistance);
      }

      if (maxOOP && treatmentId) {
        list = list.filter(f => {
          const costObj = f.procedureCosts[treatmentId];
          return costObj && costObj.oopEstimated <= maxOOP;
        });
      }

      if (searchQuery && searchQuery.trim().length > 0) {
        const sq = searchQuery.toLowerCase().trim();
        list = list.filter(f => 
          f.name.toLowerCase().includes(sq) ||
          f.area.toLowerCase().includes(sq) ||
          f.specialties.some(s => s.toLowerCase().includes(sq)) ||
          f.type.toLowerCase().includes(sq)
        );
      }

      return list;
    },

    // Comprehensive Cost Estimator Engine
    calculateEstimate: function(params) {
      const treatmentId = params.treatmentId || 'cataract-surgery';
      const facilityTier = params.facilityTier || 'privateTier2'; // govt, trust, privateTier2, privateTier1
      const patientAge = parseInt(params.patientAge) || 45;
      const hasInsurance = params.hasInsurance !== undefined ? params.hasInsurance : true;
      const hasGovtScheme = params.hasGovtScheme !== undefined ? params.hasGovtScheme : true;
      const schemeId = params.schemeId || 'pmjay';
      const copayPercent = parseInt(params.copayPercent) || (patientAge >= 60 ? 15 : 10);
      const roomType = params.roomType || 'twin'; // 'general', 'twin', 'private', 'deluxe'

      const treatment = this.getTreatmentById(treatmentId);
      const tierCost = treatment.costs[facilityTier] || treatment.costs.privateTier2;

      // Calculate base cost range
      let multiplier = 1.0;
      if (roomType === 'general') multiplier = 0.88;
      if (roomType === 'twin') multiplier = 1.0;
      if (roomType === 'private') multiplier = 1.22;
      if (roomType === 'deluxe') multiplier = 1.45;

      const minCost = Math.round(tierCost.min * multiplier);
      const typicalCost = Math.round(tierCost.typical * multiplier);
      const maxCost = Math.round(tierCost.max * multiplier);

      // Category breakdown for typical cost
      const bp = treatment.breakdownPercents;
      const breakdown = {
        consultation: Math.round(typicalCost * bp.consultation),
        diagnostics: Math.round(typicalCost * bp.diagnostics),
        procedure: Math.round(typicalCost * bp.procedure),
        medication: Math.round(typicalCost * bp.medication),
        facilityCharges: Math.round(typicalCost * bp.facilityCharges),
        followUp: Math.round(typicalCost * bp.followUp)
      };

      // Financial Support calculations
      let schemeSupport = 0;
      let insuranceCoverage = 0;
      let outOfPocketTypical = 0;

      if (facilityTier === 'govt') {
        schemeSupport = typicalCost;
        insuranceCoverage = 0;
        outOfPocketTypical = 0;
      } else if (hasGovtScheme && (schemeId === 'pmjay' || schemeId === 'aarogyasri')) {
        const pkgCoverage = schemeId === 'pmjay' ? treatment.pmjayPackage.coverageAmount : treatment.aarogyasriPackage.coverageAmount;
        schemeSupport = Math.min(pkgCoverage, typicalCost * 0.75);
        if (hasInsurance) {
          const remainder = Math.max(0, typicalCost - schemeSupport);
          insuranceCoverage = Math.round(remainder * 0.80);
          outOfPocketTypical = Math.max(0, typicalCost - schemeSupport - insuranceCoverage);
        } else {
          outOfPocketTypical = Math.max(0, typicalCost - schemeSupport);
        }
      } else if (hasInsurance) {
        // Non-medical consumables deduction ~8%
        const consumables = Math.round(typicalCost * 0.08);
        const claimable = Math.max(0, typicalCost - consumables);
        const copay = Math.round(claimable * (copayPercent / 100));
        insuranceCoverage = claimable - copay;
        schemeSupport = 0;
        outOfPocketTypical = consumables + copay;
      } else {
        schemeSupport = 0;
        insuranceCoverage = 0;
        outOfPocketTypical = typicalCost;
      }

      const outOfPocketMin = Math.max(0, Math.round(outOfPocketTypical * 0.70));
      const outOfPocketMax = Math.round(outOfPocketTypical * 1.35);

      // AI-assisted prototype insights
      const aiInsights = [];
      aiInsights.push({
        type: 'primary',
        icon: 'analytics',
        title: 'Largest Cost Component',
        text: `The surgical procedure and implant account for ${Math.round(bp.procedure * 100)}% (approx ₹${breakdown.procedure.toLocaleString('en-IN')}) of total estimated charges.`
      });

      if (facilityTier === 'privateTier1') {
        aiInsights.push({
          type: 'savings',
          icon: 'savings',
          title: 'NABH Trust / Tier-2 Opportunity',
          text: `Choosing a high-volume NABH Trust hospital like LVPEI or CARE can lower your baseline package by up to 40% with equivalent clinical safety.`
        });
      }

      if (hasInsurance && roomType === 'deluxe') {
        aiInsights.push({
          type: 'warning',
          icon: 'warning',
          title: 'Room Rent Proportionate Deduction Risk',
          text: `Deluxe rooms frequently exceed standard policy room rent caps (1% of Sum Insured), which can trigger proportionate deductions on doctor and OT fees.`
        });
      } else {
        aiInsights.push({
          type: 'info',
          icon: 'verified',
          title: 'Financial Scheme Leverage',
          text: `Under Ayushman Bharat (PM-JAY) or Telangana Aarogyasri, standard pre-auth packages cover pre-op scans and 15 days of post-op medication at zero out-of-pocket.`
        });
      }

      return {
        treatment,
        facilityTier,
        roomType,
        costRange: {
          min: minCost,
          typical: typicalCost,
          max: maxCost,
          formatted: `₹${minCost.toLocaleString('en-IN')} – ₹${maxCost.toLocaleString('en-IN')}`
        },
        breakdown,
        support: {
          schemeSupport: Math.round(schemeSupport),
          insuranceCoverage: Math.round(insuranceCoverage),
          outOfPocketTypical: Math.round(outOfPocketTypical),
          outOfPocketMin: Math.round(outOfPocketMin),
          outOfPocketMax: Math.round(outOfPocketMax),
          oopFormatted: `₹${outOfPocketMin.toLocaleString('en-IN')} – ₹${outOfPocketMax.toLocaleString('en-IN')}`
        },
        carePath: treatment.carePath,
        aiInsights,
        disclaimer: "Estimated range based on sample clinical data. Prototype for demonstration only. Not guaranteed medical or financial advice."
      };
    },

    // Interactive Eligibility Checker Flow
    checkEligibility: function(answers) {
      const age = parseInt(answers.age) || 35;
      const annualIncome = parseInt(answers.annualIncome) || 200000;
      const state = answers.state || 'Telangana';
      const rationCard = answers.rationCard || 'White Ration Card';
      const employment = answers.employment || 'Private Firm / Self Employed';
      const hasInsurance = answers.hasInsurance !== undefined ? answers.hasInsurance : false;

      const schemes = this.getSchemes();
      const matched = [];
      const partial = [];

      schemes.forEach(scheme => {
        let isEligible = false;
        let reason = "";

        if (scheme.id === 'pmjay') {
          if (age >= 70) {
            isEligible = true;
            reason = "Universal senior citizen coverage (Aged 70+ enrolled regardless of income ceiling).";
          } else if (annualIncome <= 250000 || rationCard.includes('White') || rationCard.includes('BPL') || rationCard.includes('Antyodaya')) {
            isEligible = true;
            reason = "Eligible under NFSA Food Security Card / Low income criterion (₹5 Lakh cover).";
          }
        } else if (scheme.id === 'aarogyasri') {
          if (state === 'Telangana' && (rationCard.includes('White') || rationCard.includes('Food Security') || annualIncome <= 250000)) {
            isEligible = true;
            reason = "Active Telangana White Food Security Card holder (Up to ₹10 Lakh cover).";
          }
        } else if (scheme.id === 'cghs') {
          if (employment.includes('Central Government') || employment.includes('Pensioner')) {
            isEligible = true;
            reason = "Eligible through Central Government employment / pensioner service record.";
          }
        } else if (scheme.id === 'esic') {
          if (employment.includes('Organized') || (annualIncome <= 252000 && !employment.includes('Self Employed'))) {
            isEligible = true;
            reason = "Eligible under formal wage sector threshold (<= ₹21,000/month).";
          }
        } else if (scheme.id === 'janaushadhi') {
          isEligible = true;
          reason = "100% universal access to generic pharmaceuticals at 50-90% discount for all Indian citizens.";
        }

        if (isEligible) {
          matched.push({ scheme, reason, status: 'Eligible' });
        } else {
          partial.push({ scheme, reason: 'Does not currently meet primary qualification criteria.', status: 'Review Needed' });
        }
      });

      return {
        matched,
        partial,
        potentialAnnualSavings: matched.length > 0 ? "₹1,50,000 – ₹5,00,000+" : "₹15,000 – ₹30,000 (via Jan Aushadhi generic medicines)",
        summaryHeadline: matched.length > 0 ? `${matched.length} Government Support Programs Matched` : "Universal Generic Drug Support Available",
        disclaimer: "Prototype result — sample data only. Verify official eligibility at beneficiary.nha.gov.in or relevant scheme portals."
      };
    },

    // Side-by-side facility comparison
    compareFacilities: function(facilityIds, treatmentId = 'cataract-surgery') {
      const treatment = this.getTreatmentById(treatmentId);
      const facilities = facilityIds.map(id => this.getFacilityById(id)).filter(Boolean);

      return facilities.map(f => {
        const costData = f.procedureCosts[treatmentId] || { min: 20000, typical: 30000, max: 40000, oopEstimated: 8000, packageNote: "General estimate" };
        return {
          id: f.id,
          name: f.name,
          shortName: f.shortName,
          type: f.type,
          typeBadge: f.typeBadge,
          distanceKm: f.distanceKm,
          rating: f.rating,
          area: f.area,
          specialties: f.specialties,
          costRange: `₹${costData.min.toLocaleString('en-IN')} – ₹${costData.max.toLocaleString('en-IN')}`,
          typicalCost: costData.typical,
          oopEstimated: costData.oopEstimated,
          cashlessInsurance: f.cashlessInsurance,
          govtSchemes: f.govtSchemes,
          features: f.features,
          packageNote: costData.packageNote
        };
      });
    },

    // LocalStorage Bookmark & History Management
    saveItem: function(type, item) {
      if (typeof window === 'undefined' || !window.localStorage) return;
      const key = 'carecost_saved_' + type;
      try {
        let saved = JSON.parse(localStorage.getItem(key) || '[]');
        // Check if item already exists by id
        const idx = saved.findIndex(x => (x.id && x.id === item.id) || (x.title && x.title === item.title));
        if (idx >= 0) {
          saved[idx] = item;
        } else {
          item.savedAt = new Date().toISOString();
          saved.unshift(item);
        }
        localStorage.setItem(key, JSON.stringify(saved));
        return true;
      } catch (e) {
        console.error("Storage error:", e);
        return false;
      }
    },

    getSavedItems: function(type) {
      if (typeof window === 'undefined' || !window.localStorage) return [];
      const key = 'carecost_saved_' + type;
      try {
        return JSON.parse(localStorage.getItem(key) || '[]');
      } catch (e) {
        return [];
      }
    },

    removeSavedItem: function(type, id) {
      if (typeof window === 'undefined' || !window.localStorage) return;
      const key = 'carecost_saved_' + type;
      try {
        let saved = JSON.parse(localStorage.getItem(key) || '[]');
        saved = saved.filter(x => x.id !== id);
        localStorage.setItem(key, JSON.stringify(saved));
        return true;
      } catch (e) {
        return false;
      }
    },

    // Alias used by newer pages
    removeItem: function(type, id) {
      return this.removeSavedItem(type, id);
    },

    // Prepopulate realistic mock bookmarks if empty so prototype is immediately impressive
    initDemoStorage: function() {
      if (typeof window === 'undefined' || !window.localStorage) return;
      if (!localStorage.getItem('carecost_demo_initialized')) {
        const sampleFacilities = [
          this.getFacilityById('lvpei-banjara'),
          this.getFacilityById('care-hospitals-banjara')
        ];
        sampleFacilities.forEach(f => this.saveItem('facilities', f));

        const sampleEstimate = {
          id: 'est-cataract-ramesh',
          title: 'Cataract Surgery — Cost Estimate',
          treatmentName: 'Cataract Surgery (Phaco + IOL)',
          treatmentId: 'cataract-surgery',
          patientName: 'Govind Reddy (Father)',
          costRange: '₹32,000 – ₹48,000',
          oop: 7500,
          facilityType: 'NABH Private Hospital',
          coverage: 'PM-JAY + Insurance',
          facility: 'CARE Hospitals, Banjara Hills',
          supportMatched: 'PM-JAY & Star Health Cashless',
          date: 'Sep 30, 2026'
        };
        this.saveItem('estimates', sampleEstimate);

        const sampleComparison = {
          id: 'comp-eye-hyd',
          title: 'Eye Care: LVPEI vs Sarojini Devi vs CARE',
          treatment: 'Cataract Surgery',
          facilityIds: ['lvpei-banjara', 'sarojini-devi-eye', 'care-hospitals-banjara'],
          date: 'Active Session'
        };
        this.saveItem('comparisons', sampleComparison);

        localStorage.setItem('carecost_demo_initialized', 'true');
      }
    }
  };

  // Persistent Global Background for Secondary Pages (Frame 24)
  function initPersistentGlobalBackground() {
    if (typeof document === 'undefined') return;

    // If on landing page (where hero-canvas runs the 24-frame scroll animation), don't inject
    if (document.getElementById('hero-canvas')) return;

    function setupBackground() {
      let bgContainer = document.getElementById('global-healthcare-bg');
      let canvas = document.getElementById('persistent-bg-canvas');

      if (!bgContainer) {
        bgContainer = document.createElement('div');
        bgContainer.id = 'global-healthcare-bg';
        bgContainer.className = 'fixed inset-0 w-full h-full pointer-events-none overflow-hidden';
        bgContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 0; pointer-events: none;';

        canvas = document.createElement('canvas');
        canvas.id = 'persistent-bg-canvas';
        canvas.className = 'w-full h-full block pointer-events-none';
        bgContainer.appendChild(canvas);

        const overlay = document.createElement('div');
        overlay.style.cssText = 'position: absolute; inset: 0; background: rgba(247, 249, 255, 0.40); pointer-events: none;';
        bgContainer.appendChild(overlay);

        document.body.prepend(bgContainer);
      } else if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'persistent-bg-canvas';
        canvas.className = 'w-full h-full block pointer-events-none';
        bgContainer.prepend(canvas);
      }

      // Ensure body and main backgrounds allow the fixed canvas to be visible
      document.body.style.backgroundColor = 'transparent';
      const main = document.querySelector('main');
      if (main) {
        main.style.backgroundColor = 'transparent';
        main.style.position = 'relative';
        main.style.zIndex = '1';
      }

      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      const img = new Image();

      function renderFrame24() {
        if (!img.complete || !img.naturalWidth) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        ctx.fillStyle = '#f7f9ff';
        ctx.fillRect(0, 0, width, height);

        const canvasW = width;
        const canvasH = height;
        const imgW = img.naturalWidth;
        const imgH = img.naturalHeight;

        const ratio = Math.max(canvasW / imgW, canvasH / imgH);
        const drawW = imgW * ratio;
        const drawH = imgH * ratio;
        const drawX = (canvasW - drawW) / 2;
        const drawY = (canvasH - drawH) / 2;

        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      }

      img.onload = () => requestAnimationFrame(renderFrame24);
      img.onerror = () => {
        img.src = '../data/frame-24.jpg';
      };

      img.src = '../carecost_ai_home_dashboard/frames/frame-24.jpg';

      window.addEventListener('resize', () => requestAnimationFrame(renderFrame24), { passive: true });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupBackground);
    } else {
      setupBackground();
    }
  }

  // Export to window
  if (typeof window !== 'undefined') {
    window.CareCostData = CareCostData;
    CareCostData.initDemoStorage();
    initPersistentGlobalBackground();
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CareCostData;
  }
})();

