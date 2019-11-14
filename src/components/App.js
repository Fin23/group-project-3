
import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import pancake from '../images/8bitPC.jpg'; 
import Login from './oauth';

import '../css/App.css';



class App extends React.Component {



  render (){
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h1>
          Welcome to StaKC,
          </h1>
          <br></br> 
         
          <br></br>
          <img src={pancake} className="App-logo" alt="pancake" />
<br></br>



<button className="btn-secondary">  
      <Link to ="/jobs" >Job Search</Link> 
       </button>
       <br></br>
          {/* form input for job search
          <form className="form-inline my-2 my-lg-0">
      <input id="key-word-input" className="form-control mr-sm-2" type="search" placeholder="Search by key word(s)" aria-label="Search"/>
        
      <input id="location-input" className="form-control mr-sm-2" type="search" placeholder=" KC Search by location" aria-label="Search"/>
      <div className="form-group">
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </div>
    </form> */}
              {/* end of job search button */}
          <p>
            The KC job application created by junior developers, for junior developers
          </p>
          {/* <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
             
         

         
          </a> */}
        </header>

  
      </div>
  

 
 
  );
  }
}

export default App;
