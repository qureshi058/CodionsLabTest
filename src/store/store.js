import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducers";
import rootSaga from "./Sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AUTH", ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});
const persistor = persistStore(store);
export { store, persistor };

sagaMiddleware.run(rootSaga);
