import { getJSON } from "./catalog";


export const initialFilter = () =>{
    const wrapFiltertns = document.querySelector('.catalog__header-buttons');

    if(wrapFiltertns === undefined || wrapFiltertns === null){
        return false;
    }

    const btnFilters =  wrapFiltertns.querySelector('.btn__filters');
    const btnClose  = document.querySelector('.filter-close');
    const btnSort  = wrapFiltertns.querySelector('.btn__sort');
    const filterAside = document.querySelector('.catalog__filters');
    const filterItems  = document.querySelectorAll('.filter-item');
    const substrate  = document.querySelector('.filter-substrate');
    return {
        wrapControlBtns:  wrapFiltertns,
        btnMobileFilters: btnFilters,
        btnMobilePopupClose: btnClose,
        btnControlSort: btnSort,
        wrapFilter: filterAside,
        filterItems: filterItems,
        popupSubstrate: substrate
    };
};


function chengeClass (className, change, node)  {
    if(change === 'add'){
        node.popupSubstrate.classList.add(className);
        node.wrapFilter.classList.add(className);
    } else {
        node.popupSubstrate.classList.remove(className);
        node.wrapFilter.classList.remove(className);
    }
}

export  const bindBtns = (nodes) => {
    const activeClass = 'active';


    nodes.btnMobileFilters.addEventListener('click', () =>{ 
        chengeClass(activeClass, 'add',  nodes);
    });

    nodes.btnMobilePopupClose.addEventListener('click', () =>{
        chengeClass(activeClass, 'remove', nodes);
    });
};

function controlArrowSort(arrow){
    if(arrow.dataset.sort === "true"){
        arrow.style.transform = "translateY(-50%) rotate(180deg)";
    }else{
        arrow.style.transform = '';
    }
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

        controlEventsSortItems(target, items);
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

     }else if(target.classList.contains('btn__sort-arrow') && target.dataset.sort === "true"){
         target.dataset.sort =  'false';
         controlArrowSort(target);
         defaultBtnSort(items);
     }
}

function controlEventsSortItems(target, items){ 
    if(target.tagName  ===  "LI"){
        console.log(target.dataset.list);
        changeActiveFilter(target, items);
        sort(target.dataset.list);
    }
}

function changeActiveFilter(active, items){
    console.log(items);
    console.log(active)

    items.forEach((item, i) =>{

    });
}

async function sort(value){
    //  сортиировка в  зависимости от фильтра
    const json  = await getJSON();
    
}