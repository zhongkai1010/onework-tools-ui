export interface GetConfigResult {
  title: string;
  version: string;
  sid: string;
}

export interface LoginPwdRequestParam {
  username: string;
  password: string;
  vcode: string;
}

export interface LoginPwdResult {
  token: string;
}

export interface GetUserInfoResult {
  defaultName: string;
  avatar: string;
  permission: string[];
  menus: any[];
}

export interface RegisterRequestParam {
  username: string;
  password: string;
}

export interface RegisterResult {
  code: string;
}
