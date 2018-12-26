declare interface User {
  id: string;
  username: string;
  files?: [string];
  phone?: string;
  email?: string;
}

declare interface Tabs {
  tabName: string;
  tabIcon: string;
  index: number;
}

declare interface LoginData {
  username: string;
  password: string;
}

declare interface FetchResponse {
  status: number;
  message: string;
}
