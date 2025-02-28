import {useState} from "react";
import {db, firebaseAuth} from "../../../config/firebase_config";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {collection, addDoc} from "firebase/firestore";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "../../../resources/schemas";

interface useRegisterProps {
	toggleForm: () => void;
	showToast: (message: string, success: boolean) => void;
}

interface useRegisterReturn {
	loading: boolean;
	onSubmit: (data: registerFormData) => Promise<void>;
	register: any;
	handleSubmit: any;
	errors: any;
	isSubmitting: any;
}

export const useRegister = ({toggleForm, showToast}: useRegisterProps): useRegisterReturn => {
	const {
		register,
		handleSubmit,
		setError,
		formState: {errors, isSubmitting},
	} = useForm<registerFormData>({
		resolver: zodResolver(registerSchema),
	});
	const [loading, setLoading] = useState(false);
	const onSubmit = async (data: registerFormData) => {
		setLoading(true);
		try {
			const firebaseUser = await createUserWithEmailAndPassword(firebaseAuth, data.Email, data.Password);
			console.log("Firebase user created:", firebaseUser.user.uid);

			const docRef = await addDoc(collection(db, "users"), {
				FirstName: data.FirstName,
				LastName: data.LastName,
				Email: data.Email,
				ContactNumber: data.ContactNumber,
				uid: firebaseUser.user.uid,
			});
			console.log("User added to Firestore with ID:", docRef.id);
			showToast("You have been successfully registered. You will now be redirected to the login page.", true);
			toggleForm();
		} catch (error: any) {
			if (error.code === "auth/email-already-in-use") {
				setError("Email", {
					type: "manual",
					message: "Email is already in use",
				});
				showToast("Email is already in use. Please login with your credentials.", false);
			} else if (error.code === "auth/weak-password") {
				setError("Password", {
					type: "manual",
					message: "Password is too weak",
				});
				showToast("Password is too weak", false);
			} else {
				setError("root.serverError", {
					type: "manual",
					message: error.message,
				});
				showToast(error.message, false);
			}
		} finally {
			setLoading(false);
		}
	};
	return {
		loading,
		onSubmit,
		register,
		handleSubmit,
		errors,
		isSubmitting,
	};
};
