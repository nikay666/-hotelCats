import { getJSON, createCatalogItems } from "./catalog";
import { bindBtns, initialFilter, filterPrice, filterSquare, filterOptions } from './filter.template';
import {defaultBtnSort, bindBtnSort} from './sort';
import Loader from "./Loader";
import { catalogWrap, getEmptyHTMLForWrap, noItems } from "../utilits";


function popupFilter(nodes){
    bindBtns(nodes);
}

function listenerFilerEvents(wrap){
    const inputs = wrap.querySelectorAll('[data-filter="price"]');
    const  buttons = wrap. querySelectorAll('[data-filter="button"]');

    inputs.forEach(input =>{
       input.addEventListener('keyup', (e) => {
           maskInputsOnlyNumers(e);
           controlInputsFilter(wrap)
       });
    });

    buttons.forEach(button => {
        button.addEventListener('click', (e) => { 

            const target = e.target;
            if(target.dataset.f_button){
                controlButtonsFilter(target);
            }
        });
    });

    wrap.addEventListener('click', (e) => {
        const target = e.target;

        if(target.type === "checkbox"){
            controlInputsFilter(wrap);

        }
    });
}


//  служебная
async function controlInputsFilter(wrapFilter){
    Loader(true);
    const inputs = wrapFilter.querySelectorAll(`[data-filter]`);
    const checked =  getChecked(inputs); 
    const optionsCheck = getChekedByType(checked, 'options')
    const squareCheck = getChekedByType(checked, 'square')
   
    const price = getPrice(inputs, 'price')

    const json  = await getJSON();
    const res = filters(json, squareCheck, optionsCheck, price);

    let wrap = catalogWrap();
    getEmptyHTMLForWrap(wrap);
    res.length === 0 ? noItems(wrap) : createCatalogItems(res, wrap);
    Loader(false)
}

function getPrice(inputs,  type){
    const price = new Map();
    inputs.forEach(input => { 
        if(input.dataset.filter ===  type){
            if(input.value  === undefined  || input.value  === '') return;
            input.dataset.price === 'from' 
            ? price.set('from', input.value )  
            : price.set('to', input.value )  
        }
    })
    return price
}

function filters(json, squareCheck, optionsCheck, price){
    let res = json;

    if(squareCheck.length !==  0 ){
        res =  filterSquare(res,  squareCheck);
    }
    if(optionsCheck.length !== 0){
        res = filterOptions(res,  optionsCheck);
    }
    if(price.size > 0){
        res = filterPrice(res, price)
    }

    return res
}

//  служебная
function getChecked(inputs){
    const checked  = [];
    inputs.forEach(input => {
        if(input.checked === true) checked.push({[input.dataset.filter]: input}) 
    });
    return checked
}

//  служебная
function getChekedByType(arr, type){
    return arr.filter(check => {
        if(check[type]) return true
    })
}


//  служебная
function controlButtonsFilter(target){
    if(target.dataset.f_button === 'accept'){
        console.log('accept');
    }
    if(target.dataset.f_button === 'clear'){
        console.log('clear');
    }
}

function filtersControl(data, nodes){
    listenerFilerEvents(nodes.wrapFilter);
    nodes.filterItems.forEach(item => {
        const dataAttr = item.dataset.filter;
        console.log(dataAttr)
    });
}

function filterSortInit (nodes) {
    const  btnSort =   nodes.btnControlSort;
    const items = nodes.btnControlSort.querySelectorAll('li');
    defaultBtnSort(items);
    bindBtnSort(btnSort, items);
}

const filter = async () => {

    const nodes  = initialFilter();

    if(nodes  ===  false) return;
    popupFilter(nodes);
    Loader(true);

    const data = await getJSON();
    Loader(false);
    
    filtersControl(data, nodes);
    filterSortInit(nodes);
};

export default filter;


//  служебная
function maskInputsOnlyNumers(e){
    if(e.key.match(/\D/ig) ) {
        if(e.key === 'Backspace' ) return;
        e.preventDefault();
    }
}


