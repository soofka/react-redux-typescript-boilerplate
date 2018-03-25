declare const module: any;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { initStore } from 'store';
import rootReducer from 'store/reducers';

const history = createHistory();
const store = initStore(rootReducer, history);

import App from './components/App';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.querySelector('app'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    console.log('updating App');
    render();
  });
}
