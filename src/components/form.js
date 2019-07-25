import React from 'react';
import Dynamic from './card_dynamic'

export default class Form extends React.Component {
    state = {
        values: {},
        errors: {},
        condition: '',
        sent_data:{}

        // addValues:null
    }
    kk = (kk)=>{
        // kk.persist()
        console.log(typeof kk.target.firstChild, kk.target.firstChild)
    }
    async componentDidMount(){
        await fetch('https://jsonplaceholder.typicode.com/photos?_page=7&_limit=100')
  .then(response => response.json())
  .then((data) =>{
    // console.log(data)
    let sent_data = this.state.sent_data;
    sent_data['response']=data
    this.setState({
        sent_data:sent_data
    })
  this.setState({htmlData: <Dynamic data={this.state.sent_data} kk={this.kk}/> })

    
} )
        
        // let sent_data = this.state.sent_data;
        // sent_data['response']="123"
        // sent_data['gmail']="123@gmail"
        // sent_data['imageurl']="https://i1.fnp.com/images/pr/l/romancing-roses-n-daisies_1.jpg"

        
    }
    inputhandle = (field, e) => {
        // this.setState.values.field =e.target.value
        let addValues = this.state.values;
        addValues[field] = e.target.value
        // this.state.values[field] = e.target.value
        // this.setState({addValues})

    }
    validate = () => {
        let fields = this.state.values;
        let errors = {};
        let formIsValid = true;
        //name
        if (!fields['name']) {
            formIsValid = false;
            errors['name'] = "please provide a name"
        } else if (!fields['name'].match(/^[a-zA-Z ]{2,30}$/)) {
            formIsValid = false;
            errors['name'] = "numbers not allowed"
        }
        //email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
        if (!fields['password']){
            formIsValid = false;
            errors['password'] = "Cannot be empty"
        }

        if (!fields['confirmpassword']){
            formIsValid = false;
            errors['confirmpassword'] = "Cannot be empty"
        }
        if(this.state.values.confirmpassword != this.state.values.password){
            formIsValid = false;
            errors['confirmpassword'] = "password not matching!"
        }
if(!errors == ""){
    // this.setState({ errors: null });
    this.setState({ errors: errors })
    return formIsValid;
}
    }
    formsSub = (e) => {
        e.preventDefault();
        const isValid = this.validate()
        console.log(this.state.values)
        if (isValid) {
            console.log(document.getElementsByTagName('p'))
            alert("validation success")
        } else {
            setTimeout(()=>{
                this.setState({condition:""})

            },3000)
            this.setState({
                condition:
                    <div class="alert alert-danger alert-dismissible fade in">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Validation error!</strong>
                    </div>
            })
        }
    }



    render() {
        return (
            <div>
                <div>{this.state.condition}</div>
                <form onSubmit={this.formsSub}>
                    <label>name
                        <input type="text" name="name" onChange={this.inputhandle.bind(this, "name")}></input>
                    </label> <br />
                    <p className="text-danger">{this.state.errors.name}</p>
                    <label>email
                    <input type="text" name="email" onChange={this.inputhandle.bind(this, "email")}></input>
                    </label><br />
                    <p className="text-danger">{this.state.errors.email}</p>
                    <label>password
                    <input type="password" name="password" onChange={this.inputhandle.bind(this, "password")}></input>
                    </label><br />
                    <p className="text-danger">{this.state.errors.password}</p>
                    <label>confirm password
                    <input type="password" name="confirmpassword" onChange={this.inputhandle.bind(this, "confirmpassword")}></input>
                    </label><br />
                    <p className="text-danger">{this.state.errors.confirmpassword}</p>
                    {/* <label>password
                        <input type="text" name="password" onChange={this.inputhandle}></input>
                    </label><br /> */}
                    {/* <p className="text-danger">{this.state.passwordError}</p> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    {this.state.htmlData}
            </div>
        )
    }
}