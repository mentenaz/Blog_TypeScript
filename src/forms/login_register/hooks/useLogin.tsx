import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {collection, query, where, getDocs} from "firebase/firestore";
import {db, firebaseAuth} from "../../../config/firebase_config";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "../../../resources/schemas";
interface useLoginProps {
	setLoginInfo: (data: any) => void;
	showToast: (message: string, success: boolean) => void;
}
interface useLoginReturn {
	loading: boolean;
	onSubmit: (data: LoginFormData) => Promise<void>;
	register: any;
	handleSubmit: any;
	errors: any;
	isSubmitting: any;
}

export const useLogin = ({setLoginInfo, showToast}: useLoginProps): useLoginReturn => {
	const {
		register,
		handleSubmit,
		setError,
		formState: {errors, isSubmitting},
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});
	const [loading, setLoading] = useState(false);
	const onSubmit = async (data: LoginFormData) => {
		debugger;
		setLoading(true);
		const {email, password} = data;

		try {
			const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
			const loggedInUser = userCredential.user;

			const userData = await fetchUserData(loggedInUser.uid);
			console.log("User data:", userData);

			const fullUserData = {
				...loggedInUser,
				...userData,
			};

			setLoginInfo(fullUserData);
			showToast("You have been successfully logged in.", true);
			console.log("Logged in user:", fullUserData);
		} catch (error) {
			console.error("Login error:", error);
			handleLoginError(error);
		} finally {
			setLoading(false);
		}
	};

	const fetchUserData = async (uid: string) => {
		const usersRef = collection(db, "users");
		const q = query(usersRef, where("uid", "==", uid));
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			return querySnapshot.docs[0].data();
		}
		throw new Error("No matching user document found in Firestore");
	};

	const handleLoginError = (error: any) => {
		switch (error.code) {
			case "auth/user-not-found":
				setError("email", {
					type: "manual",
					message: "Email not found. Please try again.",
				});
				showToast("Email not found. Please try again.", false);
				break;
			case "auth/wrong-password":
				setError("password", {
					type: "manual",
					message: "Incorrect password. Please try again.",
				});
				showToast("Incorrect password. Please try again.", false);
				break;
			default:
				setError("root", {
					type: "manual",
					message: "An error occurred during login. Please try again.",
				});
				showToast(error.message || "An error occurred during login. Please try again.", false);
		}
	};
	return {loading, onSubmit, register, handleSubmit, errors, isSubmitting};
};
