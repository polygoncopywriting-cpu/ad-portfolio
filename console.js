// Ad Strategy Console — renderer
// Pulls video entries from videos.js (VIDEOS) and merges with BLUEPRINTS
// (console-data.js) to build a two-column console grid: Column A is the
// unaltered video/image embed, Column B is the Ad Blueprint Metadata panel.

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderMedia(video) {
  if (video.type === "image") {
    return video.src
      ? `<img src="${video.src}" alt="${escapeHtml(video.title)}" loading="lazy" />`
      : `<div class="no-media">[ NO IMAGE LINKED ]</div>`;
  }
  return video.src
    ? `<video src="${video.src}" controls preload="metadata" playsinline></video>`
    : `<div class="no-media">[ NO VIDEO LINKED ]</div>`;
}

function renderBlueprintField(label, value) {
  const trimmed = (value || "").trim();
  const valueHtml = trimmed
    ? escapeHtml(trimmed)
    : `<span class="bp-pending">— awaiting input —</span>`;
  return `
    <div class="bp-field">
      <span class="bp-key">&gt; ${label}:</span>
      <span class="bp-value">${valueHtml}</span>
    </div>`;
}

function renderRow(video, index) {
  const bp = BLUEPRINTS[video.title];
  const statusTag = bp
    ? bp.verified
      ? `<span class="bp-status verified">[ HOOK: GROUNDED ]</span>`
      : `<span class="bp-status draft">[ HOOK: INFERRED — NEEDS REVIEW ]</span>`
    : `<span class="bp-status draft">[ NO BLUEPRINT ON FILE ]</span>`;

  const authority = bp && bp.authority
    ? bp.authority.present
      ? `[x] ${bp.authority.type || "type not noted"}`
      : bp.teardown_date ? "[ ] none" : ""
    : "";

  const fields = bp
    ? renderBlueprintField("ANGLE", bp.angle) +
      renderBlueprintField("HOOK_ANGLE", bp.hook) +
      renderBlueprintField("DESIRE", bp.desire) +
      renderBlueprintField("AVATAR", bp.avatar) +
      renderBlueprintField("STAGE_OF_AWARENESS", bp.awareness) +
      renderBlueprintField("MARKET_SOPHISTICATION", bp.sophistication) +
      renderBlueprintField("MECHANISM", bp.mechanism) +
      renderBlueprintField("EMOTION_ARC", bp.emotion_arc) +
      renderBlueprintField("AUTHORITY", authority) +
      renderBlueprintField("DIAGNOSIS", bp.diagnosis) +
      renderBlueprintField("FIX", bp.fix) +
      (bp.blueprint ? renderBlueprintField("SCRIPT_BLUEPRINT", bp.blueprint) : "")
    : `<div class="bp-field"><span class="bp-value">No blueprint drafted for this entry yet.</span></div>`;

  const teardownTag = bp && bp.teardown_date
    ? `<span class="bp-status verified">[ TEARDOWN: ${escapeHtml(bp.teardown_date)} ]</span>`
    : `<span class="bp-status draft">[ TEARDOWN: PENDING ]</span>`;

  const idTag = String(index + 1).padStart(2, "0");

  return `
    <article class="console-row">
      <div class="col-media">
        <div class="media-frame">${renderMedia(video)}</div>
      </div>
      <div class="col-blueprint">
        <div class="bp-header">
          <span class="bp-id">AD_${idTag}</span>
          <h3>${escapeHtml(video.title)}</h3>
          ${statusTag}
          ${teardownTag}
        </div>
        ${fields}
      </div>
    </article>`;
}

function renderConsole() {
  const root = document.getElementById("console-grid");
  if (!root) return;
  root.innerHTML = VIDEOS.map(renderRow).join("");

  const statusEl = document.getElementById("sys-status");
  if (statusEl) {
    const now = new Date().toISOString().slice(0, 10);
    const verifiedCount = Object.values(BLUEPRINTS).filter((b) => b.verified).length;
    const tornDown = Object.values(BLUEPRINTS).filter((b) => b.teardown_date).length;
    statusEl.textContent =
      `[ PAWPY AD STRATEGY CONSOLE ]  STATUS: ONLINE  ENTRIES: ${VIDEOS.length}  ` +
      `HOOK GROUNDED: ${verifiedCount}  HOOK INFERRED: ${Object.keys(BLUEPRINTS).length - verifiedCount}  ` +
      `TEARDOWNS: ${tornDown}/${Object.keys(BLUEPRINTS).length}  RENDERED: ${now}`;
  }
}

document.addEventListener("DOMContentLoaded", renderConsole);
