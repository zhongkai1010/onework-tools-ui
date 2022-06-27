import { defineStore } from 'pinia'

interface TabItem {
  name: string
  path: string
  icon: string
}

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMultiTagsStore = defineStore({
  id: 'pure-multiTags',
  state: () => {
    return {
      tabs: [] as TabItem[],
    }
  },
  actions: {
    addTab(tab: TabItem) {
      this.tabs.push(tab)
    },
  },
})
