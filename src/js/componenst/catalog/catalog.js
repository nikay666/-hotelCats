import { getTemplate} from "./catalog.template";
import { catalogWrap,toHTML, timeoutForTesting, getEmptyHTMLForWrap } from "../utilits";
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
export async  function getCatalogItems() {
    // console.log('SORT',sort)
    // Store.setSort(sort)

    // const  json =  await Store.getJSON();
    // typeSortFilter(sort.direction,  sort.type,  json);

    let wrap = catalogWrap();
    getEmptyHTMLForWrap(wrap);

    const  json = await Store.getJSON()
    console.log('getCataloggItems', json)

    createCatalogItems(json, wrap);
}


export class Store{
    static setJSON(json){
        this.sort =  defaultSort
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
        console.log('FILTER', this.filter)
    } 

    static getSortJson(){
        // getCatalogItems(this.sort.direction, this.sort.type, this.json)
        this.json = typeSortFilter(this.sort.direction, this.sort.type,  this.json)
        console.log('getSortJSON',this.json)
        // return this.json
    }
    static  getFilterJson(){
        console.log('BEFORE', this.json)
        this.json = filters(this.json, this.filter.squareCheck, this.filter.optionsCheck, this.filter.price)
        console.log('getFIlterJSON', this.json)
    }
     static async  getJSON(){
        //

        const value = Object.keys(this.filter).length !== 0
        if(value){
            this.getFilterJson()
        }
        console.log('SORT',this.sort)
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
    // const json = await Store.getJSON();
    getCatalogItems();
    

};


export default catalog;