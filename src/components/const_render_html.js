import React from "react";
const val = [
    {
        id: 1,
        title: "11111111",
        body: "11111 11111111111 11111111111"
    }, {
        id: 2,
        title: "2222222",
        body: "2222222 2222222 2222222"
    }, {
        id: 3,
        title: "333333333",
        body: "333333333 333333333 333333333"
    }, {
        id: 4,
        title: "44444444444",
        body: "44444444444 44444444444 44444444444"
    },{
        id: 1,
        title: "11111111",
        body: "11111 11111111111 11111111111"
    }, {
        id: 2,
        title: "2222222",
        body: "2222222 2222222 2222222"
    }, {
        id: 3,
        title: "333333333",
        body: "333333333 333333333 333333333"
    }, {
        id: 4,
        title: "44444444444",
        body: "44444444444 44444444444 44444444444"
    },{
        id: 1,
        title: "11111111",
        body: "11111 11111111111 11111111111"
    }, {
        id: 2,
        title: "2222222",
        body: "2222222 2222222 2222222"
    }, {
        id: 3,
        title: "333333333",
        body: "333333333 333333333 333333333"
    }, {
        id: 4,
        title: "44444444444",
        body: "44444444444 44444444444 44444444444"
    }
]
const VariableDiv = ({ id, title, body }) => (

    <div style={{ background: 'yellow' }}>
        <div>{id}</div>
        <div>{title}</div>
        <div>{body}</div>
    </div>
)
export default class VariableRenderHtml extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }

    render() {
        return (
            <div style={{position:'relative'}}>
                    <h2 style={{position:'sticky',top:'0px'}}>STICKY</h2>
                <h2 style={{position:'fixed',background:'lightsteelblue'}}>FIXED</h2>
                {
                    val.map(data => (
                        <VariableDiv key={data.id} {...data} />
                    ))
                }
            </div>
        );
    }
}