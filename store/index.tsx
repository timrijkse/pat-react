import * as React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialAppState = {
  isSideNavigationVisible: false
};

export const actionTypes = {
  SHOW_SIDE_NAVIGATION: "SHOW_SIDE_NAVIGATION",
  HIDE_SIDE_NAVIGATION: "HIDE_SIDE_NAVIGATION"
};

// Reducers
export const reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SIDE_NAVIGATION:
      return Object.assign({}, state, {
        isSideNavigationVisible: true
      });

    case actionTypes.HIDE_SIDE_NAVIGATION:
      return Object.assign({}, state, {
        isSideNavigationVisible: false
      });

    default:
      return state;
  }
};

// Actions
export const showHeaderNavigation = () => {
  return { type: actionTypes.SHOW_SIDE_NAVIGATION };
};

export const hideHeaderNavigation = () => {
  return { type: actionTypes.HIDE_SIDE_NAVIGATION };
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
