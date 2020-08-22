import { getTemplate} from "./catalog.template";
import { catalogWrap,toHTML } from "../utilits";
import { typeSortFilter } from "./sort";

const  url  = './assets/catalogList.json';


export const createCards = (data) => {
    console.log(data);
    let cards = '';
    data.forEach(item => {

        cards += getTemplate(item);
    });

    return  cards;

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

export function  createCatalogItems(json, wrap){
    const cards = createCards(json);
    toHTML(cards, wrap);
}

async function getCatalogItems(wrap) {
    try {
        const  json = await getJSON();
        const defaultSort =  {
            direction: 'top',
            type: 'square'
        };

        typeSortFilter(defaultSort.direction,  defaultSort.type,  json);
        createCatalogItems(json, wrap);

    } catch (error) {
        console.log(error);
    }
}


const catalog = ()  =>  {
    const wrap = catalogWrap();
    if(wrap === null || wrap === undefined){
        return;
    } 

    getCatalogItems(wrap);
};


export default catalog;