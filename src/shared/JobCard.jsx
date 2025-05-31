import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
	const { _id, title, location, description, company, company_logo, requirements, salaryRange } = job;
	return (
		<div className='card bg-base-100 shadow-inner shadow-primary p-6 rounded-3xl'>
			<div className='flex gap-2'>
				<figure>
					<img
						src={company_logo}
						className='w-16'
						alt='Shoes'
					/>
				</figure>
				<div>
					<h3 className='text-2xl'>{company}</h3>
					<p className='flex items-center gap-1'>
						<FaMapMarkerAlt /> {location}
					</p>
				</div>
			</div>
			<div className='card-body'>
				<h2 className='card-title'>
					{title}
					<div className='badge badge-secondary'>NEW</div>
				</h2>
				<p>
					Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
				</p>
				<p>{description}</p>
				<div className='card-actions'>
					{requirements.map((requirement, index) => (
						<div
							key={index}
							className='badge badge-outline'
						>
							{requirement}
						</div>
					))}
				</div>
				<div className='card-actions justify-end'>
					<Link to={`/jobs/${_id}`}>
						<button className='btn btn-primary'>Show Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JobCard;
