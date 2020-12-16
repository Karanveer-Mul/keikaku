import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Search from "./components/search/search";
import Home from "./components/layout/home";
import ShowInfo from "./components/show/showInfo";
import AnimeInfo from "./components/show/animeInfo";
import WatchList from "./components/list/watchList";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container" style={{ paddingTop: "4rem" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/season/current" component={ShowInfo} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/watch-list" component={WatchList} />
            <Route path="/anime/:id" component={AnimeInfo} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
