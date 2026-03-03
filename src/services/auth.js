import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
	AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
	UserPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
	ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);

export const signUp = ({ username, password, options }) => {
	return new Promise((resolve, reject) => {
		const attributeList = Object.entries(options.userAttributes).map(
			([key, value]) => new CognitoUserAttribute({ Name: key, Value: value }),
		);

		userPool.signUp(username, password, attributeList, null, (err, result) => {
			if (err) {
				reject(err);
				return;
			}
			resolve({ userId: result.userSub });
		});
	});
};

export const validateCredentials = (email, password) => {
	return new Promise((resolve, reject) => {
		const authenticationDetails = new AuthenticationDetails({
			Username: email,
			Password: password,
		});

		const cognitoUser = new CognitoUser({
			Username: email,
			Pool: userPool,
		});

		cognitoUser.setAuthenticationFlowType("USER_PASSWORD_AUTH");

		cognitoUser.authenticateUser(authenticationDetails, {
			onSuccess: (result) => {
				resolve({
					type: "success",
					data: {
						accessToken: result.getAccessToken().getJwtToken(),
						idToken: result.getIdToken().getJwtToken(),
						refreshToken: result.getRefreshToken().getToken(),
					},
				});
			},
			onFailure: (err) => {
				if (err.code === "UserNotConfirmedException") {
					resolve({
						type: "nextSteps",
						message: "Please confirm your email address",
					});
				} else {
					resolve({
						type: "error",
						message: err.message,
					});
				}
			},
		});
	});
};

export const confirmSignUp = (username, code) => {
	return new Promise((resolve, reject) => {
		const cognitoUser = new CognitoUser({
			Username: username,
			Pool: userPool,
		});

		cognitoUser.confirmRegistration(code, true, (err, result) => {
			if (err) {
				reject(err);
				return;
			}
			resolve({ isSignUpComplete: true });
		});
	});
};

export const refreshToken = () => {
	return new Promise((resolve, reject) => {
		const cognitoUser = userPool.getCurrentUser();

		if (!cognitoUser) {
			reject(new Error("No user found"));
			return;
		}

		cognitoUser.getSession((err, session) => {
			if (err) {
				reject(err);
				return;
			}

			const RefreshToken = session.getRefreshToken();
			cognitoUser.refreshSession(RefreshToken, (err, session) => {
				if (err) {
					reject(err);
					return;
				}

				resolve({
					data: {
						accessToken: session.getAccessToken().getJwtToken(),
						idToken: session.getIdToken().getJwtToken(),
					},
				});
			});
		});
	});
};
