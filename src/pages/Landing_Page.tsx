import React, {useState, useEffect} from "react";
import AppStyles from "../css/App.module.scss";
import logo from "../Images/mentenaz-server logo.png";
import Home from "./Home";
import {Container, Row, Col} from "react-bootstrap";
import SideBarMenu from "../navigation/Sidebar_Menu";
import AboutUs from "./About_Us";
import OurTeam from "./Blog_Pages/Our_Team";
import Services from "./Services";
import BlogPosts from "./Blog_Pages/Blog_Posts";
import {ToastContainer, toast} from "react-toastify";
import AccountSettings from "./Account_Pages/Account_Settings";
import Profile from "./Account_Pages/Profile";
import Billing from "./Account_Pages/Billing";
import Orders from "./Account_Pages/Orders";
import News from "./News";
import Mission from "./Blog_Pages/Mission";
import Francois from "./Blog_Pages/Our_Team/Francois";
import AboutFrancois from "./Blog_Pages/Our_Team/Francois/About";
import SkillsFrancois from "./Blog_Pages/Our_Team/Francois/Skills";
import Rewards from "./Blog_Pages/Rewards";
import Certificates from "./Blog_Pages/Certificates";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import YourBlogPosts from "./Account_Pages/Your_Blog_Posts";
// import Chatbot from "../Pages/Chat_Bot/Chat_Bot";

const LandingPage: React.FC<LandindingPageProps> = () => {
	const [userInfo, setUserInfo] = useState(() => {
		// Retrieve login info from localStorage
		const savedLoginInfo = localStorage.getItem("loginInfo");
		return savedLoginInfo ? JSON.parse(savedLoginInfo) : null;
	});
	const [currentPage, setCurrentPage] = useState("Home");
	const [userLoggedin, setUserLogin] = useState(() => {
		// Check if user is logged in based on login information in localStorage
		return localStorage.getItem("userLogin") === "true";
	});

	const handleLoginData = (LoginData: LoginInfo) => {
		console.log("Login Data:", LoginData);
		setUserInfo(LoginData);
		setUserLogin(true);
		console.log("User Logged in:", userLoggedin ? "Yes" : "No");
	};

	const handleLoggedinState = (state: any) => {
		setUserLogin(state); // Updates userLogin state based on login/logout
	};

	const handleNavigation = (page: string | number) => {
		console.log("Switching to page:", page);
		setCurrentPage(page.toString());
	};

	useEffect(() => {
		if (userInfo) {
			console.log("Login Info:", userInfo);
		}
	}, [userInfo]);

	const showToast = (message: string, isSuccess: boolean = true) => {
		if (isSuccess) {
			toast.success(message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		} else {
			toast.error(message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		}
	};

	const renderPageContent = () => {
		debugger;
		switch (currentPage) {
			case "Home":
				return <Home setUserInfo={handleLoginData} setUserState={handleLoggedinState} showToast={showToast} />;
			case "Profile":
				return <Profile setProfilePage={handleNavigation} />;
			case "Account Settings":
				return <AccountSettings setAccountPage={handleNavigation} />;
			case "Billing":
				return <Billing setBillingPage={handleNavigation} />;
			case "Orders":
				return <Orders />;
			case "About us":
				return <AboutUs />;
			case "Services":
				return <Services />;
			case "News":
				return <News />;
			case "Blog Posts":
				return <BlogPosts />;
			case "Your Blog Posts":
				return (
					<YourBlogPosts
						setBlogPage={handleNavigation}
						loginName={userLoggedin && userInfo ? `${userInfo.FirstName} ${userInfo.LastName}` : null}
					/>
				);
			case "Mission":
				return <Mission />;
			case "Our Team":
				return <OurTeam />;
			case "Francois Huyzers":
				return <Francois />;
			case "About":
				return <AboutFrancois />;
			case "Skills":
				return <SkillsFrancois />;
			case "Rewards":
				return <Rewards />;
			case "Certificates":
				return <Certificates />;
			case "Portfolio":
				return <Portfolio />;
			case "Contacts":
				return <Contacts />;
			default:
				return <h1>Page Not Found</h1>;
		}
	};

	return (
		<Container>
			<header className={AppStyles["App-header"]}>
				<img src={logo} className="App-logo" alt="logo" />
			</header>

			<Row>
				<Col md={3}>
					<SideBarMenu setNavItems={handleNavigation} />
				</Col>
				<Col md={9}>
					<main>
						<Container>{renderPageContent()}</Container>
					</main>
				</Col>
			</Row>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme="dark"
			/>
		</Container>
	);
};

export default LandingPage;
