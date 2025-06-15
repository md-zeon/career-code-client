import axios from "axios";

const jobsPromise = (email) => {
	return axios.get(`http://localhost:3000/jobs/applications?email=${email}`);
};

export { jobsPromise };