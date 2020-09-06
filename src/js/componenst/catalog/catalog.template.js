export  function getButtonPopup(){
    return  `
    <button class="btn__booking btn__booking-dark toggle-popup" data-purpose="booking">Забронировать
        <span class="btn__booking-icon">
            <svg class="btn__booking-img svg" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8031 6.52459C13.8387 8.22475 14.3435 13.1874 17.5591 13.1874C18.9459 13.1874 20.1462 12.1449 20.6806 10.812C21.9148 7.73361 19.3483 5.06439 16.8031 6.52459Z" fill="#FFFEFD"/>
                <path d="M13.7585 7.13911C17.3153 7.13911 18.3803 1.0992 15.0011 0.106215C13.4616 -0.346048 11.7109 0.739136 11.1486 2.72287C10.5177 4.94631 11.7589 7.13911 13.7585 7.13911Z" fill="#FFFEFD"/>
                <path d="M12.8437 17.8903C12.3498 17.7537 11.4731 17.6658 10.5555 17.6531C9.58551 17.6389 8.56997 17.7084 7.9129 17.8903C6.13824 18.3847 3.72348 17.1886 4.25331 14.7045C4.74338 12.408 6.50422 12.5389 6.92062 10.3625C7.34017 8.16298 8.97061 7.10147 10.5555 7.18444C12.0223 7.26144 13.4499 8.31922 13.8389 10.363C14.2529 12.5409 16.0101 12.4088 16.4994 14.7045C17.0312 17.1906 14.6114 18.3802 12.8437 17.8903Z" fill="#FFFEFD"/>
                <path d="M7.49859 7.13932C8.50467 7.13932 9.36873 6.55499 9.84887 5.66068C11.2762 3.00141 8.93197 -0.680001 6.25571 0.10841C2.87074 1.10414 3.94372 7.13932 7.49859 7.13932Z" fill="#FFFEFD"/>
                <path d="M5.89091 11.2099C7.03297 8.41561 4.32591 5.00232 1.74052 6.07629C-1.37374 7.36979 -0.000207816 12.9487 3.42404 12.9487C4.52296 12.9487 5.45682 12.2722 5.89091 11.2099Z" fill="#FFFEFD"/>
                <path d="M12.8437 17.8902C12.3497 17.7537 11.473 17.6657 10.5554 17.653V7.1844C12.0223 7.2614 13.4498 8.31917 13.8388 10.363C14.2528 12.5408 16.01 12.4087 16.4994 14.7045C17.0311 17.1905 14.6113 18.3801 12.8437 17.8902Z" fill="#FFFEFD"/>
            </svg>
        </span>
    </button>
    `;
}

export function getTemplate(item){
    return `
    <div class="card">
        <div class="card__img">
            <img src="${item.img}" alt="">
        </div>
        <div class="card__content">
            <p class="card-title">${item.type}</p>
            <div class="card__desc">
                <p class="card-text">Размеры (ШхГхВ) - ${item.size}</p>
                <p class="card-text">Площадь - ${item.square} м<sup>2</sup></p>

                <div class="card__group">
                    <p class="card-text">Оснащение номера</p>
                    <div class="card__group-icons">

                        ${getOptions(item.options)}
                    </div>
                </div>
                <p class="card-text">Цена за сутки: <span class="card-price">${item.price}₽</span></p>
            </div>
            ${getButtonPopup()}
        </div>
    </div>
    `;
}
function formatName(str){
    return str[0].toUpperCase() + str.slice(1);
}

export function getOptions(options){
    let res = '';
    options.forEach(el => {
        res  +=  `
        <div data-icon="${el.data}" class="prompt-icon" aria-label="${formatName(el.name)}">
            <img src="${el.icon}" alt="">
            <span class="prompt-text" aria-label="${formatName(el.name)}">
                ${formatName(el.name)}
            </span>
        </div>
        `;
    });
    return res;
}