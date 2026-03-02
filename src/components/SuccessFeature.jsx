import { Grid, Box } from "@mui/material";
import { successStory } from "../data/homeContent";
import CustomSubheader from "./CustomSubheader";
import { SuccessCheckList } from "./SucceessCheckList";
import SuccessStoryFeature from "./SuccessStoryFeature";

const SuccessFeature = () => {
	return (
		<Box sx={{ px: { xs: 0, md: 0 }, mx: { xs: 4, md: 5, lg: 15 } }}>
			<Grid container align="center">
				<Grid item xs={12} md={6}>
					<Box
						sx={{
							width: { xs: 1, md: "auto" },
							maxWidth: "100%",
							pl: { xs: 0, md: 4 },
							mb: 5,
						}}
					>
						<CustomSubheader textArray={successStory} alignment="left" />
					</Box>

					<Box
						sx={{
							width: { xs: 1, md: "auto" },
							pl: { xs: 0, md: 2 },
							maxWidth: "100%",
							height: "auto",
							objectFit: "contain",
							display: "block",
						}}
						component={"img"}
						src={"/images/working_on_laptop.webp"}
						alt={" working on laptop"}
					/>
				</Grid>
				<Grid
					item
					sx={{ pt: { xs: 5, md: 0 }, px: { xs: 0, md: 5 } }}
					xs={12}
					md={6}
				>
					<SuccessCheckList />
				</Grid>
			</Grid>
		</Box>
	);
};

export default SuccessFeature;
