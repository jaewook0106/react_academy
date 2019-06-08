
import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from '../redux/actions'
import { connect } from 'react-redux';

import classNames from 'classnames'
import styles from '../pages/Scoreboard/Scoreboard.module.css'


const Counter = ({changeScore, id, score }) => (
  // let active = false;

  <div className={styles.counter}>
    <button className={classNames(styles['counter-action'],styles.increment)} 
    onClick={()=>changeScore(id, -1)}
    > - </button>
    <span className={styles['counter-score']}>{score}</span>
    <button className={classNames(styles['counter-action'],styles.increment)} 
    onClick={()=>changeScore(id, 1)}
    > + </button>
  </div>
)


Counter.propTypes = {
  changeScore:PropTypes.func,
  score:PropTypes.number,
  id:PropTypes.number
}

const mapActionToProps = (dispatch) => ({
  changeScore: (id, delta) => dispatch(changeScore(id,delta))
})

export default connect(null, mapActionToProps)(Counter)

// class Counter extends React.Component{
//   // constructor(props){
//   //   super(props);
//   // }
//   render(){
//     return(
//       <div className="counter">
//         <button className="counter-action decrement" 
//         onClick={()=>this.props.changeScore(this.props.id, -1)}
//         > - </button>
//         <span className="counter-score">{this.props.score}</span>
//         <button className="counter-action increment" 
//         onClick={()=>this.props.changeScore(this.props.id, 1)}
//         > + </button>
//       </div>
//     )
//   }

// }

// export default Counter

