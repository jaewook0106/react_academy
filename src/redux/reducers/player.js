const playerInitalState = {
  title:'Redux Scoreboard',
  players:[
    {name:'edward', score:0, id:1},
    {name:'kakao', score:0, id:2},
    {name:'daum', score:0, id:3},
    {name:'naver', score:0, id:4}
  ]
}

export const playerReducer = (state = playerInitalState, action) =>{
  return state;
}