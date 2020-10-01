import { getTemplate} from "./catalog.template";
import { catalogWrap,toHTML, timeoutForTesting } from "../utilits";
import { typeSortFilter } from "./sort";

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

//TODO  Сделать так  чтобы  оно  работало из  разных мест, сохраняя  в  себе результат
export function getCatalogItems(json, wrap, sort = defaultSort) {
     
    typeSortFilter(sort.direction,  sort.type,  json);
    Store.setSort(sort)
    createCatalogItems(json, wrap);
}


export class Store{
    static setJSON(json){
         console.log('set', json)
        this.json=  json
    }
    static setSort(sort){
        console.log(sort)
    }
    static setFilter(filter){
        console.log(filter)
    }
   
    static getSortJson(){
        //mutation  this.json
        return this.json
    }
    static  getFilterJson(){
        //mutation  this.json
        return this.json
    }
     static async  getJSON(){
        this.getFilterJson()
        this.getSortJson()
        console.log('Store', this.json)
        return  this.json
    }

    clear(){
        this.json = []
    }
}


const catalog = async ()  =>  {
    const wrap = catalogWrap();
    if(wrap === null || wrap === undefined){
        return;
    } 
    // const  json = await getJSON();
    // const store  =  new Store()
    const  data =  await getJSON();
    Store.setJSON(data) 
    const json = await Store.getJSON();
    getCatalogItems(json, wrap);
    

};


export default catalog;