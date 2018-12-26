import axios from "axios";
import { NODE_SERVER } from "../constants";

export const login = (data: LoginData) => {
  return axios.post(`${NODE_SERVER}/users/login`, data);
};
