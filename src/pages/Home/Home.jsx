import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const jobsPromise = fetch("http://localhost:3000/jobs").then((res) => res.json());
const Home = () => {
	return (
		<div>
			<Banner />
			<Suspense fallback={<span>Loading Hot Jobs...</span>}>

			<HotJobs jobsPromise={jobsPromise} />
			</Suspense>
		</div>
	);
};

export default Home;
