import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';


import '../css/App.css';
import { useMediaQuery } from 'react-responsive'
class Resources extends React.Component {



  render (){
    return (
      <div className="App">
        <NavBar />
      </div>
  );
  }
}

export default Resources;