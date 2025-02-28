import React from "react";
import {signInWithPopup, OAuthProvider, UserCredential} from "firebase/auth";
import {Button} from "react-bootstrap";
import {firebaseAuth} from "../../config/firebase_config";

const MicrosoftLogin: React.FC<SocialMediaLoginProps> = ({showToast, setLoginInfo, setError}) => {
	const handleMicrosoftLogin = async () => {
		const auth = firebaseAuth;
		const provider = new OAuthProvider("microsoft.com");

		try {
			const result: UserCredential = await signInWithPopup(auth, provider);
			const {user} = result;

			if (setLoginInfo && user.displayName) {
				const loginInfo = {
					InformationObject: {
						FirstName: user.displayName.split(" ")[0],
						LastName: user.displayName.split(" ")[1],
						Email: user.email ?? "",
						ContactNumber: "", // Add logic to fetch contact number if needed
					},
				};
				setLoginInfo(loginInfo);
			}

			setError(null);
			showToast("Successfully signed in with Microsoft.", true);
		} catch (error) {
			const errorMessage = (error as Error).message; // Type assertion for error handling
			setError(errorMessage);
			console.error("Error signing in with Microsoft:", errorMessage);
			showToast("Error signing in with Microsoft: " + errorMessage, false);
		}
	};

	return (
		<div>
			<Button
				onClick={handleMicrosoftLogin}
				style={{
					backgroundColor: "#2F2F2F",
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
					<path fill="#F25022" d="M1 1h10v10H1z" />
					<path fill="#00A4EF" d="M1 13h10v10H1z" />
					<path fill="#7FBA00" d="M13 1h10v10H13z" />
					<path fill="#FFB900" d="M13 13h10v10H13z" />
				</svg>
				Sign in with Microsoft
			</Button>
		</div>
	);
};

export default MicrosoftLogin;
