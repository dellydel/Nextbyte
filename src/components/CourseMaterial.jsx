import { Download } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import { Button, ListItem, ListItemText, Paper } from "@mui/material";

const CourseMaterial = ({ file }) => {
	const formatFileName = (file) => {
		let name = file.name;
		if (name.length > 30) {
			name = name.substring(0, 30) + "...";
		}
		return file.name.endsWith(".mp4") ? name.split(".").shift() : name;
	};

	const handleOpen = () => {
		if (file.name.endsWith(".mp4")) {
			window.open(file.url, "_blank");
		} else {
			sessionStorage.setItem("secureDocUrl", file.url);
			window.open("/secure-document", "_blank");
		}
	};

	return (
		<Paper
			sx={{
				backgroundColor: "#EEEEEE",
				mb: 2,
				p: 1,
			}}
		>
			<ListItem>
				<ListItemText primary={formatFileName(file)} />
				<Button variant="contained" color="primary" onClick={handleOpen}>
					{file.name.endsWith(".mp4") ? <Download /> : <Visibility />}
				</Button>
			</ListItem>
		</Paper>
	);
};

export default CourseMaterial;
