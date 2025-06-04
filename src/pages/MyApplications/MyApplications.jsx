import { Suspense } from "react";
import ApplicationsList from "./ApplicationsList";
import ApplicationStats from "./ApplicationStats";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";
const MyApplications = () => {
	const { user } = useAuth();
	return (
		<div>
			<ApplicationStats />
			<Suspense fallback={<span>Loading Applications...</span>}>
				<ApplicationsList myApplicationsPromise={myApplicationsPromise(user.email)} />
			</Suspense>
		</div>
	);
};

export default MyApplications;
