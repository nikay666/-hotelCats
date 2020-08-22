import { getJSON, createCards, createCatalogItems } from "./catalog";
import { catalogWrap,toHTML } from "../utilits";

function controlArrowSort(arrow){
    if(arrow.dataset.sort === "true"){
        arrow.style.transform = "translateY(-50%) rotate(180deg)";
    }else{
        arrow.style.transform = '';
    }
}

function stylesForActiveFilter(items, value){
    items.forEach(item => {
        if(item.dataset.active  === 'activeFilter'){
            if(value === 'true'){
                item.classList.add('open');

            }else {
                item.classList.remove('open');
            }
        }
    });
}

export function defaultBtnSort(items){
    items.forEach((item,  i) =>{
        i !== 0 ? item.classList.remove('active') : item.classList.add('active');  
    });
}

export function bindBtnSort(btnSort, items){
    btnSort.addEventListener('click', (e) => {
        const target = e.target;

        controlVisibleSortItems(target, items);
        controlEventsSortItems(target, btnSort, items);
    });

}

function controlVisibleSortItems(target, items){
    if(target.classList.contains('btn__sort-arrow') && target.dataset.sort === "false"){
        items.forEach(item => {
             if(!item.classList.contains('active')){
                 item.classList.add('active');
             }
        });
        target.dataset.sort = "true";
        controlArrowSort(target);
        stylesForActiveFilter(items, target.dataset.sort);
  

     }else if(target.classList.contains('btn__sort-arrow') && target.dataset.sort === "true"){

        target.dataset.sort =  'false';
        controlArrowSort(target);
        defaultBtnSort(items);
        stylesForActiveFilter(items, target.dataset.sort);
     }
}

function controlEventsSortItems(target, btnSort, items){ 
    if(target.tagName  ===  "LI" &&  target.dataset.item === "true" ){
        changeActiveFilter(target, btnSort, items);
        sort(target.dataset.list);
    }
}

function changeActiveFilter(active, btnSort, items){
    const btnArrow = btnSort.querySelector('.btn__sort-arrow');
    const activeFilter = btnSort.querySelector('[data-active="activeFilter"]');
    const textContent = activeFilter.querySelector('[data-content="text"]') ;

    activeFilter.dataset.list = active.dataset.list;
    textContent.textContent = active.textContent;

    controlVisibleSortItems(btnArrow, items);
}


async function sort(value){
    const json  = await getJSON();

    const direction =  value.split('-')[0];
    const  type = value.split('-')[1];

    typeSortFilter(direction, type, json);

    console.log(json);
    let wrap = catalogWrap();
    wrap.innerHTML  =  '';
    createCatalogItems(json, wrap);

}

export function typeSortFilter(direction, type, json){
    if(direction === 'top'){
        topFilter(type, json);
    }
    if(direction === 'bottom'){
        bottomFilter(type, json);
    }
}

function topFilter(type, json){
    json.sort((a,b) => {
        if(a[type] > b[type] ){
            return 1;
        }
        if(a[type] < b[type]){
             return -1;
        }
        return 0;
     });
}

function bottomFilter(type, json){
    json.sort((a,b) => {
        if(a[type] < b[type] ){
            return 1;
        }
        if(a[type] > b[type]){
             return -1;
        }
        return 0;
    });
}
