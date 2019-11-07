import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import EducationList from './education-list.component'
import CreateProfile from './create-profile.component'
import '../css/userP.css';
import '../css/grid.css';
import NavBar from './navbar';
import link from '../images/link.png';
import AddEmail from './emailAdd.component';


export default class MainProfile extends Component{


      // in javascript classes, always call super when defining the constructor of a sub class
      constructor(props){
        super(props);

        // binding the target value/methods to the this key word so it won't be undefined
this.onChangeUsername = this.onChangeUsername.bind(this);
// this.onChangeEmail = this.onChangeEmail.bind(this);
// this.onChangeSchool = this.onChangeSchool.bind(this);
// this.onChangeDuration = this.onChangeDuration.bind(this);
// this.onChangeStartDate = this.onChangeStartDate.bind(this);
// this.onChangeYearGraduated = this.onChangeYearGraduated.bind(this);

// this.onSubmit = this.onSubmit.bind(this);


// setting the initial state of the component by assigning an object to this . state
        this.state = {
// correlates to the mongo db document/models page
            username:'',
            email:'',
            // school:'',
            // duration:0,
            // startDate:new Date(),
            // yearGraduated:new Date(),
            // // users will be a drop down list of the users in the data base to choose from
            // users:[]

// state is how we create variables in react, and when you update the state it will update your page

        };
    }

    // react life cycle method, it is called right before anything is displayed on the page hard coding the first user so that the drop down user option is available until mongo is fully connected
    componentDidMount(){
      axios.get('http://localhost:5000/profile/')
      .then(response => {
        if(response.data.length > 0){
            this.setState({
                // passing in profile and mapping over the array then pulling the profile.username from mongo
                users: response.data.map(profile => profile.username),
                // setting username to the first one in the array
                username:response.data[0].username
            });
        }
      });
      
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

render(){
    return(
        <div> 
         
    
    <div className="row">

        <div className="right-column-home" >
          <div className="row1">
            <div className="contact-home">
              <div className="contactInfo"> 
              

              {/* <fieldset> */}
   
                  {/* <form action="/action_page.php" /> */}
               
                  <CreateProfile/>
               
                  <AddEmail/>
                  <a href="https://github.com/Fin23/group-project-3">  
                  <section className="icon-list">
                    <i className="nes-icon github is-large"></i>
                      <i className="nes-icon linkedin is-large"></i>
                        <i className="nes-icon instagram is-large"></i>
                          <i className="nes-icon gmail is-large"></i>
                            </section>
                            </a>
                  {/* </fieldset> */}
           
                          
                            </div>
                            </div>
                            </div>

        <div className="hero-image-container">
          <div className="pic">
            <img src={link} className="profilePic" alt="profilePic" />
            </div>
        
            </div>

{/* paragraph button dropdown   -toggle */}
<button className="item dropdown">
  <p className="link dropdown" id="Dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <a href="#">Paragraph Introduction</a>
      </p>
        <div className="dropdown-menu" aria-labelledby="Dropdown">
          <p className="list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <label for="textarea_field">
              Textarea 
                </label>
              <textarea id="textarea_field" className="nes-textarea">
                Edit Paragraph
                  </textarea>
                  <input type="submit" value="Save" />
                  </p>
                  </div>
                  </button>

{/* education button drop down */}
<button className="item dropdown">
  <p className="link dropdown" id="Dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <a>Education</a>
      </p>
        <div className="dropdown-menu" aria-labelledby="Dropdown">
            <EducationList/>
          {/* <p className="list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <label for="textarea_field">
              Textarea
                </label>
              <textarea id="textarea_field" className="nes-textarea">Add Certifications and or Schools attended</textarea>
              <input type="submit" value="Save" />
                </p> */}
                </div>
                </button>

{/* skills button drop down */}
<button className="item dropdown">
  <p className="link dropdown" id="Dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <a>Skills</a>
      </p>
      <div className="dropdown-menu" aria-labelledby="Dropdown">
        <p className="list">
          Javascript:50%
            <progress className="nes-progress is-success" value="50" max="100">
            </progress>
              React:80%
                <progress className="nes-progress is-success" value="80" max="100">
                </progress>
                  MongoDB:70%
                  <progress className="nes-progress is-success" value="70" max="100">
                    </progress>
                    <input type="submit" value="Save" />
                    </p>
                    </div>
                    </button>
      
{/* end of right column home div */}
</div>
{/* below is the end tag for row div */}
        </div>
 
        </div>
    )
}

}