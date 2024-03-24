import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineSubtitles } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
    return (
        <div>
            <h2 className="text-center text-5xl">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" md:col-span-3">
                    <h2 className="text-2xl mb-6">Job Description:{job.job_description}</h2>
                    <h2 className="text-2xl mb-6">Job Responsibility:{job.job_responsibility}</h2>
                    <h2 className="text-2xl mb-6">Educational Requirements:
                    <br />
                    {job.educational_requirements}</h2>
                    <h2 className="text-2xl">Experiences:
                    <br />
                    {job.experiences}</h2>
                    
                </div>
                <div className="border">
                    <h2 className="text-2xl">Job Details</h2>
                    <hr className="my-6" />
                    <h2 className="flex gap-2"><AiOutlineDollar className="text-2xl" /> Salary: {job.salary} (per month)</h2>
                    <h2 className="flex gap-2 mb-8"><MdOutlineSubtitles className="text-2xl" />Job Title: {job.job_title}</h2>
                    <h2 className="text-2xl">Contact Information</h2>
                    <hr className="my-6" />
                    <h2 className="flex gap-2"><FiPhone className="text-2xl" />Phone:{job.phone}</h2>
                    <h2>Email:{job.email}</h2>
                    <h2>Address:{job.address}</h2>
                    <button className="btn btn-primary w-full mt-8">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;