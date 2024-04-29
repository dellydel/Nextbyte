import axios from "axios";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}`;
const api = axios.create({
	baseURL: `${API_BASE_URL}`,
});

export const getCoursesByRegistrationIds = async (registrationIds) => {
	try {
		const response = await api.post("/courses", { courseIds: registrationIds });
		return response.data;
	} catch (error) {
		console.error(`Error fetching courses by registration IDs:`, error);
		throw error;
	}
};
