import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeCreator from './store';

import App from './containers/App';

import './index.css';

const store = storeCreator();




ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>
  ,

  document.getElementById('root')
);
