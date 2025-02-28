import React from "react";
import {signInWithPopup, TwitterAuthProvider} from "firebase/auth";
import {Button} from "react-bootstrap";
import {firebaseAuth} from "../../config/firebase_config";

const TwitterLogin: React.FC<SocialMediaLoginProps> = ({showToast, setLoginInfo, setError}) => {
	const handleTwitterLogin = async () => {
		const auth = firebaseAuth;
		const provider = new TwitterAuthProvider();

		try {
			const result = await signInWithPopup(auth, provider);
			const {user} = result;

			if (user) {
				const displayNameParts = user.displayName?.split(" ") || ["", ""];
				const loginInfo = {
					InformationObject: {
						FirstName: displayNameParts[0] || "N/A",
						LastName: displayNameParts[1] || "N/A",
						Email: user.email || "N/A",
						ContactNumber: "", // Add logic to fetch the contact number if available
					},
				};

				setLoginInfo(loginInfo);
				setError(null);
				showToast("Successfully signed in with Twitter.", true);
			}
		} catch (error: any) {
			console.error("Error signing in with Twitter:", error);
			setError(error.message || "Unknown error occurred");
			showToast(`Error signing in with Twitter: ${error.message}`, false);
		}
	};

	return (
		<Button
			onClick={handleTwitterLogin}
			style={{
				backgroundColor: "#1DA1F2",
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
					d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
				/>
			</svg>
			Sign in with Twitter
		</Button>
	);
};

export default TwitterLogin;
