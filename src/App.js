import React from 'react';
import './App.css'

//React jsx

const title = 'this is title';
const id= 'main-title';


const Header = (props) => {
  console.log(props);
  const {title, totalPlayers} = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
};

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>X</button>
    </span>
    <span className="player-name">{props.name}</span>
    <Counter></Counter>
  </div>

);

class Counter extends React.Component{   // React.Component 에 있는 행위나 등등 상속 받는다
  state = {
    score: 0
  }
  constructor(props){
    super(props);
    // this.incrementEvent = this.incrementEvent.bind(this)  // THIS bind 방법
    // this.state = {
    //   score:0
    // }
  }
  
  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={()=>this.ChangeEvent(-1)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={()=>this.ChangeEvent(1)}> + </button>
      </div>
    )
  }
  ChangeEvent = (delta) => { //arrow function의 this는 lexical this
    this.setState({
      score : this.state.score + delta,
    })
    // 1) state를 변경하는 방법은 setState
    // 2) merge : 기존 속성은 그대로 유지
    // 3) 비동기로 처리

    // this.setState(prevState => ({
    //   score : this.prevState.score += 1
    // }))

  }
  // decrementEvent = () => {
  //   this.setState({
  //     score : this.state.score -= 1
  //   })


  // //   this.setState(prevState => ({
  // //     score : this.prevState.score -= 1
  // //  }))
  // }
 
}


class App extends React.Component{
  state = {
    player:[
      {name:'edward', id:1},
      {name:'kakao', id:2},
      {name:'daum', id:3},
      {name:'naver', id:4}
    ]
    
  }
  // player삭제
  handleRemovePlayer = (id) => {
    console.log(id)
    console.log(this.state.player)
    // this.setState({
    //   player : this.state.player.filter(item => item.id !== id)
    // })
    this.setState(prevState =>({
      player : prevState.player.filter(item => item.id !== id)
    }))
    // prevState (state상태값 가져온다)  
  }
  render(){
    return(
      <div className="scoreboard">
        <Header title="header react" totalPlayers = {11} />
        {
          this.state.player.map(player =>(
            <Player name={player.name} key={player.id} removePlayer={this.handleRemovePlayer} id={player.id}/>
          ))
        }
      </div>
    );
  }
}


export default App;