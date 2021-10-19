import rootSaga from "../saga";
import rootReducer from "../slice";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const saggaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [saggaMiddleware],
  });
  saggaMiddleware.run(rootSaga);

  return store;
};

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type StoreType = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<StoreType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
