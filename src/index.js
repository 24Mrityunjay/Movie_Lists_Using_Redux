import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import store from './ReactRedux/store';
import App from './App';

console.log("index.js Sir");

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);