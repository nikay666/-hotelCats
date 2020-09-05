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

export const timeoutForTesting = m => new Promise(r => setTimeout(r, m))

export const noItems  = (wrap) => {
    wrap.insertAdjacentHTML("afterbegin", '<h3  style="margin: 0 auto">К сожалениию, с такими характеристиками ничего нет:(</h3>');
}