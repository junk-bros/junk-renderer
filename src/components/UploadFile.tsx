import React from "react";
import styled from "styled-components";
import { Upload, message, Button, Icon } from "antd";
import { PYTHON_SERVER } from "../constants";

const Dragger = Upload.Dragger;

interface UploadProps {
  files: JunkFile[];
  userId: string;
  updateFiles: (files: JunkFile[]) => void;
}

const Hint = styled.span`
  color: #999;
  font-size: 14px;
  margin-left: 15px;
`;

const getUploadProps = (
  userId: string,
  updateFiles: (files: JunkFile[]) => void,
) => ({
  name: "file",
  accept: ".csv, .xlsx",
  headers: {
    authorization: "authorization-text"
  },
  action: `${PYTHON_SERVER}/file/upload/?userId=${userId}`,
  onChange: (info: any) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      console.log(info.file.response);
      if (info.file.response.status) {
        updateFiles(info.file.response.data);
      }
      message.success(`${info.file.name} 上传成功`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} 上传失败`);
    }
  },
  beforeUpload: (file: any, fileList: any) => {
    if (file.size > 5000000) {
      message.error("文件大小超出限制，最大为5MB");
      fileList.length = 0;
      return false;
    }
    return true;
  }
});

const UploadFile = (props: UploadProps) => {
  const { files, userId, updateFiles } = props;
  const uploadProps = getUploadProps(userId, updateFiles);
  return files.length > 0 ? (
    <Upload {...uploadProps}>
      <Button>
        <Icon type="upload" /> 上传文件
      </Button>
      <Hint>* 文件格式为csv，大小限制5MB。</Hint>
    </Upload>
  ) : (
    <Dragger {...uploadProps}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">点击或将文件拖拽至此区域上传</p>
      <p className="ant-upload-hint">文件格式为csv，大小限制5MB。</p>
    </Dragger>
  );
};

export default UploadFile;
