import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <PersistGate loading={<Loader />} persistor={persistor}>
      <App />
  </PersistGate>
</Provider>
);


