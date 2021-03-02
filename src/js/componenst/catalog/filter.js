import { getCatalogItems, Store } from "./catalog";
import { bindBtns, initialFilter, filterPrice, filterSquare, filterOptions } from './filter.template';
import {defaultBtnSort, bindBtnSort} from './sort';
import Loader from "./Loader";

function popupFilter(nodes){
    bindBtns(nodes);
}

function listenerFilerEvents(wrap){
    const inputs = wrap.querySelectorAll('[data-filter="price"]');
    const  buttons = wrap.querySelectorAll('[data-filter="button"]');

    inputs.forEach(input =>{
       input.addEventListener('input', (e) => {
           controlInputsFilter(wrap)
       });
    });

    buttons.forEach(button => {
        button.addEventListener('click', (e) => { 
            const target = e.target;
            if(target.dataset.f_button){
                controlButtonsFilter(wrap);
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

export  function getChecketInputs(wrapFilter){
    const inputs = wrapFilter.querySelectorAll(`[data-filter]`);
    const checked = getChecked(inputs); 
    const optionsCheck = getChekedByType(checked, 'options')
    const squareCheck = getChekedByType(checked, 'square')

    return  {
        inputs,checked,optionsCheck,squareCheck
    }
}
//  служебная
export async function controlInputsFilter(wrapFilter ){
    Loader(true);
    const  inputsObj = getChecketInputs(wrapFilter)
    const price = getPrice(inputsObj.inputs, 'price')

    const filterObj = {
        squareCheck:  inputsObj.squareCheck,
        optionsCheck: inputsObj.optionsCheck,
        price: price
    }

    Store.setFilter(filterObj)
    Store.render()
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

const isMoreZero = (value) =>{
    if(value >  0 ){
        return true
    }
    return  false
}

export function filters(json, filterList){
    let res = json;

    if(isMoreZero(filterList.squareCheck.length) ){
        res =  filterSquare(res,  filterList.squareCheck);
    }
    if(isMoreZero(filterList.optionsCheck.length)){
        res = filterOptions(res,  filterList.optionsCheck);
    }
    if(isMoreZero(filterList.price.size)){
        res = filterPrice(res, filterList.price)
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
function controlButtonsFilter(target,wrapFilter){
    if(target.dataset.f_button === 'clear'){
        const inputs = wrapFilter.querySelectorAll(`[data-filter]`);
        inputs.forEach(input =>{ 
            input.checked ?  (input.checked = false )
            : input.value ? input.value='' : null 
        })
        controlInputsFilter(wrapFilter)
    }
}

function filterSortInit (nodes) {
    const btnSort = nodes.btnControlSort;
    const items = nodes.btnControlSort.querySelectorAll('li');
    defaultBtnSort(items);
    bindBtnSort(btnSort, items);
}

const filter = async () => {
    const nodes = initialFilter();
    if(nodes === false) return;
    popupFilter(nodes); 
    listenerFilerEvents(nodes.wrapFilter);
    filterSortInit(nodes);
};

export default filter;



