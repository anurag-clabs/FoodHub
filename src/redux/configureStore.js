import { createStore, applyMiddleware  } from 'redux';
import userReducer from './reducer/userReducer';

// Passing userReducer to createStore
const configureStore = createStore(userReducer, applyMiddleware());
export default configureStore; 