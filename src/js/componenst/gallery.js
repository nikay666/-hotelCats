const classes = {
    slider: '.slider',
    contentWrap: '.slider__rooms-medias',
    slidesWrap: 'wrap-medias',
    img: '.slider__rooms-img',
    description: '.slider__rooms-desc',
    dots: '.slider-dots',
    arrow: '.slider-arrows',
    prevArrow: '.slider-arrow-l',
    nextArrow:  '.slider-arrow-r',
    idRoom: 'rooms',
    idReviews: 'reviews',
    activeClass: 'active'
}


class Slider {
    constructor(wrap){
        this.wrap = wrap
        this.slides = this.wrap.querySelectorAll(classes.contentWrap);
        this.slidesWrap = this.wrap.querySelector(classes.slidesWrap)
        this.dots = this.wrap.querySelectorAll(classes.dots);
        this.prev = this.wrap.querySelector(classes.prevArrow);
        this.next = this.wrap.querySelector(classes.nextArrow)
        this.slideIndex = 1;
        this.activeClass =  classes.activeClass
    }

    bindDots(){
        this.dots.forEach((dot, i) => {
            dot.addEventListener('click',(e) => {
                console.log('Dot', e.target)
              
            })
        });
    }

    bindBtns(){
        console.log(this.prev)
        this.prev.addEventListener('click', e => {
            console.log('prev', e.target)
        })

        this.next.addEventListener('click', e => {
            console.log('next', e.target)
        })
    }

    binding(){
        this.bindBtns()
        this.bindDots()
    }

    init(){
        this.binding()
    }
}

const gallery = ()  => {
    const wrapRooms =  document.getElementById(classes.idRoom);

    // const wrapReviews = document.getElementById(classes.idReviews);

    const sliderRoom =  new Slider(wrapRooms);

    sliderRoom.init();


}

export default gallery;
