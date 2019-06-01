import React from 'react';
import Counter from './Counter'
import PropTypes from 'prop-types'

// React.PureComponent
export class Player extends React.Component{
  static propTypes = {
    removePlayer:PropTypes.func,
    changeScore:PropTypes.func,
    id:PropTypes.number,
    score:PropTypes.number,
    name:PropTypes.string.isRequired // isRequired 값이 존재 여부
  }

  render(){
    console.log(this.props.name,'redered');
    const {id,removePlayer,changeScore,score,name} = this.props;

    return (

      <div className='player'>
      <span className='player-name'>
        <button className='remove-player'
                onClick={() => removePlayer(id)}>x</button>
      </span>
        <span className='player-name'>{name}</span>
        <Counter score={score} id={id} changeScore={changeScore}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // console.log('componentWillReceiveProps', nextProps);
  }
 
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log('shouldComponentUpdate', nextProps);
    // 변경될 propss를 비교하여 true or false 리턴
    return nextProps.score !== this.props.score;
  }
} 







// export const Player = (props) => {
//   return (
//     <div className='player'>
//     <span className='player-name'>
//       <button className='remove-player'
//               onClick={() => props.removePlayer(props.id)}>x</button>
//     </span>
//       <span className='player-name'>{props.name}</span>
//       <Counter score={props.score} id={props.id} changeScore={props.changeScore}/>
//     </div>
//   );
// }
