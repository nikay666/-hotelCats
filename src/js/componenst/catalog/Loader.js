const Loader  = (value) => {
    if(value){
        const loader = `
        <div id="loader" class="loader">
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        `;
        const wrap = document.querySelector('body');
    
        wrap.insertAdjacentHTML("afterbegin", loader);
    } else{
        const loader = document.getElementById('loader');
        loader.remove();
    }


}
export  default Loader;