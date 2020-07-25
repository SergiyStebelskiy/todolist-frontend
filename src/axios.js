import axios from "axios";

const request = axios.create({
	baseURL: "https://young-springs-35234.herokuapp.com"
});

export default request;
