import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import pancake from '../images/8bitPC.jpg'; 
import Login from './oauth';

import '../css/App.css';

import UpVote from './UpVote.component';
class Resources extends React.Component {



  render (){
    return (
      <div className="background" >
        <NavBar />
        
        {/* <header className="App-header">
      
     
       </header> */}
       <div className="projectRow"> 
       <div className="colomn1">
       <section class="lessonOneVideos">
     <p>Lesson 1 Videos</p>
     <iframe class="video" width="252" height="229" src="https://www.youtube.com/embed/ieb6Svbc10E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe class="video" width="252" height="229" src="https://www.youtube.com/embed/Y9rMbKHoTBI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe class="video" width="252" height="229" src="https://www.youtube.com/embed/0lpxKw6E90Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>
   <section class="lessonTwoVideos">
     <p>Lesson 2 Videos</p>
     <iframe class="video" width="252" height="229" src="https://www.youtube.com/embed/Y9rMbKHoTBI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe class="video" width="252" height="229" src="https://www.youtube.com/embed/wQovwgW020g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe class="video" width="252" height="229" src="https://www.youtube.com/embed/x_wlcp-W27c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>
   <section class="lessonThreeVideos">
     <p>Lesson 3 Videos</p>
     <iframe class="video" width="252" height="229" src="https://www.youtube.com/embed/rlhhRVO5EOg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe class="video" width="252" height="229" src="https://www.youtube.com/embed/zJO9g7S2_Xo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe class="video" width="252" height="229" src="https://www.youtube.com/embed/Tio88WjwFO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>
       </div>


       <div className="colomn2">
         <h3>Submit your Vote</h3>
       <UpVote />
       </div>
       </div>
       </div>
  );
  }
}

export default Resources;