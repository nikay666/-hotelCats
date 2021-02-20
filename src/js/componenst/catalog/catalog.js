import { getTemplate} from "./catalog.template";
import { catalogWrap,toHTML, getEmptyHTMLForWrap, noItems } from "../utilits";
import { typeSortFilter } from "./sort";
import { filters } from "./filter";
import firebase from "firebase/app";
import 'firebase/database';
import { firebaseConfig } from "../../filrebaseConfig";

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


export const createCards = (data) => {
    let cards = '';
    data.forEach(item => {
        cards += getTemplate(item);
    });
    return  cards;
};

export async function getJSON(){
    const data = database.ref("/products").get().then(function(snapshot) {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return snapshot.val()
        }
        else {
            console.log("No data available");
        }
        }).catch(function(error) {
        console.error(error);
    });

    return data
}

export function createCatalogItems(json, wrap){
    const cards = createCards(json);
    toHTML(cards, wrap);
}

const defaultSort =  {
    direction: 'top',
    type: 'square'
};


export async  function getCatalogItems() {
    const  json = await Store.getJSON()
    const wrap = getEmptyHTMLForWrap(catalogWrap());
    json.length === 0 ? noItems(wrap) : createCatalogItems(json, wrap);
}

export class Store{
    
    static async getJSONFromServer(){
        this.json  =  await getJSON();
    }

    static async init(){
        this.getJSONFromServer()
        this.sort = defaultSort
        this.filter = {}
    }
    static setSort(sort){
        this.sort = sort 
    }
    static setFilter(filter){
        this.filter = filter 
    } 

    static getSortJson(){
        this.json = typeSortFilter(this.sort.direction, this.sort.type,  this.json)
    }
    static  getFilterJson(){
        this.json = filters(this.json, this.filter.squareCheck, this.filter.optionsCheck, this.filter.price)
    }

    static async  getJSON(){
        await this.getJSONFromServer()
        const value = Object.keys(this.filter).length !== 0

        if(value){
            this.getFilterJson()
        }
        this.getSortJson()
        return  this.json
    }
}

const  isEmptyCatalog = () =>{ 
    const wrap = catalogWrap();
    if(wrap === null || wrap === undefined){
        return true
    } 
}

const catalog = async ()  =>  {
    if(isEmptyCatalog()){
        return
    }
    await Store.init() 
    getCatalogItems();
};


export default catalog;