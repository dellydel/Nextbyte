import { useQuery } from "@tanstack/react-query";
import { api } from "../api/configs";

const fetchCourseMaterials = async () => {
	return api.get("/materials?topic=cybersecurity");
};
export const useCourseMaterialsData = () => {
	return useQuery({
		queryKey: ["courseMaterials"],
		queryFn: fetchCourseMaterials,
		select: (data) =>
			data.data.map((courseMaterial) => ({
				...courseMaterial,
				name: courseMaterial.name.split("/").pop(),
			})),
	});
};
