import { useQuery } from "@tanstack/react-query";
import { api } from "../api/configs";

const fetchRegistrations = async (email) => {
	const encodedEmail = encodeURIComponent(email);
	return api.get(`/registration?email=${encodedEmail}`);
};

export const useRegistrationData = (email) => {
	return useQuery({
		queryKey: ["registrations", email],
		queryFn: () => fetchRegistrations(email),
		enabled: !!email,
		select: (data) => data.data,
	});
};
