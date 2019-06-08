import React from 'react';
import axios from 'axios';


export class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes:[]
    }
  }

  //axios
  componentDidMount(){
    this.getHeroes();
    // const getData = (url,method,)=>{
    //   axios.get(url,method)
    // }
    // axios.get('http://eastflag.co.kr:8080/api/heroes')
    // .then(res => console.log(res))
  }

  async getHeroes(){
    const res = await axios.get('http://eastflag.co.kr:8080/api/heroes')
    console.log(res)
    this.setState({
      heroes: res.data
    })
  }


  render() {
    return (
      <ul>
        {this.state.heroes.map(hero => (
          <li key={hero.hero_id}>
            <img src={hero.photo} alt={hero.name} />
            <span>{hero.name}</span>
          </li>
        ))}
      </ul>
    );
  }
}
