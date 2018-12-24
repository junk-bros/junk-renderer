interface Tabs {
  tabName: string;
  tabIcon: string;
  index: number;
}

export const TABS: Tabs[] = [
  {
    tabName: "用户首页",
    tabIcon: "home",
    index: 0
  },
  {
    tabName: "数据概览",
    tabIcon: "file-word",
    index: 1
  },
];
