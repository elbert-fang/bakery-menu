import React, { Component } from 'react';

class NewItemForm extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            id: '',
            type: '',
            name: '',
            topping: ''
        };

        this.state = this.initialState;
        this.handleInput = this.handleInput.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }


    render() {
        const { id, type, name, topping } = this.state;

        return (
            <div className='new-item-form'>
                <h3>Add New Item</h3>
                <form onSubmit={this.onFormSubmit}>
                    <div className="row">
                        <label htmlFor="id">ID</label>
                        <input type="number" name="id" id="id" value={id} onChange={this.handleInput} required></input>
                    </div>
                    <div className="row">
                        <label htmlFor="type">Type</label>
                        <input type="text" name="type" id="type" value={type} onChange={this.handleInput} required></input>
                    </div>
                    <div className="row">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={this.handleInput} required></input>
                    </div>
                    <div className="row">
                        <label htmlFor="topping">Topping</label>
                        <input type="text" name="topping" id="topping" value={topping} onChange={this.handleInput} required></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}

export default NewItemForm;