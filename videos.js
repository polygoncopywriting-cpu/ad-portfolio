// Video portfolio data.
//
// For each ad, fill in the public R2 URL once the bucket is set up
// (see README.md). Until then, `src` can stay blank and the card will
// show a "video not linked yet" placeholder instead of a broken player.
//
// To add more entries, copy an object below and edit its fields.
// `poster` is optional — a still frame shown before the video plays.
// `section` must match an id in SECTIONS below.
// `type: "image"` renders a static image card instead of a video player
// (used for the Kleins Organic post below, which has no video file).
//
// Performance metrics sourced from Meta Ads Manager (Apr-Aug 2026).
// Newest concepts (C26-C30, Bounty16-C1) have no data yet — tagged
// accordingly until the next KPI update.
//
// Note: R2 object keys are case-sensitive. C29 and C30 were uploaded
// with capitalized filenames (B16-C29-..., B16-C30-...) — src URLs below
// match that exactly. Everything else uses lowercase.
//
// TIMELINE dates are sourced from the project WhatsApp chat log (when
// each concept was locked/loaded for review), not from Meta Ads Manager.

const TIMELINE = [
{ date: "2026-04-20", tag: "C3", note: "Top spender · The Control" },
{ date: "2026-05-14", tag: "C8 & C9", note: "Winner + loser test" },
{ date: "2026-08-08", tag: "C19", note: "Recent Standout" },
{ date: "2026-08-20", tag: "Bounty16-C1", note: "Self-initiated bounty", highlight: true },
{ date: "2026-09-08", tag: "C26", note: "In testing" },
{ date: "2026-09-12", tag: "C27", note: "In testing" },
{ date: "2026-09-18", tag: "C28", note: "In testing" },
{ date: "2026-09-21", tag: "C29", note: "In testing" },
{ date: "2026-09-23", tag: "C30", note: "Latest" },
];

const SECTIONS = [
{
id: "recent",
title: "Recent Work",
intro: "Bounty16-C1 is a testimonial concept I wrote, shot, and edited on my own initiative for Pawpy's Ad Bounties program — it hasn't launched yet, so there's no spend data. The rest of this section (C26–C30) is also newly in testing. More concepts and bounty entries are in progress.",
},
{
id: "track-record",
title: "Track Record",
intro: "These four ran over a 4-month stretch and include some of the account's best (and worst) performers by spend. My editing has moved fast since I made them — read this section for real performance data, not as a sample of my current editing level.",
},
{
id: "other-brands",
title: "Other Brand Work",
intro: "A look outside the Pawpy account. This ad ran for Kleins Organic, a natural haircare and skincare brand.",
},
];

const VIDEOS = [
{
section: "recent",
title: "Bounty16-C1 · VH1-TH1 — Warranty Test",
description: "\"I tested their five-year warranty. Honestly, I expected a fight.\" — testimonial concept from the Ad Bounties program. 1 of 3 hook variations (see VH2 and VH3 below). No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/bounty16-c1-vh1-th1.mp4",
poster: "",
},
{
section: "recent",
title: "Bounty16-C1 · VH2-TH2 — Warranty Test",
description: "\"Yes, it costs more — but after this, I'd still buy it again.\" — 1 of 3 hook variations for this concept. No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/bounty16-c1-vh2-th2.mp4",
poster: "",
},
{
section: "recent",
title: "Bounty16-C1 · VH3-TH3 — Warranty Test",
description: "\"One of my kids broke our dog's backseat extender. Then this happened.\" — 1 of 3 hook variations for this concept. No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/bounty16-c1-vh3-th3.mp4",
poster: "",
},
{
section: "recent",
title: "B16-C26 · VH1-TH1",
description: "\"Avoid making the same mistake I did.\" — new concept, in testing. No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/b16-c26-vh1-th1.mp4",
poster: "",
},
{
section: "recent",
title: "B16-C27 · VH1-TH1",
description: "\"Watch what happens the second two dogs actually step on one of these.\" — new concept, in testing. No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/b16-c27-vh1-th1.mp4",
poster: "",
},
{
section: "recent",
title: "B16-C28 · VH1-TH1",
description: "\"I didn't buy 7 different...\" — new concept, in testing. No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/b16-c28-vh1-th1.mp4",
poster: "",
},
{
section: "recent",
title: "B16-C29 · VH1-TH1",
description: "\"I've had dogs for twenty-two years.\" — 1 of 3 hook variations being tested for this concept (see VH2 and VH3 below). No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/B16-C29-VH1-TH1.mp4",
poster: "",
},
{
section: "recent",
title: "B16-C29 · VH2-TH2",
description: "\"If your dog stands the whole drive...\" — 1 of 3 hook variations being tested for this concept. No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/B16-C29-VH2-TH2.mp4",
poster: "",
},
{
section: "recent",
title: "B16-C29 · VH3-TH3",
description: "\"It hit me hard.\" — 1 of 3 hook variations being tested for this concept. No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/B16-C29-VH3-TH3.mp4",
poster: "",
},
{
section: "recent",
title: "B16-C30 · VH1-TH1",
description: "\"This bundle from Pawpy...\" — 1 of 3 hook variations being tested for this concept (see VH2 and VH3 below). No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/B16-C30-VH1-TH1.mp4",
poster: "",
},
{
section: "recent",
title: "B16-C30 · VH2-TH2",
description: "\"This bundle from Pawpy stuff is the worst...\" — 1 of 3 hook variations being tested for this concept. No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/B16-C30-VH2-TH2.mp4",
poster: "",
},
{
section: "recent",
title: "B16-C30 · VH3-TH3",
description: "\"If your dog loves to ride...\" — 1 of 3 hook variations being tested for this concept. No performance data available yet.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/B16-C30-VH3-TH3.mp4",
poster: "",
},
{
section: "track-record",
title: "B16-C3 · VH2-TH2 — The Control",
description: "Running continuously for 5 months and $58K+ in spend — the most tested creative in the batch. Hook Rate 50–59% · ThruPlay Hold Rate 15–21% · ROAS 1.16–1.53x",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/b16-c3-vh2-th2.mp4",
poster: "",
},
{
section: "track-record",
title: "B16-C8 · VH1-TH1 — Top Efficiency",
description: "Best cost-efficiency in the set, with the strongest hook of any tested creative. Hook Rate up to 70.9% · ThruPlay Hold Rate up to 15.1% · ROAS up to 2.02x",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/b16-c8-vh1-th1.mp4",
poster: "",
},
{
section: "track-record",
title: "B16-C19 · VH1-TH1 — Recent Standout",
description: "Newest breakout performer — strong signal on a small test budget. Hook Rate 41.5% · ThruPlay Hold Rate 5.0% · ROAS 4.28x on $279 spend (Aug 2026)",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/b16-c19-vh1-th1.mp4",
poster: "",
},
{
section: "track-record",
title: "B16-C9 · VH1-TH1 — Tested & Killed",
description: "Hook never landed, so it was capped and pulled before it scaled. Hook Rate 17–45% · ThruPlay Hold Rate 3–12% · Spend held under $25/month across 3 months of testing.",
src: "https://pub-2aa6b3f278164eb6b00d8eec5c23e516.r2.dev/videos/b16-c9-vh-th1.mp4",
poster: "",
},
{
section: "other-brands",
type: "image",
title: "Kleins Organic — Rosmarinas Shampoo Bar",
description: "Facebook post for Kleins Organic's solid shampoo bar — founder story, ingredient sourcing, and customer testimonials pulled into the copy. Copy is in Lithuanian, the brand's primary market. 1.2K reactions, 277 comments, 167 shares.",
src: "images/K.O-breakthrough_1.png",
poster: "",
},
];
