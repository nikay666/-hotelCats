import { getTemplate} from "./catalog.template";
import modals from "../modals";

const  url  = './assets/catalogList.json';


const createCards = (data) => {
    console.log(data);
    let cards = '';
    data.forEach(item => {

        cards += getTemplate(item);
    });

    return  cards;

};

const toHTML = (cards,  wrap) => {
    wrap.insertAdjacentHTML("afterbegin", cards);
    modals();
};

export async function getJSON(){
    try {
        const response = await fetch(url);
        const  json = await response.json();
        return  json;

    } catch (error) {
        console.log(error);
    }
}

async function getCatalogItems(wrap) {
    try {
        // const response = await fetch(url);
        const  json = await getJSON();
        const cards = createCards(json);
        toHTML(cards, wrap);

    } catch (error) {
        console.log(error);
    }
}


const catalog = (selectorCatalog)  =>  {
    const wrap = document.querySelector(selectorCatalog);
    if(wrap === null || wrap === undefined){
        return;
    } 

    getCatalogItems(wrap);
};


export default catalog;