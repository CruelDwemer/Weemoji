import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemComponent from './EmojiComponent';

class _EmojiList extends Component{

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

const mapStateToProps = state => {
    console.log(state);
    return { smiles: state.items.smiles };
};

const EmojiList = connect(
    mapStateToProps
)(_EmojiList);

export default EmojiList;
