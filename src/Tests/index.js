import * as Helpers from './Helpers'
import * as TestsAppReducer from './Areas/TestsAppReducer'
import * as TestsAuthenticationMiddleware from './Areas/TestsAuthenticationMiddleware'
import * as TestLoginReducer from './Areas/TestLoginReducer'

Helpers.esModuleTestRunner('AppReducer', TestsAppReducer);
Helpers.esModuleTestRunner('AuthenticationMiddleware', TestsAuthenticationMiddleware);
Helpers.esModuleTestRunner('LoginReducer', TestLoginReducer);

Helpers.sumResults();