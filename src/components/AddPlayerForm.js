import React, {Component} from 'react';

class AddPlayerForm extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        };
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault(); //This prevents reloading from the browser
        this.props.addPlayer(this.state.value);
        this.setState({ value: '' })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input 
                    type='text'
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder='Enter a player name'
                />

                <input 
                    type='submit'
                    value='Add Player'
                />
            </form>
        );
    }
}

export default AddPlayerForm;