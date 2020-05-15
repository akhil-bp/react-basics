import React from "react";
import { NavLink } from "react-router-dom"
import LazyLoad from 'react-lazyload'
const env = require('./env')
var body = "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
const val = [
    {
        id: 1,
        title: "one",
        body: body
    }, {
        id: 2,
        title: "two",
        body: body
    }, {
        id: 3,
        title: "three",
        body: body
    }, {
        id: 4,
        title: "four",
        body: body
    },
    {
        id: 5,
        title: "one",
        body: body
    }, {
        id: 6,
        title: "two",
        body: body
    }, {
        id: 7,
        title: "three",
        body: body
    }, {
        id: 8,
        title: "four",
        body: body
    }, {
        id: 9,
        title: "one",
        body: body
    }, {
        id: 10,
        title: "two",
        body: body
    }, {
        id: 11,
        title: "three",
        body: body
    }, {
        id: 12,
        title: "four",
        body: body
    },
    {
        id: 13,
        title: "one",
        body: body
    }, {
        id: 14,
        title: "two",
        body: body
    }, {
        id: 15,
        title: "three",
        body: body
    }, {
        id: 16,
        title: "four",
        body: body
    }, {
        id: 17,
        title: "one",
        body: body
    }, {
        id: 18,
        title: "two",
        body: body
    }, {
        id: 19,
        title: "three",
        body: body
    }, {
        id: 20,
        title: "four",
        body: body
    },
    {
        id: 21,
        title: "one",
        body: body
    }, {
        id: 22,
        title: "two",
        body: body
    }, {
        id: 23,
        title: "three",
        body: body
    }, {
        id: 24,
        title: "four",
        body: body
    }
]
const VariableDiv = ({ id, title, body }) => (

    <div style={{ background: 'yellow' }}>
        <img src={'https://picsum.photos/id/' + id + '/200/200'} alt='...' />
        <div>{title}</div>
        <div>{body}</div>
    </div>
)
const Loading = () => (
    <h2 >Loading......</h2>
)

export default class LazyDiv extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                {
                    val.map(data => (
                        <LazyLoad key={data.id} placeholder={<Loading />}>
                            <VariableDiv key={data.id} {...data} />
                        </LazyLoad>
                    ))
                }
            </div>
        )
    }
}