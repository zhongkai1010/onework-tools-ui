import _ from 'lodash';
import { defineStore } from 'pinia';
import { store } from '../index';
import accountApi from '/@/api/account';
import userApi, { CurrentUser } from '/@/api/user';

export interface UserStateType {
  token?: string;
  login: boolean;
  currentUser: CurrentUser;
}

export const defaultUserStateStore: UserStateType = {
  login: false,
  token: null,
  currentUser: {
    displayName: '',
    avatar: ''
  }
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
      await accountApi.logout();
      this.login = false;
      this.token = undefined;
    },
    async userLogin(params: any) {
      const result = await accountApi.login(params);
      this.token = result.token;
      this.login = true;
    },
    async getUserInfo() {
      const userinfo = await userApi.getUserInfo();

      this.currentUser.displayName = userinfo.displayName;
      this.currentUser.avatar = userinfo.avatar;

      return userinfo;
    }
  },
  persist: true
});

export function userStateStoreHook() {
  return userStateStore(store);
}
