import { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	TextField,
	Button,
	Box,
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { header } from "../styles/text";

const linkStyle = {
	color: "blue",
	backgroundColor: "lightGrey",
	cursor: "pointer",
	margin: "0 10px",
};

const loginCardStyle = {
	width: 400,
	padding: 1,
	backgroundColor: "lightGrey",
	borderRadius: "10px",
	"& .MuiInputBase-root": {
		backgroundColor: "white",
	},
};

const Login = ({ setShowRegister, setShowLogin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [awaitingCode, setAwaitingCode] = useState(false);
	const [awaitingNewPassword, setAwaitingNewPassword] = useState(false);
	const [code, setCode] = useState("");

	const [error, setError] = useState(null);
	const [resetPassword, setResetpassword] = useState(false);
	const {
		login,
		handleConfirmation,
		forgotPassword,
		handleConfirmResetPassword,
	} = useAuth();

	const handleLogin = async () => {
		setError();
		const result = await login(email, password);
		switch (result.type) {
			case "success":
				setShowLogin(false);
				break;
			case "nextSteps":
				setAwaitingCode(true);
				break;
			case "error":
				setError(result.message);
				break;
			default:
				setError(result.message);
				break;
		}
	};

	const handleConfirm = async () => {
		setError();
		try {
			const result = await handleConfirmation(email, code);
			if (result.isSignUpComplete) {
				setShowLogin(false);
			}
		} catch (error) {
			console.log(error);
			setError("An error has occured when confirming code.");
		}
	};

	const handleConfirmPasswordReset = async () => {
		setError();
		const result = await handleConfirmResetPassword({
			username: email,
			confirmationCode: code,
			newPassword: password,
		});
		if (result.error) {
			setError(result.error.message);
		} else {
			setAwaitingCode(false);
			setAwaitingNewPassword(false);
		}
	};

	const handleForgotPassword = async () => {
		setError();
		const result = await forgotPassword(email);
		if (result.error) {
			if (result.error.name === "EmptyResetPasswordUsername") {
				setError("Email address is required.");
			}
		} else if (result.codeSent) {
			setResetpassword(false);
			setAwaitingNewPassword(true);
		} else if (result.complete) {
			setShowLogin(false);
			router.push("/user");
		}
	};

	const toRegistration = () => {
		setShowLogin(false);
		setShowRegister(true);
	};

	return (
		<Card sx={loginCardStyle}>
			<CardContent>
				<Typography gutterBottom variant="h6">
					{!resetPassword && !awaitingNewPassword && (
						<Typography
							variant="span"
							sx={{ ...header, color: "black", fontSize: "32px" }}
						>
							Login
						</Typography>
					)}
					{resetPassword && "Forgot Password"}
					{awaitingNewPassword && "Reset Password"}
				</Typography>
				<Grid container spacing={2}>
					<Grid xs={12} item>
						<h5
							style={{
								textAlign: "left",
								marginBottom: 0,
								color: "grey",
							}}
						>
							Email
						</h5>
						<TextField
							type="email"
							name="email"
							placeholder="Enter email"
							variant="outlined"
							fullWidth
							size="small"
							value={email}
							required
							onChange={(event) => setEmail(event.target.value)}
						/>
					</Grid>
					{!resetPassword && (
						<Grid xs={12} item>
							<h5
								style={{
									textAlign: "left",
									padding: 0,
									marginTop: 0,
									marginBottom: 0,
									color: "grey",
								}}
							>
								Password
							</h5>
							<TextField
								name="password"
								type="password"
								placeholder="Enter password"
								variant="outlined"
								fullWidth
								size="small"
								required
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</Grid>
					)}
					{!resetPassword && !awaitingNewPassword && !awaitingCode && (
						<Grid xs={12} item>
							<Button
								style={{
									color: "white",
									backgroundColor: "green",
									textTransform: "capitalize",
								}}
								type="submit"
								variant="contained"
								fullWidth
								onClick={handleLogin}
							>
								Log in
							</Button>
						</Grid>
					)}
					{resetPassword && !awaitingNewPassword && (
						<Grid xs={12} item>
							<Button
								style={{
									color: "white",
									backgroundColor: "green",
									textTransform: "capitalize",
								}}
								type="submit"
								variant="contained"
								fullWidth
								onClick={handleForgotPassword}
							>
								Send Code
							</Button>
						</Grid>
					)}
					{!awaitingNewPassword && !awaitingCode && (
						<Grid xs={12} textAlign={"center"} item>
							No account?
							<a onClick={toRegistration} style={linkStyle}>
								Register Now
							</a>
						</Grid>
					)}
					{!resetPassword && !awaitingNewPassword && !awaitingCode && (
						<Grid xs={12} textAlign={"center"} item>
							<a onClick={() => setResetpassword(true)} style={linkStyle}>
								Forgot Password?
							</a>
						</Grid>
					)}
					{(awaitingCode || awaitingNewPassword) && (
						<>
							<Grid xs={12} textAlign={"center"} item>
								<Typography sx={{ p: 2 }}>
									Please validate your email address and confirm your account
									creation by entering the 6 digit code that was sent to you.
								</Typography>
							</Grid>
							<Grid xs={12} textAlign={"center"} item>
								<h5
									style={{
										textAlign: "left",
										padding: 0,
										marginTop: 0,
										marginBottom: 0,
										color: "grey",
									}}
								>
									Validation Code
								</h5>
								<TextField
									name="code"
									type="text"
									placeholder="Enter code from email"
									variant="outlined"
									fullWidth
									size="small"
									value={code}
									onChange={(event) => setCode(event.target.value)}
								/>
							</Grid>
						</>
					)}
					{(awaitingCode || awaitingNewPassword) && (
						<Grid xs={12} item>
							<Button
								style={{
									color: "white",
									backgroundColor: "green",
									textTransform: "capitalize",
								}}
								variant="contained"
								fullWidth
								onClick={
									awaitingNewPassword
										? handleConfirmPasswordReset
										: handleConfirm
								}
							>
								{awaitingCode && "Submit Code"}
								{awaitingNewPassword && "Set New Password"}
							</Button>
						</Grid>
					)}
					{awaitingNewPassword && !awaitingNewPassword && (
						<Grid xs={12} item>
							<Button
								style={{
									color: "white",
									backgroundColor: "green",
									textTransform: "capitalize",
								}}
								type="submit"
								variant="contained"
								fullWidth
								onClick={handleForgotPassword}
							>
								Send Code
							</Button>
						</Grid>
					)}
					<Grid xs={12} item>
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<Typography color={"error"}>{error}</Typography>
						</Box>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};
export default Login;
