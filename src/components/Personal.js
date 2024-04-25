import React, { useState } from "react";
import { Box } from "@mui/material";
import { useStudentByIdData } from "../hooks/useStudentsData";
import UserInfo from "./UserInfo";
import UserInfoEdit from "./UserInfoEdit";

const Personal = ({ user }) => {
	const [editMode, setEditMode] = useState(false);
	const studentId = "de0588aa-b26c-463c-ae44-30c281a7f8fc";
	const {
		data: student,
		isPending,
		isError,
		isSuccess,
		error,
		refetch,
	} = useStudentByIdData(studentId);

	return (
		<Box>
			{isPending && <span>Loading...</span>}
			{isError && <span>{error.message}</span>}
			{isSuccess && student && (
				<>
					{!editMode && (
						<UserInfo student={student} setEditMode={setEditMode} />
					)}
					{editMode && (
						<UserInfoEdit
							refetch={refetch}
							setEditMode={setEditMode}
							student={{
								...student,
								dateOfBirth: student.dateOfBirth.substring(0, 10),
							}}
						/>
					)}
				</>
			)}
		</Box>
	);
};

export default Personal;
