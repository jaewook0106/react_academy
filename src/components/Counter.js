
import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from '../redux/actions'
import { connect } from 'react-redux';


const Counter = ({changeScore, id, score }) => (
  <div className="counter">
    <button className="counter-action decrement" 
    onClick={()=>changeScore(id, -1)}
    > - </button>
    <span className="counter-score">{score}</span>
    <button className="counter-action increment" 
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

