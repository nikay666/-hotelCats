const HEIGHT = '800';

const showArrow = (arrow) => {
    arrow.style.visibility = 'visible';
    arrow.style.opacity = '1';
    arrow.dataset.show = 'true';
};

const hideArrow = arrow =>{
    arrow.style.visibility = 'hidden';
    arrow.style.opacity = '0';
    arrow.dataset.show = 'false';
};

const scrolling = (arrow) => {
    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop >= HEIGHT ){
            if(arrow.dataset.show === 'false'){
                showArrow(arrow);
            }
        } else if(arrow.dataset.show === 'true'){
            hideArrow(arrow);
        }
    });
};

const createArrow = () => {
    const arrow = `
    <div class="btn__arrow" data-show="false">
        <span class="material-icons btn__arrow-top" >expand_less</span>
    </div>
    `;

    document.body.insertAdjacentHTML("beforeend", arrow);
};

const scrollToTop = () => {
    console.log('click')
    window.scrollTo({
        top:0, 
        behavior: "smooth"
    });
};

const arrow = () => {
    createArrow();
    const arrow = document.querySelector('.btn__arrow');

    scrolling(arrow);
    arrow.addEventListener('click', scrollToTop);

};

export default arrow;