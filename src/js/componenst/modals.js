import forms from "./form";
import { getTemplateModals } from './utilits'

function bindForm(selectors){
    const popup = document.querySelector(selectors.popup),
          substrate = document.querySelector(selectors.substrate),
          form = popup.querySelector(selectors.form),
          btnClose = popup.querySelector(selectors.close),
          btnOpen = document.querySelectorAll(selectors.open),
          btnSubmit = popup.querySelector(selectors.submit), 
          activeClass= selectors.activeClass;

    const openPopup = () =>{
        form.classList.add(activeClass);
        substrate.style.display = 'block';
        popup.classList.add(activeClass);
    };

    const closePopup = (showOk = false) => {
        form.classList.remove(activeClass);
        if(showOk){
            showOkMessage(selectors, substrate, popup);
        }  else{
            substrate.style.display = 'none';
            popup.classList.remove(activeClass);
        }
        form.reset()
    };
   
    btnOpen.forEach(btn => {
        closePopup();
        btn.addEventListener('click', () => {
            openPopup();
        });
    });

    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        closePopup();
    });
    
    substrate.addEventListener('click', () => {
        closePopup();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(form)
        forms(form)
        closePopup(true);
    });
    // btnSubmit.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     forms(form)
    //     closePopup(true);
    // });

    const init = () => {
        closePopup();
    };

    init();
}
function showOkMessage(selectors, substrate, popup ) {
    const messageForm = document.querySelector(selectors.message),
          btnClose = messageForm.querySelector(selectors.close),
          btnOk  =  messageForm.querySelector(selectors.ok),
          activeClass = selectors.activeClass;

    const showModal = () => {
        messageForm.classList.add(activeClass);

        setTimeout(() => {
            closeModal();
        }, 2000);
    };

    const closeModal = () => { 
        substrate.style.display = 'none';
        messageForm.classList.remove(activeClass);
        popup.classList.remove(activeClass);
    };

    const addEventClose = () => {
        btnClose.addEventListener('click', () => {
            closeModal();
        });
        btnOk.addEventListener('click', () => {
            closeModal();
        });
        substrate.addEventListener('click', () => {
            closeModal();
        });
    }

    const init = () =>  {
        addEventClose();
        showModal();
    };

    init();
    
}


export const initModals = () => {
    const body = document.body;
    const popup =  getTemplateModals()
    body.insertAdjacentHTML('beforeend', popup)
}

const modals = () => {
    const selectors = {
        popup:'.popup',
        substrate: '.popup-substrate',
        form: '.popup__booking',
        close:  '.popup__close',
        submit: '.popups-submit',
        ok: '.btn_ok',
        message: '.popup__message',
        activeClass: 'active',
        open: '.toggle-popup'
    };

    bindForm(selectors);
    
};

  
export default modals;