import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './navbar';
import API from '../utils/API';
import '../css/jobs.css';


const Job = props => (
    <table>
        <tr>

            <td id='job'>{props.job.jobTitle}</td>
            <td id='company'>{props.job.company}</td>
            <td id='city' >{props.job.city}</td>
            <td id='state'>{props.job.state}</td>
            <td id='summary'>{props.job.summary}</td>
            {/* <td>{props.job.link}</td> */}
            <td>
                <Link to={"/edit/" + props.job._id}>edit</Link> | <a href="#" onClick={() => { props.deleteJob(props.job._id) }}>delete</a>
            </td>

        </tr>
    </table>

)

export default class JobList extends Component {
    constructor(props) {
        super(props);

        this.deleteJob = this.deleteJob.bind(this);
        this.state = { jobs: [] };
    }



    componentDidMount() {
        // axios.get('http://localhost:5000/jobs/')
        //     .then(response => {
        //         this.setState({ jobs: response.data });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        API.getJobs().then(response => {
            console.log(response.data);
            this.setState({ jobs: response.data });
        })
            .catch((error) => {
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







    deleteJob(id) {
        API.deleteJob(id)
            .then(res => console.log(res.data));

        this.setState({
            jobs: this.state.jobs.filter(el => el._id !== id)
        });
    }

    jobList() {
        return this.state.jobs.map(currentjob => {
            return <Job job={currentjob}
                deleteJob={this.deleteJob} key={currentjob._id} />
        })
    }
    render() {
        return (
            <div>
                {/* <NavBar /> */}
                < h3 > Logged Jobs</h3 >
                <table className="table">
                    <thread className="thead-light">
                        <thead>
                            <tr>
                                <th class='headerJob'>Job Title</th>
                                <th class='headerCompany'>Company</th>
                                <th class='headerCity'>City</th>
                                <th class='headerState'>State</th>
                                <th class='headerSummary'>Summary</th>
                                <th class='headerLink'>Link</th>
                            </tr>
                        </thead>

                    </thread>
                    <tbody>
                        {this.jobList()}
                    </tbody>
                </table>
            </div >
        )
    }
}