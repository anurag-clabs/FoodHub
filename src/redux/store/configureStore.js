import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from '../reducer';

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  persistStore(store, () => {
    console.log('restored reducers');
  });
  return store;
}
