import React from 'react';
import './App.css'
import {Header} from './components/Header'
import {Player} from './components/Player'
import AddPlayerForm from './components/AddPlayerForm'

//React jsx

class App extends React.Component{
  state = {
    player:[
      {name:'edward', score:0, id:1},
      {name:'kakao', score:0, id:2},
      {name:'daum', score:0, id:3},
      {name:'naver', score:0, id:4}
    ]
    
    
  }
  maxId = 4;

  // player삭제
  handleRemovePlayer = (id) => {
  
    // this.setState({
    //   player : this.state.player.filter(item => item.id !== id)
    // })
    this.setState(prevState =>({
      player : prevState.player.filter(item => item.id !== id)
    }))
    // prevState (state상태값 가져온다)  
  }

  handleAddPlayr = (name)=>{
    console.log(name)
    this.setState(prevState => ({
      player: [...prevState.player, {name, score:0,id:++this.maxId}]
    }))

    

    //short hand property : key와 value가 같을 경우 하나로 쓴다
  }

  handleChangeScore = (id, delta) => {  
    console.log(id, delta)
    this.setState(prevState => {
      this.state.player.forEach(item => {
        if (item.id === id){
          item.score += delta
        }
      })
      return{
        player: [...prevState.player]
      }
    })
  }
  render(){
    return(
      <div className="scoreboard">
        <Header title="React" players={this.state.player} />
        {
          this.state.player.map(player =>(
            <Player 
            name={player.name} 
            key={player.id} 
            removePlayer={this.handleRemovePlayer} 
            changeScore={this.handleChangeScore}
            id={player.id} 
            score={player.score}/>
          ))
        }
        <AddPlayerForm addPlayer={this.handleAddPlayr}></AddPlayerForm>
      </div>
    );
  }
}


export default App;