import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
	const job = useLoaderData();
	console.log(job);
	const { _id, title, company } = job;
	return (
		<div>
			<h2 className='text-6xl'>Job Details Of: {title}</h2>
			<p>{company}</p>
			<Link to={`/jobApply/${_id}`}>
			<button className='btn btn-primary'>Apply Now</button>
			</Link>
		</div>
	);
};

export default JobDetails;
