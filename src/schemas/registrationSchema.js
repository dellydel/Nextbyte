import * as yup from "yup";

const registrationSchema = yup.object().shape({
	firstName: yup.string().required("First name is required.").min(2).max(30),
	lastName: yup.string().required("Last name is required.").min(2).max(30),
	phoneNumber: yup
		.string()
		.required("Phone number is required.")
		.matches(/^[0-9]+$/, "Please enter a valid phone number."),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required."),
	street: yup.string().required("Street address is required."),
	city: yup.string().required("City is required."),
	state: yup.string().required("State is required."),
	zip: yup
		.string()
		.required("Zip code is required.")
		.matches(/^[0-9]+$/, "Only numeric digits are allowed."),
	country: yup.string().required("Country is required."),
	dateOfBirth: yup
		.date("Please enter a valid date.")
		.required("Date of birth is required.")
		.max(new Date(), "Please enter a date in the past."),
	password: yup
		.string()
		.min(7, "Password should be at least 7 characters.")
		.required("Password is required.")
		.matches(
			/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]{8,}$/,
			"Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
		),
	confirmPassword: yup
		.string()
		.required("Please confirm password.")
		.oneOf([yup.ref("password"), null], "Passwords must match."),
});

const registrationSchemaEdit = yup.object().shape({
	firstName: yup.string().required("First name is required.").min(2).max(30),
	lastName: yup.string().required("Last name is required.").min(2).max(30),
	phoneNumber: yup
		.string()
		.required("Phone number is required.")
		.matches(/^[0-9]+$/, "Please enter a valid phone number."),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required."),
	street: yup.string().required("Street address is required."),
	city: yup.string().required("City is required."),
	state: yup.string().required("State is required."),
	zip: yup
		.string()
		.required("Zip code is required.")
		.matches(/^[0-9]+$/, "Only numeric digits are allowed."),
	country: yup.string().required("Country is required."),
	dateOfBirth: yup
		.date("Please enter a valid date.")
		.required("Date of birth is required.")
		.max(new Date(), "Please enter a date in the past."),
});

const defaultFormValues = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	street: "",
	city: "",
	state: "",
	zip: "",
	country: "",
	dateOfBirth: "",
	password: "",
	confirmPassword: "",
};
export { registrationSchema, defaultFormValues, registrationSchemaEdit };
