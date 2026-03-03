import { api } from "./configs";

export const getCourseRegistrationsByEmail = async (email) => {
	try {
		const response = await api.get(`registration?email=${email}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching registrations by email for ${email}:`, error);
		throw error;
	}
};

export const registerForCourse = async (email, courseId) => {
	try {
		await api.post("registration", { email, courseId });
	} catch (error) {
		console.error(
			`Error registering email ${email} for course ${courseId}:`,
			error,
		);
		throw error;
	}
};
