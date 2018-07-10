import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './_redux/store';


const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
