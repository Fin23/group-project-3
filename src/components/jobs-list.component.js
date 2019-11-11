import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './navbar';


const Job = props => (
    <table> 
    <tr>
        
        <td>{props.job.jobtitle}</td>
        <td>{props.job.companyArray}</td>
        <td>{props.job.city}</td>
        <td>{props.job.state}</td>
        <td>{props.job.summary}</td>
        <td>{props.job.link}</td>
        <td>
            <Link to ={"/edit/"+props.job._id}>edit</Link> | <a href="#" onClick={() => { props.deleteJob(props.job._id)}}>delete</a>
        </td>
       
    </tr>
    </table>

)

export default class JobList extends Component {
    constructor(props){
        super(props);

        this.deleteJob = this.deleteJob.bind(this);
        this.state = {jobs: []};
    }



    componentDidMount(){
        axios.get('http://localhost:5000/jobs/')
        .then(response => {
            this.setState({jobs: response.data});
        })
        .catch((error) =>{
            console.log(error);
        });
    }

// loadJobs = () =>{
//     API.getJobs()
//     .then(response => {
//         this.setState({jobs: response.data});
//     })
//     .catch((error) =>{
//         console.log(error);
//     });
// }
 






    deleteJob(id){
        axios.delete('http://localhost:5000/jobs/'+id)
        .then(res => console.log(res.data));

        this.setState({
            jobs: this.state.jobs.filter(el => el._id !== id)
        });
    }

    jobList(){
        return this.state.jobs.map(currentjob =>{
            return <Job job={currentjob}
            deleteJob={this.deleteJob} key= {currentjob._id} />
        })
    }
    render(){
        return (
            <div>
               <NavBar/>
               <h3>Logged Jobs</h3>
               <table className="table">
                   <thread className="thead-light">
                       <tr>
                           <tbody> 
                           <th>Job Title</th>
                           <th>Company Array</th>
                           <th>City</th>
                           <th>State</th>
                           <th>Summary</th>
                           <th>Link</th>
                           </tbody>
                       </tr>
                   </thread>
                   <tbody>
                       {this.jobList()}
                   </tbody>
               </table>
            </div>
        )
    }
}