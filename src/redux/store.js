import { createStore, applyMiddleware,combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";

import rootSagas from "./sagas/sagas";
import { reducerData } from "./reducers/reducers";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({reducerData})
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSagas)