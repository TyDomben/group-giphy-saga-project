import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import FavoriteView from "../FavoriteView/FavoriteView";

function App() {

  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/FavoriteView">
        <FavoriteView />
      </Route>
    </Router>
  );
}
export default App;
