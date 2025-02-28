import React from "react";
import {signInWithPopup, OAuthProvider, UserCredential} from "firebase/auth";
import {Button} from "react-bootstrap";
import {firebaseAuth} from "../../config/firebase_config";

const AppleSignIn: React.FC<SocialMediaLoginProps> = ({showToast, setLoginInfo, setError}) => {
	const handleAppleSignIn = async () => {
		const auth = firebaseAuth;
		const provider = new OAuthProvider("apple.com");

		try {
			const result: UserCredential = await signInWithPopup(auth, provider);
			const signedInUser = result.user;

			if (setLoginInfo && signedInUser.displayName) {
				const loginInfo = {
					InformationObject: {
						FirstName: signedInUser.displayName.split(" ")[0],
						LastName: signedInUser.displayName.split(" ")[1],
						Email: signedInUser.email ?? "",
						ContactNumber: "", // Add logic to fetch contact number if needed
					},
				};
				setLoginInfo(loginInfo);
			}

			setError(null);
			showToast("Successfully signed in with Apple.", true);
		} catch (error: any) {
			setError(error.message);
			console.error("Error signing in with Apple:", error);
			showToast("Error signing in with Apple.", false);
		}
	};

	return (
		<Button
			onClick={handleAppleSignIn}
			style={{
				backgroundColor: "#000000",
				color: "white",
				padding: "10px 20px",
				border: "none",
				borderRadius: "4px",
				fontSize: "16px",
				fontWeight: "bold",
				cursor: "pointer",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginBottom: "3px",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				style={{marginRight: "10px"}}
			>
				<path
					fill="currentColor"
					d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
				/>
			</svg>
			Sign in with Apple
		</Button>
	);
};

export default AppleSignIn;
