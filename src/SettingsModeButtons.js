import React, { Component } from 'react';
import { deleteItem } from './redux/actions';
import { connect } from 'react-redux';

const apply = connect(
    null,
    { deleteItem: deleteItem }
)

class SettingsModeButtons extends Component{

    onDeleteButtonClick = () => {
        this.props.deleteItem(this.props.id);
    }

    render() {
        return(
            <div>
                <button>Edit</button>
                <button onClick={this.onDeleteButtonClick}>Delete</button>
            </div>
        )
    }
}

export default apply(SettingsModeButtons);
