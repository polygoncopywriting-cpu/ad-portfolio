const STATUS_LABELS = {
live: "Live",
paused: "Paused",
unknown: "Status unknown",
"not-launched": "Not yet launched",
};

function formatCardDate(iso) {
const d = new Date(iso + "T00:00:00Z");
return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

function renderCard(video) {
const card = document.createElement("div");
card.className = "card";

const media = document.createElement("div");
media.className = "media";

if (video.type === "image" && video.src) {
const img = document.createElement("img");
img.src = video.src;
img.alt = video.title;
img.loading = "lazy";
if (video.aspectRatio) img.style.aspectRatio = video.aspectRatio;
media.appendChild(img);
} else if (video.src) {
const videoEl = document.createElement("video");
videoEl.controls = true;
videoEl.preload = "metadata";
videoEl.src = video.src;
if (video.poster) videoEl.poster = video.poster;
media.appendChild(videoEl);

const overlay = document.createElement("div");
overlay.className = "play-overlay";
overlay.innerHTML = '<span class="play-overlay-icon" aria-hidden="true"></span>';
media.appendChild(overlay);

const setPlaying = (isPlaying) => media.classList.toggle("playing", isPlaying);
videoEl.addEventListener("play", () => setPlaying(true));
videoEl.addEventListener("pause", () => setPlaying(false));
videoEl.addEventListener("ended", () => setPlaying(false));
} else {
const placeholder = document.createElement("div");
placeholder.className = "placeholder";
placeholder.textContent = "Video not linked yet — add its R2 URL in videos.js";
media.appendChild(placeholder);
}

card.appendChild(media);

const body = document.createElement("div");
body.className = "card-body";

if (video.tag) {
const tagChip = document.createElement("span");
tagChip.className = "tag-chip";
tagChip.textContent = video.tag;
body.appendChild(tagChip);
}

const titleEl = document.createElement("h3");
titleEl.textContent = video.title;
body.appendChild(titleEl);

if (video.status) {
const statusRow = document.createElement("div");
statusRow.className = "status-row";

const dot = document.createElement("span");
dot.className = `status-dot status-${video.status}`;
statusRow.appendChild(dot);

const label = document.createElement("span");
const statusText = STATUS_LABELS[video.status] || video.status;
label.textContent = video.date ? `${statusText} · ${formatCardDate(video.date)}` : statusText;
statusRow.appendChild(label);

body.appendChild(statusRow);
}

if (video.stats && video.stats.length > 0) {
const statRow = document.createElement("div");
statRow.className = "stat-row";
video.stats.forEach((stat) => {
const badge = document.createElement("span");
badge.className = "stat-badge";
badge.textContent = `${stat.label}: ${stat.value}`;
statRow.appendChild(badge);
});
body.appendChild(statRow);
}

if (video.breakdown && video.breakdown.length > 0) {
const buildRow = (cells, className) => {
const rowEl = document.createElement("div");
rowEl.className = className;
cells.forEach((cellText) => {
const span = document.createElement("span");
span.textContent = cellText;
rowEl.appendChild(span);
});
return rowEl;
};

const table = document.createElement("div");
table.className = "breakdown-table";
table.appendChild(buildRow(["Hook", "Spend", "Hook Rate", "Hold"], "breakdown-row breakdown-header"));
video.breakdown.forEach((row) => {
table.appendChild(buildRow([row.hook, row.spend, row.hookRate, row.hold], "breakdown-row"));
});

body.appendChild(table);
}

const desc = document.createElement("p");
desc.textContent = video.description;
body.appendChild(desc);

card.appendChild(body);

return card;
}

function renderSection(section, videos) {
const wrapper = document.createElement("section");
wrapper.className = "portfolio-section";
wrapper.id = section.id;

const heading = document.createElement("h2");
heading.textContent = section.title;
wrapper.appendChild(heading);

if (section.intro) {
const intro = document.createElement("p");
intro.className = "section-intro";
intro.textContent = section.intro;
wrapper.appendChild(intro);
}

let currentGroup = Symbol("initial");
let grid = null;

videos.forEach((video) => {
if (video.group !== currentGroup) {
currentGroup = video.group;

if (video.group) {
const groupHeading = document.createElement("h3");
groupHeading.className = "group-heading";
groupHeading.textContent = video.group;
wrapper.appendChild(groupHeading);

if (video.groupIntro) {
const groupIntro = document.createElement("p");
groupIntro.className = "group-intro";
groupIntro.textContent = video.groupIntro;
wrapper.appendChild(groupIntro);
}
}

grid = document.createElement("div");
grid.className = "grid";
wrapper.appendChild(grid);
}

grid.appendChild(renderCard(video));
});

return wrapper;
}

function formatMoney(n) {
return "$" + Math.round(n).toLocaleString("en-US");
}

function renderSpendProgress(progress) {
const wrapper = document.createElement("div");
wrapper.className = "spend-progress-wrap";

const heading = document.createElement("h2");
heading.textContent = "Ad Spend Progress";
wrapper.appendChild(heading);

const goal = progress.milestones[progress.milestones.length - 1];
const pct = Math.min(100, (progress.total / goal) * 100);

const summary = document.createElement("p");
summary.className = "spend-progress-summary";
summary.textContent = `${formatMoney(progress.total)} verified ad spend (${progress.asOf}) — on the way to ${formatMoney(goal)}.`;
wrapper.appendChild(summary);

const track = document.createElement("div");
track.className = "spend-track";

const fill = document.createElement("div");
fill.className = "spend-fill";
fill.style.width = `${pct}%`;
track.appendChild(fill);

progress.milestones.forEach((milestone) => {
const markerPct = (milestone / goal) * 100;
const marker = document.createElement("div");
marker.className = "spend-milestone" + (progress.total >= milestone ? " reached" : "");
marker.style.left = `${markerPct}%`;

const dot = document.createElement("span");
dot.className = "spend-milestone-dot";
marker.appendChild(dot);

const label = document.createElement("span");
label.className = "spend-milestone-label";
label.textContent = milestone >= 1000000 ? `$${milestone / 1000000}M` : `$${milestone / 1000}K`;
marker.appendChild(label);

track.appendChild(marker);
});

wrapper.appendChild(track);

const footnote = document.createElement("p");
footnote.className = "spend-progress-footnote";
footnote.textContent = progress.footnote;
wrapper.appendChild(footnote);

return wrapper;
}

const spendProgressContainer = document.getElementById("spend-progress");
if (spendProgressContainer && typeof SPEND_PROGRESS !== "undefined") {
spendProgressContainer.appendChild(renderSpendProgress(SPEND_PROGRESS));
}

const portfolio = document.getElementById("portfolio");
const sectionsWithVideos = SECTIONS.filter(
(section) => VIDEOS.filter((video) => video.section === section.id).length > 0
);

sectionsWithVideos.forEach((section) => {
const videos = VIDEOS.filter((video) => video.section === section.id);
portfolio.appendChild(renderSection(section, videos));
});

const navContainer = document.getElementById("site-nav");
if (navContainer) {
const links = [];
sectionsWithVideos.forEach((section) => links.push({ id: section.id, label: section.title }));

links.forEach((link) => {
const a = document.createElement("a");
a.href = `#${link.id}`;
a.textContent = link.label;
navContainer.appendChild(a);
});
}
