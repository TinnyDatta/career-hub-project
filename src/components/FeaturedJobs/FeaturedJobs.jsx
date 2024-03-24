import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
   const [jobs, setJobs] = useState([]);
//    this is not the best way to load shoe all data
   const [dataLength, setDataLength] = useState(4);

   useEffect( () => {
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data));
   }, [])


    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl">Featured Jobs : {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quod doloremque quos earum quaerat, odio modi voluptatibus iste harum accusantium nobis voluptas!</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength ===jobs.length && 'hidden'}>
            <button 
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500  text-white">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;