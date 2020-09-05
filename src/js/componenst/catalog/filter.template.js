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



export function filterOptions(res, optionsCheck ){
    res = res.filter(item => {
        let r =  false;
        optionsCheck.forEach(check => { 
            item.options.forEach(op =>{  
                if(op.data  === check['options'].id)  r = true 
            })
        })
        return r;
    });
    return res;
}

export function filterSquare(res, squareCheck ){
    res = res.filter(item => {
        let r =  false;
        squareCheck.forEach(check => {
            if(item.square === check['square'].id) r  = true
        })
        return r;
    });
    return res;
}

export function filterPrice(res, price){
    const to = price.get('to')
    const from = price.get('from')

    if(to){
    res = res.filter(item  =>  {
        let r = false;
        if(+item.price <= +to) r  = true;
        return r;
    })
    }
    if(from){
    res = res.filter(item  =>  {
        let r = false;
        if(+item.price >= +from) r  = true;
        return r;
        })
    }
    return res;
}