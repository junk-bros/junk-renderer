export const TABS: Tabs[] = [
  {
    tabName: "用户文件",
    tabIcon: "home",
    index: 0
  },
  {
    tabName: "数据概览",
    tabIcon: "file-word",
    index: 1
  },
  {
    tabName: "数据可视化",
    tabIcon: "pie-chart",
    index: 2
  },
];

export const FILE_COLUMNS = [
  {
    title: "文件名",
    dataIndex: "filename"
  },
  {
    title: "大小",
    dataIndex: "size",
    width: "10%"
  },
  {
    title: "上次更新时间",
    dataIndex: "lastModified",
    width: "25%"
  },
  {
    title: "版本ID",
    dataIndex: "versionId",
    width: "30%"
  },
];

export const NODE_SERVER: string = "http://localhost:3001";
export const PYTHON_SERVER: string = "http://localhost:4000";
