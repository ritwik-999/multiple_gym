const contactUrl = "#contact";

document.querySelectorAll(".contact-link").forEach((link) => {
  link.setAttribute("href", contactUrl);
  link.removeAttribute("target");
  link.removeAttribute("rel");
});
