import React, { Component } from 'react';
import axios from 'axios';


export default class AddEmail extends Component {

  // in javascript classes, always call super when defining the constructor of a sub class
  constructor(props){
    super(props);

    // binding the target value/methods to the this key word so it won't be undefined
this.onChangeEmail = this.onChangeEmail.bind(this);

this.onSubmit = this.onSubmit.bind(this);


// setting the initial state of the component by assigning an object to this . state
    this.state = {
// correlates to the mongo db document/models page
        email:'',
      

// state is how we create variables in react, and when you update the state it will update your page

    };
}

onChangeEmail(e){
    this.setState({
        email: e.target.value
    });
}

onSubmit(e){
    e.preventDefault();
// can set typical javascript variables if it is just being used in inside a single method
    const emails = {
        email: this.state.email,
       
    }
    console.log(emails);

    //sending data to the back end connect the front and back together
    // axios sends a post to the back end end point, expects json so send the profile object as a second argument,  .then is a promise, 
    axios.post('http://localhost:5000/email/add', emails )
    .then(res => console.log(res.data));

  this.setState({
      email: ''
  });
}

    render(){
        return (
            <div>
                <h5>Create new email</h5>
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label> Email: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create User" className="btn btn-primary" />
                        </div>

                    
                </form>
            </div>
        )
    }
}