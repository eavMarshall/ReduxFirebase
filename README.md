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

**Design expectations**

All reducers are expected to implement RESET_STORE to reset the reducers state to it's default state. Before every function that is found inside an es6 module is executed this action is dispatched.
Doing this will ensure each test will not pass on side effects to another test.

While building tests this command will watch any changes in your test scripts and build the output .js file
```
npm test 
```

Add tests to a es6 module and export them like so
```javascript
const AppReducer_FireBaseLoggedIn_False_IsReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, false));
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsAppReady, true));
    if (true == Store.getState().AppReducer.isAppReady) return true;

    return false;
}
export { AppReducer_FireBaseLoggedIn_False_IsReady_To_True }
```

Group all your tests via es6 module. Importing the entire es6 module to the Helper function esModuleTestRunner in \src\Tests\index.js will indicated that all functions in that module are tests.
This function will then iterate through all the functions, exeucting each function. If the function returns true, the test has pass. If it throws an error, or returns false then the test failed.
```javascript
import * as TestsAppStatusReducer from './Areas/TestsAppReducer'

Helpers.esModuleTestRunner('TestsAppReducer', TestsAppReducer);
```

Run test by running \ReduxFirebase\src\Tests\public\index.html on a webserver.
You'll get an output like:

![Alt text](https://eavmarshall.github.io./ReduxFirebase/resources/testoutput.PNG "")

Refreshing the page will re-run the tests

### Async tests
TODO

### View tests
TODO

### Firebase wrapper tests
TODO
