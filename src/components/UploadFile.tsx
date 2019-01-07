import React from "react";
import styled from "styled-components";
import { Upload, message, Button, Icon } from "antd";

const Dragger = Upload.Dragger;

interface UploadProps {
  files: JunkFile[];
}

const Hint = styled.span`
  color: #999;
  font-size: 14px;
  margin-left: 15px;
`;

const uploadProps = {
  name: "file",
  action: "//jsonplaceholder.typicode.com/posts/",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info: any) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

const UploadFile = (props: UploadProps) => {
  const { files } = props;
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
