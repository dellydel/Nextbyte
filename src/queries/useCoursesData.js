import { useQuery } from "@tanstack/react-query";
import { api } from "../api/configs";

const fetchCourses = async () => {
	return api.get(`${import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL}/courses`);
};

const fetchCourseById = async (courseId) => {
	return api.get(
		`${
			import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL
		}/courses?courseId=${courseId}`,
	);
};

const fetchCoursesById = async (courseIds) => {
	return api.post(
		`${import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL}/courses`,
		courseIds,
	);
};

const fetchCoursesByRegistrationId = async (registrationIds) => {
	return api.post(
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
		select: (course) => course.data[0],
	});
};

export const useCoursesByIdData = ({ courseIds }) => {
	return useQuery({
		queryKey: ["courses", courseIds],
		queryFn: () => fetchCoursesById(courseIds),
		select: (data) => data.data.map((course) => course),
		enabled: courseIds?.length > 0,
	});
};

export const useCoursesByRegistrationIdData = ({ registrationIds }) => {
	return useQuery({
		queryKey: ["courses", registrationIds],
		queryFn: () => fetchCoursesByRegistrationId(registrationIds),
		select: (data) => data.data.map((course) => course),
		enabled: registrationIds?.length > 0,
	});
};
