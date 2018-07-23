import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmojiList from './EmojiList';
import Settings from './Settings';
import { switchMode } from './redux/actions';

const apply = connect(
    state => ({ mode: state.pages.mode }),
    { switchMode: switchMode }
)

class Main extends Component {

    render() {
        console.log('Main ', this.props);
        const { switchMode, mode } = this.props;
        return(
        <div>
            <button onClick={switchMode}>{mode ? 'Settings' : 'EmojiList'}</button>
            {mode && <Settings />}
            <EmojiList />
        </div>
        );
    }
}

export default apply(Main);
