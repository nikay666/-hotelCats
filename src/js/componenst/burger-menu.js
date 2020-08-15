const burgerMenu = (selectorBurger, selectorMenu, activeClass) => {
    const btnBurger = document.querySelector(selectorBurger),
          menu = document.querySelector(selectorMenu);
    
    btnBurger.classList.remove(activeClass);  
    menu.classList.remove(activeClass);


    btnBurger.addEventListener('click', () => {
        if(menu.classList.contains(activeClass)){
            remove(btnBurger, menu, activeClass);
        } else{
             add(btnBurger, menu, activeClass);
        }
    });
    
};

function remove(btn, menu, cls){
    btn.classList.remove(cls);
    menu.classList.remove(cls);

}
function add(btn, menu, cls){
    btn.classList.add(cls);
    menu.classList.add(cls);
}


export default  burgerMenu;
