import {z} from "zod";

export const loginSchema = z.object({
	email: z.string().email("Invalid email").min(1, "Email is required"),
	password: z.string().min(1, "Password is required"),
});

export const registerSchema = z
.object({
	FirstName: z.string().min(1, "First name is required"),
	LastName: z.string().min(1, "Last name is required"),
	Email: z.string().email("Invalid email").min(1, "Email is required"),
	Password: z
	.string()
	.min(8, "Password must be at least 8 characters")
	.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
	.regex(/[a-z]/, "Password must contain at least one lowercase letter")
	.regex(/[0-9]/, "Password must contain at least one number")
	.regex(/[\W_]/, "Password must contain at least one special character"),
	PasswordConfirm: z.string().min(1, "Confirm your password"),
	ContactNumber: z.string().min(1, "Contact number is required"),
	terms: z.boolean().refine((val) => val === true, "Terms must be accepted"),
})
.superRefine((data, ctx) => {
	if (data.Password !== data.PasswordConfirm) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: "Passwords must match",
			path: ["PasswordConfirm"],
		});
	}
});
