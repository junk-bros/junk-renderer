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

export const NODE_SERVER: string = "http://127.0.0.1:3001";
export const PYTHON_SERVER: string = "http://127.0.0.1:4000";

// export const NODE_SERVER: string =
//   "http://ec2-52-69-234-9.ap-northeast-1.compute.amazonaws.com:3001";
// export const PYTHON_SERVER: string =
//   "http://ec2-52-69-234-9.ap-northeast-1.compute.amazonaws.com:4000";

export const FAKE_FILES_DATA = [
  {
    key: "test1.csv/sd1dg912gwd91b2wge912gdg19dt21",
    filename: "test1.csv",
    size: "68KB",
    versionId: "sd1dg912gwd91b2wge912gdg19dt21",
    lastModified: "2019-01-06 18:52",
    children: [
      {
        key: "test1.csv/sd1dg912gwd91b2wge912gdg19dt24",
        filename: "历史版本",
        size: "77KB",
        versionId: "sd1dg912gwd91b2wge912gdg19dt24",
        lastModified: "2019-01-06 18:32"
      },
      {
        key: "历史版本/sd1dg912gwd91b2wge912gdg19dt25",
        filename: "历史版本",
        size: "12KB",
        versionId: "sd1dg912gwd91b2wge912gdg19dt25",
        lastModified: "2019-01-06 18:12"
      },
    ]
  },
  {
    key: "test2.csv/sd1dg912gwd91b2wge912gd41219dt22",
    filename: "test2.csv",
    size: "53KB",
    versionId: "sd1dg912gwd91b2wge912gdg19dt22",
    lastModified: "2019-01-06 18:54"
  },
  {
    key: "test3.csv/sd1dg912gwd91b2wge912gdg19dt23",
    filename: "test3.csv",
    size: "98KB",
    versionId: "sd1dg912gwd91b2wge912gdg19dt23",
    lastModified: "2019-01-06 18:59"
  },
];
