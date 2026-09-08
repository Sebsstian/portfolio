// Reveal al hacer scroll, navegación activa, pestañas de proyectos
// y barra de progreso de lectura.

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Reveal ---------- */
const REVEAL_THRESHOLD = 0.12;
const REVEAL_FALLBACK_DELAY = 900;

const revealEls = [...document.querySelectorAll(".reveal")];
const revealAll = () => revealEls.forEach((el) => el.classList.add("is-visible"));

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealAll();
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: REVEAL_THRESHOLD }
  );

  revealEls.forEach((el) => observer.observe(el));

  // Respaldo por si el observer no corre (render throttled, pestaña oculta):
  // revela lo que esté dentro del viewport en cada scroll.
  const revealInViewport = () => {
    revealEls.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    });
  };

  window.addEventListener("scroll", revealInViewport, { passive: true });
  setTimeout(revealInViewport, REVEAL_FALLBACK_DELAY);
}

/* ---------- Pestañas de proyectos ---------- */
const tabs = [...document.querySelectorAll('[role="tab"]')];

const selectTab = (tab) => {
  tabs.forEach((t) => {
    const selected = t === tab;
    t.setAttribute("aria-selected", String(selected));
    const panel = document.getElementById(t.getAttribute("aria-controls"));
    if (panel) panel.hidden = !selected;
  });
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));

  // Flechas para moverse entre pestañas, como espera un tablist.
  tab.addEventListener("keydown", (event) => {
    const offset =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!offset) return;
    event.preventDefault();
    const next = tabs[(index + offset + tabs.length) % tabs.length];
    next.focus();
    selectTab(next);
  });
});

/* ---------- Navegación activa ---------- */
const navLinks = [...document.querySelectorAll(".main-nav a[href^='#']")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length > 0) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`
          )
        );
      });
    },
    { rootMargin: "-35% 0px -60% 0px" }
  );

  sections.forEach((section) => navObserver.observe(section));
}

/* ---------- Progreso de lectura (respaldo) ----------
   Los navegadores con animation-timeline: scroll() lo resuelven en CSS. */
const progressBar = document.querySelector(".read-progress");

if (progressBar && !CSS.supports("animation-timeline: scroll()") && !reduceMotion) {
  let ticking = false;

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progressBar.style.transform = `scaleX(${Math.min(ratio, 1)})`;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateProgress);
    },
    { passive: true }
  );

  updateProgress();
}
