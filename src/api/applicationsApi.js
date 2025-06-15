import axios from "axios";

const myApplicationsPromise = (email) => axios.get(`http://localhost:3000/applications?email=${email}`, {
    withCredentials: true, // Include cookies in the request
});
export { myApplicationsPromise };
