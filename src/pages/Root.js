import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
// import {Heroes} from "./Heroes/Heroes";
import Scoreboard from "./Scoreboard/Scoreboard";
import {Menu} from "./Menu";
import {Index} from "./Heroes/Index"

export class Root extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <BrowserRouter>
        <Menu></Menu>
        {/*라우팅 영역*/}
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/heroes' component={Index}></Route>
            <Route path='/scoreboard' component={Scoreboard}></Route>
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

