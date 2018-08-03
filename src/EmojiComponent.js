import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingsModeButtons from './SettingsModeButtons';
import { inject } from './redux/actions';

const apply = connect(
    null,
    {inject: inject}
)

class EmojiComponent extends Component{
    render() {
        let { text, inject } = this.props;
        return(
            <button onClick={() => inject(text)}>{text}</button>
        )
    }
}

export default apply(EmojiComponent);
