import React from 'react';
import { Statistics } from './Statistics';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types'

export const Header = ({title,players}) => {
  // console.log(props);
  // const {title,players} = props;  //Destructing props
  return (
    <header>
      <Statistics players={players}></Statistics>
      <h1>{title}</h1>
      <Stopwatch></Stopwatch>
    </header>
  );
}

Header.propTypes= {
  title:PropTypes.string,
  players:PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string,
    id:PropTypes.number,
    score:PropTypes.number
  }))    
}

Header.defaultProps = {
  title:'Default Title',
  
}