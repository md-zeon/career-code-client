import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";
import { useState } from "react";

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
	const createUser = (email, password) => {
        setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const AuthInfo = {
        createUser
    };
	return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
