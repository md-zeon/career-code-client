import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signOutUser = () => {
		setLoading(true);
		return signOut(auth);
	};

	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			if (currentUser?.email) {
				const userData = { email: currentUser.email };
				axios
					.post("http://localhost:3000/jwt", userData, {
						withCredentials: true, // Include cookies in the request
					})
					.then((res) => {
						console.log(res.data);
						localStorage.setItem("access-token", res.data.token);
					})
					.catch((err) => console.log(err));
			}
		});
		return () => unsubscribe();
	}, []);

	const AuthInfo = {
		loading,
		user,
		createUser,
		signInUser,
		signOutUser,
		signInWithGoogle,
	};
	return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
