import axios from "axios";
import { API } from "src/constants";

export const get = (endpoint: string = '') => axios.get(`${API}${endpoint}`);
