import React from "react";
import { NavLink } from "react-router-dom"

export default class header extends React.Component {

    render() {
        return (
            <div>
                <h2>Header</h2>
                <ul>
                    <li><NavLink to="/home">Home (static card , table list, response from another form component)</NavLink></li>
                    <li><NavLink to="/form">Dashboard (form , dynamic cards with each click response)</NavLink></li>
                    <li><NavLink to="/param/idParam/valParam">param (get param val from url)</NavLink></li>
                </ul>
            </div>
        )
    }
}