import { getTemplate} from "./catalog.template";
import { catalogWrap,toHTML, timeoutForTesting } from "../utilits";
import { typeSortFilter } from "./sort";
import   {filters} from './filter'


const  url  = './assets/catalogList.json';


export const createCards = (data) => {

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
        // await timeoutForTesting(3000)
        return  json;

    } catch (error) {
        console.log(error);
    }
}





export function  createCatalogItems(json, wrap){
    const cards = createCards(json);
    toHTML(cards, wrap);
}

const defaultSort =  {
    direction: 'top',
    type: 'square'
};
const defaultFilter = {}


export function getSortJSON(json,sort){
    typeSortFilter(sort.direction,  sort.type,  json);
    return  json
} 

//TODO  Сделать так  чтобы  оно  работало из  разных мест, сохраняя  в  себе результат
export function getCatalogItems(json, wrap, sort = defaultSort , p_filter ) {
    // const store = json
    // let sort = p_sort || defaultSort
    // let filter =  p_filter || defaultFilter

    // typeSortFilter(sort.direction,  sort.type,  store);
    const state =  getSortJSON(json,sort)

    createCatalogItems(state, wrap);
}


const catalog =async ()  =>  {
    const wrap = catalogWrap();
    if(wrap === null || wrap === undefined){
        return;
    } 
    const  json = await getJSON();

    getCatalogItems(json, wrap);
};


export default catalog;