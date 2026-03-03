import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
	validateCredentials,
	refreshToken,
	signUp as signUpService,
	confirmSignUp as confirmSignUpService,
} from "../services/auth";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", null);
	const navigate = useNavigate();

	const signUpUser = async (credentials) => {
		return await signUpService(credentials);
	};

	const loginUser = async (email, password) => {
		return await validateCredentials(email, password);
	};

	const handleConfirmation = async (username, code) => {
		return await confirmSignUpService(username, code);
	};

	const refreshTokens = async (token) => {
		return await refreshToken(token);
	};

	const logoutUser = () => {
		setUser(null);
		navigate("/login", { replace: true });
	};

	const value = useMemo(
		() => ({
			user,
			setUser,
			loginUser,
			logoutUser,
			refreshTokens,
			signUp: signUpUser,
			handleConfirmation,
		}),
		[user],
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};
