import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  //Using static means you don't have to instantiate it with the class name.  You can just call proptypes.
  static PropTypes = {
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  }

  render() {
    const {
      name,
      id,
      score,
      index,
      removePlayer
    } = this.props;

    console.log(this.props.name + ' rendered')
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={this.props.isHighScore}/>
          { name }
        </span>
  
        <Counter 
          score={score} 
          index={index}
        />
      </div>
    );
  }
}

export default Player;