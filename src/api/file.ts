import axios from "axios";
import { PYTHON_SERVER } from "../constants";

export const getFiles = (userId: string) => {
  return axios.get(`${PYTHON_SERVER}/file/getfiles/?userId=${userId}`);
};

export const downloadFiles = (data: FilesRequest) => {
  return axios.post(`${PYTHON_SERVER}/file/download`, data);
};

export const deleteFiles = (data: FilesRequest) => {
  return axios.post(`${PYTHON_SERVER}/file/delete`, data);
};
