import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCourseMaterials = async () => {
	return axios.get(`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/materials`);
};
export const useCourseMaterialsData = () => {
	return useQuery({
		queryKey: ["courseMaterials"],
		queryFn: fetchCourseMaterials,
		select: (data) =>
			data.data.map((courseMaterial) => {
				courseMaterial.name = courseMaterial.name.split("/").pop();
				return courseMaterial;
			}),
		initialData: [],
	});
};
