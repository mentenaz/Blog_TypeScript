import React from "react";
import LoginStyles from "../css/LoginPage.module.scss";
import Alert from "react-bootstrap/Alert";
import Register from "../forms/login_register/Register";
import Login from "../forms/login_register/Login";
import {Container} from "react-bootstrap";
import mentenazLogo from "../Images/mentenaz-server-logo.png";
import "react-toastify/dist/ReactToastify.css";
import {useLoginPage} from "./Blog_Pages/hooks/useLoginPage";

const LoginPage: React.FC<LoginPageProps> = ({setLoginInfo, showToast, setError}) => {
	const {isRegistering, toggleForm, handleLogin, handleSocialMediaLogin, renderSocialLogins, socialMediaLogin} =
		useLoginPage({setLoginInfo, showToast, setError});

	return (
		<Container>
			<Container className={LoginStyles["login-container"]}>
				<div className={LoginStyles["left-section"]}>
					<div className={LoginStyles["overlay"]}>
						<h2>Welcome</h2>
						<p>Discover more with our platform. Please sign in or create an account to get started.</p>
					</div>
				</div>

				<Container className={LoginStyles["right-section"]}>
					<img src={mentenazLogo} alt="Mentenaz Server Logo" />

					<h1>{isRegistering ? "Register" : "Login"}</h1>
					{isRegistering ? (
						<Register toggleForm={toggleForm} showToast={showToast} />
					) : (
						<Login setLoginInfo={handleLogin} showToast={showToast} />
					)}
					<Alert.Link as="a" href="#" onClick={toggleForm} className={LoginStyles["toggle-link"]}>
						{isRegistering ? "Already have an account? Log in" : "Don't have an account? Register"}
					</Alert.Link>
					<br />

					<br />
					{!isRegistering && (
						<>
							<Alert.Link
								as="a"
								href="#"
								onClick={handleSocialMediaLogin}
								className={LoginStyles["social-login"]}
							>
								Login with social media
							</Alert.Link>
							{socialMediaLogin && renderSocialLogins()}
						</>
					)}
				</Container>
			</Container>
		</Container>
	);
};

export default LoginPage;
