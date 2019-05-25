import React from 'react';
import { Statistics } from './Statistics';
import Stopwatch from './Stopwatch';

export const Header = (props) => {
  // console.log(props);
  const {title} = props;
  return (
    <header>
      <Statistics players={props.players}></Statistics>
      <h1>{title}</h1>
      <Stopwatch></Stopwatch>
    </header>
  );
}