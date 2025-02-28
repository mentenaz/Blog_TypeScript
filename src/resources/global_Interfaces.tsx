import {User as FireBaseUser} from "firebase/auth";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {loginSchema, registerSchema} from "./schemas";
import {z} from "zod";

import {faComments, faCartShopping, faFileInvoiceDollar, faGear} from "@fortawesome/free-solid-svg-icons";

declare global {
	export interface PageProps {}

	export interface LoginProps {
		showToast: (message: string, isSuccess: boolean) => void;
		setLoginInfo: (user: FireBaseUser) => void;
	}

	export interface User {
		displayName?: string | null;
		email?: string | null;
		phoneNumber?: string | null;
		InformationObject: {
			FirstName: string;
			LastName: string;
			Email: string;
			ContactNumber: string;
		};
	}

	export interface RegisterProps {
		toggleForm: () => void;
		showToast: (message: string, success: boolean) => void;
	}

	export interface SocialMediaLoginProps {
		showToast: (message: string, isSuccess: boolean) => void;
		setLoginInfo: (user: User) => void;
		setError: (error: string | null) => void;
	}

	export interface SidebarMenuProps {
		setNavItems: (itemId: string | number) => void;
	}

	export interface MenuItemProps {
		icon: IconDefinition;
		title: string;
		subtitle?: string;
		onClick?: (e: React.MouseEvent) => void;
		isActive?: boolean;
		children?: React.ReactNode;
	}

	export interface SubMenuProps {
		items: {
			icon: IconDefinition;
			title: string;
			subtitle?: string;
			subItems?: {
				icon: IconDefinition; // Add this line
				title: string;
				subtitle?: string;
			}[];
		}[];
		onMenuItemClick: (item: string) => void;
		activeItem: string;
	}

	export interface SubMenuItemProps {
		title: string;
		icon: IconDefinition;
		subtitle?: string; // Optional subtitle
		isActive: boolean;
		onClick: () => void;
	}

	export interface LoginUserProps {
		displayName: string;
		// Add other properties as needed
	}

	export interface LoginPageProps {
		setLoginInfo: (loginInfo: UserData) => void;
		showToast: (message: string) => void;
		setError: (error: string | null) => void;
	}

	export interface UserData {
		FirstName: string;
		LastName: string;
		Email: string;
		ContactNumber: string;
		[key: string]: string; // For any additional string properties
	}

	export interface AppProps {}
	export interface LandindingPageProps {}

	export interface LoginInfo {
		FirstName: string;
		[key: string]: any; // For other potential login info properties
	}
	export interface HomeProps {
		setUserInfo: (data: LoginInfo) => void;
		setUserState: (state: boolean) => void;
		showToast: (message: string) => void;
	}

	export interface NewsProps {}
	export interface ContactsProps {}
	export interface ProfileProps {
		setProfilePage: (page: string) => void;
	}
	export interface BillingProps {
		loginName?: string;
		setBillingPage: (page: string) => void;
	}
	export interface OrdersProps {}
	export interface YourBlogPostsProps {
		setBlogPage: (page: string) => void;
		loginName: string | null;
	}
	export interface BlogPostsProps {}
	export interface MissionProps {}
	export interface OurTeamProps {}
	export interface FrancoisProps {}
	export interface SkillsFrancoisProps {}
	export interface AboutFrancoisProps {}
	export interface RewardsProps {}
	export interface CertificatesProps {}
	export interface PortfolioProps {}
	export interface AboutUsProps {}

	export interface AccountSettingsProps {
		setAccountPage: (page: string) => void;
	}

	export interface AccountLinkProps {
		icon: typeof faComments | typeof faCartShopping | typeof faFileInvoiceDollar | typeof faGear;
		text: string;
		onClick: (page: string) => void;
	}

	export interface ServicesProps {}

	export type LoginFormData = z.infer<typeof loginSchema>;

	export type registerFormData = z.infer<typeof registerSchema>;

	export type setErrorType = (
		field: "Email" | "Password" | "FirstName" | "LastName" | "PasswordConfirm" | "ContactNumber",
		error: string,
	) => void;
}

export {};
