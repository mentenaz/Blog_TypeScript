import React, {useEffect, useState} from "react";
import LoginPage from "./Login_Page";
import {Container, Card, Row, Col, Button, Pagination, InputGroup, FormControl} from "react-bootstrap";

import styles from "../css/Blog_Styles.module.scss";

const Home: React.FC<HomeProps> = ({setUserInfo, setUserState, showToast}) => {
	const [loginInfo, setLoginInfo] = useState<LoginInfo | null>(() => {
		const savedLoginInfo = localStorage.getItem("loginInfo");
		return savedLoginInfo ? JSON.parse(savedLoginInfo) : null;
	});

	const [userLogin, setUserLogin] = useState<boolean>(() => {
		return localStorage.getItem("userLogin") === "true";
	});

	const handleLogin = (data: LoginInfo): void => {
		console.log("Login Data:", data);
		setUserInfo(data);
		setLoginInfo(data);
		setUserState(true);
		setUserLogin(true);

		localStorage.setItem("userState", "true");
		localStorage.setItem("loginInfo", JSON.stringify(data));
		localStorage.setItem("userLogin", "true");
	};

	const handleLogout = (): void => {
		setUserLogin(false);
		setUserState(false);

		localStorage.removeItem("loginInfo");
		localStorage.removeItem("userLogin");
		localStorage.removeItem("userState");
	};

	useEffect(() => {
		if (loginInfo) {
			console.log("Login Info:", loginInfo);
		}
	}, [loginInfo]);

	const renderBlogPost = (idx: number): JSX.Element => (
		<Col lg={6} key={idx}>
			<Card className={styles["mb-4"]}>
				<a href="#!">
					<Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="Blog Post" />
				</a>
				<Card.Body>
					<div className={`${styles["small"]} ${styles["text-muted"]}`}>January 1, 2023</div>
					<Card.Title className={styles["h4"]}>Post Title</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
					</Card.Text>
					<Button variant="primary" href="#!">
						Read more →
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);

	const renderCategoryList = (categories: string[]): JSX.Element => (
		<ul className={`${styles["list-unstyled"]} ${styles["mb-0"]}`}>
			{categories.map((category, index) => (
				<li key={index}>
					<a href="#!">{category}</a>
				</li>
			))}
		</ul>
	);

	if (!userLogin) {
		return <LoginPage setLoginInfo={handleLogin} showToast={showToast} setError={() => {}} />;
	}

	return (
		<Container>
			{/* Header Section */}
			<header className={`${styles["py-5"]} ${styles["bg-light"]} ${styles["border-bottom"]} ${styles["mb-4"]}`}>
				<Container>
					<div className={`${styles["text-center"]} ${styles["my-5"]}`}>
						<h1 className={styles["fw-bolder"]}>Welcome {loginInfo?.FirstName}!</h1>
						<p className={`${styles["lead"]} ${styles["mb-0"]}`}>
							A Bootstrap 5 starter layout for your next blog homepage
						</p>
					</div>
				</Container>
			</header>

			{/* Blog Content */}
			<Row>
				{/* Main Blog Entries */}
				<Col lg={8}>
					{/* Featured Blog Post */}
					<Card className={styles["mb-4"]}>
						<a href="#!">
							<Card.Img
								variant="top"
								src="https://dummyimage.com/850x350/dee2e6/6c757d.png&text=Featured+Blog+Image"
								alt="Featured Blog Post"
							/>
						</a>
						<Card.Body>
							<div className={`${styles["small"]} ${styles["text-muted"]}`}>January 1, 2023</div>
							<Card.Title>Featured Post Title</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
								nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero
								voluptate voluptatibus possimus, veniam magni quis!
							</Card.Text>
							<Button variant="primary" href="#!">
								Read more →
							</Button>
						</Card.Body>
					</Card>

					{/* Non-Featured Blog Posts */}
					<Row>{[1, 2].map((_, idx) => renderBlogPost(idx))}</Row>

					{/* Pagination */}
					<Pagination className={`${styles["justify-content-center"]} ${styles["my-4"]}`}>
						<Pagination.Prev disabled>Newer</Pagination.Prev>
						<Pagination.Item active>1</Pagination.Item>
						<Pagination.Item>2</Pagination.Item>
						<Pagination.Item>3</Pagination.Item>
						<Pagination.Ellipsis />
						<Pagination.Item>15</Pagination.Item>
						<Pagination.Next>Older</Pagination.Next>
					</Pagination>
				</Col>

				{/* Side Widgets */}
				<Col lg={4}>
					{/* Profile Picture Widget */}
					<Card className={styles["mb-4"]}>
						<Card.Header>Profile Picture</Card.Header>
						<Card.Img
							variant="top"
							src="https://dummyimage.com/250x250/dee2e6/6c757d.png&text=Profile+Picture"
						/>
					</Card>

					{/* Search Widget */}
					<Card className={styles["mb-4"]}>
						<Card.Header>Search</Card.Header>
						<Card.Body>
							<InputGroup>
								<FormControl placeholder="Enter search term..." aria-label="Enter search term..." />
								<Button variant="primary" id="button-search">
									Go!
								</Button>
							</InputGroup>
						</Card.Body>
					</Card>

					{/* Categories Widget */}
					<Card className={styles["mb-4"]}>
						<Card.Header>Categories</Card.Header>
						<Card.Body>
							<Row>
								<Col sm={6}>{renderCategoryList(["Web Design", "HTML", "Freebies"])}</Col>
								<Col sm={6}>{renderCategoryList(["JavaScript", "CSS", "Tutorials"])}</Col>
							</Row>
						</Card.Body>
					</Card>

					{/* Side Widget */}
					<Card className={styles["mb-4"]}>
						<Card.Header>Side Widget</Card.Header>
						<Card.Body>
							You can put anything you want inside of these side widgets. They are easy to use, and
							feature the Bootstrap 5 card component!
						</Card.Body>
					</Card>
					<Button onClick={handleLogout}>Logout</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
