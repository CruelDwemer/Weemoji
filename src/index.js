import React, { Component } from 'react';
import { render } from 'react-dom';
import EmojiList from './EmojiList';
import Main from './Main';
import './style.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer);

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
