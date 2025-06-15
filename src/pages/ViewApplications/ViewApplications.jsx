import axios from "axios";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
	const { job_id } = useParams();
	const applications = useLoaderData();
	console.log(applications);

	// handle status change
	const handleStatusChange = (e, applicationId) => {
		const status = e.target.value;
		console.log(applicationId, status);
		// update status
		axios
			.patch(`http://localhost:3000/applications/${applicationId}`, { status: status })
			.then((res) => {
				console.log(res.data);
				if (res.data.modifiedCount > 0) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Status Changed Successfully",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((err) => {
				console.log(err);
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: "Status Change Failed",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	return (
		<div>
			<h2 className='text-4xl'>
				{applications.length} Applications for: {job_id}
			</h2>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Applicant</th>
							<th>Status</th>
							<th>View Applications</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{applications.map((application, index) => (
							<tr key={application._id}>
								<th>{index + 1}</th>
								<td>{application.applicant}</td>
								<td>
									<select
										name='status'
										onChange={(e) => handleStatusChange(e, application._id)}
										defaultValue={application.status}
										className='select'
									>
										<option disabled={true}>Update Status</option>
										<option value='pending'>Pending</option>
										<option value='interview'>Interview</option>
										<option value='hired'>Hired</option>
										<option value='rejected'>Rejected</option>
									</select>
								</td>
								<td>Hello</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ViewApplications;
