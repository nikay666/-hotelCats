import burgerMenu from'./componenst/burger-menu';
import modals from './componenst/modals';
import form from './componenst/form';
import arrow from './componenst/arrow';
import gallery from './componenst/gallery';
import catalog  from  './componenst/catalog/catalog';
import filter from './componenst/catalog/filter';

try {
    burgerMenu('.burger__menu','.main__menu', 'active');
    catalog('.catalog__products');
    modals();
    form();
    arrow();
    gallery();
    filter();

} catch (error) {
    console.log(error)
}
