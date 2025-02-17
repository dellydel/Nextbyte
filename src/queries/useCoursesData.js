import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCourses = async () => {
	return axios.get(
		`${import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL}/courses`,
	);
};

const fetchCourseById = async (courseId) => {
	return axios.get(
		`${
			import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL
		}/courses?courseId=${courseId}`,
	);
};

const fetchCoursesById = async (courseIds) => {
	return axios.post(
		`${import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL}/courses`,
		courseIds,
	);
};

const fetchCoursesByRegistrationId = async (registrationIds) => {
	return axios.post(
		`${import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL}/courses`,
		registrationIds,
	);
};

export const useCoursesData = () => {
	return useQuery({
		queryKey: ["courses"],
		queryFn: fetchCourses,
		select: (data) => data.data.map((course) => course),
		initialData: [],
		retry: false,
	});
};

export const useCourseByIdData = (courseId) => {
	return useQuery({
		queryKey: ["courses", courseId],
		queryFn: () => fetchCourseById(courseId),
		enabled: courseId !== null,
		select: (course) => course.data,
	});
};

export const useCoursesByIdData = ({ courseIds }) => {
	return useQuery({
		queryKey: ["courses", courseIds],
		queryFn: () => fetchCoursesById(courseIds),
		select: (data) => data.data.map((course) => course),
		enabled: courseIds?.length,
	});
};

export const useCoursesByRegistrationIdData = ({ registrationIds }) => {
	return useQuery({
		queryKey: ["courses", registrationIds],
		queryFn: () => fetchCoursesByRegistrationId(registrationIds),
		select: (data) => data.data.map((course) => course),
		enabled: registrationIds?.length,
	});
};
