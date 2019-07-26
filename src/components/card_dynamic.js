import React from "react";
export default class dynamic extends React.Component {
    // constructor(){}
    kk = (values, d) => {
        this.props.kk(values)
        console.log(values)
        document.getElementsByClassName(values.id + "temp")[0].style.display = "none"
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className={this.props.data.id +"temp"+" container"}>
                <div className="card" style={{ width: 200 }}>
                    <img className="card-img-top" src={this.props.data.thumbnailUrl} alt="Card image" style={{ maxWidth: 196 }} />
                    <div className="card-body">
                        <button className="card-title" onClick={this.kk.bind(this, this.props.data)}>{this.props.data.id}</button>
                        <a className="card-text" >{this.props.data.title}</a>
                    </div>
                </div>
            </div>
        )
    }
}