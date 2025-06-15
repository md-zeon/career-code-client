import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobLists from "./JobLists";
import { jobsPromise } from "../../api/jobsApi";

const MyPostedJobs = () => {
	const { user } = useAuth();

	return (
		<div>
			<h2>My Posted Jobs: </h2>
			<Suspense fallback={<div>Loading...</div>}>
				<JobLists jobsPromise={jobsPromise(user?.email)} />
			</Suspense>
		</div>
	);
};

export default MyPostedJobs;
