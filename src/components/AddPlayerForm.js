import React from 'react';

import {addPlayer} from '../redux/actions'
import { connect } from 'react-redux';

class AddPlayerForm extends React.Component{

  textInput = React.createRef();  //Dom 을 가져온다 

  // _state = {
  //   value: ''
  // };
  // get state() {
  //   return this._state;
  // }
  // set state(value) {
  //   this._state = value;
  // }
  // constructor(props){
  //   super(props);
  // }

  // handleChange = (e)=>{
  //   this.setState(
  //     {value:e.target.value}
  //   )
  // }


  handleSubmit = (e)=>{

    e.preventDefault(); // 기본이벤트 막기
    // e.stopPropagation(); // 이벤트 버블링 막기
    //this.textInput.current = document.getElementById('')
    this.props.addPlayer(this.textInput.current.value)
    // this.setState({
    //   value : ''
    // })
    e.currentTarget.reset()
  
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" 
        // value={this.state.value} 
        ref={this.textInput}
        // onChange = {this.handleChange}
        />
        <input type="submit" value="Add Player" 
        />
      </form>
    )
  }

  

}

const mapActionToProps = (dispatch) => ({
  addPlayer:(name) => dispatch(addPlayer(name))
})


export default connect(null,mapActionToProps)(AddPlayerForm)