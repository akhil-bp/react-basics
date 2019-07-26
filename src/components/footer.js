import React from "react";
export default class Footer extends React.Component{
    state={
        data:null
    }
    componentDidMount() {
        const num = [1,2,3,5,6,7,8,9];
        const dd = num.map((d)=>{
            return(
            <b key={d}>{d}</b>
            )
        })
        this.setState({data:dd})
    }
    render(){
      
    return(
            <span>{this.state.data}
                <h2>Footer</h2>
            </span>
        )
    
}
}