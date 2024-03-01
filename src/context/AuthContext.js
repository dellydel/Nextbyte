"use client";

import React, { createContext, useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import {
	autoSignIn,
	signUp,
	signIn,
	signOut,
	confirmSignUp,
	resetPassword,
	confirmResetPassword,
	fetchUserAttributes,
	fetchAuthSession,
} from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import config from "../amplifyconfiguration.json";

Amplify.configure(config);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [showLogin, setShowLogin] = useState(false);

	const listener = ({ payload }) => {
		const event = payload.event;
		switch (event) {
			case "signedIn":
				const userEmail = payload.data.signInDetails?.loginId;
				setUser(userEmail);
				break;
			case "signedOut":
				setUser(null);
				break;
			case "autoSignIn":
				const data = payload.data;
			default:
				break;
		}
	};

	Hub.listen("auth", listener);

	const getCurrentAuthenticatedUser = async () => {
		try {
			const { idToken } = (await fetchAuthSession()).tokens ?? {};
			if (idToken) {
				setUser(idToken.payload.email);
			} else {
				setUser(null);
			}
		} catch (error) {
			setUser(null);
			console.error("Error fetching user:", error);
		}
	};

	useEffect(() => {
		getCurrentAuthenticatedUser();
	}, []);

	const handleConfirmation = async (username, confirmationCode) => {
		try {
			const result = await confirmSignUp({
				username,
				confirmationCode,
			});
			await autoSignIn();
			return result;
		} catch (error) {
			throw error(error);
		}
	};

	const login = async (username, password) => {
		try {
			const result = await signIn({ username, password });
			if (result.isSignedIn) {
				const userAttributes = await fetchUserAttributes();
				setUser(userAttributes.email);
				return { type: "success", message: "Successfully signed in" };
			} else {
				if (result.nextStep.signInStep === "CONFIRM_SIGN_UP") {
					return {
						type: "nextSteps",
						message:
							"Please confirm your registration by entering the code that was sent to your email address.",
					};
				}
			}
		} catch (error) {
			return { type: "error", message: error.message };
		}
	};

	const logout = async () => {
		try {
			await signOut({ global: true });
			setUser(null);
		} catch (error) {
			console.log("error signing out: ", error);
			return { type: "error", message: error };
		}
	};

	const forgotPassword = async (username) => {
		try {
			const output = await resetPassword({ username });
			return handleResetPasswordNextSteps(output);
		} catch (error) {
			return { error };
		}
	};

	const handleResetPasswordNextSteps = (output) => {
		const { nextStep } = output;
		switch (nextStep.resetPasswordStep) {
			case "CONFIRM_RESET_PASSWORD_WITH_CODE":
				return { codeSent: true };
			case "DONE":
				return { complete: true };
			default:
				return { error: "Confirm password flow exited." };
		}
	};

	const handleConfirmResetPassword = async ({
		username,
		confirmationCode,
		newPassword,
	}) => {
		try {
			await confirmResetPassword({ username, confirmationCode, newPassword });
			return { complete: true };
		} catch (error) {
			return { error: error.message };
		}
	};

	return (
		<AuthContext.Provider
			value={{
				signUp,
				login,
				logout,
				user,
				handleConfirmation,
				showLogin,
				setShowLogin,
				forgotPassword,
				handleConfirmResetPassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
