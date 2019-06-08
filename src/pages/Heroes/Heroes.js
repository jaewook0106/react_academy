import React from 'react';
import axios from 'axios';
import Pagination from 'rc-pagination';
import {Route, Switch} from "react-router-dom";
// import { NavLink } from "react-router-dom";
import {Hero} from "./Hero";

// import styles from './Heroes.module.scss'


export class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize:10,
      totalCount: 115,
      currentPage: 1,
      heroes:[],
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
    let start_index = (this.state.currentPage - 1) * this.state.pageSize 
    const res = await axios.get(`http://eastflag.co.kr:8080/api/paged_heroes` + 
    `?start_index=${start_index}&page_size=${this.state.pageSize}`)
    console.log(res)
    this.setState({
      heroes: res.data.data,
      totalCount: res.data.total
    })
  }

  handleChange = (page,pageSize) =>{
    console.log(page , pageSize)
    this.setState({
      currentPage:page
    })
    this.getHeroes()
  }

  gotoHero = (hero_id) =>{
    this.props.history.push(`/heroes/hero/${hero_id}`)
  }


  render() {
    return (
      // <ul className={styles['img-box']}>
      //   {this.state.heroes.map(hero => (
      //     <li key={hero.hero_id} className="row align-items-center m-0">
      //       <div className="col-1 py-2">
      //         <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/outline-face-24px.svg'} 
      //         alt={hero.name} className="img-fluid rounded-circle" 
      //         style={{width:'100%',height:'auto'}}
      //         /> {/*이미지 주소 가져오는법 */}
      //       </div>
      //       <span className="col">{hero.name}</span>
      //     </li>
      //   ))}
      // </ul>
      <>
      <Switch>
        <Route path='/heroes/hero/:hero_id' component={Hero}></Route>
      </Switch>
        <div className="row">
        {this.state.heroes.map(hero => (
          <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.hero_id} onClick={()=>this.gotoHero(hero.hero_id)}>
            <div className="card">
              <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/outline-face-24px.svg'}
                  style={{width: '100%'}} alt={hero.name}></img>
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">email: {hero.email}</p>
                <p className="card-text">sex: {hero.sex}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
        <Pagination total={this.state.totalCount} current={this.state.currentPage} pageSize={this.state.pageSize} 
          onChange={this.handleChange} className="d-flex justify-content-center"
        />
      </>
    );
  }
}
