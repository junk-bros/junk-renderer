import axios from "axios";
import { NODE_SERVER, PYTHON_SERVER } from "../constants";

export const login = (data: LoginData) => {
  return axios.post(`${NODE_SERVER}/users/login`, data);
};

export const register = (data: RegData) => {
  return axios.post(`${NODE_SERVER}/users`, data);
};

export const getFiles = (userId: string) => {
  return axios.get(`${PYTHON_SERVER}/file&userId=${userId}`);
};
