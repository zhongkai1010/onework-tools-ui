import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMultiTagsStore = defineStore({

    id: "pure-multiTags",
    state: () => ({
        // 存储标签页信息（路由信息）
        multiTags: []
    }),
    // other options...
})