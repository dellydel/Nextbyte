import { api } from "./configs";

export const getCoursesByRegistrationIds = async (registrationIds) => {
	try {
		const response = await api.post("/courses", { courseIds: registrationIds });
		return response.data;
	} catch (error) {
		console.error(`Error fetching courses by registration IDs:`, error);
		throw error;
	}
};
