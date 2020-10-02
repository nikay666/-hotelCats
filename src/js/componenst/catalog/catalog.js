import { getTemplate} from "./catalog.template";
import { catalogWrap,toHTML, timeoutForTesting } from "../utilits";
import { typeSortFilter } from "./sort";
import { filters } from "./filter";

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
        this.sort =  {}
        this.filter =  {}
        console.log('set', json)
        this.json=  json
    }
    static setSort(sort){
        this.sort = sort 
        console.log(this.sort)
    }
    static setFilter(filter){
        this.filter = filter 
        console.log(this.filter)
    }
   
    static getSortJson(){
        getCatalogItems(this.sort.direction, this.sort.type, this.json)
        return this.json
    }
    static  getFilterJson(){
        filters(this.json, this.filter.squareCheck, this.filter.optionsCheck, this.filter.price)
        return this.json
    }
     static async  getJSON(){
        //
        const value = Object.keys(this.sort).length !== 0  && Object.keys(this.filter).length !== 0
        if(value){
            this.getFilterJson()
            this.getSortJson()
        }
      
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