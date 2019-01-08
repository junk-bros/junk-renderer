import React from "react";
import styled from "styled-components";
import { Button, Table, Select } from "antd";

import UploadFile from "./UploadFile";
import { FILE_COLUMNS } from "../constants";

const Option = Select.Option;

interface HomeProps {
  userId: string;
  files: JunkFile[];
  selectedFile: string;
  deleteLoading: boolean;
  selectedRowKeys: string[];
  handleChangeSelectedFile: (versionId: string) => void;
  updateFiles: (files: JunkFile[]) => void;
  updateSelectedRowKeys: (selectedRowKeys: [string]) => void;
}

const Buttons = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const DownloadButton: any = styled(Button)`
  margin-right: 10px;
`;

const TableWithoutPagination: any = styled(Table)`
  & .ant-table-pagination {
    display: none;
  }
`;

const Hint = styled.p`
  color: #999;
  font-size: 14px;
  margin: 20px 0;
`;

const ChooseFile = styled.div`
  & #chooseFile {
    min-width: 160px;
  }
`;

class Home extends React.Component<HomeProps, object> {
  state = {
    downloadLoading: false
  };

  download = () => {
    this.setState({ downloadLoading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        downloadLoading: false
      });
    }, 1000);
  };

  delete = () => {
    this.setState({ deleteLoading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        deleteLoading: false
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys: [string]) => {
    this.props.updateSelectedRowKeys(selectedRowKeys);
  };

  render() {
    const {
      files,
      selectedFile,
      userId,
      handleChangeSelectedFile,
      updateFiles,
      deleteLoading,
      selectedRowKeys
    } = this.props;
    const { downloadLoading } = this.state;
    const rowSelection: any = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;

    return files.length > 0 ? (
      <div>
        <Buttons>
          <div>
            <DownloadButton
              type="default"
              onClick={this.download}
              disabled={!hasSelected}
              loading={downloadLoading}
            >
              下载
            </DownloadButton>
            <Button
              type="danger"
              onClick={this.delete}
              disabled={!hasSelected}
              loading={deleteLoading}
            >
              删除
            </Button>
          </div>
          <UploadFile files={files} userId={userId} updateFiles={updateFiles} />
        </Buttons>
        <TableWithoutPagination
          rowSelection={rowSelection}
          columns={FILE_COLUMNS}
          dataSource={files}
        />
        <Hint>
          *
          每个用户最多保存5个文件（不包含历史版本文件）。每个文件的历史版本将会自动保留5天。
        </Hint>
        <ChooseFile>
          <label htmlFor="chooseFile">选择用于分析的文件：</label>
          <Select
            defaultValue={selectedFile}
            id="chooseFile"
            onChange={handleChangeSelectedFile}
          >
            {files.map(item => (
              <Option key={item.versionId} value={item.versionId}>
                {item.filename}
              </Option>
            ))}
          </Select>
        </ChooseFile>
      </div>
    ) : (
      <div>
        <UploadFile files={files} userId={userId} updateFiles={updateFiles} />
        <Hint>* 您还没有上传任何文件，请先上传数据文件。</Hint>
      </div>
    );
  }
}

export default Home;
