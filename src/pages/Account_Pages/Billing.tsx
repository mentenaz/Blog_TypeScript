import React from "react";
import styles from "../../css/Blog_Styles.module.scss";
import {
	Container,
	Card,
	Row,
	Col,
	Button,
	Alert,
	InputGroup,
	FormControl,
	ListGroup,
	Pagination,
} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faCartShopping, faFileInvoiceDollar, faGear} from "@fortawesome/free-solid-svg-icons";

const Billing: React.FC<BillingProps> = ({loginName, setBillingPage}) => {
	const GoToBillingPage = (page: string): void => {
		console.debug("Switching to Account page:", page);
		setBillingPage(page);
	};

	return (
		<Container>
			{/* Header Section */}
			<header className={`${styles["py-5"]} ${styles["bg-light"]} ${styles["border-bottom"]} ${styles["mb-4"]}`}>
				<Container>
					<div className={`${styles["text-center"]} ${styles["my-5"]}`}>
						<h1 className={styles["fw-bolder"]}>Welcome {loginName || "Guest"} to Billing!</h1>
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
								src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
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
					<Row>
						{[1, 2].map((_, idx) => (
							<Col lg={6} key={idx}>
								<Card className={styles["mb-4"]}>
									<a href="#!">
										<Card.Img
											variant="top"
											src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
											alt="Blog Post"
										/>
									</a>
									<Card.Body>
										<div className={`${styles["small"]} ${styles["text-muted"]}`}>
											January 1, 2023
										</div>
										<Card.Title className={styles["h4"]}>Post Title</Card.Title>
										<Card.Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid
											atque, nulla.
										</Card.Text>
										<Button variant="primary" href="#!">
											Read more →
										</Button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>

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
								<Col sm={6}>
									<ul className={`${styles["list-unstyled"]} ${styles["mb-0"]}`}>
										<li>
											<a href="#!">Web Design</a>
										</li>
										<li>
											<a href="#!">HTML</a>
										</li>
										<li>
											<a href="#!">Freebies</a>
										</li>
									</ul>
								</Col>
								<Col sm={6}>
									<ul className={`${styles["list-unstyled"]} ${styles["mb-0"]}`}>
										<li>
											<a href="#!">JavaScript</a>
										</li>
										<li>
											<a href="#!">CSS</a>
										</li>
										<li>
											<a href="#!">Tutorials</a>
										</li>
									</ul>
								</Col>
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
					{/* Links Widget */}
					<Card className={styles["mb-4"]}>
						<Card.Header>Account Links</Card.Header>
						<Card.Body>
							<Row>
								<Col sm={6}>
									<ul className={`${styles["list-unstyled"]} ${styles["mb-0"]}`}>
										<ListGroup.Item>
											<Alert.Link
												onClick={(e) =>
													GoToBillingPage((e.target as HTMLAnchorElement).innerText)
												}
											>
												<FontAwesomeIcon icon={faCartShopping} />
												Profile
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												onClick={(e) =>
													GoToBillingPage((e.target as HTMLAnchorElement).innerText)
												}
											>
												<FontAwesomeIcon icon={faComments} />
												Your Blog Posts
											</Alert.Link>
										</ListGroup.Item>
									</ul>
								</Col>
								<Col sm={6}>
									<ul className={`${styles["list-unstyled"]} ${styles["mb-0"]}`}>
										<ListGroup.Item>
											<Alert.Link
												onClick={(e) =>
													GoToBillingPage((e.target as HTMLAnchorElement).innerText)
												}
											>
												<FontAwesomeIcon icon={faFileInvoiceDollar} />
												Billing
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												onClick={(e) =>
													GoToBillingPage((e.target as HTMLAnchorElement).innerText)
												}
											>
												<FontAwesomeIcon icon={faCartShopping} />
												Orders
											</Alert.Link>
										</ListGroup.Item>
										<ListGroup.Item>
											<Alert.Link
												onClick={(e) =>
													GoToBillingPage((e.target as HTMLAnchorElement).innerText)
												}
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
				</Col>
			</Row>
		</Container>
	);
};

export default Billing;
