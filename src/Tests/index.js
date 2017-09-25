import * as Helpers from './Helpers'
import * as TestsAppStatusReducer from './Areas/TestsAppStatusReducer'
import * as TestsAuthenticationMiddleware from './Areas/TestsAuthenticationMiddleware'

Helpers.esModuleTestRunner('AppStatusReducer', TestsAppStatusReducer);
Helpers.esModuleTestRunner('AuthenticationMiddleware', TestsAuthenticationMiddleware);

Helpers.sumResults();