const pageLoader = document.querySelector(".page-loader");
const loaderStartedAt = Date.now();
const minimumLoaderTime = 1800;
const loaderFadeTime = 450;

document.body.classList.add("is-loading");

const hidePageLoader = () => {
  const elapsedTime = Date.now() - loaderStartedAt;
  const remainingTime = Math.max(minimumLoaderTime - elapsedTime, 0);

  window.setTimeout(() => {
    pageLoader?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
    window.setTimeout(initLandingAnimations, loaderFadeTime);
  }, remainingTime);
};

if (document.readyState === "complete") {
  hidePageLoader();
} else {
  window.addEventListener("load", hidePageLoader);
}

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
const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`,
        );
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px" },
);

sections.forEach((section) => activeObserver.observe(section));

function initLandingAnimations() {
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".brand, .nav-links li, .nav-cta", {
      y: -18,
      opacity: 0,
      duration: 0.8,
      stagger: 0.06,
      ease: "power3.out",
    });

    gsap.from(".hero-kicker span, .hero-copy .eyebrow, .hero h1, .hero-copy p, .hero-actions", {
      y: 42,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
    });

    gsap.from(".hero-media img", {
      scale: 1.14,
      opacity: 0.78,
      duration: 1.6,
      ease: "power3.out",
    });

    gsap.utils
      .toArray(".manifesto, .transformation, .trust, .gallery-section, .membership, .assessment, .contact")
      .forEach((section) => {
        gsap.from(section.children, {
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
          },
          y: 54,
          opacity: 0,
          duration: 0.9,
          stagger: 0.09,
          ease: "power3.out",
        });
      });

    gsap.utils.toArray(".facility-hero-frame img, .facility-offset-image, .transformation-image img, .gallery-item").forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
        y: -30,
        ease: "none",
      });
    });
  } else {
    document.querySelectorAll("section").forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "none";
    });
  }
}
