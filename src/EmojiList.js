import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemComponent from './EmojiComponent';

const apply = connect(
    state => ({ smiles: state.items.smiles })
)

class EmojiList extends Component{

    render() {
        console.log("EmojiList ", this.props);
        return(
            <div>
                {this.props.smiles.map(item => {
                    return <ItemComponent text={item.text} />
                })}
            </div>
        )
    }
}

export default apply(EmojiList);
