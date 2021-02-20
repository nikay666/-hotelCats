import burgerMenu from'./componenst/burger-menu';
import modals, { initModals } from './componenst/modals';
import form from './componenst/form';
import arrow from './componenst/arrow';
import gallery from './componenst/gallery';
import catalog  from  './componenst/catalog/catalog';
import filter from './componenst/catalog/filter';

try {
    initModals();
    burgerMenu('.burger__menu','.main__menu', 'active');
    catalog();
    modals();
    form();
    arrow();
    gallery();
    filter();

} catch (error) {
    console.log(error)
}
