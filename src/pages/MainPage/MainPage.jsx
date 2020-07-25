import React, { useEffect, useState } from "react";
import s from "./MainPage.module.scss";
import CreateTaskForm from "forms/CreateTaskForm/CreateTaskForm";
import Task from "components/Task/Task";
import { List } from "@material-ui/core";
import axios from "../../axios";

const MainPage = () => {
	const [ tasks, setTasks ] = useState([]);
	useEffect(() => {
		axios.get("/tasks").then((res) => setTasks(res.data));
	}, []);

	const handleCreateTask = async (name) => {
		try {
			await axios.post("/tasks", { name }).then((res) => setTasks([ res.data, ...tasks ]));
		} catch (error) {
			console.error(error);
		}
	};
	const handleDeleteTask = (id) => {
		try {
			axios.delete(`/tasks/${id}`).then((res) => setTasks(tasks.filter((task) => task._id !== id)));
		} catch (error) {
			console.error(error);
		}
	};
	const handleCheckTask = async (id, checked) => {
		try {
			await axios.put(`/tasks/${id}`, { checked });
		} catch (error) {
			console.error(error);
		}
	};
	const handleEditTask = async (id, newName) => {
		try {
			await axios.put(`/tasks/${id}`, { name: newName });
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className={s.mainPage}>
			<CreateTaskForm onCreateTask={handleCreateTask} />
			<List className={s.tasks}>
				{tasks.map((task) => (
					<Task
						key={task._id}
						task={task}
						onDelete={handleDeleteTask}
						onCheck={handleCheckTask}
						onEdit={handleEditTask}
					/>
				))}
			</List>
		</div>
	);
};

export default MainPage;
