
import './App.css';

import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch ,Redirect } from 'react-router-dom';
import requireAuth from './components/authComponent';
const Home = lazy(() => import('./components/home'));
const Header = lazy(() => import('./components/header'))
const Footer = lazy(() => import('./components/footer'))
const Form = lazy(() => import('./components/form'))
const registerForm = lazy(() => import('./components/registerForm'))
const Param = lazy(() => import('./components/param'))
const Card = lazy(() => import('./components/card'))
const Dynamic = lazy(() => import('./components/card_dynamic'))
const Formtwo = lazy(() => import('./components/formtwo'))
const VariableRenderHtml = lazy(() => import('./components/const_render_html'))
const LazyLoad = lazy(() => import('./components/lazy_div'))
const Greeting = lazy(() => import('./components/hooks_sample'))
// import Header from './components/header'
// import Footer from './components/footer'
// import Form from './components/form'
// import registerForm from './components/registerForm'
// import Param from './components/param'
// import Card from './components/card'
// import Dynamic from './components/card_dynamic'
// import Formtwo from './components/formtwo'
// import VariableRenderHtml from './components/const_render_html'
// import LazyLoad from './components/lazy_div'
// import Greeting from './components/hooks_sample'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Suspense fallback={<div>loading..</div>}>
          <Header />
          <Switch>
            <Route path="/home" component={requireAuth(Home)} exact />
            <Route path="/register-form" component={requireAuth(registerForm)} exact />
            <Route path="/form" component={requireAuth(Form)} exact />
            <Route path="/card" component={requireAuth(Card)} exact />
            <Route path="/dynamic" component={requireAuth(Dynamic)} exact />
            <Route path="/param/:id/:val" component={requireAuth(Param)} />
            <Route path="/formtwo" component={requireAuth(Formtwo)} />
            <Route path="/header" component={requireAuth(Header)} />
            <Route path="/variable-render-html" component={requireAuth(VariableRenderHtml)} />
            <Route path="/lazy-div" component={requireAuth(LazyLoad)} />
            <Route path="/hook" component={Greeting} />
            {/* {!this.state.auth &&  <Redirect push to="/"/> } */}
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    );

  }
}
