import React from 'react';


class AddPlayerForm extends React.Component{
  state = {
    value: ''
  }
  // constructor(props){
  //   super(props);
  // }

  handleChange = (e)=>{
    this.setState(
      {value:e.target.value}
    )
  }


  handleSubmit = (e)=>{

    e.preventDefault(); // 기본이벤트 막기
    e.stopPropagation(); // 이벤트 버블링 막기
    this.props.addPlayer(this.state.value)
    this.setState({
      value : ''
    })
  
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" 
        value={this.state.value} 
        onChange = {this.handleChange}
        />
        <input type="submit" value="Add Player" 
        />
      </form>
    )
  }

  setState

}

export default AddPlayerForm