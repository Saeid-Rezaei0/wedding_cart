document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    setTimeout(() => {
        card.classList.add('visible');
    }, 500); // ظاهر شدن کارت پس از 500 میلی‌ثانیه
});

var tl = new TimelineMax();
tl
    .staggerFromTo(
        ".lePushReleaseFrom span",
        0.5,
        { autoAlpha: 0, scaleY: 3, scaleX: 3, ease: Power3.easeOut },
        { autoAlpha: 1, scaleY: 0.5, scaleX: 0.5, ease: Power2.easeOut },
        0.2
    )
    .staggerTo(
        ".lePushReleaseFrom span",
        0.5,
        { scaleY: 1, scaleX: 1, ease: Power2.easeOut },
        0.2,
        "-=2.2"
    );

     

    var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // نمایش تنها یک اسلاید در هر لحظه
  spaceBetween: 0, // فاصله بین اسلایدها را صفر کنید
  loop: true, // برای چرخش مداوم اسلایدها
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
              delay: 1000, // تاخیر 1 ثانیه برای تغییر خودکار اسلایدها
          },
});


      // دکمه بستن پیام چرخش صفحه
      let closebtn = document.querySelector(".close-icon");
      closebtn.addEventListener("click", function () {
          document.querySelector(".rotate-message").style.display = "none";
      });
