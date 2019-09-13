import React from 'react';
import Game from "./Components/Game"
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";

const App = () => (

  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/game" component={Game} />
  </Switch>

)

export default App;
