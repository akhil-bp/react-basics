import React from 'react';

export default class Formtwo extends React.Component {
    state = {
        values: {},
        errors: {},
        condition: '',
        sent_data:{}

        // addValues:null
    }
    async componentDidMount(){
        
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
        this.setState({ errors: errors });
        return formIsValid;
    }
    formsSub = (e) => {
        
        e.preventDefault();
        const isValid = this.validate()
        console.log(this.state.values)
        if (isValid) {
            alert("validation success")
            this.props.variableABC(this.state.values)
        } else {
            setTimeout(()=>{
                this.setState({condition:""})
            },3000)
            this.setState({
                condition:
                    <div className="alert alert-danger alert-dismissible fade in">
                        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Validation error!</strong>
                    </div>
            })
        }
    }



    render() {
        return (
            <div >
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
                    {/* <label>password
                        <input type="text" name="password" onChange={this.inputhandle}></input>
                    </label><br /> */}
                    {/* <p className="text-danger">{this.state.passwordError}</p> */}
                    <button type="submit"  className="btn btn-primary">Submit</button>
                </form>
            </div >
        )
    }
}