// Kick-off deck as a live Codex session.
// Each slide is a turn: the team's prompt types into the composer, moves up into
// the conversation, the brand band "thinks", then the answer streams in.
// Keys: → / Space / Page Down = finish the current answer, then next slide.
//       ← / Page Up = previous. Home / End = first / last. R = replay. F = full screen.
// Without JavaScript every slide is simply visible, one after another.

const deck = document.querySelector("#deck");
const slides = [...deck.querySelectorAll(".slide")];
const composerText = document.querySelector(".composer-text");
const current = document.querySelector("[data-current]");
const prev = document.querySelector('[data-step="-1"]');
const next = document.querySelector('[data-step="1"]');
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
document.querySelector("[data-total]").textContent = slides.length;

const PLACEHOLDER = "Ask about the two days";
let index = 0;
let run = 0;          // increments to cancel any sequence in flight
let streaming = false;
const timers = new Set();

const wait = (ms, id) => new Promise((resolve, reject) => {
  const t = setTimeout(() => { timers.delete(t); id === run ? resolve() : reject(new Error("cancelled")); }, ms);
  timers.add(t);
});

// Split headline text into word spans once, keeping inner spans (e.g. .hush) intact.
function wrapWords(node) {
  for (const child of [...node.childNodes]) {
    if (child.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      for (const part of child.textContent.split(/(\s+)/)) {
        if (!part) continue;
        if (/^\s+$/.test(part)) { frag.append(part); continue; }
        const w = document.createElement("span");
        w.className = "w";
        w.textContent = part;
        frag.append(w);
      }
      child.replaceWith(frag);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      wrapWords(child);
    }
  }
}
deck.querySelectorAll("[data-words]").forEach(wrapWords);

function setComposer(text, { placeholder = false, status = false } = {}) {
  composerText.replaceChildren();
  if (placeholder) {
    const p = document.createElement("span");
    p.className = "composer-placeholder";
    p.textContent = text;
    composerText.append(p);
    return;
  }
  const t = document.createElement("span");
  t.className = status ? "composer-status" : "";
  t.textContent = text;
  composerText.append(t);
  if (!status) {
    const caret = document.createElement("span");
    caret.className = "caret";
    composerText.append(caret);
  }
}

function finish(slide) {
  run++;
  timers.forEach(clearTimeout);
  timers.clear();
  streaming = false;
  document.body.classList.remove("is-thinking");
  slide.getAnimations({ subtree: true }).forEach((a) => a.finish());
  slide.dataset.state = "done";
  slide.classList.add("is-drawn");
  slide.querySelectorAll(".w, [data-stream]").forEach((el) => el.classList.add("is-in"));
  setComposer(PLACEHOLDER, { placeholder: true });
  if (slide.id === "slide-2") placeCursors(slide, false);
}

function reset(slide) {
  slide.dataset.state = "pending";
  slide.classList.remove("is-drawn");
  slide.querySelectorAll(".w, [data-stream]").forEach((el) => el.classList.remove("is-in"));
  slide.querySelectorAll(".cursor").forEach((c) => { c.getAnimations().forEach((a) => a.cancel()); c.style.opacity = ""; });
}

// The send moment: the prompt travels from the composer up into the conversation.
function sendTurn(slide) {
  const turn = slide.querySelector(".turn");
  const from = document.querySelector(".composer-field").getBoundingClientRect();
  const to = turn.getBoundingClientRect();
  const dx = from.left - to.left;
  const dy = from.top - to.top;
  turn.style.opacity = "1";
  turn.animate(
    [
      { transform: `translate(${dx}px, ${dy}px) scale(0.96)`, opacity: 0, filter: "blur(4px)" },
      { opacity: 1, filter: "blur(0)", offset: 0.35 },
      { transform: "none", opacity: 1, filter: "blur(0)" },
    ],
    { duration: 620, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
  );
}

async function play(slide) {
  const id = ++run;
  streaming = true;
  reset(slide);
  const prompt = slide.querySelector(".turn-text").textContent;
  try {
    // 1. Type the prompt
    await wait(260, id);
    for (let i = 1; i <= prompt.length; i++) {
      setComposer(prompt.slice(0, i));
      await wait(prompt[i - 1] === " " ? 34 : 20, id);
    }
    await wait(240, id);
    // 2. Send it
    next.classList.add("is-pressed");
    await wait(120, id);
    next.classList.remove("is-pressed");
    setComposer(PLACEHOLDER, { placeholder: true });
    sendTurn(slide);
    await wait(560, id);
    // 3. Think
    document.body.classList.add("is-thinking");
    setComposer("Thinking", { status: true });
    await wait(slide.id === "slide-1" ? 900 : 650, id);
    document.body.classList.remove("is-thinking");
    setComposer(PLACEHOLDER, { placeholder: true });
    // 4. Stream the headline word by word
    for (const w of slide.querySelectorAll(".w")) {
      w.classList.add("is-in");
      await wait(70, id);
    }
    slide.classList.add("is-drawn");
    await wait(220, id);
    // 5. Resolve the supporting blocks in order
    for (const block of slide.querySelectorAll("[data-stream]")) {
      block.classList.add("is-in");
      await wait(150, id);
    }
    if (slide.id === "slide-2") await wait(placeCursors(slide, true), id);
    slide.dataset.state = "done";
    streaming = false;
  } catch {
    /* cancelled by navigation or skip */
  }
}

// Multiplayer cursors: four roles arrive on the four points, like a shared canvas.
function placeCursors(slide, animate) {
  // Returns how long the arrival takes, so the sequence can wait by the clock
  if (reduceMotion.matches || matchMedia("(max-width: 900px)").matches) return 0;
  const box = slide.getBoundingClientRect();
  const targets = [...slide.querySelectorAll("[data-cursor-target]")];
  const cursors = [...slide.querySelectorAll(".cursor")];
  let longest = 0;
  cursors.forEach((cursor, i) => {
    // Park each cursor just after its point's heading, clear of the text
    const heading = targets[i]?.querySelector("strong");
    if (!heading) return;
    const range = document.createRange();
    range.selectNodeContents(heading);
    const t = range.getBoundingClientRect();
    const x = t.right - box.left + 12;
    const y = t.top - box.top - 6;
    const end = `translate(${x}px, ${y}px)`;
    cursor.getAnimations().forEach((a) => a.cancel());
    cursor.style.opacity = "1";
    if (!animate) { cursor.style.transform = end; return; }
    const startX = i % 2 ? box.width + 40 : -160;
    const startY = y + (i < 2 ? 160 : -120);
    const midX = x + (i % 2 ? 60 : -50);
    const midY = y + (i < 2 ? 24 : -30);
    cursor.style.transform = end;
    const duration = 1300 + i * 140;
    const delay = i * 120;
    longest = Math.max(longest, duration + delay);
    cursor.animate(
      [
        { transform: `translate(${startX}px, ${startY}px)`, opacity: 0 },
        { transform: `translate(${midX}px, ${midY}px)`, opacity: 1, offset: 0.7 },
        { transform: end, opacity: 1 },
      ],
      { duration, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
    );
  });
  return longest;
}

function show(i, { animate = true, updateHash = true } = {}) {
  index = Math.max(0, Math.min(slides.length - 1, i));
  slides.forEach((slide, n) => { slide.hidden = n !== index; });
  current.textContent = index + 1;
  prev.disabled = index === 0;
  document.body.classList.toggle("on-light", slides[index].classList.contains("slide-light"));
  if (updateHash) history.replaceState(null, "", `#${slides[index].id}`);
  const slide = slides[index];
  if (animate && !reduceMotion.matches) play(slide);
  else finish(slide);
  updateNext();
}

function advance() {
  const slide = slides[index];
  if (streaming) { finish(slide); updateNext(); return; }
  if (index < slides.length - 1) show(index + 1);
}
function back() {
  if (index > 0) show(index - 1, { animate: false });
}
function updateNext() { next.disabled = index === slides.length - 1 && !streaming; }

// Keep "next" usable while the last slide streams (it finishes the answer), then disable it.
const observer = new MutationObserver(updateNext);
slides.forEach((s) => observer.observe(s, { attributes: true, attributeFilter: ["data-state"] }));

function fromHash() {
  const n = slides.findIndex((slide) => `#${slide.id}` === location.hash);
  show(n === -1 ? 0 : n, { updateHash: false });
}

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  // Leave keys alone inside form controls (the effort demo uses arrow keys natively)
  if (event.target.closest("input, select, textarea")) return;
  if (event.key === " " && event.target.closest("a, button")) return;
  const k = event.key;
  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(k)) advance();
  else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(k)) back();
  else if (k === "Home") show(0, { animate: false });
  else if (k === "End") show(slides.length - 1, { animate: false });
  else if (k === "r" || k === "R") show(index);
  else if ((k === "f" || k === "F") && document.fullscreenEnabled) {
    document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  } else return;
  event.preventDefault();
});

prev.addEventListener("click", back);
next.addEventListener("click", advance);
window.addEventListener("hashchange", fromHash);
window.addEventListener("resize", () => { if (slides[index].id === "slide-2" && !streaming) placeCursors(slides[index], false); });
window.addEventListener("beforeprint", () => slides.forEach(finish));

// ---------- Effort demo (slide 4) ----------
const demo = {
  low: {
    think: 300, pace: 40, time: 1, cost: 1, timeLabel: "Seconds", costLabel: "A little",
    text: "Try “Show places”. It says what happens next.",
  },
  medium: {
    think: 1100, pace: 34, time: 2, cost: 2, timeLabel: "A bit longer", costLabel: "Some",
    text: "Try “Show places”. It names the result rather than the action, and matches the filter labels above it. If space is tight, “Show” works too.",
  },
  high: {
    think: 2600, pace: 28, time: 5, cost: 5, timeLabel: "Much longer", costLabel: "A lot",
    text: "Three options, depending on what matters most. “Show places” is the clearest and names the result. “Update list” fits if results change in place. “Apply filters” is familiar but the least specific. I’d start with “Show places” and test it with two or three people.",
  },
};
const output = document.querySelector("#demo-output");
let demoRun = 0;

function setMeter(name, value, label) {
  document.querySelectorAll(`[data-meter="${name}"] i`).forEach((dot, n) => dot.classList.toggle("on", n < value));
  document.querySelector(`[data-meter-value="${name}"]`).textContent = label;
}

async function runDemo(level) {
  const id = ++demoRun;
  const d = demo[level];
  setMeter("time", d.time, d.timeLabel);
  setMeter("cost", d.cost, d.costLabel);
  if (reduceMotion.matches) { output.textContent = d.text; return; }
  output.setAttribute("aria-busy", "true");
  output.innerHTML = '<span class="thinking">Thinking…</span>';
  document.body.classList.add("is-thinking");
  await new Promise((r) => setTimeout(r, d.think));
  document.body.classList.remove("is-thinking");
  if (id !== demoRun) return;
  output.textContent = "";
  for (const word of d.text.split(" ")) {
    if (id !== demoRun) return;
    output.textContent += (output.textContent ? " " : "") + word;
    await new Promise((r) => setTimeout(r, d.pace));
  }
  output.removeAttribute("aria-busy");
}

document.querySelectorAll('input[name="effort"]').forEach((input) => {
  input.addEventListener("change", () => runDemo(input.value));
});

fromHash();
