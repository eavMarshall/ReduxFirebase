import Store from './Store/Store'
import AllTypes from './Store/AllTypes'
import * as firebase from 'firebase';

import './config.js'

Store.dispatch(AllTypes.getType(AllTypes.App.setIsAppReady, true));

firebase.auth().onAuthStateChanged((user)=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseReady, true));
    fireBaseIsReady(user);
});

const fireBaseIsReady = (isLoggedIn)=>{
    if (isLoggedIn) {
        console.log("Firebase is ready and Logged in");
    } else {
        console.log("Firebase is ready and NOT Logged in");
    }
}