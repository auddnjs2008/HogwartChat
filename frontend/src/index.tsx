import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer, { rootSaga } from "./modules";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './component/common/GlobalStyle';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

