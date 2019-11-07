import React  from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../css/navbar.css';



const NavBar = props =>{
    console.log('NavBar - Rendered');

    return ( 
        // 


 
<nav  
className="navbar navbar-expand-lg navbar-light">



  <Link to ="/" className="navbar-brand" href="#">StaKC</Link>
  <button className="navbar-toggler" type="button"data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" 
  aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active">
        <Link to ="/main" className="nav-link">Home  Profile</Link> <span className="sr-only">(current)</span>
      </li>


      <li className="nav-item">
      <Link to ="/resources" className="nav-link">Learning Resources</Link> <span className="sr-only">(current)</span>
      </li>

      <li className="nav-item">
      <Link to ="/jobs" className="nav-link">Jobs Page</Link> <span className="sr-only">(current)</span>
      </li>
      <li className="nav-item">
      <Link to ="/aboutus" className="nav-link">The Creators</Link> <span className="sr-only">(current)</span>
      </li>
      <li className="navbar-item">
              <Link to="/" className="nav-link">Education</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Eduction Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/profile" className="nav-link"> Create Profile</Link>
            </li>

{/* drop down list for nav bar */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}

    

    </ul>

    
  </div>

  

</nav>






    );
};



 
export default NavBar;