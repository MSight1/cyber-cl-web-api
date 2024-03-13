var mySwiper = new Swiper('.swiper-container', {
    loop: true, // Enable infinite loop
    slidesPerView: 'auto', // Allow dynamic number of slides per view
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});