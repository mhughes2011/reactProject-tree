import React, {Component} from 'react';
import {Provider} from './Context/index';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  //Player id Counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players, //this merges the existing objects in players state with the new one that we added.
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1,
          }
        ]
      }
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if(highScore) {
      return highScore;
    }
    return null;
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }


  render() {
    const highScore = this.getHighScore();

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header />
    
          {/* Players list */}
          {this.state.players.map( (player, index) =>
            <Player 
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()} 
              index={index}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handleScoreChange}
              isHighScore={highScore === player.score} //is a player's score prop equal to the high score?
            />
          )}

          <AddPlayerForm addPlayer = {this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;