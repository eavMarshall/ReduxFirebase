import * as firebase from 'firebase';
import AllTypes from '../AllTypes'

const provider = new firebase.auth.GoogleAuthProvider();

const FirebaseMiddleware = (store)=> (next) => (action) => {
  switch(action.type) {
    case AllTypes.FireBase.signInWithRedirect :
        if (null === firebase.auth().currentUser) {
            store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, false));
            firebase.auth().signInWithRedirect(provider).then(function(result) {
                store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, true));
            }).catch(function(error) {
                store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, false));
            });
        } else {
            store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, false));
        }
    break;
    case AllTypes.FireBase.signOut :
        firebase.auth().signOut();
        store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, false));
    break;
    default: next(action);
  }
}

export default FirebaseMiddleware;