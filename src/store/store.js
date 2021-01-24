import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { AdventuresReducer } from './Reducers/Adventures/AdeventuresReducers'
import { AddAdventures } from './Reducers/AddAdventures/AddAdventures'

const initialState = {};

const reducer = combineReducers({
  adventuresList:AdventuresReducer,
  addedAventuresContentL:AddAdventures
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store
