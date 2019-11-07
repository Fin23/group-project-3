import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './navbar';
import '../css/userP.css';
import '../css/grid.css';
import link from '../images/link.png';
import axios from 'axios';



class Profile extends React.Component {

    render(){
      return (
        <div> 
          <NavBar />
    
    <div className="row">

        <div className="right-column-home" >
          <div className="row1">
            <div className="contact-home">
              <div className="contactInfo"> 
              

              <fieldset>
    <legend>Profile</legend>
                <div className="Name"> 
                  Name: Link Link
                  </div>
                  <form action="/action_page.php" />
                    First name:
                 <input type="text" name="firstname" value=" " />
                 <br></br>
                 Last name:
                  <input type="text" name="lastname" value=" " />
                
                  
                  
                <div className = "Email">
                   OcarianMaster23@gmail.com 
                  {/* E-mail: <input type="email" name="emailaddress"></input> */}
                  </div>
                  E-mail: 
                  <br></br>
                  <input type="email" name="emailaddress" />
                <div className="Name">
                   (481)-516-2342 
                
                  </div>
                  Phone Number:
                  <input type="tel" id="phone" name="phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required></input>
                  <input type="submit" value="SAVE" />
                  </fieldset>
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
          <p className="list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <label for="textarea_field">
              Textarea
                </label>
              <textarea id="textarea_field" className="nes-textarea">Add Certifications and or Schools attended</textarea>
              <input type="submit" value="Save" />
                </p>
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
      )
     
    }
    
  }
  export default Profile;