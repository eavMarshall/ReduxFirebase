# ReduxFirebase template
This is a template to start building redux/firebase application with webpack and babel.

```
npm install //To install dependency packages
npm start   //To build/watch to /public/js/build.js
npm test    //To build/watch /scr/Tests/public/testBundle.js
npm build   //To build with -p to /public/js/build.js
```

### Goals
- Allows you to login, log out with google authentication
- Have state tests
- Have view tests
- Have firebase tests
- Having views files seperated from application (store) logic

### TODO
- Decide which view framework to use (or use more than one)
- Build tests
	- firebase tests
	- view tests
- Build insert, update, query, realtime db wrappers

## Application layout
/ReduxFirebase/webpack.config.js
Webpack config

/ReduxFirebase/webpack-test.config.js
Webpack test config

## Tests
### Store tests
Current tests @ \ReduxFirebase\src\Tests\Areas

Add tests and export them like so
```javascript
const AppStatusReducer_FireBaseLoggedIn_False_IsReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, false));
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsAppReady, true));
    if (true == Store.getState().AppStatusReducer.isAppReady) return true;

    return false;
}
export { AppStatusReducer_FireBaseLoggedIn_False_IsReady_To_True }
```

Then add the es6 module to the esModuleTestRunner in \src\Tests\index.js
```javascript
import * as TestsAppStatusReducer from './Areas/TestsAppStatusReducer'
Helpers.esModuleTestRunner('AppStatusReducer', TestsAppStatusReducer);
```

Run test by running \ReduxFirebase\src\Tests\public\index.html on a webserver.
You'll get an output like:

![Alt text](https://eavmarshall.github.io./ReduxFirebase/resources/testoutput.PNG "")

Refreshing the page will re-run the tests

### View tests
TODO

### Firebase wrapper tests
TODO
