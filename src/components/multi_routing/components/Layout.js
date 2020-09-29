import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import './styles.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex-column app-frame">
          <div className="flex-row align-center header container" style={{ width: '100%' }}>
            <NavLink activeClassName="active" to="/alt">Header</NavLink>
          </div>
          <div className="flex flex-row app-main">

            <div className="flex-column sidebar container">
              <NavLink activeClassName="active" to="/nav/home">Home</NavLink>
              <NavLink activeClassName="active" to="/nav/profile">Profile</NavLink>
            </div>

            <div className="app-body flex">
              <Switch>
                <Route exact path="/nav/home" component={Home} />
                <Route exact path="/nav/profile" component={Profile} />
                {/* <Redirect exact from="**" to="home" /> */}
              </Switch>
            </div>

          </div>
        </div>
      </Router>
    );
  }
}

// render(<App />, document.getElementById('root'));
