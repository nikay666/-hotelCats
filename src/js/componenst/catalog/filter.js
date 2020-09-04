import { getJSON, createCatalogItems } from "./catalog";
import { bindBtns, initialFilter } from './filter.template';
import {defaultBtnSort, bindBtnSort} from './sort';
import Loader from "./Loader";
import { catalogWrap, getEmptyHTMLForWrap } from "../utilits";


function popupFilter(nodes){
    bindBtns(nodes);
}

function listenerFilerEvents(wrap){
    const inputs = wrap.querySelectorAll('[data-filter="price"]');
    const  buttons = wrap. querySelectorAll('[data-filter="button"]');

    inputs.forEach(input =>{
       input.addEventListener('keydown', (e) => {
           const  target =  e.target;
           maskInputsOnlyNumers(e);
   
           console.log(target.value)
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
            controlCheckboxsFilter(target, wrap);

        }
    });
}
//  служебная
async function controlCheckboxsFilter(target, wrapFilter){
    Loader(true);
    const inputs = wrapFilter.querySelectorAll(`[data-filter]`);
    const checked =  []; 

    inputs.forEach(input => {
       if(input.checked === true) checked.push({[input.dataset.filter]: input}) 
    });
    console.log('checked',checked)

    const squareCheck = checked.filter(check => {
        if(check['square']) return true
    })
    const squareOptions = checked.filter(check => {
        if(check['options']) return true
    })

    const json  = await getJSON();

    const res = filters(json, squareCheck, squareOptions);

    let wrap = catalogWrap();
    getEmptyHTMLForWrap(wrap);

    res.length === 0 ? 
    noItems(wrap)
    : createCatalogItems(res, wrap);

    Loader(false)
}

function  noItems(wrap){
    wrap.insertAdjacentHTML("afterbegin", '<h3>К сожалениию, с такими характеристиками ничего нет:(</h3>');
}
function filters(json, squareCheck, squareOptions){
    let res = json;
    if(squareCheck.length !==  0 ){
        res = res.filter(item => {
            let r =  false;
            console.log(item)
            squareCheck.forEach(check => {
                console.log(check['square'].id)
                if(item.square === check['square'].id) r  = true
            })
            return r;
        });
    }
    if(squareOptions.length !== 0){
        res = res.filter(item => {
            let r =  false;
            squareOptions.forEach(check => { 
                item.options.forEach(op =>{  
                    if(op.data  === check['options'].id)  r = true 
                })
            })
            return r;
        });
    }
    console.log(res);
    return res

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

    console.log(nodes)
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
    console.log(e.key)
    if(e.key.match(/\D/ig) ) {
        if(e.key === 'Backspace' ) return;
        e.preventDefault();
    }
}


