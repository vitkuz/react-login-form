import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routes/LoginRoutes';

import configureStore from './store/configureStore';
import {login, register} from './actions/user.actions';
import { alertActions } from './actions/alerts.actions';

import './scss/reset.scss';
import './scss/styles.scss';

const store = configureStore();

console.log(store.getState());

store.dispatch(login({ name:'Vit 1', email:'vitkuz.info@gmail.com' }));
store.dispatch(login({ name:'Vit 2', email:'mail.info@gmail.com' }));
store.dispatch(login({ name:'Vit 2', email:'mail.info@gmail.com' }));

store.dispatch(alertActions.success('Hellow!'));
store.dispatch(alertActions.success('Warning!'));

console.log('--------------');
console.log(store.getState());

const jsx = (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));