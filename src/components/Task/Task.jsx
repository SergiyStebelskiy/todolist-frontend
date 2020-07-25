import React, { useState } from "react";
import { ListItem, ListItemIcon, ListItemText, Checkbox } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import AutosizeInput from "react-input-autosize";
import s from "./Task.module.scss";

const Task = ({ task, onDelete, onCheck, onEdit }) => {
	const { checked, _id, name } = task;
	const [ edit, setEdit ] = useState(false);
	const [ taskNameVal, setTaskNameVal ] = useState(name);
	const [ checkedTask, setCheckedTask ] = useState(checked);
	return (
		<ListItem className={s.task}>
			<ListItemIcon>
				<Checkbox
					value={checkedTask}
					defaultChecked={checked}
					onChange={(e) => onCheck(_id, e.target.checked).then(() => setCheckedTask(!checkedTask))}
					color="primary"
				/>
			</ListItemIcon>
			{!edit ? (
				<ListItemText primary={taskNameVal} className={s.title} onClick={() => setEdit(true)} />
			) : (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						onEdit(_id, taskNameVal).then(() => setEdit(false));
					}}
				>
					<AutosizeInput
						name={_id}
						value={taskNameVal}
						onChange={(e) => setTaskNameVal(e.target.value)}
						onBlur={() => setEdit(false)}
						autoFocus={true}
					/>
				</form>
			)}

			<ListItemIcon className={s.deleteBtn} onClick={() => onDelete(_id)}>
				<Delete />
			</ListItemIcon>
		</ListItem>
	);
};

export default Task;
