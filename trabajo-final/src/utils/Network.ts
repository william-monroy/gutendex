import axios from "axios";
import { BASE_URL } from "./Constants";

const api = axios.create({
  baseURL: `${BASE_URL}/books`,
});

export default api;
