import React from "react";
import { NavLink } from "react-router-dom"
const env = require('./env')

export default class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loader: false })
        }, 5000)
    }
    logout = () => {
        env.envData.isLoggedIn = false
        // this.props.history.push(`/`);
    }
    login = () => {
        env.envData.isLoggedIn = true
    }
    render() {
        return (
            <div>
                <h2>Header</h2><button onClick={this.logout}>logout</button><button onClick={this.login}>login</button>
                {
                    !this.state.loader && <ul>
                        <li><NavLink activeClassName="active" to="/home">Home (static card , table list, response from another form component)</NavLink></li>
                        <li><NavLink activeClassName="active" to="/form">Dashboard (form , dynamic cards with each click response (sent whole and each array to card))</NavLink></li>
                        <li><NavLink activeClassName="active" to="/param/idParam/valParam">param (get param val from url)</NavLink></li>
                        <li><NavLink activeClassName="active" to="/variable-render-html">Render html through variable / sticky / fixed</NavLink></li>
                        <li><NavLink activeClassName="active" to="/lazy-div">LAzy load DIV or Component...footer is also lazy loaded</NavLink></li>
                        <li><NavLink activeClassName="active" to="/register-form">form normal all validations</NavLink></li>
                        <li><NavLink activeClassName="active" to="/hook">hook</NavLink></li>
                        <li><NavLink activeClassName="active" to="/nav/home">Nav</NavLink></li>
                    </ul>
                }
                {
                    this.state.loader && <svg
                        role="img"
                        width="1368"
                        height="160"
                        aria-labelledby="loading-aria"
                        viewBox="0 0 1368 160"
                        preserveAspectRatio="none"
                    >
                        <title id="loading-aria">Loading...</title>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            clip-path="url(#clip-path)"
                            style={{ 'fill': 'url("#fill")' }}
                        ></rect>
                        <defs>
                            <clipPath id="clip-path">
                                <circle cx="10" cy="20" r="8" />
                                <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
                                <circle cx="10" cy="50" r="8" />
                                <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
                                <circle cx="10" cy="80" r="8" />
                                <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
                                <circle cx="10" cy="110" r="8" />
                                <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
                            </clipPath>
                            <linearGradient id="fill">
                                <stop
                                    offset="0.599964"
                                    stop-color="#f3f3f3"
                                    stop-opacity="1"
                                >
                                    <animate
                                        attributeName="offset"
                                        values="-2; -2; 1"
                                        keyTimes="0; 0.25; 1"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    ></animate>
                                </stop>
                                <stop
                                    offset="1.59996"
                                    stop-color="#ecebeb"
                                    stop-opacity="1"
                                >
                                    <animate
                                        attributeName="offset"
                                        values="-1; -1; 2"
                                        keyTimes="0; 0.25; 1"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    ></animate>
                                </stop>
                                <stop
                                    offset="2.59996"
                                    stop-color="#f3f3f3"
                                    stop-opacity="1"
                                >
                                    <animate
                                        attributeName="offset"
                                        values="0; 0; 3"
                                        keyTimes="0; 0.25; 1"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    ></animate>
                                </stop>
                            </linearGradient>
                        </defs>
                    </svg>
                }
            </div>
        )
    }
}