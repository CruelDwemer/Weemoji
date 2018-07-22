import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './redux/actions';

class _Settings extends Component{
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
        this.props.addItem(this.state.inputValue);
    }

    render() {
        return(
            <div>
                <input
                    onChange={this.OnInputChange}
                />
                <button
                    onClick={() => this.onAddButtonClick()}
                >Add</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { smiles: state.items.smiles };
};

const mapDispatchToProps = dispatch => {
    return {addItem: (value) => dispatch(addItem(value))}
};

const Settings = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Settings);

export default Settings;
