// SERVICES MODEL

    const model = document.querySelectorAll('.services__model'),
          modelButton =  document.querySelectorAll('.services__button'),
          modelClose =  document.querySelectorAll('.services__model-close');

    let activeModel = (modelClick) =>{
        model[modelClick].classList.add('active-model');
    }

    modelButton.forEach((modelButton, i) => {
        modelButton.addEventListener('click', () =>{
            activeModel(i);
        })
    })

    modelClose.forEach((modelClose)=>{
        modelClose.addEventListener('click',  ()=>{
            model.forEach((modelRemove) => {
                modelRemove.classList.remove('active-model')
           });
        })
    })
// SWIPER TESTIMONIAL

const swiperTestimonial = new Swiper('.testimonial__swiper', {
    
    loop: true,
    spaceBetween : 32,
    grabCursor: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets : true,
      clickable: true,
    },
  
    
  });

// SHOW SCROLL UP
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher then 350 viweport height, add then
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)