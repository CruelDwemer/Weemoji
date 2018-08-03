import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemComponent from './EmojiComponent';
import SettingsModeButtons from './SettingsModeButtons';

const apply = connect(
    state => ({
        smiles: state.items.smiles,
        mode: state.pages.mode
    })
)

class EmojiList extends Component{

    render() {
        let { smiles, mode } = this.props;
        return(
            <div>
                {smiles.map(item => {
                    return (
                        <div class='buttons-line' key={item.id}>
                            <ItemComponent text={item.text}  />
                            {mode ? <SettingsModeButtons id={item.id} /> : null}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default apply(EmojiList);
