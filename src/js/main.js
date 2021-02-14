import burgerMenu from'./componenst/burger-menu';
import modals, { initModals } from './componenst/modals';
import form from './componenst/form';
import arrow from './componenst/arrow';
import gallery from './componenst/gallery';
import catalog  from  './componenst/catalog/catalog';
import filter from './componenst/catalog/filter';
import firebase from "firebase/app";
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCWGbl-ILVQvTCmGN9OAQghLnMcEKSFvm8",
    authDomain: "hotel-cats.firebaseapp.com",
    projectId: "hotel-cats",
    storageBucket: "hotel-cats.appspot.com",
    messagingSenderId: "416318614306",
    appId: "1:416318614306:web:2eff4194dfa87acdde537b"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
console.log(database)


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
