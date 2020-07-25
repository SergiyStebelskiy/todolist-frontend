import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import s from "./CreateTaskForm.module.scss";

const CreateTaskForm = ({ onCreateTask }) => {
	const [ taskVal, setTaskVal ] = useState("");
	return (
		<form
			className={s.createTaskForm}
			noValidate
			autoComplete="off"
			onSubmit={(e) => {
				e.preventDefault();
				onCreateTask(taskVal).then(() => setTaskVal(""));
			}}
		>
			<TextField
				value={taskVal}
				onChange={(e) => setTaskVal(e.target.value)}
				className={s.field}
				id="create-task-field"
				label="Create task"
				variant="outlined"
			/>
		</form>
	);
};

export default CreateTaskForm;
