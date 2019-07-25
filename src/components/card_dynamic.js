import React from "react";
export default class dynamic extends React.Component {
    state = {
        user: null
    }
    componentDidMount() {
        // console.log("props", this.props.data)
        // setTimeout(()=>{
        // console.log("props", this.props.data.response)
        // },3000)
        const arrayValues = this.props.data.response.map((val, index) => {
            // console.log(val)
            return (
                // <p>{val.id}</p>
                <div className="card" style={{ width: 200 }}>
                    <img className="card-img-top" src={val.thumbnailUrl} alt="Card image" style={{ maxWidth: 196 }} />
                    <div className="card-body">
                        <button className="card-title" onClick={this.props.kk}>{val.id}</button>
                        <a className="card-text" >{val.title}</a>
                    </div>
                </div> 

            )
        })
        this.setState({ user: arrayValues })
    }
    render() {
        return (
            <div className="container">
                {this.state.user}
            </div>
        )
        // })
    }
}