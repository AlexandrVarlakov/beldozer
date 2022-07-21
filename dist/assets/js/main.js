let slider = new Swiper(".i-slider", {
    speed: 1000,
    autoplay: {
        delay: 16000,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    
    pagination: {
        el: '.pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            console.log()
          this.slides.forEach((slide, index) => {
            if ( slide.classList.contains('sany-slide') ){
                this.pagination.bullets[index].classList.add('sany-slide');
            }
            if ( slide.classList.contains('mammut-slide') ){
                this.pagination.bullets[index].classList.add('mammut-slide');
            }
            if ( slide.classList.contains('socma-slide') ){
                this.pagination.bullets[index].classList.add('socma-slide');
            }
            
          });
        },
    },
});
