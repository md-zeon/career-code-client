import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <div>Loading...</div>;
	}
	if (!user) {
		return <Navigate to='/signIn' state={location.pathname}></Navigate>;
	}

	return children;
};

export default PrivateRoute;
