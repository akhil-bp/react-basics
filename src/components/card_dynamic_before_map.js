import React from "react";
export default class dynamic_before_map extends React.Component {
    state = {
        user: null
    }
    // kk = (values)=>{
    //     // values.persist()
    //     this.props.kk(values.target.innerHTML)
    // }
    delete(a,e) {
        console.log(a)
        this.props.kk(a)
        document.getElementsByClassName(a.id)[0].style.display = "none"
    }
    componentDidMount() {
        const arrayValues = this.props.data.response.map((val, index) => {
            return (
                <div key={val.id} style={{ width: 200 }} className={val.id}>
                    <img className="card-img-top" src={val.thumbnailUrl} alt="Card image" style={{ maxWidth: 196 }} />
                    <div className="card-body">
                        <button className="card-title" key={val.id} onClick={(e) => { this.delete(val,e) }}>{val.id} delete</button>
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
    }
}