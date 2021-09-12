import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Amazon from "./amazon";
import Flipkart from "./flipkart";
import Searchbar from "./Top";
import Names from "./names";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Searchbar></Searchbar>
            <Switch>
              <Route path="/" component={Names} exact={true} />
              <Route path="/amazon" component={Amazon} exact={true} />
              <Route path="/fk" component={Flipkart} exact={true} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
