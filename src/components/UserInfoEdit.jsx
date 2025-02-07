import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Button } from "@mui/material";
import axios from "axios";
import { registrationSchemaEdit } from "../schemas/registrationSchema";
import { wrapper } from "../styles/userInfoEdit";
import FormTextField from "./FormTextField";

const UserInfoEdit = ({ student, setEditMode, refetch }) => {
	const {
		register,
		unregister,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(registrationSchemaEdit),
		defaultValues: student,
	});

	useEffect(() => {
		unregister(["password", "confirmPassword"]);
	}, []);

	const onSubmit = async (data, event) => {
		event.preventDefault();
		await axios.post(
			`${import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL}/students`,
			{
				...data,
				id: student.id,
			},
		);
		setEditMode(false);
		refetch();
	};

	return (
		<Box sx={wrapper}>
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
							type="date"
						/>
					</Grid>
					<Box
						component={"div"}
						sx={{
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "flex-end",
							flexDirection: "row",
							width: 1,
							mt: 3,
						}}
					>
						<Button type="submit" variant="contained" color="primary">
							Submit
						</Button>
						<Button sx={{ ml: 1 }} onClick={() => reset()} variant="outlined">
							Reset
						</Button>
					</Box>
				</Grid>
			</form>
		</Box>
	);
};

export default UserInfoEdit;
