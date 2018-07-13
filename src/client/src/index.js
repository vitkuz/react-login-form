import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import './scss/index.css';
import App from './components/App/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
