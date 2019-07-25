import React from "react";
export default class param extends React.Component {

    componentDidMount() {
        console.log("props", this.props)
    }
    render() {
        return (
            <div className="container">
                <h2>param is : {this.props.match.params.id+" "+this.props.match.params.val}</h2>
            </div>
                )
            }
}