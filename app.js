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

     