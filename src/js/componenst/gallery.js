const classes = {
    slider: '.slider',
    contentWrap: '[data-slider="item"]',
    slidesWrap: '[data-slider="wrap-content"]',
    img: '.slider__rooms-img',
    description: '.slider__rooms-desc',
    dots: '.slider-dots',
    dot: '[data-slider="dot"]',
    arrow: '.slider-arrows',
    prevArrow: '[data-arrow="left"]',
    nextArrow:  '[data-arrow="right"]',
    idRoom: 'rooms',
    idReviews: 'reviews',
    activeClass: 'active'
}


class Slider {
    constructor(wrap){
        this.wrap = wrap
        this.slides = this.wrap.querySelectorAll(classes.contentWrap);
        this.slidesWrap = this.wrap.querySelector(classes.slidesWrap)
        this.dotsWrap = this.wrap.querySelector(classes.dots);
        this.prev = this.wrap.querySelector(classes.prevArrow);
        this.next = this.wrap.querySelector(classes.nextArrow)
        this.slideIndex = 0;
        this.activeClass = classes.activeClass

    }

    showSlides(n){
        if(n > this.slides.length - 1){
            this.slideIndex = 0
        }  
        if(n < 0){
            this.slideIndex = this.slides.length - 1
        }
        this.slides.forEach(slide =>{
            slide.classList.add('animate')
            slide.style.display = 'none' 
        })
        this.changeDots(this.slideIndex)


            this.slides[this.slideIndex].style.display = '' 
        
    }

    changeSlide(n){
        this.slideIndex += n;
        this.showSlides(this.slideIndex)
        slideChangeClasses(this.slides[this.slideIndex], n) 
    }

    changeDots(index){
        this.dots.forEach(dot =>{ 
            dot.classList.remove(this.activeClass)
        })
        this.dots[index].classList.add(this.activeClass)
    }

    bindDots(){
        this.dots.forEach((dot, i) => {
            slideChangeClasses(this.slides[i], 1) 
            dot.addEventListener('click',() => {
                this.slideIndex = i;
                this.changeDots(this.slideIndex)
                this.showSlides(this.slideIndex)
            })
        });
    }

    bindBtns(){
        this.prev.addEventListener('click', () => {
            this.changeSlide(-1)
        })

        this.next.addEventListener('click', () => {
            this.changeSlide(1)
        })
    }
    renderDots(){
        const dotsTemplate = createDots(this.slides.length);
        this.dotsWrap.insertAdjacentHTML('afterbegin', dotsTemplate)
        this.dots = this.wrap.querySelectorAll(classes.dot)
    }

    binding(){
        this.bindBtns()
        this.bindDots()
    }

    init(){
        this.renderDots()
        this.binding()
        this.showSlides(this.slideIndex)
        this.changeDots(this.slideIndex)
    }
}


const gallery = ()  => {
    const wrapRooms =  document.getElementById(classes.idRoom);

    const wrapReviews = document.getElementById(classes.idReviews);

    const sliderRoom =  new Slider(wrapRooms);
    sliderRoom.init();

    const sliderReviews = new Slider(wrapReviews, 2)
    sliderReviews.init()
}

export default gallery;

function createDots(length){
    let dots = '';
    for(let i = 0;  i < length; i++){
        dots += `<span class="slider-dot" data-slider="dot"></span>`
    }
    
    return dots;
}

function slideChangeClasses(slide,  direction) {
    if(direction === 1 ){
        slide.classList.add('right');
        slide.classList.remove('left');
    }else{
        slide.classList.add('left');
        slide.classList.remove('right');
    }
}