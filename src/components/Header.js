import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
  const {players, title} = props;
  //This is destructuring props.  You could also do this by bringing in the destructured object in the function declaration like this const Header = ({players, title}) => ...
  return (
    <header>
      <Stats players={players}/>
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;