import { getJSON } from "./catalog";

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
            // value === 'true' ? item.classList.add('open') : item.classList.remove('open');
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
    if(target.tagName  ===  "LI"){
        changeActiveFilter(target, btnSort, items);
        sort(target.dataset.list);
    }
}

function changeActiveFilter(active, btnSort, items){
    const btnArrow = btnSort.querySelector('.btn__sort-arrow');
    let activeFilter;
    let textContent;
    
    items.forEach(item => {
        if(item.dataset.active  === 'activeFilter'){
            activeFilter = item;

            activeFilter.childNodes.forEach(child => { 
                if(child.dataset && child.dataset.content === 'text') textContent = child;
            });
        }
    });
    activeFilter.dataset.list = active.dataset.list;
    textContent.textContent = active.innerHTML;

    controlVisibleSortItems(btnArrow, items);
}

async function sort(value){
    //  сортиировка в  зависимости от фильтра
    const json  = await getJSON();
    
}