document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const images = document.querySelectorAll(".slider-wrapper img");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentIndex = 0;

  function showImage(index) {
    const offset = -index * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  showImage(currentIndex);
});
