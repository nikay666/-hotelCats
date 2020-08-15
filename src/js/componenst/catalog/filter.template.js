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
