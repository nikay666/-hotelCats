import modals from "./modals";

export function catalogWrap(){
    return document.querySelector('.catalog__products');
}

export const toHTML = (cards,  wrap) => {
    wrap.insertAdjacentHTML("afterbegin", cards);
    modals();
};

export function getEmptyHTMLForWrap(wrap){
    wrap.innerHTML  =  '';
}