
import './App.css';
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import Form from './components/form'
import Param from './components/param'
import Card from './components/card'
import Dynamic from './components/card_dynamic'
import Formtwo from './components/formtwo'
import VariableRenderHtml from './components/const_render_html'
import LazyLoad from './components/lazy_div'
import Greeting from './components/hooks_sample'





import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Edit src/App.js and save to reload.</p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
//       </header>
//     </div>
//   );
// }

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            
            <Route path="/home" component={Home} exact />
            <Route path="/form" component={Form} exact />
            <Route path="/card" component={Card} exact />
            <Route path="/dynamic" component={Dynamic} exact />
            <Route path="/param/:id/:val" component={Param} />
            <Route path="/formtwo" component={Formtwo} />
            <Route path="/header" component={Header} />
            <Route path="/variable-render-html" component={VariableRenderHtml} />
            <Route path="/lazy-div" component={LazyLoad} />
            <Route path="/hook" component={Greeting} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );

  }
}
