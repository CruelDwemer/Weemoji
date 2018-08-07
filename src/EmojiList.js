import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemComponent from './EmojiComponent';
import SettingsModeButtons from './SettingsModeButtons';
import { selectSmiles } from './redux/selectors';

const apply = connect(
    state => ({
        smiles: selectSmiles(state),
        mode: state.pages.mode
    })
)

class EmojiList extends Component{

    render() {
        const { smiles, mode } = this.props;
        return(
            <div>
                {smiles.map(item => (
                    <div class='buttons-line' key={item.id}>
                        <ItemComponent text={item.text}  />
                        {mode ? <SettingsModeButtons id={item.id} /> : null}
                    </div>
                ))}
            </div>
        )
    }
}

export default apply(EmojiList);
