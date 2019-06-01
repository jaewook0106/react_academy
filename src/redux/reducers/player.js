import {ADD_PLAYER} from '../actionType'

const playerInitalState = {
  title:'Redux Scoreboard',
  players:[
    {name:'edward', score:0, id:1},
    {name:'kakao', score:0, id:2},
    {name:'daum', score:0, id:3},
    {name:'naver', score:0, id:4}
  ]
}

let maxId = 4;

export const playerReducer = (state = playerInitalState, action) =>{
  switch(action.type){
    case ADD_PLAYER:
      return {
        ...state,
        players:[...state.players, {name:action.name, score:0,id:++maxId}]
      }

    default:
      return state;
  }

  
}