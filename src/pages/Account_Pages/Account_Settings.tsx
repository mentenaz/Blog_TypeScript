import React from "react";
import {Container, Card, Row, Col, Button, Alert, InputGroup, FormControl, ListGroup} from "react-bootstrap";
import styles from "../../css/Page_Styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faCartShopping, faFileInvoiceDollar, faGear} from "@fortawesome/free-solid-svg-icons";
import Profile from "./Profile";

const AccountLink: React.FC<AccountLinkProps> = ({icon, text, onClick}) => (
	<ListGroup.Item>
		<Alert.Link onClick={() => onClick(text)}>
			<FontAwesomeIcon icon={icon} />
			{text}
		</Alert.Link>
	</ListGroup.Item>
);

const AccountSettings = ({setAccountPage}:AccountSettingsProps) => {
	const goToAccountPage = (page: string): void => {
		console.log("Switching to Account page:", page);
		setAccountPage(page);
	};

	const leftColumnLinks: Array<{icon: typeof faCartShopping | typeof faComments; text: string}> = [
		{icon: faCartShopping, text: "Profile"},
		{icon: faComments, text: "Your Blog Posts"},
	];

	const rightColumnLinks: Array<{
		icon: typeof faFileInvoiceDollar | typeof faCartShopping | typeof faGear;
		text: string;
	}> = [
		{icon: faFileInvoiceDollar, text: "Billing"},
		{icon: faCartShopping, text: "Orders"},
		{icon: faGear, text: "Account Settings"},
	];

	return (
		<Container>
			{/* Header Section */}
			<header className={`${styles["py-5"]} ${styles["bg-light"]} ${styles["border-bottom"]} ${styles["mb-4"]}`}>
				<Container>
					<div className={`${styles["text-center"]} ${styles["my-5"]}`}>
						<h1 className={styles["fw-bolder"]}>Your Account Settings!</h1>
						<p className={`${styles["lead"]} ${styles["mb-0"]}`}>
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
							<Profile setProfilePage={goToAccountPage} />
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
							<Button variant="secondary">Edit Picture</Button>
						</Card.Body>
					</Card>

					{/* Account Links Widget */}
					<Card className={styles["mb-4"]}>
						<Card.Header>Account Links</Card.Header>
						<Card.Body>
							<Row>
								<Col sm={6}>
									<ul className={`${styles["list-unstyled"]} ${styles["mb-0"]}`}>
										{leftColumnLinks.map((link, index) => (
											<AccountLink
												key={index}
												icon={link.icon}
												text={link.text}
												onClick={goToAccountPage}
											/>
										))}
									</ul>
								</Col>
								<Col sm={6}>
									<ul className={`${styles["list-unstyled"]} ${styles["mb-0"]}`}>
										{rightColumnLinks.map((link, index) => (
											<AccountLink
												key={index}
												icon={link.icon}
												text={link.text}
												onClick={goToAccountPage}
											/>
										))}
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

export default AccountSettings;
