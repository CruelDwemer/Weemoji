import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './Main';
import './style.css';

import { createStore, applyMiddleware,  } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/rootReducer';
import { inject } from './redux/sagas/injectSaga';
import { saveData } from './localStorage';
import { middleware } from './middleware';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, middleware)
);

store.subscribe(() => {
  saveData(
    { smiles: store.getState().items.smiles }
  )
})

sagaMiddleware.run(inject);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
