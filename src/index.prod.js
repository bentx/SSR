import React from 'react';
import ReactDom from 'react-Dom';
import { App } from './Routeres/app';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from '../src/redux/reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const persistConfig = {
  key: 'persistData3',
  storage,
};
const rootPersistReducer = persistReducer(persistConfig, reducers);
const store = createStore(rootPersistReducer, state, applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDom.hydrate(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
