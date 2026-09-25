function escapeHtml(str) {
const div = document.createElement("div");
div.textContent = str;
return div.innerHTML;
}

function renderCard(video) {
const card = document.createElement("div");
card.className = "card";

if (video.type === "image" && video.src) {
const img = document.createElement("img");
img.src = video.src;
img.alt = video.title;
img.loading = "lazy";
card.appendChild(img);
} else if (video.src) {
const videoEl = document.createElement("video");
videoEl.controls = true;
videoEl.preload = "metadata";
videoEl.src = video.src;
if (video.poster) videoEl.poster = video.poster;
card.appendChild(videoEl);
} else {
const placeholder = document.createElement("div");
placeholder.className = "placeholder";
placeholder.textContent = "Video not linked yet — add its R2 URL in videos.js";
card.appendChild(placeholder);
}

const body = document.createElement("div");
body.className = "card-body";
body.innerHTML = `<h3>${escapeHtml(video.title)}</h3><p>${escapeHtml(video.description)}</p>`;
card.appendChild(body);

return card;
}

function renderSection(section, videos) {
const wrapper = document.createElement("section");
wrapper.className = "portfolio-section";

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
note.textContent = "Every concept above, in the order I made it — dates pulled straight from the project chat log. The pace picks up fast toward the end.";
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
if (timelineContainer && typeof TIMELINE !== "undefined") {
timelineContainer.appendChild(renderTimeline(TIMELINE));
}

const portfolio = document.getElementById("portfolio");

SECTIONS.forEach((section) => {
const videos = VIDEOS.filter((video) => video.section === section.id);
if (videos.length === 0) return;
portfolio.appendChild(renderSection(section, videos));
});
