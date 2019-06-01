import React from 'react';
import { Statistics } from './Statistics';
import Stopwatch from './Stopwatch';

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