const forms = (state) => {
    console.log('form');
//     const form = document.querySelectorAll('form'),
//             inputs = document.querySelectorAll('input');
    
 
//     checkNumInputs('input[name="user_phone"]');
    
//     const message = {
//         loading: 'Загрузка...',
//         success: 'Спасибо! Скоро мы с Вами свяжемся',
//         failure: 'Что-то пошло не так'
//     };

//     const postData = async (url, data) => {
//         document.querySelector('.status').textContent = message.loading;
//         let res = await fetch(url, {
//             method:"POST", 
//             body: data
//         });
//         return await res.text();
//     }   

//     const clearInpurs = () => {
//         inputs.forEach(input => {
//             input.value = '';
//         });
//     }


//     form.forEach(item => {
//         item.addEventListener('submit', (e) => {
//             e.preventDefault();

//             let statusMessage = document.createElement('div');
//             statusMessage.classList.add('status');
//             item.appendChild(statusMessage);

//             const formDate = new FormData(item);
//             if(item.getAttribute('data-calc') === 'end'){
//                 for (let key in state){
//                     formDate.append(key, state[key]);
//                 }
//             }

//             postData('assets/server.php', formDate)
//                 .then(res => {
//                     console.log(res);
//                     statusMessage.textContent = message.success;
//                 })
//                 .catch(() => {
//                     statusMessage.textContent = message.failure;
//                 })
//                 .finally(() => {
//                     clearInpurs();
//                     setTimeout(() => {
//                         statusMessage.remove();
//                     }, 5000 );
//                 })

//         });
//     });
};
export default forms;