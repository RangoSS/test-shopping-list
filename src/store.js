import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './components/reducers/authReducer';
import shoppingListReducer from './components/reducers/shoppingListReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  shoppingLists: shoppingListReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
