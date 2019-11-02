import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import '../css/userP.css';
import '../css/grid.css';
import axios from 'axios';





  

class Profile extends React.Component {

    render(){
   
      return (
        <div> 
        
        <NavBar />
        {/* <div className="HP"> 
        <header>Header: needs dynamic name</header>
        <h1>Profiles</h1>
        </div> */}

        <div className="row">

        <div className="right-column-home">
          <div className="hero-image-container">
            

            <div className="pic"></div>
            <input 
            style={{display: 'none'}} 
            type="file"  
            onChange={this.fileSelectedHandler} 
            ref={fileInput => this.fileInput = fileInput}/>
            <button onClick={()=>this.fileInput.click()}>Pick File</button>
            <button onClick={this.fileUploadHandler}>Upload</button>
          </div>
          <div className="aboutYou">Paragraph introduction about you</div>
          <div className="traits">three favorite traits</div>

          <div className="contactInfo"> 
          <div>age: </div>
           <div>Current Occupation: </div> 
           <div>email:</div>
           <div>phone number:</div>
           <div>address:</div>
           <div>email:</div>
           <div>email:</div>
           </div>

</div>
        

        {/* <div className="middle-column-home">
        <div className="workExperience">
          <h5>work experience</h5>
            <ol>
              <li>job 1</li>
              <li>job 2</li>
              <li>job 3</li>
              <li>job 4</li>
            </ol>
          </div>
          <div className="Education">
          <h5>Education</h5>
            <ol>
              <li>school 1</li>
              <li>school 2</li>
              <li>school 3</li>
            </ol>
            </div>
          <div className="gitHubLink">GIT HUB LINK
          <br></br>
          <a href="#">
  </a>
  <section class="icon-list"><i className="nes-icon github is-large"></i></section>
  
          </div>

          <div className="skills"> 
          <h5>Skills</h5>
          <div>JavaScript </div>
           <div>React </div> 
           <div>MySql</div>
           <div>HTML</div>
           <div>CSS</div>
           <div>MongoDB</div>
           <div>Git</div>
           <div>PHP</div>
           
         
           
           </div>
</div> */}
{/* end of middle column */}
       
        
         {/* <div className="left-column-home">
        <div className="hero-image-container">
            <h3>/photo upload spot/</h3>
          </div>
          <div className="aboutYou">Paragraph introduction about you</div>
          <div className="traits">three favorite traits</div>
          <div className="contactInfo"> 
          <div>age: </div>
           <div>Current Occupation: </div> 
           <div>email:</div>
           <div>phone number:</div>
           <div>address:</div>
           <div>email:</div>
           <div>email:</div>
           </div>
            </div>  */}

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