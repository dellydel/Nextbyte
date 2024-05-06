import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchStudentById = async (studentId) => {
	return axios.get(
		`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/students/${studentId}`,
	);
};

const getStudentByEmail = async (email) => {
	const encodedEmail = encodeURIComponent(email);
	return axios.get(
		`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/students?email=${encodedEmail}`,
	);
};

export const useStudentByIdData = (studentId) => {
	return useQuery({
		queryKey: ["student", studentId],
		queryFn: () => fetchStudentById(studentId),
		select: (data) => data.data.Item,
	});
};

export const useStudentByEmailData = (email) => {
	return useQuery({
		queryKey: ["student", email],
		queryFn: () => getStudentByEmail(email),
		select: (data) => data.data,
	});
};
