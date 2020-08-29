import { getJSON } from "./catalog";
import { bindBtns, initialFilter } from './filter.template';
import {defaultBtnSort, bindBtnSort} from './sort';


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
            console.log('checkbox')
            controlCheckboxsFilter(target);

        }
    });
}

//  служебная
function controlCheckboxsFilter(target){
    if(target.dataset.filter ===  'square'){
        console.log('square');
    }
    if(target.dataset.filter ===  'equipment'){
        console.log('equipment');
    }
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
        filterTypes(dataAttr);
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
    const data = await getJSON();
    filtersControl(data, nodes);
    filterSortInit(nodes);
};


export default filter;



function maskInputsOnlyNumers(e){
    console.log(e.key)
    if(e.key.match(/\D/ig) ) {
        if(e.key === 'Backspace' ) return;
        e.preventDefault();
    }
}