import React from "react";
import { NavLink } from "react-router-dom"
const env = require('./env')

export default class header extends React.Component {
    componentDidMount(){
       
    }
    logout = ()=>{
        env.envData.isLoggedIn = false
    }
    login = ()=>{
        env.envData.isLoggedIn = true
    }
    render() {
        return (
            <div>
                <h2>Header</h2><button onClick={this.logout}>logout</button><button onClick={this.login}>login</button>
                <ul>
                    <li><NavLink to="/home">Home (static card , table list, response from another form component)</NavLink></li>
                    <li><NavLink to="/form">Dashboard (form , dynamic cards with each click response (sent whole and each array to card))</NavLink></li>
                    <li><NavLink to="/param/idParam/valParam">param (get param val from url)</NavLink></li>
                </ul>
            </div>
        )
    }
}