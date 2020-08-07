var slideIndex = 0;
var reviews = document.querySelectorAll(".review-item");

function nextSlide(n) {
  for (var j = 0; j < reviews.length; j++) {
    if (j === slideIndex) {
      // Remove show class
      reviews[j].classList.remove("active");
    } else if (j === n) {
      if (n == 0) {
        reviews[reviews.length - 1].classList.remove("active");
      }
      // Add class
      reviews[j].classList.add("active");
    }
  }

  slideIndex++;

  if (slideIndex + 1 === reviews.length) {
    slideIndex = -1;
  }
}

setInterval(function() {
  nextSlide(slideIndex + 1);
}, 6000);

var header = document.getElementById("header");
window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
