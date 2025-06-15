import { use } from "react";
import { Link } from "react-router";

const JobLists = ({ jobsPromise }) => {
	const { data: jobs } = use(jobsPromise);
	console.log(jobs);
	return (
		<div>
			<h2 className='text-3xl'>Jobs Created By You: {jobs.length}</h2>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Job Title</th>
							<th>Deadline</th>
							<th>Count</th>
							<th>View Applications</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{jobs.map((job, index) => (
							<tr key={job._id}>
								<th>{index + 1}</th>
								<td>{job.jobTitle}</td>
								<td>{job.deadline}</td>
                                <td>{job.application_count}</td>
								<Link to={`/applications/${job._id}`}>View Applications</Link>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default JobLists;
