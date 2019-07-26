import React from "react";
export default class prop extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    componentDidMount() {

    }
    mm = (event) =>{
        // event.preventDefault()
        let journal = [
            {events: ["work", "touched tree", "pizza",
                      "running", "television"],
             squirrel: false},
            {events: ["work", "ice cream", "cauliflower",
                      "lasagna", "touched tree", "brushed teeth"],
             squirrel: false},
            {events: ["weekend", "cycling", "break", "peanuts",
                      "beer"],
             squirrel: true},
            /* and so on... */
          ];
        this.props.nn(journal)
    }
    render() {
        return (
            <div className="container">
                <button className="btn-primary" onClick={this.props.sendtoparent}>{this.props.fromparent}</button>
                <button onClick={this.mm}>sent object</button>
            </div>
                )
            }
}