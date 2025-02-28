import {useState, useEffect} from "react";
import GoogleLogin from "../../../forms/social_media/Google_Login";
import {Container, Row, Col} from "react-bootstrap";
import FacebookLogin from "../../../forms/social_media/Facebook_Login";
import TwitterLogin from "../../../forms/social_media/Twitter_Login";
import GitHubLogin from "../../../forms/social_media/GitHub_Login";
import MicrosoftLogin from "../../../forms/social_media/Microsoft_Login";
import AppleSignIn from "../../../forms/social_media/Apple_Login";
interface useLoginPageProps {
	setLoginInfo: (data: any) => void;
	showToast: (message: string, success: boolean) => void;
	setError: (error: string | null) => void;
}

interface useLoginPageReturn {
	isRegistering: boolean;
	toggleForm: () => void;
	handleLogin: (user: any) => void;
	handleSocialMediaLogin: () => void;
	renderSocialLogins: () => JSX.Element;
	socialMediaLogin: boolean;
	setLoginUser: any;
}

export const useLoginPage = ({setLoginInfo, showToast, setError}: useLoginPageProps): useLoginPageReturn => {
	const [isRegistering, setIsRegistering] = useState<boolean>(false);
	const [loginUser, setLoginUser] = useState<UserData | undefined>();
	const [socialMediaLogin, setSocialMediaLogin] = useState<boolean>(false);

	const toggleForm = (): void => {
		setIsRegistering((prev) => !prev);
	};

	const handleLogin = (user: any) => {
		// Convert the User object to a UserData object
		const userData: UserData = {
			FirstName: user.displayName?.split(" ")[0] ?? "",
			LastName: user.displayName?.split(" ")[1] ?? "",
			Email: user.email ?? "",
			ContactNumber: "", // Add logic to fetch contact number if needed
		};
		setLoginInfo(userData);
	};

	const handleSocialMediaLogin = (): void => {
		setSocialMediaLogin((prev) => !prev);
	};

	useEffect(() => {
		if (loginUser) {
			console.log("User Data:", loginUser);
			const {FirstName, LastName, Email, ContactNumber} = loginUser;
			console.log(FirstName, LastName, Email, ContactNumber);

			const loginInfo: UserData = {
				FirstName: FirstName || "",
				LastName: LastName || "",
				Email: Email || "",
				ContactNumber: ContactNumber || "",
			};
			setLoginInfo(loginInfo);
		}
	}, [loginUser, setLoginInfo]);

	const renderSocialLogins = (): JSX.Element => (
		<Container>
			<Row>
				<Col>
					<GoogleLogin setLoginInfo={handleLogin} showToast={showToast} setError={setError} />
					<FacebookLogin showToast={showToast} setLoginInfo={handleLogin} setError={setError} />
					<TwitterLogin setLoginInfo={handleLogin} showToast={showToast} setError={setError} />
				</Col>
				<Col>
					<GitHubLogin setLoginInfo={handleLogin} showToast={showToast} setError={setError} />
					<MicrosoftLogin setLoginInfo={handleLogin} showToast={showToast} setError={setError} />
					<AppleSignIn setLoginInfo={handleLogin} showToast={showToast} setError={setError} />
				</Col>
			</Row>
		</Container>
	);
	return {
		isRegistering,
		toggleForm,
		handleLogin,
		handleSocialMediaLogin,
		renderSocialLogins,
		socialMediaLogin,
		setLoginUser,
	};
};
