const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-45% 0px -45% 0px" });

sections.forEach((section) => activeObserver.observe(section));

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".brand, .nav-links li, .nav-cta", {
    y: -18,
    opacity: 0,
    duration: 0.8,
    stagger: 0.06,
    ease: "power3.out"
  });

  gsap.from(".hero-copy .eyebrow, .hero h1, .hero-intro, .hero-actions", {
    y: 42,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out"
  });

  gsap.from(".hero-stage img", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.15
  });

  gsap.from(".hero-word", {
    scale: 0.94,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out",
    delay: 0.2
  });

  gsap.utils.toArray("section:not(.hero), .category-strip").forEach((section) => {
    gsap.from(section.children, {
      scrollTrigger: {
        trigger: section,
        start: "top 78%"
      },
      y: 54,
      opacity: 0,
      duration: 0.9,
      stagger: 0.09,
      ease: "power3.out"
    });
  });

  gsap.utils.toArray(".program-card, .gallery-item").forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8
      },
      y: -24,
      ease: "none"
    });
  });
} else {
  document.querySelectorAll("section, .category-strip").forEach((item) => {
    item.style.opacity = "1";
    item.style.transform = "none";
  });
}
