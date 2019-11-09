import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './navbar';
import '../css/userP.css';
import '../css/grid.css';
import link from '../images/link.png';
import Radium from 'radium';

import axios from 'axios';
import $ from 'jquery';
import Popper from 'popper.js';

import { useMediaQuery } from 'react-responsive';



// class Profile extends React.Component {

const Profile = (props)  => {

  


    

   
      return (
        <div> 
          <NavBar />
    
    <div className="row">

        <div className="right-column-home" >
          <div className="row1">
            <div className="contact-home">
              <div className="contactInfo"> 
              
                <div className="Name"> 
                  Name: Link 
                  </div>
                <div className = "Email">
                  Email: OcarianMaster23@gmail.com 
                  </div>
                <div className="Name">
                  Phone Number: (481)-516-2342 
                  </div>
                <a href="https://github.com/Fin23/group-project-3">  
                  <section className="icon-list">
                    <i className="nes-icon github is-large"></i>
                      <i className="nes-icon linkedin is-large"></i>
                        <i className="nes-icon instagram is-large"></i>
                          <i className="nes-icon gmail is-large"></i>
                            </section>
                            </a>
                            </div>
                            </div>
                            </div>

       <div className="hero-image-container">
          <div className="pic">
            <img src={link} className="profilePic" alt="profilePic" />
            </div>
          {/* <input 
            style={{display: 'none'}} 
              type="file"  
                onChange={this.fileSelectedHandler} 
                  ref={fileInput => this.fileInput = fileInput}/>
                    <button onClick={()=>this.fileInput.click()}>
                      Pick File
                    </button>
                  <button onClick={this.fileUploadHandler}>
                    Upload
                    </button> */}
            </div> 

{/* paragraph button dropdown  */}
<button className="item dropdown">
  <p className="link dropdown-toggle" id="Dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Paragraph Introduction
      </p>
        <div className="dropdown-menu" aria-labelledby="Dropdown">
          <p className="list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <label for="textarea_field">
              Textarea 
                </label>
              <textarea id="textarea_field" className="nes-textarea">
                Edit Paragraph
                  </textarea>
                  </p>
                  </div>
                  </button>

{/* education button drop down */}
<button className="item dropdown">
  <p className="link dropdown-toggle" id="Dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Education
      </p>
        <div className="dropdown-menu" aria-labelledby="Dropdown">
          <p className="list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <label for="textarea_field">
              Textarea
                </label>
              <textarea id="textarea_field" className="nes-textarea">Add Certifications and or Schools attended</textarea>
                </p>
                </div>
                </button>

{/* skills button drop down */}
<button className="item dropdown">
  <p className="link dropdown-toggle" id="Dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Skills
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
                    </p>
                    </div>
                    </button>
      
{/* end of right column home div */}
</div>
{/* below is the end tag for row div */}
        </div>




        <div class="container">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <div class="form-group files">
                <label>Upload Your File</label>

                <input 
                // name="firstName"
                // value={this.state.firstName}
                // onChange={this.handleInputChange}
                // placeholder="First Name"
                type="text" 
                class="form-contr">
                </input>
                <input 
                // name="lastName"
                // value={this.state.lastName}
                // onChange={this.handleInputChange}
                // placeholder="Last Name"
                type="text" 
                class="form-contr">
                </input>
                {/* last one will be for resume or photo */}





          
                  
                  {/* </input> */}
              



              </div>
              <button type="button" class="btn btn-s"></button>
            </div>
          </div>
        </div>
        </div>
      );
     
    
    
  }
  export default Profile;