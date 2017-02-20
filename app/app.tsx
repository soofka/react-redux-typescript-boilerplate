import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import { fromJS } from 'immutable';
import { syncHistoryWithStore } from 'react-router-redux'

import createReducers from './reducers';
import configureStore from './store';
import messages from './constants/messages';

import { selectIntl, selectRouting } from './selectors';

import App from './containers/App';
import Foo from './containers/Foo';
import Bar from './containers/Bar';

const reducer = createReducers();

const initialState = fromJS({
  intl: messages,
  routing: {}
});

const store = configureStore(reducer, initialState);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectRouting
});
const rootElement = document.querySelector('[data-app]');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <IntlProvider intlSelector={selectIntl}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={App}/>
            <Route path="foo" component={Foo}/>
            <Route path="bar" component={Bar}/>
          </Route>
        </Router>
      </IntlProvider>
    </Provider>,
    rootElement
  );
};

declare const module: { hot: any };

if (module.hot) {
  module.hot.accept('./containers/App', () => { /* *? */
    render();
  });
}

render();