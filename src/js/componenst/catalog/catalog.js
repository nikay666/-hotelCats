import { getTemplate} from "./catalog.template";
import { catalogWrap,toHTML, getEmptyHTMLForWrap, noItems } from "../utilits";
import { typeSortFilter } from "./sort";
import { filters } from "./filter";
import firebase from "firebase/app";
import 'firebase/database';
import { firebaseConfig } from "../../filrebaseConfig";
import Loader from "./Loader";

firebase.initializeApp(firebaseConfig);
const database = firebase.database().ref("/products");

export const createCards = (data) => {
    let cards = '';
    data.forEach(item => {
        cards += getTemplate(item);
    });
    return  cards;
};

export async function getJSON(){
    Loader(true);
    const data = database.get().then(function(snapshot) {
        if (snapshot.exists()) {
            return snapshot.val();
        }
        else {
            console.log("No data available");
        }
        }).catch(function(error) {
        console.error(error);
    });
    Loader(false);
    return data;
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
    const json = await Store.getJSON();
    const wrap = getEmptyHTMLForWrap(catalogWrap());
    json.length === 0 ? noItems(wrap) : createCatalogItems(json, wrap);
}

export async  function getCatalogItemsJson(json) {
    const wrap = getEmptyHTMLForWrap(catalogWrap());
    json.length === 0 ? noItems(wrap) : createCatalogItems(json, wrap);
}

const getSortQuery = async (sort) => {
    return await database.orderByChild(sort.type).get().then(function(snapshot) {
        if (snapshot.exists()) {
            return snapshot.val()
        }
        else {
            console.log("No data available");
        }
        }).catch(function(error) {
        console.error(error);
    });
}

export class Store{
    
    static async getJSONFromServer(){
        Loader(true);
        this.json  =  await getJSON();
        Loader(false);
    }

    static async init(){
        this.getJSONFromServer();
        this.sort = defaultSort;
        this.filter = {};
    }
    static setSort(sort){
        this.sort = sort;
    }
    static setFilter(filter){
        this.filter = filter ;
    } 

    static async getSortJson(){
        const data = await getSortQuery(this.sort)
        this.sort.direction === 'top' ?  this.json = data : this.json = data.reverse();
    }

    static getFilterJson(){
        this.json = filters(this.json, this.filter)
    }


    static async  getJSON(){
        await this.getJSONFromServer()
        const value = Object.keys(this.filter).length !== 0

        await this.getSortJson()
        if(value){
            this.getFilterJson()
            return  this.json
        }
   
        return  this.json
    }

    static async render(){
        await this.getSortJson()
        this.getFilterJson()
        getCatalogItemsJson(this.json)
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