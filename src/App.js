
import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import pancake from './images/8bitPC.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      
        <img src={pancake} className="App-logo" alt="pancake" />
       
        <p>
          Welcome to StacKC, the one stop shop for new developers trying to break into the industry in Kansas City 
        </p>
        
        <a
          className="App-link"
         
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Log In 
        <br></br>
        link still goes to react
        </a>
      </header>
  
    </div>
  );
}

export default App;
