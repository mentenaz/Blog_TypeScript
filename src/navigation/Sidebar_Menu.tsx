import React, {useState, useCallback} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faPenToSquare,
	faGift,
	faGlobe,
	faComments,
	faImage,
	faEnvelope,
	faSearch,
	faMale,
	faLeaf,
	faTasks,
	faTrophy,
	faCertificate,
	faChevronDown,
	faChevronUp,
	faCartShopping,
	faFileInvoiceDollar,
	faGear,
} from "@fortawesome/free-solid-svg-icons";
import {Nav, Form, FormControl, Button, ListGroup, Collapse} from "react-bootstrap";
import styles from "../css/Page_Styles.module.scss";

const MenuItem: React.FC<MenuItemProps> = ({icon, title, subtitle, onClick, isActive, children}) => {
	const [isOpen, setIsOpen] = useState(false);

	// Toggles open state of submenu
	const handleToggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsOpen((prev) => !prev);
	};

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (onClick) {
			onClick(e);
		}
	};

	return (
		<ListGroup.Item
			action
			active={isActive}
			onClick={handleClick}
			className={`border-0 ${isActive ? styles["Submenu_active"] : ""}`}
		>
			<div className="d-flex align-items-center justify-content-between">
				<div className="d-flex align-items-center">
					<FontAwesomeIcon icon={icon} className="me-2" />
					<div>
						<strong>{title}</strong>
						{subtitle && <small className="d-block text-muted">{subtitle}</small>}
					</div>
				</div>
				{children && (
					<Button className="link p-0" size="sm" onClick={handleToggle}>
						<FontAwesomeIcon
							icon={isOpen ? faChevronUp : faChevronDown}
							className={isOpen ? styles["Submenu_active"] : undefined}
						/>
					</Button>
				)}
			</div>
			{children && (
				<Collapse in={isOpen}>
					<div>{children}</div>
				</Collapse>
			)}
		</ListGroup.Item>
	);
};

const SubMenu: React.FC<SubMenuProps> = ({items, onMenuItemClick, activeItem}) => {
	return (
		<ListGroup className={styles["Submenu_active"]}>
			{items.map((item, index) => (
				<MenuItem
					key={index}
					{...item}
					onClick={() => onMenuItemClick(item.title)}
					isActive={activeItem === item.title}
				>
					{item.subItems && (
						<SubMenu items={item.subItems} onMenuItemClick={onMenuItemClick} activeItem={activeItem} />
					)}
				</MenuItem>
			))}
		</ListGroup>
	);
};

const SideBarMenu: React.FC<SidebarMenuProps> = ({setNavItems}) => {
	const [activeItem, setActiveItem] = useState("Home");
	const [searchQuery, setSearchQuery] = useState("");
	// const [isOpen, setIsOpen] = useState(false);

	const handleMenuItemClick = useCallback(
		(item: string) => {
			setActiveItem(item); // Update active item
			setNavItems(item); // Pass to parent component
			console.log(`Active menu item: ${item}`);
		},
		[setNavItems],
	);

	const handleSearch = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			console.log(`Searching for: ${searchQuery}`);
			// Implement search logic here if necessary
		},
		[searchQuery],
	);

	const menuItems = [
		{
			icon: faHouse,
			title: "Home",
			subtitle: "sweet home",
		},
		{
			icon: faEnvelope,
			title: "Account",
			subtitle: "Your Account",
			subItems: [
				{
					icon: faImage,
					title: "Profile",
				},
				{
					icon: faComments,
					title: "Your Blog Posts",
				},
				{
					icon: faGear,
					title: "Account Settings",
				},
				{
					icon: faFileInvoiceDollar,
					title: "Billing",
				},
				{
					icon: faCartShopping,
					title: "Orders",
				},
			],
		},
		{
			icon: faPenToSquare,
			title: "About us",
			subtitle: "who we are",
		},
		{
			icon: faGift,
			title: "Services",
			subtitle: "what we offer",
		},
		{
			icon: faGlobe,
			title: "News",
			subtitle: "what's new",
		},
		{
			icon: faComments,
			title: "Blog",
			subtitle: "what they say",
			subItems: [
				{
					icon: faComments,
					title: "Blog Posts",
				},
				{
					icon: faGlobe,
					title: "Mission",
				},
				{
					icon: faMale,
					title: "Our Team",
					subItems: [
						{
							icon: faMale,
							title: "Francois Huyzers",
							subItems: [
								{
									icon: faLeaf,
									title: "About",
								},
								{
									icon: faTasks,
									title: "Skills",
								},
							],
						},
					],
				},
				{
					icon: faTrophy,
					title: "Rewards",
				},
				{
					icon: faCertificate,
					title: "Certificates",
				},
			],
		},
		{
			icon: faImage,
			title: "Portfolio",
			subtitle: "our works",
		},
		{
			icon: faEnvelope,
			title: "Contacts",
			subtitle: "get in touch",
		},
	];

	return (
		<Nav>
			<div className="position-sticky pt-3">
				<Form onSubmit={handleSearch} className="mb-3">
					<div className="d-flex">
						<FormControl
							type="text"
							placeholder="Search..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="me-2"
						/>
						<Button type="submit" className="outline-secondary">
							<FontAwesomeIcon icon={faSearch} />
						</Button>
					</div>
				</Form>
				<ListGroup>
					{menuItems.map((item, index) => (
						<MenuItem
							key={index}
							{...item}
							isActive={activeItem === item.title}
							onClick={item.subItems ? undefined : () => handleMenuItemClick(item.title)}
						>
							{item.subItems && (
								<SubMenu
									items={item.subItems}
									onMenuItemClick={handleMenuItemClick}
									activeItem={activeItem}
								/>
							)}
						</MenuItem>
					))}
				</ListGroup>
			</div>
		</Nav>
	);
};

export default SideBarMenu;
