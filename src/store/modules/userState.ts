import _ from 'lodash';
import { defineStore } from 'pinia';
import { store } from '../index';
import commonApi from '/@/api/common';

export interface UserStateType {
  token?: string;
  displayName?: string;
  avatar?: string;
  login: boolean;
}

export const defaultUserStateStore: UserStateType = {
  login: false,
  token: undefined,
  displayName: undefined,
  avatar: undefined,
};

const userStateStore = defineStore('user-state', {
  state: () => {
    return { ...defaultUserStateStore };
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      this.login = true;
    },
    async userLogout() {
      await commonApi.logout();
      this.login = false;
      this.token = undefined;
    },
    async pwdLogin(params: any) {
      const result = await commonApi.login(params);
      this.token = result.token;
      this.login = true;
    },
    async getUserInfo() {
      const userinfo = await commonApi.getUserInfo();
      this.displayName = userinfo.defaultName;
      this.avatar = userinfo.avatar;

      return userinfo;
    },
  },
  persist: true,
});

export function userStateStoreHook() {
  return userStateStore(store);
}
