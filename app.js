function escapeHtml(str) {
const div = document.createElement("div");
div.textContent = str;
return div.innerHTML;
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
body.innerHTML = `<h3>${escapeHtml(video.title)}</h3>`;

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

const grid = document.createElement("div");
grid.className = "grid";
videos.forEach((video) => grid.appendChild(renderCard(video)));
wrapper.appendChild(grid);

return wrapper;
}

function formatTimelineDate(iso) {
const d = new Date(iso + "T00:00:00Z");
return d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

function renderTimeline(entries) {
const wrapper = document.createElement("div");
wrapper.className = "timeline-wrap";

const heading = document.createElement("h2");
heading.textContent = "Timeline";
wrapper.appendChild(heading);

const note = document.createElement("p");
note.className = "timeline-note";
note.textContent = "Selected concepts from a 30+ piece body of work on this account, shown in production order (lower numbers = earlier). Includes the top-spending concept to date and the most recent work in progress.";
wrapper.appendChild(note);

const scroller = document.createElement("div");
scroller.className = "timeline-scroller";

const track = document.createElement("div");
track.className = "timeline-track";

entries.forEach((entry) => {
const node = document.createElement("div");
node.className = "timeline-node" + (entry.highlight ? " highlight" : "");

const date = document.createElement("span");
date.className = "timeline-date";
date.textContent = formatTimelineDate(entry.date);
node.appendChild(date);

const dot = document.createElement("span");
dot.className = "timeline-dot";
node.appendChild(dot);

const tag = document.createElement("span");
tag.className = "timeline-tag";
tag.textContent = entry.tag;
node.appendChild(tag);

if (entry.note) {
const noteEl = document.createElement("span");
noteEl.className = "timeline-node-note";
noteEl.textContent = entry.note;
node.appendChild(noteEl);
}

track.appendChild(node);
});

scroller.appendChild(track);
wrapper.appendChild(scroller);
return wrapper;
}

const timelineContainer = document.getElementById("timeline");
const hasTimeline = timelineContainer && typeof TIMELINE !== "undefined" && TIMELINE.length > 0;
if (hasTimeline) {
timelineContainer.appendChild(renderTimeline(TIMELINE));
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
if (hasTimeline) links.push({ id: "timeline", label: "Timeline" });
sectionsWithVideos.forEach((section) => links.push({ id: section.id, label: section.title }));

links.forEach((link) => {
const a = document.createElement("a");
a.href = `#${link.id}`;
a.textContent = link.label;
navContainer.appendChild(a);
});
}
