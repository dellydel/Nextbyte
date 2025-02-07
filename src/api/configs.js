import axios from "axios";

export const api = axios.create({
	baseURL: `${import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL}`,
});
