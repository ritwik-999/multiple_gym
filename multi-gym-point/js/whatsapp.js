const phoneNumber = "919876543210";
const message = encodeURIComponent(
  "Hi Multi Gym Point, I want to know more about membership plans.",
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.setAttribute("href", whatsappUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});
