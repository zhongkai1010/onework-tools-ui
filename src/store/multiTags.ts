import { defineStore } from 'pinia';

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMultiTagsStore = defineStore({
  id: 'ow-header-tabs',
  state: () => {
    return {
      current: '/', // 当前路径
      currentIndex: 0, // 当前索引
      tabs: [
        {
          name: 'home',
          path: '/',
          icon: 'ant-design:home-outlined',
          closed: false,
        },
      ],
    };
  },
  actions: {
    /**
     * 添加标签
     * @param tab 标签
     */
    openTab(tab) {
      const index = this.tabs.findIndex((value) => value === tab.path);
      if (index > 0) {
        const tab = this.tabs[index];
        this.current = tab.path;
        this.currentIndex = index;
      } else {
        this.tabs.push(tab);
        this.current = tab.path;
        this.currentIndex = this.tabs.length - 1;
      }
    },
    handleTab(type: 'close' | 'left' | 'right' | 'all', path: string) {
      const tab = this.tabs.find((value) => value.path === path);
      if (!tab) {
        new Error('');
      }
      switch (type) {
        case 'close':
          break;
        case 'left':
          break;
        case 'right':
          break;
        case 'all':
          break;
        default:
          break;
      }
    },
  },
});
