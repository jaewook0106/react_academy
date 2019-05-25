import React from 'react';


export const Statistics = (props) => {

  const totalPlayers = props.players.length;
  let totalScore = 0;
  props.players.forEach(item => totalScore += item.score )

  

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>players : </td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>total Score : </td>
            <td>{totalScore}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}