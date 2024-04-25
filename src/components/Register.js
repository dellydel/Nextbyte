import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import {
	Card,
	CardContent,
	Box,
	Typography,
	Grid,
	Button,
	IconButton,
} from "@mui/material";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { PopupContext } from "../context/PopupContext";
import { registrationText } from "../data/registrationContent";
import {
	registrationSchema,
	defaultFormValues,
} from "../schemas/registrationSchema";
import { wrapper, close } from "../styles/register";
import FormTextField from "./FormTextField";
import PopupMessage from "./PopupMessage";

const Register = ({ setShowRegister }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(registrationSchema),
		defaultValues: defaultFormValues,
	});

	const { snackbarState, setSnackbarState } = useContext(PopupContext);
	const { signUp } = useContext(AuthContext);

	const onSubmit = async (data, event) => {
		event.preventDefault();
		const dateOptions = { month: "2-digit", day: "2-digit", year: "numeric" };
		const password = data.password;
		const username = data.email;

		try {
			const { userId } = await signUp({
				username,
				password,
				options: {
					userAttributes: {
						address:
							data.street +
							" " +
							data.city +
							" " +
							data.state +
							" " +
							data.zip +
							" " +
							data.country,
						birthdate: data.dateOfBirth.toLocaleDateString(
							"en-US",
							dateOptions,
						),
						email: data.email,
						name: data.firstName + " " + data.lastName,
						phone_number: "+" + data.phoneNumber,
					},
					autoSignIn: true,
				},
			});
			delete data.password;
			delete data.confirmPassword;
			axios
				.post(`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/students`, {
					...data,
					id: userId.toString(),
				})
				.then((res) => {
					reset();
					setSnackbarState({
						type: "success",
						message: res.data,
						isOpen: true,
					});
					setShowRegister(false);
				})
				.catch((err) => {
					setSnackbarState({
						type: "error",
						message: err.message,
						isOpen: true,
					});
				});
		} catch (error) {
			setSnackbarState({
				type: "error",
				message: "An error has occurred: " + error.message,
				isOpen: true,
			});
		}
	};

	return (
		<>
			<PopupMessage
				snackbarState={snackbarState}
				setSnackbarState={setSnackbarState}
			/>
			<Card sx={wrapper}>
				<CardContent
					sx={{
						maxWidth: "850px",
					}}
				>
					<Box sx={close}>
						<IconButton
							color="inherit"
							aria-label="close"
							onClick={() => setShowRegister(false)}
						>
							<CloseIcon />
						</IconButton>
					</Box>
					<Box
						sx={{
							height: 30,
						}}
						component={"img"}
						src={"/images/logo-black.png"}
						alt={"NextByte Logo"}
					/>
					<Typography variant="h5" sx={{ mb: 4, mt: 1 }}>
						Register for your new account
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={2}>
							<Grid xs={12} sm={6} item>
								<FormTextField
									label="First Name"
									name="firstName"
									register={register}
									error={errors.firstName}
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<FormTextField
									label="Last Name"
									name="lastName"
									register={register}
									error={errors.lastName}
								/>
							</Grid>
							<Grid xs={6} item>
								<FormTextField
									type="number"
									label="Phone Number"
									name="phoneNumber"
									register={register}
									error={errors.phoneNumber}
								/>
							</Grid>
							<Grid xs={6} item>
								<FormTextField
									label="Email"
									name="email"
									register={register}
									error={errors.email}
									type="email"
								/>
							</Grid>
							<Grid xs={12} item>
								<FormTextField
									label="Street"
									name="street"
									register={register}
									error={errors.street}
								/>
							</Grid>
							<Grid xs={12} sm={4} item>
								<FormTextField
									label="City"
									name="city"
									register={register}
									error={errors.city}
								/>
							</Grid>
							<Grid xs={12} sm={4} item>
								<FormTextField
									label="State / Province"
									name="state"
									register={register}
									error={errors.state}
								/>
							</Grid>
							<Grid xs={12} sm={4} item>
								<FormTextField
									label="Zip"
									name="zip"
									register={register}
									error={errors.zip}
									type="number"
								/>
							</Grid>
							<Grid xs={6} item>
								<FormTextField
									label="Country"
									name="country"
									register={register}
									error={errors.country}
								/>
							</Grid>
							<Grid xs={6} item>
								<FormTextField
									label="Date of Birth"
									name="dateOfBirth"
									register={register}
									error={errors.dateOfBirth}
									type="Date"
								/>
							</Grid>
							<Grid xs={6} item>
								<FormTextField
									label="Password"
									name="password"
									type="password"
									register={register}
									error={errors.password}
								/>
							</Grid>
							<Grid xs={6} item>
								<FormTextField
									label="Confirm Password"
									name="confirmPassword"
									type="password"
									register={register}
									error={errors.confirmPassword}
								/>
							</Grid>
							<Box
								component={"div"}
								sx={{
									display: "flex",
									alignItems: "flex-end",
									justifyContent: "flex-end",
									flexDirection: "row",
									width: "100%",
									mt: 3,
								}}
							>
								<Button type="submit" variant="contained" color="primary">
									Submit
								</Button>
								<Button
									sx={{ ml: 1 }}
									onClick={() => reset()}
									variant="outlined"
								>
									Reset
								</Button>
							</Box>
						</Grid>
					</form>

					<Typography
						style={{
							marginTop: "50px",
							marginBottom: "20px",
							textAlign: "center",
						}}
					>
						{registrationText}
					</Typography>
				</CardContent>
			</Card>
		</>
	);
};

export default Register;
