import React, { Component } from 'react';
import SettingsModeButtons from './SettingsModeButtons';

export default class EmojiComponent extends Component{

    onButtonClick = async () => {
        await window.chrome.tabs.getSelected(null, (tab) => {
          window.chrome.tabs.sendMessage(
            tab.id,
            {message: this.props.text}
          )
        })
    }

    render() {
        let { text, id } = this.props;

        return(
            <SettingsModeButtons
                render={<button onClick={this.onButtonClick}>{text}</button>}
                id={id}
            />
        )
    }
}
