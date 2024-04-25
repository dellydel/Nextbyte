import React, { useState, useEffect } from "react";
import { List, Box } from "@mui/material";
import CourseMaterial from "./CourseMaterial";

const pageLayout = {
	display: "flex",
	justifyContent: "space-between",
};

const CourseMaterals = ({ data }) => {
	const [materials, setMaterials] = useState(null);

	useEffect(() => {
		data.map((document) => {
			document.name = document.name.split("/").pop();
			return document;
		});

		const videos = data.filter((file) => file.name.endsWith(".mp4"));
		const documents = data.filter((file) => !file.name.endsWith(".mp4"));
		setMaterials({ documents: documents, videos: videos });
	}, [data]);

	return (
		<Box sx={pageLayout}>
			<Box sx={{ width: "50%" }}>
				<Box
					sx={{
						mt: 5,
						pr: 1,
						color: "grey",
					}}
				>
					<span>
						<b>Course Materials</b>
					</span>
					<List>
						{materials?.documents.map((document, index) => (
							<CourseMaterial key={index} file={document} />
						))}
					</List>
				</Box>
			</Box>
			<Box sx={{ width: "50%" }}>
				<Box
					sx={{
						mt: 5,
						pl: 1,
						color: "grey",
					}}
				>
					<span>
						<b>Course Recordings</b>
					</span>
					<List>
						{materials?.videos.map((video, index) => (
							<CourseMaterial key={index} file={video} />
						))}
					</List>
				</Box>
			</Box>
		</Box>
	);
};

export default CourseMaterals;
