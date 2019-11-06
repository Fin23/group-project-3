//import React from 'react';
//import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import React, {Component} from 'react'


export default class Login extends Component{ 

 responseGoogle = async (response) => {
       const userObject = {
          username: response.w3.ofa,
          password: 'test'
       }
       if(response.w3.ofa) {
          await localStorage.setItem("user", JSON.stringify(userObject));
          await window.location.reload();
       } else {

    }
    console.log(response);
    }
    render() {
       return(
           <div>
             
             
              <GoogleLogin
                clientId="483970821884-i4esrcldb2j4kdaai4rds8mos8mkskqe.apps.googleusercontent.com" //id gotten from Google
                buttonText="Log in with Google"
                onSuccess={this.props.responseGoogle}
                onFailure={this.props.responseGoogleError}
              />
           </div>

       );
       }
    }