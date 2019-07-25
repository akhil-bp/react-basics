import React from "react";
export default class card extends React.Component {

    componentDidMount() {
        console.log("props", this.props)
    }
    render() {
        return (
            <div className="container">
                {/* <div></div>
                <div></div>
                <div></div> */}
                <div className="card" style={{width:200}}>
                    <img onClick={this.props.triggerfun} className="card-img-top" src={this.props.data.imageurl} alt="Card image" style={{maxWidth: 196}} />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.data.name}</h4>
                            <p className="card-text">{this.props.data.gmail}</p>
                        </div>
                </div>
            </div>
                )
            }
}