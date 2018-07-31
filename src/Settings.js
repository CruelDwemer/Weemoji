import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './redux/actions';

const apply = connect(
    null,
    { addItem: addItem }
)

class Settings extends Component{
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
    }

    OnInputChange = e => {
        this.setState({ inputValue: e.target.value });
        console.log("inputValue ", this.state.inputValue);
    }

    onAddButtonClick = () => {
        if(this.state.inputValue) {
            this.props.addItem(this.state.inputValue);
            this.setState({ inputValue: '' });
        }
    }

    render() {
        return(
            <div>
                <input
                    onChange={this.OnInputChange}
                />
                <button
                    onClick={this.onAddButtonClick}
                >Add</button>
            </div>
        )
    }
}

export default apply(Settings);
