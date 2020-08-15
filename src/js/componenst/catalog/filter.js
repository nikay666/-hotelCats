import { getJSON } from "./catalog";
import { bindBtns, initialFilter } from './filter.template';


function popupFilter(nodes){
    bindBtns(nodes);
}

function filterTypes(){
    //???
    //сделать  функцию,которая будет фильтроватьт массив data по атрибутам
    //если это не массив, то преобразоват
    //возвращаем отфильтрованный массив и  отрисовываем
    //возможность на будущее: прелооадер,  пока происходит фильтрация    
}

function filtersControl(data, nodes){
    nodes.filterItems.forEach(item => {
        const dataAttr = item.dataset.filter;
        filterTypes(dataAttr);
    });
}

const filter = async () => {
    const nodes  = initialFilter();
    if(nodes  ===  false) return;
    popupFilter(nodes);
    const data = await getJSON();
    filtersControl(data, nodes);
};




export default filter;


