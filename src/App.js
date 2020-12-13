import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Search from "./components/search/search";
import Home from "./components/layout/home";
import Privacy from "./components/layout/privacy";
import ShowInfo from "./components/show/showInfo";
import ShowSummary from "./components/show/showSummary";
import { getSeason } from "./actions/getSeason";
import { useDispatch } from "react-redux";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  getSeason(dispatch);
  return (
    <Router>
      <div className="App">
        <Header />
        <Search />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/privacy-policy" component={Privacy} />
            <Route
              path="/season/current"
              component={() => <ShowInfo type="season" />}
            />
            <Route
              path="/top/anime"
              component={() => <ShowInfo type="topAnime" />}
            />
            <Route path="/anime/:id" component={ShowSummary} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
