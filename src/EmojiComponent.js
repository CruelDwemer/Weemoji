import React, { Component } from 'react';

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
        return(
            <button onClick={this.onButtonClick}>{this.props.text}</button>
        )
    }
}
