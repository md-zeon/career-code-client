import { use } from "react";
import JobApplicationsRow from "./JobApplicationsRow";

const ApplicationsList = ({ myApplicationsPromise }) => {
	const { data: myApplications } = use(myApplicationsPromise);
	console.log(myApplications);
	return (
		<div>
			<h2>Jobs Applied So Far: {myApplications.length}</h2>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>
                                    #
								</label>
							</th>
							<th>Name</th>
							<th>Job</th>
							<th>Company</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{myApplications.map((application, index) => (
							<JobApplicationsRow
								key={application._id}
								index={index}
								application={application}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ApplicationsList;
