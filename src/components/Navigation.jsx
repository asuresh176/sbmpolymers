import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import Products from './Products';
import '../css/App.css'

class Navigation extends React.Component {
  render() {
    const navstyle = {
       color: "#3f97a6",
       padding: "12px",
       fontFamily: "Candara",
       fontWeight: "bold",
       fontSize: "20px"
     };
    return <Router><div><nav className="navbar navbar-expand-lg navbar-dark bg-white">
        <a className="navbar-brand" href="/" style={{color: "red", fontFamily: "times-roman", fontWeight: "bold", fontSize:"20" }}>
          <img src={ require('../images/sbm1.png') } width="100%" height="80" width="430" style={{padding:"5px"}}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/" style={navstyle}>Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile" style={navstyle}>Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products" style={navstyle}>Infrastructure & Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" style={navstyle}>Contact</a>
            </li>
            {/*<li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>*/}
          </ul>
        </div>
      </nav>
      <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  }
}

export default Navigation;
