import React, {Component} from 'react';

class AddPlayerForm extends Component {

    playerInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault(); //This prevents reloading from the browser
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input 
                    type='text'
                    ref={this.playerInput}
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