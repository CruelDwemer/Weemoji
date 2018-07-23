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

    renderInputPanel = () => {
        if (this.props.mode) {
            return <Settings/>
        }
    }

    render() {
        console.log('Main ', this.props);
        return(
        <div>
            <button onClick={() => this.props.switchMode()}>{this.props.mode ? 'Settings' : 'EmojiList'}</button>
            {this.renderInputPanel}
            <EmojiList />
        </div>
        );
    }
}

export default apply(Main);
