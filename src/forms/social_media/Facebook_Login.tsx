import React from "react";
import {signInWithPopup, FacebookAuthProvider, UserCredential} from "firebase/auth";
import {Button} from "react-bootstrap";
import {firebaseAuth} from "../../config/firebase_config";

const FacebookLogin: React.FC<SocialMediaLoginProps> = ({showToast, setLoginInfo, setError}) => {
	const handleFacebookLogin = async () => {
		const auth = firebaseAuth;
		const provider = new FacebookAuthProvider();

		try {
			const result: UserCredential = await signInWithPopup(auth, provider);
			const signedInUser = result.user;
			if (setLoginInfo && signedInUser.displayName) {
				const loginInfo = {
					InformationObject: {
						FirstName: signedInUser.displayName?.split(" ")[0],
						LastName: signedInUser.displayName?.split(" ")[1],
						Email: signedInUser.email ?? "",
						ContactNumber: "", // Add logic to fetch contact number if needed
					},
				};
				setLoginInfo(loginInfo);
			}
			setError(null);
			showToast("Successfully signed in with Facebook.", true);
		} catch (error: any) {
			setError(error.message);
			console.error("Error signing in with Facebook:", error);
			showToast("Error signing in with Facebook.", false);
		}
	};

	return (
		<Button
			onClick={handleFacebookLogin}
			style={{
				backgroundColor: "#1877F2",
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
					d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
				/>
			</svg>
			Sign in with Facebook
		</Button>
	);
};

export default FacebookLogin;
