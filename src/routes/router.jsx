import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import SignIn from "../pages/Auth/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

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
		],
	},
]);

export default router;
