import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const SecureDocument = () => {
	const url = sessionStorage.getItem("secureDocUrl");
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [pdfBlob, setPdfBlob] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.blob())
			.then((blob) => setPdfBlob(URL.createObjectURL(blob)));
	}, [url]);

	return (
		<Box
			onContextMenu={(e) => e.preventDefault()}
			onKeyDown={(e) => {
				if (
					(e.ctrlKey || e.metaKey) &&
					["s", "p", "c", "a"].includes(e.key.toLowerCase())
				) {
					e.preventDefault();
				}
			}}
			tabIndex={0}
			sx={{
				userSelect: "none",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minHeight: "100vh",
				backgroundColor: "#525659",
				pt: 2,
				pb: 4,
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 2,
					mb: 2,
					color: "white",
				}}
			>
				<IconButton
					onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
					disabled={pageNumber <= 1}
					sx={{ color: "white" }}
				>
					<NavigateBefore />
				</IconButton>
				<Typography>
					Page {pageNumber} of {numPages}
				</Typography>
				<IconButton
					onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
					disabled={pageNumber >= numPages}
					sx={{ color: "white" }}
				>
					<NavigateNext />
				</IconButton>
			</Box>
			<Document
				file={pdfBlob}
				onLoadSuccess={({ numPages }) => setNumPages(numPages)}
			>
				<Page pageNumber={pageNumber} renderTextLayer={false} />
			</Document>
		</Box>
	);
};

export default SecureDocument;
