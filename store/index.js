import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialAppState = {
  isHeaderNavigationVisible: false
};

export const actionTypes = {
  SHOW_HEADER_NAVIGATION: "SHOW_HEADER_NAVIGATION",
  HIDE_HEADER_NAVIGATION: "HIDE_HEADER_NAVIGATION"
};

// Reducers
export const reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_HEADER_NAVIGATION:
      return Object.assign({}, state, {
        isHeaderNavigationVisible: true
      });

    case actionTypes.HIDE_HEADER_NAVIGATION:
      return Object.assign({}, state, {
        isHeaderNavigationVisible: false
      });

    default:
      return state;
  }
};

// Actions
export const showHeaderNavigation = () => {
  return { type: actionTypes.SHOW_HEADER_NAVIGATION };
};

export const hideHeaderNavigation = () => {
  return { type: actionTypes.HIDE_HEADER_NAVIGATION };
};

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["exampleData"] // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

export function initializeStore(initialState = initialAppState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
