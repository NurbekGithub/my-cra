import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import App from './App';
import history from './config/history';
import './i18n';
import * as serviceWorker from './serviceWorker';
import MuiPickersProvider from './MuiPickerProvider';
import GlobalContext from './globalContexts';

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <GlobalContext>
      <MuiPickersProvider>
        <Router history={history}>
          <App />
        </Router>
      </MuiPickersProvider>
    </GlobalContext>,
    MOUNT_NODE,
  );
};

render(App);

if (module.hot) {
  // Hot reloadable React components and Context
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./App', './globalContexts'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

serviceWorker.register();
