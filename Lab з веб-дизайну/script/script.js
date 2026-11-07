document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // СЛАЙДЕР
  const slides = document.querySelectorAll("#imageSlider img");
  if (slides.length > 0) {
    let currentSlide = 0;

    function showSlide(n) {
      slides.forEach((slide) => (slide.style.display = "none"));
      slides[n].style.display = "block";
    }

    document.getElementById("nextBtn").addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    showSlide(currentSlide);
  }
});
