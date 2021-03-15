import { createStore, applyMiddleware, compose } from "redux";
import immutableStateInvarientMiddleware from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "../modules/rootReducer";

function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(immutableStateInvarientMiddleware(), thunk)
    )
  );
}

export default configureStore;
