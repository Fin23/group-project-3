import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';


import '../css/App.css';

class Resources extends React.Component {



  render (){
    return (
      <div className="App">
        <NavBar />
        <h1> create learning recourses </h1>
      </div>
  );
  }
}

export default Resources;