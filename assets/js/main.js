if ($("#message-form").length > 0) {
  $("#message-form").validate({
    rules: {
      name: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Vänligen ange en giltig e-postadress",
      },
    },
    submitHandler: function (form) {
      return false;
    },
  });
}


var swiper = new Swiper(".opinions-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".opinions .swiper-button-next",
      prevEl: ".opinions .swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
  