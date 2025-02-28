import React from "react";
import {Container, Card, Row, Col, Button, Alert, InputGroup, FormControl, ListGroup} from "react-bootstrap";
import styles from "../../css/Page_Styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faPenToSquare,
	faGift,
	faGlobe,
	faComments,
	faImage,
	faEnvelope,
	faCartShopping,
	faFileInvoiceDollar,
	faGear,
} from "@fortawesome/free-solid-svg-icons";

interface ProfileProps {
	setProfilePage: (page: string) => void;
}

const Profile: React.FC<ProfileProps> = ({setProfilePage}) => {
	const GoToProfilePage = (page: string): void => {
		debugger;
		console.log("Switching to Account page:", page);
		setProfilePage(page);
	};

	return (
		<Container>
			{/* Header Section */}
			<header
				className={
					styles["py-5"] + " " + styles["bg-light"] + " " + styles["border-bottom"] + " " + styles["mb-4"]
				}
			>
				<Container>
					<div className={styles["text-center"] + " " + styles["my-5"]}>
						<h1 className={styles["fw-bolder"]}>Your Profile!</h1>
						<p className={styles["lead"] + " " + styles["mb-0"]}>
							A Bootstrap 5 starter layout for your next blog homepage
						</p>
					</div>
				</Container>
			</header>

			<Row>
				{/* Main Content */}
				<Col lg={8}>
					<Card className={styles.mb4}>
						<Card.Header>Personal Information</Card.Header>
						<Card.Body>
							<h1>To be added</h1>
						</Card.Body>
					</Card>
				</Col>

				{/* Side Widgets */}
				<Col lg={4}>
					{/* Search Widget */}
					<Card className={styles.mb4}>
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
					{/* Profile Picture Widget */}
					<Card className={styles.mb4}>
						<Card.Header>Profile Picture</Card.Header>
						<Card.Img
							variant="top"
							src="https://dummyimage.com/250x250/dee2e6/6c757d.png&text=Profile+Picture"
							alt="Profile Picture"
						/>
						<Card.Body>
							<Button variant="secondary" size="lg">
								Edit Picture
							</Button>
						</Card.Body>
					</Card>
					<Card className={styles["mb-4"]}>
						<Card.Header>Account Links</Card.Header>
						<Card.Body>
							<Row>
								<Col sm={6}>
									<ul className={styles["list-unstyled"] + " " + styles["mb-0"]}>
										<ListGroup.Item>
											<Alert.Link
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faCartShopping} />
												Profile
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faComments} />
												Your Blog Posts
											</Alert.Link>
										</ListGroup.Item>
									</ul>
								</Col>
								<Col sm={6}>
									<ul className={styles["list-unstyled"] + " " + styles["mb-0"]}>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faFileInvoiceDollar} />
												Billing
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												{" "}
												<FontAwesomeIcon icon={faCartShopping} />
												Orders
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faGear} />
												Account Settings
											</Alert.Link>
										</ListGroup.Item>
									</ul>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					<Card className={styles["mb-4"]}>
						<Card.Header>Page Links</Card.Header>
						<Card.Body>
							<Row>
								<Col sm={6}>
									<ul className={styles["list-unstyled"] + " " + styles["mb-0"]}>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faHouse} />
												Home
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faPenToSquare} />
												About Us
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faEnvelope} />
												Contacts
											</Alert.Link>
										</ListGroup.Item>
									</ul>
								</Col>
								<Col sm={6}>
									<ul className={styles["list-unstyled"] + " " + styles["mb-0"]}>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faGift} />
												Services
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faGlobe} />
												News
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faImage} />
												Portfolio
											</Alert.Link>
										</ListGroup.Item>
									</ul>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					<Card className={styles["mb-4"]}>
						<Card.Header>Blog Links</Card.Header>
						<Card.Body>
							<Row>
								<Col sm={6}>
									<ul className={styles["list-unstyled"] + " " + styles["mb-0"]}>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faCartShopping} />
												Home
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faComments} />
												About us
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faGear} />
												Contacts
											</Alert.Link>
										</ListGroup.Item>
									</ul>
								</Col>
								<Col sm={6}>
									<ul className={styles["list-unstyled"] + " " + styles["mb-0"]}>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faFileInvoiceDollar} />
												Services
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faCartShopping} />
												News
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												className={styles["alert-link-info"]}
												onClick={(e) => {
													const textContent = (e.target as Node).textContent;
													if (textContent !== null) {
														GoToProfilePage(textContent);
													}
												}}
											>
												<FontAwesomeIcon icon={faGear} />
												Portfolio
											</Alert.Link>
										</ListGroup.Item>
									</ul>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Profile;
