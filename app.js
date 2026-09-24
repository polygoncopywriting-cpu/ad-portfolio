function escapeHtml(str) {
const div = document.createElement("div");
div.textContent = str;
return div.innerHTML;
}

function renderCard(video) {
const card = document.createElement("div");
card.className = "card";

if (video.src) {
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

const portfolio = document.getElementById("portfolio");

SECTIONS.forEach((section) => {
const videos = VIDEOS.filter((video) => video.section === section.id);
if (videos.length === 0) return;
portfolio.appendChild(renderSection(section, videos));
});
