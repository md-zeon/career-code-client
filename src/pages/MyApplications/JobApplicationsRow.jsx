import axios from "axios";
import Swal from "sweetalert2";

const JobApplicationsRow = ({ index, application }) => {
	const { company, title, company_logo } = application;
	const handleDelete = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`http://localhost:3000/applications/${application._id}`)
					.then((res) => {
						console.log(res.data);
						if (res.data.deletedCount) {
							Swal.fire({
								title: "Deleted!",
								text: "Your application has been deleted.",
								icon: "success",
							});
						} else {
							Swal.fire({
								title: "Not Deleted!",
								text: "Your application is not deleted.",
								icon: "error",
							});
						}
					})
					.catch((err) => {
						console.log(err.message);
					});
			} else {
				Swal.fire({
					title: "Cancelled",
					text: "Your application is safe :)",
					icon: "error",
				})
			}
		});
	};

	return (
		<tr>
			<th>
				<label>{index + 1}</label>
			</th>
			<td>
				<div className='flex items-center gap-3'>
					<div className='avatar'>
						<div className='mask mask-squircle h-12 w-12'>
							<img
								src={company_logo}
								alt={title}
							/>
						</div>
					</div>
					<div>
						<div className='font-bold'>{title}</div>
						<div className='text-sm opacity-50'>United States</div>
					</div>
				</div>
			</td>
			<td>
				Zemlak, Daniel and Leannon
				<br />
				<span className='badge badge-ghost badge-sm'>Desktop Support Technician</span>
			</td>
			<td>{company}</td>
			<th>
				<button
					onClick={handleDelete}
					className='btn btn-error btn-sm font-bold text-white'
				>
					Cancel
				</button>
			</th>
		</tr>
	);
};

export default JobApplicationsRow;
