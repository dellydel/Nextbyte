import axios from "axios";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}`;
const api = axios.create({
	baseURL: `${API_BASE_URL}`,
});

export const getStudentByEmail = async (email) => {
	const encodedEmail = encodeURIComponent(email);
	try {
		const response = api.get(`/students?email=${encodedEmail}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching student by email:`, error);
		throw error;
	}
};
