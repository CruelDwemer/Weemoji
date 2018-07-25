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
        let { text, id, inject } = this.props;

        return(
            <SettingsModeButtons
                render={<button onClick={() => inject(text)}>{text}</button>}
                id={id}
            />
        )
    }
}

export default apply(EmojiComponent);
