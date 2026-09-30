---
name: CareCost AI Design System
colors:
  surface: '#f7f9ff'
  surface-dim: '#c7dcf4'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e3efff'
  surface-container-high: '#d8eaff'
  surface-container-highest: '#cfe5fd'
  on-surface: '#061d2f'
  on-surface-variant: '#3f4850'
  inverse-surface: '#1d3245'
  inverse-on-surface: '#e8f2ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9ff'
  on-background: '#061d2f'
  surface-variant: '#cfe5fd'
typography:
  display-currency:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-currency-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-lg-medium:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-md-medium:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

### Brand Personality & Philosophy
This design system is engineered for high-stakes healthcare and financial decision-making within the Indian medical ecosystem. Navigating medical procedures, diagnostic costs, insurance coverage, and hospital billing creates profound cognitive load and emotional vulnerability for patients and family caregivers. The brand personality is calm, precise, authoritative, and empathetic. 

The aesthetic is Modern Clean Healthcare SaaS—balancing clinical exactness with accessible warmth. It deliberately avoids sterile hospital minimalism or hyper-technical fintech noise, presenting transparent pricing, AI-guided navigation paths, and verified quality scores with absolute clarity and dignity.

### Target Audience & Core Needs
1. **Patients & Family Caregivers:** Often operating under acute stress, requiring rapid comprehension of out-of-pocket estimates, Ayushman Bharat / TPA insurance coverage, and hospital comparisons across tier-1 to tier-3 cities.
2. **Clinical Navigators & Financial Counselors:** Requiring dense, scannable data layouts, breakdown comparisons, and transparent cost estimates for medical interventions.

### Emotional Response
The interface must immediately project:
- **Financial Sanctuary:** Eradicating uncertainty around hidden charges through stark transparency and legible currency indicators.
- **Clinical Competence:** Clear structure, uncompromising legibility, and calm chromatic grounding that inspire implicit trust.
- **Frictionless Action:** Generous touch targets and direct, purposeful navigation to empower decisions in critical moments.

## Colors

### Color Hierarchy & Semantic Strategy
The palette employs a multi-tiered functional taxonomy configured for quick visual scanning of health expenses, procedural risks, and clinical facilities.

#### Core Brand Tokens
- **Neutral Primary / Deep Navy (`#0F2537`):** The primary anchor for headings, critical figures, and primary UI scaffolding. Provides stark, authoritative contrast without the harshness of pure black.
- **Primary / Medical Blue (`#0284C7`):** Direct interactive affordances, primary buttons, AI generation indicators, and navigational active states.
- **Secondary / Clinical Teal (`#0D9488`):** Navigation pills, secondary verification badges, hospital accreditation tags, and procedure category headers.
- **Tertiary / Soft Mint (`#10B981`):** Positive financial outcomes, high affordability markers, comprehensive insurance coverage indicators, and in-network provider verifications. Paired with background fill `#ECFDF5`.

#### Contextual Financial & Clinical Tiers
Healthcare navigation requires swift risk comprehension. Four semantic tiers govern all cost breakdown screens:
1. **Optimal / Affordable (Mint):** Text `#047857`, Surface `#ECFDF5`, Border `#A7F3D0`. Indicates costs below regional average, 100% cashless TPA pre-approval, and zero out-of-pocket charges.
2. **Cautionary / Moderate Cost (Warm Amber):** Primary `#F59E0B`, Text `#B45309`, Surface `#FFFBEB`, Border `#FDE68A`. Signifies partial insurance coverage, optional co-pays, or borderline room-rent capping.
3. **High Impact / Out-of-Pocket Alert (Soft Rose):** Primary `#EF4444`, Text `#B91C1C`, Surface `#FEF2F2`, Border `#FECACA`. Highlights out-of-pocket gaps, uncovered consumables, ICU surcharges, or emergency out-of-network costs.
4. **Informational Neutral:** Surface Canvas `#F8FAFC`, Surface Elevated `#FFFFFF`, Structural Borders `#E2E8F0`, Muted Copy `#64748B`.

### Accessibility & Contrast Standards
Every typography level paired against surface tokens exceeds WCAG 2.1 AA (minimum 4.5:1 for body copy and 3:1 for large numeric displays). Deep Navy on `#FFFFFF` and `#F8FAFC` maintains a contrast ratio exceeding 14:1. Colored badge text uses darkened 700-weight equivalents against their respective 50-weight pastel containers to prevent visual wash out in bright ambient clinical lighting.

## Typography

### Structural Choices
- **Headlines & Metric Data:** Set in **Plus Jakarta Sans**. Its sculpted geometry and open counters offer modern authority, while supporting precise Indian Rupee (₹) symbol renderings alongside figures.
- **Body & Functional UI:** Set in **Inter**. Inter handles dense tabular breakdowns, clinical jargon, procedure notes, and legal policy disclaimers with optimal x-height and neutral clarity.

### Indian Rupee (₹) Formatting & Numerical Standards
1. **Lakhs & Crores Numbering:** Numbers must adhere to the Indian numbering system formatting (`₹2,45,000` instead of `₹245,000`).
2. **Prominence Rule:** In cost cards and estimate breakdowns, the rupee symbol (`₹`) is rendered at the same weight and vertical baseline alignment as the integer string.
3. **Tabular Figures:** All monetary tables and comparative line-items use tabular numeric alignment (`font-variant-numeric: tabular-nums`) to ensure vertical alignment of decimals and commas across multi-hospital comparisons.

## Layout & Spacing

### Layout Architecture
The platform enforces a fluid-responsive layout model engineered primarily for mobile handheld usage (used extensively inside waiting rooms, billing counters, and pharmacies) while scaling effortlessly to multi-column desktop dashboards.

- **Breakpoints:**
  - **Mobile (`< 640px`):** 4-column layout. Margin `1rem` (16px), Gutter `1rem` (16px). Bottom sheets, full-width cost summary bars, and vertical comparison cards dominate.
  - **Tablet (`640px - 1024px`):** 8-column layout. Margin `2rem` (32px), Gutter `1.5rem` (24px). Split view for cost filter controls and procedural breakdown.
  - **Desktop (`> 1024px`):** 12-column layout. Maximum container constraint of `1280px` centered. Margin `3rem` (48px), Gutter `2rem` (32px). Side-by-side hospital benchmarking, multi-scenario insurance simulators, and persistent patient cost summary rail.

### Spacing Rhythm
Built upon an immutable 4px/8px modular scale:
- `space-xs` (4px): Micro gaps between icons and labels, chip dismiss triggers.
- `space-sm` (8px): Internal padding for compact tags, vertical spacing between stacked tabular line items.
- `space-md` (16px): Standard inner padding for cards, field input padding, row gaps between functional clusters.
- `space-lg` (24px): Card headers, separation between primary patient information sections, modal sheet internal padding.
- `space-xl` (36px): Top-level component module spacing and transition gutters between disparate diagnostic categories.

## Elevation & Depth

### Philosophy
Visual hierarchy uses crisp surface-container separation and soft ambient shadows. Heavy skeuomorphism and excessive blur layers are avoided to maintain maximum legibility on non-flagship mobile screens under bright sunlight or hospital fluorescent light.

### Elevation Tiers
1. **Base Canvas (`Level 0`):** `#F8FAFC`. The foundational backdrop. Never casts a shadow.
2. **Surface Flat / Cards (`Level 1`):** Pure `#FFFFFF` resting on `#F8FAFC`. Defined by a structural border: `1px solid #E2E8F0` and an ultra-subtle ambient tint: `0 1px 3px 0 rgba(15, 37, 55, 0.04)`.
3. **Elevated Cards & Interactive Hover (`Level 2`):** Used for selectable hospital packages, active price comparisons, and expandable insurance clauses. `box-shadow: 0 4px 12px -2px rgba(15, 37, 55, 0.08), 0 2px 4px -2px rgba(15, 37, 55, 0.04)`. Border shifts to `#CBD5E1`.
4. **Overlays & Floating Actions (`Level 3`):** Fixed bottom navigation bars, sticky estimate reconciliation sheets, and AI conversational navigation widgets. `box-shadow: 0 12px 28px -6px rgba(15, 37, 55, 0.12), 0 4px 10px -2px rgba(15, 37, 55, 0.06)`. Border: `1px solid #E2E8F0`.
5. **Critical Alert Modals (`Level 4`):** Emergency co-pay confirmations, out-of-network liability warnings. Scrim: `rgba(15, 37, 55, 0.6)` backdrop blur (4px) with modal container elevated at `box-shadow: 0 24px 48px -12px rgba(15, 37, 55, 0.22)`.

## Shapes

### Geometry & Rounding Scale
This design system sets `roundedness: 2`, establishing an 8px (`0.5rem`) baseline radius. This delivers an approachable, contemporary visual language that feels humane without drifting into playful or childish geometry.

- **Inputs, Buttons, and Select Triggers:** `0.5rem` (8px). Delivers tactile precision and clear boundary definition.
- **Cards, Panels, and Containers (`rounded-lg`):** `1rem` (16px). Smooth framing for financial breakdowns, doctor credentials, and tier comparative tables.
- **Sheets, Prominent Modals, and Action Overlays (`rounded-xl`):** `1.5rem` (24px) for upper corners of bottom sheets on mobile, framing responsive inputs gently against viewports.
- **Pills / Status Chips:** `9999px` (Full roundedness) for cost tier indicators, Ayushman Bharat eligibility badges, cashless insurance status, and AI prompt suggestion bubbles.

## Components

### Buttons & Interactive Affordances
- **Primary Action (Book/Estimate/Call):** Background `#0284C7`, text `#FFFFFF`, radius `8px`. Hover: `#0369A1`. Minimum touch target: `48px` on mobile screens. Active state drops 1px down with subtle inner shadow.
- **Secondary Action (Compare/Save):** Background `#FFFFFF`, border `1.5px solid #0284C7`, text `#0284C7`. Hover: `#F0F9FF`.
- **Tertiary / Clinical Verification:** Background `#0D9488`, text `#FFFFFF`. Used specifically for confirming pre-authorization steps or finalizing doctor selections.
- **Ghost Action:** Transparent background, text `#0F2537`, hover background `#F1F5F9`.

### Chips & Semantic Badges
- **Affordability Chips:** Full pill radius (`9999px`), padding `4px 12px`. Composed of a 6px status dot alongside `label-sm` text.
  - *Affordable/Cashless:* Dot `#10B981`, Background `#ECFDF5`, Border `1px solid #A7F3D0`, Text `#047857`.
  - *Moderate Co-Pay:* Dot `#F59E0B`, Background `#FFFBEB`, Border `1px solid #FDE68A`, Text `#B45309`.
  - *High Cost/Out-of-Pocket:* Dot `#EF4444`, Background `#FEF2F2`, Border `1px solid #FECACA`, Text `#B91C1C`.
- **Filter Chips (Interactive):** Neutral background `#FFFFFF`, border `1px solid #E2E8F0`, text `#0F2537`. When selected: Background `#0284C7`, text `#FFFFFF`, border `#0284C7`.

### Cost Comparison Cards
- Surface `#FFFFFF`, border `1px solid #E2E8F0`, radius `16px`, padding `16px` (mobile) to `24px` (desktop).
- Header houses procedure name, hospital accreditation badge (NABH / JCI), and distance in kilometers.
- The cost metric section utilizes `display-currency-mobile` or `display-currency` with high-contrast `#0F2537`. A subtitle line clearly declares: *"Includes Room Rent, OT, Surgeon Fees | Excludes Consumables"*.
- Footer contains a side-by-side action: Secondary "Breakdown" button and Primary "Lock Estimate" button.

### Form Inputs & Search Fields
- Height: `48px` default. Border: `1.5px solid #CBD5E1`. Background: `#FFFFFF`. Radius: `8px`.
- Placeholder text: `#94A3B8`. Active focus state: Border `#0284C7` with a focus ring of `3px rgba(2, 132, 199, 0.15)`.
- Input fields support leading visual cues (e.g., location pin for Indian city selection, diagnostic search magnifying glass, or pre-fixed `+91` for mobile number validation).

### Specialized Domain Components
1. **AI Care Breakdown Accordion:**
   Collapsible list items displaying bill line items (Surgeon Fees, Anesthesia, Diagnostic Imaging, Room Rent Capping). Each row has an informational `(i)` popover warning about common out-of-pocket leakage.
2. **Cashless TPA Coverage Bar:**
   Segmented progress meter showing the ratio of:
   - Green (`#10B981`): Approved cashless sum.
   - Amber (`#F59E0B`): Co-pay / deductible.
   - Red (`#EF4444`): Consumables / non-medical expenses not payable by insurer.
3. **Sticky Mobile Estimate Bar:**
   Fixed bottom dock (elevation level 3) featuring the net out-of-pocket cost in prominent `headline-md` alongside a full-width primary button: *"Check Cashless Eligibility"*.