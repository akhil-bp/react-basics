import React from 'react';
import axios from 'axios';
import Card from './card';
import Formtwo from './formtwo';
const env = require('./env')

export default class Home extends React.Component {


    constructor(props) {
        super(props);

        console.log(this.props);
        this.state = {
            name: "ajo",
            place: "mala",
            user: null,
            values: [],
            sent_data: {}
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            console.log(Date.now())
        }, 3000)
        let sent_data = this.state.sent_data;
        sent_data['name'] = "sampli"
        sent_data['gmail'] = "sample@gmail"
        sent_data['imageurl'] = "https://i1.fnp.com/images/pr/l/romancing-roses-n-daisies_1.jpg"

        this.setState({
            sent_data: sent_data
        })

        setInterval(() => { this.setState({ time: <span className="bg-warning">TIME : <b> {new Date().toLocaleTimeString()}</b>.</span> }) }, 1000)
        if (!env.envData.isLoggedIn == true) {
            // alert("hi")
            let path = "/form";
            this.props.history.push(path);
        }
    }
    upadeState(val) {
        this.setState({
            name: val.target.value
        })
    }
    get_tr = (val) => {
        console.log(val, "data")
        alert(JSON.stringify(val))
        // alert(val)

    }
    getValues = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(values => {
                this.values = values
                // console.log(values.data)
                const arrayValues = values.data.map((val, index) => {
                    // return (<li key={val.id} style={{ listStyle: "none" }} onClick={() => this.selectedlist(val.username)}>{val.username}</li>)
                    // {
                    // this.state.values.map((listValue, index) => {

                    return (

                        <tr key={val.id} onClick={() => { this.get_tr(val) }}>
                            <td>{val.id}</td>
                            <td>{val.username}</td>
                            <td>{val.phone}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.address.city}</td>
                            <td>{val.address.suite}</td>
                            <td>{val.address.street}</td>
                            <td>{val.address.zipcode}</td>
                            <td>{val.address.geo.lat}</td>
                            <td>{val.address.geo.lng}</td>
                            <td>{val.company.bs}</td>
                            <td>{val.company.catchPhrase}</td>
                            <td>{val.company.name}</td>





                        </tr>
                    )
                    // })
                })
                this.setState({ user: arrayValues })
            })
    }
    triggerfun(e) {
        e.persist();
        console.log('triggerfun working', e)

    }
    // ddd(e){

    //     console.log("ddddd",e.target)
    // }
    ddd = (val) => {
        // this.setState({...formModel});
        console.log(val)
    }
    render() {
        return (

            <div >
                {this.state.time}
                <Card data={this.state.sent_data} triggerfun={this.triggerfun.bind()} />

                <input type="text" onChange={this.upadeState.bind(this)} ></input>
                <p>
                    entered text is {this.state.name}, number is {this.state.place}
                </p>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <button onClick={this.getValues}>list user</button>
                <div>
                    fdff
                </div>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>username</th>
                                <th>phone</th>
                                <th>name</th>
                                <th>email</th>
                                <th>city</th>
                                <th>suite</th>
                                <th>street</th>
                                <th>zipcode</th>
                                <th>lat</th>
                                <th>lng</th>
                                <th>company bs</th>
                                <th>company catchPhrase</th>
                                <th>company name</th>


                            </tr>
                        </thead>
                        <tbody >
                            {this.state.user}
                        </tbody>
                    </table>
                </div>
                <div>get response from form2 component<Formtwo variableABC={this.ddd} /> </div>
            </div>
        )
    }

}
