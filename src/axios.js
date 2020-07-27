import axios from "axios";

const request = axios.create({
	baseURL: "https://todolist-backend9999.herokuapp.com"
});

export default request;
