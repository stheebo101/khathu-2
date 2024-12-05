const images = document.querySelectorAll(
  ".illustration, .poster, .throne-room"
);
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");

images.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = image.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
