// Ad Strategy Console — Blueprint metadata
//
// Draft values. These are David's-review-pending inferences, not confirmed
// creative-strategy decisions. Entries marked verified: true are grounded
// in the actual recorded hook line or post description in videos.js;
// entries marked verified: false are inferred from the title and
// performance stats alone, because no hook line/script text was available
// in the data — they need the heaviest correction pass.
//
// Framework: Eugene Schwartz (Breakthrough Advertising) — Stage of
// Awareness (Unaware / Problem-Aware / Solution-Aware / Product-Aware /
// Most Aware) and Market Sophistication (Stage 1-5).

const BLUEPRINTS = {
  "Bounty16-C1 · VH1-TH1 — Warranty Test": {
    hook: "Skeptic-turned-advocate — tests the brand's own guarantee, braced to get burned",
    awareness: "Most Aware — targets viewers who already know the product but doubt the company stands behind it",
    sophistication: "Stage 4 — proof-of-claim via lived demonstration, not a new mechanism",
    blueprint: "Cold open on low expectation > walks through the warranty claim > reveal: honored, no fight > close on trust reframe",
    verified: true,
  },
  "Bounty16-C1 · VH2-TH2 — Warranty Test": {
    hook: "Price-objection reversal — concedes the cost, then outweighs it with evidence",
    awareness: "Product-Aware — knows the product, weighing it against cheaper alternatives",
    sophistication: "Stage 3 — enlarges the mechanism (value) through proof of worth",
    blueprint: "Open on the objection stated plainly > cut to the warranty-claim event > land on the repeat-purchase verdict",
    verified: true,
  },
  "Bounty16-C1 · VH3-TH3 — Warranty Test": {
    hook: "Relatable mishap into an unexpected brand response — curiosity gap built on household chaos",
    awareness: "Problem-Aware sliding to Product-Aware — relatable damage scenario resolved by this product's policy",
    sophistication: "Stage 4 — identification through shared household chaos, not a new claim",
    blueprint: "Mishap setup (kid breaks product) > beat of dread/uncertainty > \"then this happened\" reveal > warranty resolution",
    verified: true,
  },
  "B16-C26 · VH1-TH1": {
    hook: "Regret / cautionary tale — positions the viewer to skip the narrator's past error",
    awareness: "Problem-Aware — names a mistake, implying a problem the viewer may be about to repeat",
    sophistication: "Stage 3 — mechanism framed as lesson-learned rather than a brand-new claim",
    blueprint: "Confession of a specific mistake > cost/consequence shown > correction = product > CTA to avoid the same path",
    verified: true,
  },
  "B16-C27 · VH1-TH1": {
    hook: "Stress-test demonstration — durability proof under a doubled real-world load",
    awareness: "Product-Aware — already considering the product, testing a durability doubt",
    sophistication: "Stage 3 — enlarges the mechanism via visual proof, not a new claim",
    blueprint: "Setup (two dogs, one seat) > beat of visible strain > payoff (it holds) > reinforcing stat or close line",
    verified: true,
  },
  "B16-C28 · VH1-TH1": {
    hook: "Trial-and-error / \"finally found it\" — positions this as the end of a long search",
    awareness: "Solution-Aware — knows the category of solutions, has tried several",
    sophistication: "Stage 4 — identification (\"I've been where you are\") over a new mechanism",
    blueprint: "Count of past failed buys > frustration beat > discovery of this product > why it ended the search",
    verified: true,
  },
  "B16-C29 · VH1-TH1": {
    hook: "Authority-by-tenure — credibility opener before the claim lands",
    awareness: "Unaware sliding to Problem-Aware — long-time-owner framing earns trust before naming the problem",
    sophistication: "Stage 2 — leans on credibility to introduce, not yet prove, a mechanism",
    blueprint: "Credibility stat (22 years) > the problem she's seen repeatedly > product as the fix she wishes she'd had sooner",
    verified: true,
  },
  "B16-C29 · VH2-TH2": {
    hook: "Symptom call-out — direct avatar identification via observable behavior",
    awareness: "Problem-Aware — names the symptom the viewer already sees but hasn't solved",
    sophistication: "Stage 3 — diagnostic framing re-enters a familiar mechanism",
    blueprint: "\"If\" symptom hook > why it happens (mechanism) > product as the fix > proof/demo beat",
    verified: true,
  },
  "B16-C29 · VH3-TH3": {
    hook: "Emotional epiphany — vague stakes-raise before the reveal, pure curiosity gap",
    awareness: "Problem-Aware — emotional charge first, problem named second",
    sophistication: "Stage 4 — relies on identification/emotion over mechanism explanation",
    blueprint: "Cold emotional statement > what \"it\" was (reveal) > resolution via product > close on the shift in feeling",
    verified: true,
  },
  "B16-C30 · VH1-TH1": {
    hook: "Direct offer intro — plain product/bundle announcement",
    awareness: "Most Aware — named brand and bundle, addressed to a warm audience",
    sophistication: "Stage 2 — straightforward claim, bundle as a bigger offer",
    blueprint: "Bundle named > what's included > value stack > CTA/offer close",
    verified: true,
  },
  "B16-C30 · VH2-TH2": {
    hook: "Pattern-interrupt negative-hook flip — \"worst\" bait, subverted into a positive reveal",
    awareness: "Most Aware — same bundle, warm audience, negativity bias used to stop the scroll",
    sophistication: "Stage 4 — needs a twist on a familiar offer to stand out",
    blueprint: "Negative claim opens > beat of confusion/tension > flip reveal (can't stop using it) > bundle CTA",
    verified: true,
  },
  "B16-C30 · VH3-TH3": {
    hook: "Avatar identification via the dog's known behavior (car-loving dog)",
    awareness: "Problem-Aware — names a familiar trait, not yet the problem",
    sophistication: "Stage 3 — reframes an existing trait into a need",
    blueprint: "\"If\" trait hook > the hidden risk of that trait unprotected > bundle as the fix > CTA",
    verified: true,
  },
  "B16-C3 · VH2-TH2 — The Control": {
    hook: "Not in dataset — no hook line recorded, only performance stats and tenure",
    awareness: "Best guess: Problem-to-Solution-Aware — control ads are usually built to cast the widest net",
    sophistication: "Best guess: Stage 3 — broad-appeal mechanism proof, built to sustain reach over months",
    blueprint: "Best guess only: problem intro > product demo > benefit/proof beat > CTA — needs the actual script pulled to confirm",
    verified: false,
  },
  "B16-C8 · VH1-TH1 — Top Efficiency": {
    hook: "Not in dataset — strongest tested hook rate (up to 70.9%) suggests an acute pattern-interrupt or symptom call-out",
    awareness: "Best guess: Problem-Aware — a hook rate this high usually means broad symptom recognition, not a narrow most-aware angle",
    sophistication: "Best guess: Stage 3",
    blueprint: "Best guess only — needs the actual script pulled to confirm: fast visual hook > mechanism > proof > CTA",
    verified: false,
  },
  "B16-C19 · VH1-TH1 — Recent Standout": {
    hook: "Not in dataset — breakout on a small test budget suggests a sharp, specific angle rather than broad reach",
    awareness: "Best guess: Problem-Aware to Solution-Aware",
    sophistication: "Best guess: Stage 3–4",
    blueprint: "Best guess only — needs the actual script pulled to confirm",
    verified: false,
  },
  "B16-C9 · VH1-TH1 — Tested & Killed": {
    hook: "Not in dataset — hook rate swung 17–45%, a wide variance that points at an inconsistent or unclear opening claim",
    awareness: "Best guess: possible awareness mismatch — may have targeted the wrong stage for its angle, a plausible contributor to why it was capped",
    sophistication: "Best guess: Stage 2–3, undiagnosed",
    blueprint: "Retrospective candidate — worth pulling the actual hook line and checking it against this framework to diagnose the miss",
    verified: false,
  },
  "Kleins Organic — Rosmarinas Shampoo Bar": {
    hook: "Founder-story credibility + ingredient-sourcing transparency",
    awareness: "Solution-Aware to Product-Aware — named brand and product, educates on sourcing",
    sophistication: "Stage 3–4 — natural cosmetics is a trust-driven market; needs story and proof, not just a claim",
    blueprint: "Founder story open > ingredient sourcing detail > customer testimonial proof > organic engagement (1.2K reactions / 277 comments) reinforces trust",
    verified: true,
  },
};
