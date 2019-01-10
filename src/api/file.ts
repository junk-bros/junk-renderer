import axios from "axios";
import { PYTHON_SERVER } from "../constants";

export const getFiles = (userId: string) => {
  return axios.get(`${PYTHON_SERVER}/file/?userId=${userId}`);
};

export const downloadFiles = (data: DownloadRequest) => {
  return axios({
    data,
    method: "POST",
    url: `${PYTHON_SERVER}/file/download/`,
    responseType: "blob"
  });
};

export const deleteFiles = (data: DeleteRequest) => {
  return axios.post(`${PYTHON_SERVER}/file/delete/`, data);
};
