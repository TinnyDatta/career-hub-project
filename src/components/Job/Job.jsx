
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold  border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold  border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                </div>
                <div className="flex mt-4 gap-5">
                    <h2 className="flex gap-2"><GrLocation className="text-2xl" />{location}</h2>
                    <h2 className="flex gap-2"><AiOutlineDollar className="text-2xl" />{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500  text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;