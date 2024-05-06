import { api } from "./configs";

export const getStudentByEmail = async (email) => {
	const encodedEmail = encodeURIComponent(email);
	try {
		const response = await api.get(`/students?email=${encodedEmail}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching student by email:`, error);
		throw error;
	}
};
