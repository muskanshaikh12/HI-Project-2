var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos <= 360) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

const swiper = new Swiper(".menuslider", {
  slidesPerView: "auto",
  spaceBetween: 14,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(".nav .nav-item a").click(function () {
  $(".nav .nav-item a").removeClass("active");
  $(this).addClass("active");
});
