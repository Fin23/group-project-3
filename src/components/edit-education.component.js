import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import EducationList from './education-list.component';

export default class EditEducation extends Component {


    // in javascript classes, always call super when defining the constructor of a sub class
    constructor(props){
        super(props);

        // binding the target value/methods to the this key word so it won't be undefined
this.onChangeUsername = this.onChangeUsername.bind(this);
this.onChangeSchool = this.onChangeSchool.bind(this);
this.onChangeDuration = this.onChangeDuration.bind(this);
this.onChangeStartDate = this.onChangeStartDate.bind(this);
this.onChangeYearGraduated = this.onChangeYearGraduated.bind(this);

this.onSubmit = this.onSubmit.bind(this);


// setting the initial state of the component by assigning an object to this . state
        this.state = {
// correlates to the mongo db document/models page
            username:'',
            school:'',
            duration:0,
            startDate:new Date(),
            yearGraduated:new Date(),
            // users will be a drop down list of the users in the data base to choose from
            users:[]

// state is how we create variables in react, and when you update the state it will update your page

        };
    }

    // react life cycle method, it is called right before anything is displayed on the page hard coding the first user so that the drop down user option is available until mongo is fully connected
    componentDidMount(){
      axios.get('http://localhost:5000/education/'+this.props.match.params.id)
      .then(response => {
        
            this.setState({
            username: response.data.username,
            school: response.data.school,
            duration: response.data.duration,
            startDate: new Date (response.data.startDate),
            yearGraduated: new Date (response.data.yearGraduated)
            });
      })
      .catch(function(error){
          console.log(error);
      })
      axios.get('http://localhost:5000/profile/')
      .then(response => {
          if(response.data.length > 0){
              this.setState({
                  users: response.data.map(profile => profile.username),
              })
          }
      })
      
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeSchool(e){
        this.setState({
            school: e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeStartDate(date){
        this.setState({
            startDate: date
        });
    }
    onChangeYearGraduated(date){
        this.setState({
            yearGraduated: date
        });
    }



onSubmit(e){
    e.preventDefault();
// can set typical javascript variables if it is just being used in inside a single method
    const education = {
        username: this.state.username,
        school: this.state.school,
        duration: this.state.duration,
        startDate: this.state.startDate,
        yearGraduated: this.state.yearGraduated
    }
    console.log(education);
// putting the axios request inside the submit button so they work together 
axios.post('http://localhost:5000/education/update'+this.props.match.params.id, education )
.then(res => console.log(res.data));

    // when submitted this will take the user to the list of schools
//     window.location = '/';
 }

    render(){
        return (
            <div>
                
                <h3>Edit Education log</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.duration.username}
                    onChange={this.onChangeUsername}>
                        {
            // this.state.users is an array which will come from mongoDB .map lets ups return something for each element in an array
        // so for each user in the array it returns options
                            this.state.users.map(function(user){
                                return <option
                                key={user}
                                value={user}>{user}</option>;
                            })
                        }
                        </select>
                </div>
                <div className="form-group">
                    <label>School</label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.school}
                    onChange={this.onChangeSchool}
                    />
            </div>
            <div className="form-group">
                <label>Duration (in years)</label>
                <input 
                    type="text"
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
            </div>

            <div className="form-group">
                <label>Start Date:</label>
                <div>
                    {/* date picker comes from a yarn install */}
                    <DatePicker
                    selected={this.state.startDate}
                    onChange={this.onChangeStartDate}
                    />
                </div>
            </div>
            <div className="form-group">
                <label>Year Graduated:</label>
                <div>
                    <DatePicker
                    selected={this.state.yearGraduated}
                    onChange={this.onChangeYearGraduated}
                    />
                </div>
            </div>

            <div className="form-group">
                <input type="submit" value="edit education log" className="btn btn-primary" />
            </div>
            </form>
            
        
            </div>
        )
    }
}