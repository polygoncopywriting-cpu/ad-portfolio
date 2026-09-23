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
    videoEl.preload = "none";
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
  body.innerHTML = `<h2>${escapeHtml(video.title)}</h2><p>${escapeHtml(video.description)}</p>`;
  card.appendChild(body);

  return card;
}

const grid = document.getElementById("grid");
VIDEOS.forEach((video) => grid.appendChild(renderCard(video)));
