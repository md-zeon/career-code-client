import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
	const { id: jobId } = useParams();
	const { user } = useAuth();

	const handleApplyFormSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const linkedin = form.linkedin.value;
		const github = form.github.value;
		const resume = form.resume.value;

		const application = {
			jobId,
			applicant: user.email,
			linkedin,
			github,
			resume,
		};

		axios
			.post("http://localhost:3000/applications", application)
			.then((res) => {
				console.log(res.data);
				if (res.data.insertedId) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Your Application has been submitted successfully",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div>
			<h3 className='text-4xl'>
				Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link>
			</h3>
			<form onSubmit={handleApplyFormSubmit}>
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
					<label className='label'>LinkedIn Link</label>
					<input
						type='url'
						className='input'
						name='linkedin'
						placeholder='LinkedIn Profile Link'
					/>

					<label className='label'>Github Link</label>
					<input
						type='url'
						className='input'
						name='github'
						placeholder='Github Profile Link'
					/>

					<label className='label'>Resume</label>
					<input
						type='url'
						className='input'
						name='resume'
						placeholder='Resume Link'
					/>
					<input
						type='submit'
						className='btn btn-primary mt-4'
						value='Apply Now'
					></input>
				</fieldset>
			</form>
		</div>
	);
};

export default JobApply;
