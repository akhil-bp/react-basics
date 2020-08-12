import React from 'react';
import { withRouter } from 'react-router';
const env = require('./env')

// import * as Cookie from "js-cookie";
export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.checkAuth();
    }
    checkAuth() {
      const location = this.props.location;
      const redirect = location.pathname + location.search;
      if (!env.envData.isLoggedIn) {
        // this.props.history.push(`?redirect=${redirect}`);
        this.props.history.push(`/`);
      }
    }
    render() {
      return env.envData.isLoggedIn
        ? <Component {...this.props} />
        : null;
    }
  }
  return withRouter(AuthenticatedComponent)
}