import React from 'react';
import Game from "./Components/Game";
import Home from "./Components/Home";
import NoMatch from "./Components/NoMatch";
import { Route, Switch } from "react-router-dom";

const App = () => (

  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/game" component={Game} />
    <Route component={NoMatch} />
  </Switch>

)

export default App;
