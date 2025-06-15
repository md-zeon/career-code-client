import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import SignIn from "../pages/Auth/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/register",
				Component: Register,
			},
			{
				path: "/signIn",
				Component: SignIn,
			},
			{
				path: "/jobs/:id",
				Component: JobDetails,
				loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
				hydrateFallbackElement: <div>Loading...</div>,
			},
			{
				path: "/jobApply/:id",
				element: (
					<PrivateRoute>
						<JobApply />
					</PrivateRoute>
				),
			},
			{
				path: "/myApplications",
				element: (
					<PrivateRoute>
						<MyApplications />
					</PrivateRoute>
				),
			},
			{
				path: "/addJob",
				element: (
					<PrivateRoute>
						<AddJob />
					</PrivateRoute>
				),
			},
			{
				path: "/myPostedJobs",
				element: (
					<PrivateRoute>
						<MyPostedJobs />
					</PrivateRoute>
				),
			},
			{
				path: "/applications/:job_id",
				element: (
					<PrivateRoute>
						<ViewApplications />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`http://localhost:3000/applications/job/${params.job_id}`),
				hydrateFallbackElement: <div>Loading...</div>,
			},
		],
	},
]);

export default router;
