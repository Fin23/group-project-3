import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import pancake from '../images/8bitPC.jpg'; 
import Login from './oauth';

import '../css/App.css';

class Jobs extends React.Component {



  render (){
    return (
      <div className="App">
        <NavBar />
      </div>
  );
  }
}

export default Jobs;