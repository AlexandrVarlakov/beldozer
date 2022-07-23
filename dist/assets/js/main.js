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



let showContactsBtn = document.querySelector('.show-contacts');
let contactsMenu = document.querySelector('.contact-menu');


showContactsBtn.onclick = function(){
    if ( !this.classList.contains('open')){
        this.classList.add('open');
        contactsMenu.classList.add('open');
        document.body.classList.add('hide-scroll');
    } else{
        this.classList.remove('open');
        contactsMenu.classList.remove('open');
        document.body.classList.remove('hide-scroll');
    }
}


let dropMenuItem = document.querySelectorAll('.dm-links-list__item');

dropMenuItem.forEach(item => {
    item.addEventListener( 'mouseenter', (event)=>{

       if ( !event.target.classList.contains('open') && event.target.classList.contains('has-child')){
        let openedItem = document.querySelector('.dm-links-list__item.has-child.open');

        if ( openedItem ){
            openedItem.classList.remove('open');
        }


        event.target.classList.add('open');
       } else if (!event.target.classList.contains('open') && !event.target.classList.contains('has-child')) {
            let openedItem = document.querySelector('.dm-links-list__item.has-child.open');
            if ( openedItem ){
                openedItem.classList.remove('open');
            }
       }
    })
})


let dmLinksContainer = document.querySelectorAll('.dm-links-container');

if ( dmLinksContainer.length ){
    dmLinksContainer.forEach( container => {

        container.onmouseleave = function(){
            let openedItems =  this.querySelectorAll('.dm-links-list__item.has-child.open');

            if ( openedItems.length ){
                openedItems.forEach( item => {
                    item.classList.remove('open');
                } )
            }
        }
    
    } )
}


