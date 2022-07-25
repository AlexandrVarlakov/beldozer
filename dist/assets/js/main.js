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


let gallery = new Swiper(".gallery", {
    speed: 1000,
    autoplay: {
        delay: 6000,
    },
    
    
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    /*
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        800: {
            slidesPerView: 'auto',
            spaceBetween: 60
        }
    }*/
})




let showContactsBtn = document.querySelector('.show-contacts');
let contactsMenu = document.querySelector('.contact-menu');
let hamburger = document.querySelector('.hamburger');
let hamburgerMenu = document.querySelector('.hamburger-menu');     

let hmScrollContainer = document.querySelector('.hamburger-menu__scroll-container');




showContactsBtn.onclick = function(){
    if ( !this.classList.contains('open')){
        
        if (hamburger.classList.contains('open')){
            hamburgerMenu.classList.remove('open');
            hamburger.classList.remove('open');
        }
        
        this.classList.add('open');
        contactsMenu.classList.add('open');
        document.body.classList.add('hide-scroll');


    } else{
        this.classList.remove('open');
        contactsMenu.classList.remove('open');
        document.body.classList.remove('hide-scroll');
    }
}

hamburger.onclick = function(){
    if ( !this.classList.contains('open')){
        if (showContactsBtn.classList.contains('open')){
            showContactsBtn.classList.remove('open');
            contactsMenu.classList.remove('open');
        }
        
        this.classList.add('open');
        hamburgerMenu.classList.add('open');
        document.body.classList.add('hide-scroll');



    } else{
        this.classList.remove('open');
        hamburgerMenu.classList.remove('open');
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


let hMenuItems = document.querySelectorAll('.h-menu__item.brand');

hMenuItems.forEach( item => {
    item.onclick = function(){

        let brandName = this.getAttribute('data-brand');

        let subBrandMenu = document.querySelector(`.h-brand-cats[data-brand="${brandName}"]`);
        subBrandMenu.classList.add('open');
        hmScrollContainer.classList.add('hide-scroll');
    }
} )

let hBackMainMenuBtn = document.querySelectorAll('.h-brand-cats__back');

hBackMainMenuBtn.forEach( btn => {
    btn.onclick = function(event){
        let subMenu = this.closest('.h-brand-cats');

        subMenu.classList.remove('open');
        hmScrollContainer.classList.remove('hide-scroll');
    }
} )

let hCatItem = document.querySelectorAll('.h-cat-menu__item.has-child');

hCatItem.forEach( item => {
    item.onclick = function(){
        if (!this.classList.contains('open')){
            

            let listWrap = this.querySelector('.h-cat-submenu');

            if ( listWrap ){
                let list = this.querySelector('.h-cat-submenu__inner');
                let h = list.clientHeight;

                listWrap.style.height = h + 'px';
            }

            this.classList.add('open');
        } else{

            let listWrap = this.querySelector('.h-cat-submenu');

            if ( listWrap ){
                listWrap.style.height = 0 + 'px';
            }
            this.classList.remove('open')
        }
    }
} )

let options = {
    zIndex: 1000, 
    //background: 'rgba(12, 130, 121, 0.5)', 
    displayModalContainer: 'flex', 
    displayModal: 'block', 

    closeSelectors: ['.modal__close'], 
    closeModalOnFogClick: true, 
    showModalAnimation: 'fadeInBottom', 
    closeModalAnimation: 'fadeOutTop',  
    showModalDuration: '300ms',
    closeModalDuration: '500ms',

    showFogAnimation: 'fadeIn',
    closeFogAnimation: 'fadeOut',
    showFogDuration: '300ms',
    closeFogDuration: '500ms',
    documentCanScroll: false, 

    // 'modal-first' - сначала скрывается модальное окно - затем туман
    // 'along' - анимации закрытия тумана и окна происходят параллельно
    closeMode: 'modal-first',
    
    
    

}



let iForm = document.querySelector('.i-form');
if ( iForm ){
    iForm.onsubmit = function(event){
        event.preventDefault();
        
    
        let nameInput = document.querySelector('.i-form__input[name="name"]');
        let phoneInput = document.querySelector('.i-form__input[name="phone"]');
        let emailInput = document.querySelector('.i-form__input[name="email"]');
        let messageInput = document.querySelector('.i-form__textarea[name="message"]');
        
        
    
        let data_body = "name=" + nameInput.value + '&phone=' +  phoneInput.value + '&email=' +  emailInput.value + '&message=' +  messageInput.value;  
    
      
      
        
      
      fetch("script-name.php", { 
        method: "POST",
        body: data_body,   
        headers:{"content-type": "application/x-www-form-urlencoded"} 
        })
    
      .then( (response) => {
              if (response.status !== 200) {           
                  return Promise.reject();
                  
              }   
              
              nameInput.value = '';
              phoneInput.value = '';         
              emailInput.value = '';         
              messageInput.value = '';         
              let modal = new easyModal('.modal-thanks[data-target="answer"]', options);
              setTimeout(() => {
                modal.closeModal();
            }, 3000);
              return response.text()
        })
        .then(i => console.log(i))
        .catch(() => {
            console.log('ошибка')

            /*Эти строки удалить*/
            nameInput.value = '';
            phoneInput.value = '';         
            emailInput.value = '';         
            messageInput.value = '';

            let modal = new easyModal('.modal-thanks[data-target="answer"]', options);

            setTimeout(() => {
                modal.closeModal();
            }, 3000);

            /*Эти строки удалить*/
        });
    }
}

let cmForm = document.querySelector('.cm-form');
if ( cmForm ){
    cmForm.onsubmit = function(event){
        event.preventDefault();
        
    
        let nameInput = document.querySelector('.cm-form__input[name="name"]');
        let phoneInput = document.querySelector('.cm-form__input[name="phone"]');
        
        
        
    
        let data_body = "name=" + nameInput.value + '&phone=' +  phoneInput.value;  
    
      
      
        
      
      fetch("script-name.php", { 
        method: "POST",
        body: data_body,   
        headers:{"content-type": "application/x-www-form-urlencoded"} 
        })
    
      .then( (response) => {
              if (response.status !== 200) {           
                  return Promise.reject();
                  
              }   
              
              nameInput.value = '';
              phoneInput.value = '';         
                    
              messageInput.value = '';         
              let modal = new easyModal('.modal-thanks[data-target="call-me"]', options);
              setTimeout(() => {
                modal.closeModal();
            }, 3000);
              return response.text()
        })
        .then(i => console.log(i))
        .catch(() => {
            console.log('ошибка')

            /*Эти строки удалить*/
            nameInput.value = '';
            phoneInput.value = '';         
            

            let modal = new easyModal('.modal-thanks[data-target="call-me"]', options);

            setTimeout(() => {
                modal.closeModal();
            }, 3000);

            /*Эти строки удалить*/
        });
    }
}

let pageAnchors = document.querySelectorAll('.page-anchor');

if ( pageAnchors.length ){
    pageAnchors.forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
            let headerHeight = document.querySelector('.header').offsetHeight;
            
      
            
            
            let href = this.getAttribute('href').substring(1);
           
            const scrollTarget = document.getElementById(href);
            
            const topOffset = headerHeight;
            // const topOffset = 0; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
      
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
          
      
            
        });
      });
}






let phoneMasks = document.querySelectorAll("input[name='phone']");

phoneMasks.forEach( (input) => {
    IMask(
        input, {
          mask: '+{375} (00) 000-00-00'
      });
})