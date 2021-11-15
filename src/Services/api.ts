import axios from "axios";

const api = axios.create({
  baseURL: "https://finance-kids.herokuapp.com/",
});

export default api;
