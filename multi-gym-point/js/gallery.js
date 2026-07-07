const filterButtons = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxClose = document.querySelector(".lightbox-close");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    galleryItems.forEach((item) => {
      item.hidden = filter !== "all" && !item.classList.contains(filter);
    });
  });
});

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightboxTitle.textContent = item.dataset.title;
    lightbox.hidden = false;
  });
});

function closeLightbox() {
  lightbox.hidden = true;
}

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
