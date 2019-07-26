import React from "react";
import Prop from './prop'
export default class param extends React.Component {

    componentDidMount() {
        console.log("props", this.props)
    }
    val(e) {
        e.persist();
        console.log(e, "just call on each button click")
        // e.target.classList.add('btn-primary');
        if (e.target.classList[0] == 'btn-primary') {
            e.target.classList.add('btn-danger');
            e.target.classList.remove('btn-primary');
        } else if (e.target.classList[0] == 'btn-danger') {
            e.target.classList.remove('btn-danger');
            e.target.classList.add('btn-primary');
        }

    }
    oo(e) {
        console.log(e, "object")

    }
    home = ()=>{
        console.log(this.props)
        let path ="/home";
        this.props.history.push(path);

    }
    render() {
        return (
            <div className="container">
            <button onClick={this.home}>go to home</button>
                <Prop fromparent="value got in child" sendtoparent={this.val} nn={this.oo} />
                <h2>param is : {this.props.match.params.id + " " + this.props.match.params.val}</h2>
            </div>
        )
    }
}