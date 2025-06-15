import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AddJob = () => {
	const { user } = useAuth();

	const handleAddJob = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		// Process Salary Range Data
		const { min, max, currency, ...newJob } = data;
		newJob.salaryRange = { min, max, currency };
		console.log(newJob);
		// Process Requirements
		newJob.requirements = newJob.requirements.split(",").map((req) => req.trim());
		// Process Responsibilities
		newJob.responsibilities = newJob.responsibilities.split(",").map((resp) => resp.trim());
		
		newJob.status = "active";

		// save job to the database
		axios.post("http://localhost:3000/jobs", newJob)
		.then((res) => {
			console.log(res.data);
			if (res.data.insertedId) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Job Added Successfully",
					showConfirmButton: false,
					timer: 1500,
				});
				form.reset();
			}
		})
		.catch((err) => {
			console.log(err);
		});
	};

	return (
		<div>
			<h2>Please Add A Job</h2>
			<form onSubmit={handleAddJob}>
				{/* Basic Info */}
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
					<legend className='fieldset-legend'>Basic info</legend>

					<label className='label'>Job Title</label>
					<input
						type='text'
						className='input'
						name='jobTitle'
						placeholder='Job Title'
					/>

					<label className='label'>Company</label>
					<input
						type='text'
						className='input'
						name='company'
						placeholder='Company Name'
					/>

					<label className='label'>Location</label>
					<input
						type='text'
						className='input'
						name='location'
						placeholder='Company Location'
					/>

					<label className='label'>Company Logo URL</label>
					<input
						type='text'
						className='input'
						name='logoUrl'
						placeholder='Company Logo URL'
					/>
				</fieldset>
				{/* Job Type */}
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
					<legend className='fieldset-legend'>Job Type</legend>
					<div className='filter'>
						<input
							className='btn filter-reset'
							type='radio'
							name='jobType'
							aria-label='All'
						/>
						<input
							className='btn'
							type='radio'
							name='jobType'
							value='On-Site'
							aria-label='On-Site'
						/>
						<input
							className='btn'
							type='radio'
							name='jobType'
							value='Remote'
							aria-label='Remote'
						/>
						<input
							className='btn'
							type='radio'
							name='jobType'
							value='Hybrid'
							aria-label='Hybrid'
						/>
					</div>
				</fieldset>
				{/* Job Category */}
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
					<legend className='fieldset-legend'>Job Category</legend>
					<select
						defaultValue='Pick a color'
						className='select'
					>
						<option disabled={true}>Job Category</option>
						<option>Engineering</option>
						<option>Marketing</option>
						<option>Finance</option>
					</select>
				</fieldset>
				{/* Application Deadline */}
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
					<legend className='fieldset-legend'>Application Deadline</legend>
					<input
						type='date'
						className='input'
						name='deadline'
					/>
				</fieldset>
				{/* Salary */}
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
					<legend className='fieldset-legend'>Salary Range</legend>
					<label className='label'>Min Salary</label>
					<input
						type='number'
						min={0}
						className='input'
						name='min'
						placeholder='Minimum Salary'
					/>
					<label className='label'>Max Salary</label>
					<input
						type='number'
						min={0}
						className='input'
						name='max'
						placeholder='Maximum Salary'
					/>
					<label className='label'>Currency</label>
					<select
						className='select'
						defaultValue='Select a Currency'
						name='currency'
					>
						<option disabled={true}>Select a Currency</option>
						<option>USD</option>
						<option>EUR</option>
						<option>GBP</option>
						<option>BDT</option>
						<option>JPY</option>
						<option>CAD</option>
					</select>
				</fieldset>
				{/* Job Description */}
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
					<legend className='fieldset-legend'>Job Description</legend>
					<textarea
						className='textarea'
						placeholder='Job Description'
						name='description'
					></textarea>
				</fieldset>
				{/* Job Responsibilities */}
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
					<legend className='fieldset-legend'>Job Responsibilities</legend>
					<textarea
						className='textarea'
						name="responsibilities"
						placeholder='Job Responsibilities (Separate By Comma)'
					></textarea>
				</fieldset>
				{/* Job Requirements */}
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
					<legend className='fieldset-legend'>Job Requirements</legend>
					<textarea
						className='textarea'
						name="requirements"
						placeholder='Job Requirements (Separate By Comma)'
					></textarea>
				</fieldset>

				{/* HR Info */}
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
					<legend className='fieldset-legend'>HR Info</legend>
					<label className='label'>HR Name</label>
					<input
						type='text'
						className='input'
						name='hr_name'
						placeholder='HR Name'
					/>
					<label className='label'>HR Email</label>
					<input
						type='email'
						className='input'
						defaultValue={user?.email}
						readOnly={user?.email}
						name='hr_email'
						placeholder='HR Email'
					/>
				</fieldset>
				<input
					type='submit'
					className='btn'
					value='Add Job'
				></input>
			</form>
		</div>
	);
};

export default AddJob;
