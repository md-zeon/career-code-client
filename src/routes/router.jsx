import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import SignIn from "../pages/Auth/SignIn";

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
			}
		],
	},
]);

export default router;
