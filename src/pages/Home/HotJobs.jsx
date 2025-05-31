import { use } from "react";
import JobCard from "../../shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
	const jobs = use(jobsPromise);
	console.log(jobs);
	return (
		<div>
            <h2 className="text-4xl text-center py-6">Hot Jobs of the Day</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{jobs.map((job) => (
					<JobCard
						key={job._id}
						job={job}
					></JobCard>
				))}
			</div>
		</div>
	);
};

export default HotJobs;
