import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/list-education.css';

// this is the second component that is a functional react component it is different than a class component because it does not have a state or a life cycle methods no did mount method if you just need to accept props and return jsx use a functional component most components should be in there own file unless they are small enough like below
const Education = props => (
    <tr>
        <td>{props.education.username}</td>
        <td>{props.education.school}</td>
        <td>{props.education.duration}</td>
        <td>{props.education.startDate.substring(0,10)}</td>
        <td>{props.education.yearGraduated.substring(0,10)}</td>
        <td>
            <Link to ={"/edit/"+props.education._id}>edit</Link> | <a href="#" onClick={() => { props.deleteEducation(props.education._id)}}>delete</a>
        </td>
    </tr>
)



export default class EducationList extends Component {
    constructor(props){
        super(props);

        this.deleteEducation = this.deleteEducation.bind(this);
        this.state = {degrees: []};

    }

    componentDidMount(){
        axios.get('http://localhost:5000/education/')
        .then(response => {
            // getting all fields from MongoDB
            this.setState({degrees: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
    }

deleteEducation(id){
    axios.delete('http://localhost:5000/education/'+id)
    .then(res => console.log(res.data));

    this.setState({
        // filter means we are only going to return certain elements back to degrees _id is what is created my mongo in the DB
        degrees: this.state.degrees.filter(el => el._id !== id)
    });
}

educationList(){
    return this.state.degrees.map(currenteducation => {
        return <Education education={currenteducation} deleteEducation={this.deleteEducation} key={currenteducation._id}/>;
    })
}

    render(){
        return (
            <div>
               <h3>Logged Education</h3>
               <table className="table">
                   <thread className="thead-light">
                       <tr>
                           <th>Username</th>
                           <th>School</th>
                           <th>Duration</th>
                           <th>Start Date</th>
                           <th>Graduation</th>
                           <th>Actions</th>
                           
                       </tr>
                   </thread>
                   <tbody>
                       {this.educationList()}
                   </tbody>
               </table>
            </div>
        )
    }
}