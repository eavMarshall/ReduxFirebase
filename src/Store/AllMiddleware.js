import { applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

import FireBaseMiddleware from './Middleware/FireBaseMiddleware.js';
import AuthenticationMiddleware from './Middleware/AuthenticationMiddleware.js';

const AllMiddleware = applyMiddleware(
    logger,
    FireBaseMiddleware,
    AuthenticationMiddleware
  );
  
  export default AllMiddleware;