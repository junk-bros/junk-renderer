import axios from "axios";
import { NODE_SERVER, PYTHON_SERVER } from "../constants";

export const getFiles = (userId: string) => {
  return axios.get(`${PYTHON_SERVER}/file&userId=${userId}`);
};
