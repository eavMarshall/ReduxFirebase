import Store from './Store/Store'
import AllTypes from './Store/AllTypes'
import * as firebase from 'firebase';

Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsAppReady, true));
export { Store }

firebase.auth().onAuthStateChanged((user)=>{
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseReady, true));
    fireBaseIsReady(user);
});

const fireBaseIsReady = (isLoggedIn)=>{
    if (isLoggedIn) {
        console.log("Logged into google");
    } else {
        console.log("Logged out of google");
    }
}