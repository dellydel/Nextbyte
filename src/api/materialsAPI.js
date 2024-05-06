import { api } from "./configs";

export const getAllMaterials = async () => {
	try {
		const response = await api.get("/materials");
		return response.data;
	} catch (error) {
		console.error("Error fetching materials:", error);
		throw error;
	}
};
