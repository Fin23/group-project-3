
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import './css/index.css';

import App from './components/App';

import Resources from './components/resources';
import Jobs from './components/jobs';
import AboutUs from './components/aboutUs';

import NavBar from "./components/navbar"
import EducationList from "./components/education-list.component";
import EditEducation from "./components/edit-education.component";
import CreateEducation from "./components/create-education.component";
import CreateProfile from "./components/create-profile.component";

import MainProfile from "./components/Main-Profile.component";


import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route path="/resources" component={Resources} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/" exact component={EducationList}/>
  <Route path="/edit/:id"  component={EditEducation}/>
  <Route path="/create"  component={CreateEducation}/>
  <Route path="/profile"  component={CreateProfile}/>
  <Route path="/main"  component={MainProfile}/>
      </div>
    </Router>
  )

{/* <App /> */}

ReactDOM.render(routing, document.getElementById('root'));









// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
