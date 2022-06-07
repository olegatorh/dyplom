import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AppContainer from "./AppContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <AppContainer/>
        </PersistGate>
    </Provider>
);
