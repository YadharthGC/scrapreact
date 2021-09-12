import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Searchbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <div className="input-group" id="nav">
        <Link to="/amazon">
          <a className="nav-link collapsed">
            <i className="fas fa-fw fa-cog"></i>
            <span>Amazon</span>
          </a>
        </Link>
        <Link to="/fk">
          <a className="nav-link collapsed">
            <i className="fas fa-fw fa-cog"></i>
            <span>Flipkart</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Searchbar;
