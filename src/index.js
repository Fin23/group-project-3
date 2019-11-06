
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './css/index.css';

import App from './components/App';
import Profile from './components/userProfile';
import Resources from './components/resources';
import Jobs from './components/jobs';
import AboutUs from './components/aboutUs';


import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/resources" component={Resources} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/aboutUs" component={AboutUs} />
      </div>
    </Router>
  )

{/* <App /> */}

ReactDOM.render(routing, document.getElementById('root'));









// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
