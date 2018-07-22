import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmojiList from './EmojiList';
import Settings from './Settings';
import { switchMode } from './redux/actions';

class _Main extends Component {

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

const mapStateToProps = state => {
    return { mode: state.pages.mode };
};

const mapDispatchToProps = dispatch => {
    return {switchMode: () => dispatch(switchMode())}
};

const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Main);

export default Main;
