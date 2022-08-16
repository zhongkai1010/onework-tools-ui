# OneWork Tools UI - 前端
# （1）功能清单
* 工作台
* 系统管理（system）
   * 用户管理（system\_user）
   * 角色管理（system\_role）
   * 菜单管理（system\_menu）
   * 组织机构（system\_organization）
   * 部门管理（system\_department）
   * 岗位管理（system\_post）
   * 数据字典（system\_dictionary）
      * 单项字典（system\_dictionary\_single）
      * 多项字典（system\_dictionary\_multiple）
   * 参数设置（system\_config）
   * 通知公告（system\_notice）
   * 日志管理（system\_logs）
      * 操作日志（system\_logs\_operate）
      * 登录日志（system\_logs\_login）
* 流程管理（process）
   * 流程管理（process\_management）

   * 流程设计（process\_design）
   * 流程监听（process\_monitor）
   * 表达式管理（process\_expression）
   * 表单管理（process\_form）
* 系统监控（monitor）
   * 在线用户（monitor\_user）
   * 定时任务（monitor\_task）
   * 数据监控（monitor\_data）
   * 服务监控（monitor\_service）
   * 缓存监控（monitor\_cache）
   * 缓存列表（monitor\_cache\_list）
* 平台管理（platform）
   * 应用管理（platform\_application）
* 平台运维（operation）
   * 数据库管理（operation\_database）
   * 文件附件（operation\_file）

   * 系统接口（operation\_interface）
   * 消息管理（operation\_message）
      * 消息模板（operation\_message\_template）
      * 消息记录（operation\_message\_log）
* 系统工具（tool）
   * 数据模型（tool\_model）
   * 翻译记录（tool\_translate）
   * 代码生成（tool\_generator）
   * 页面模板（tool\_page）
* 组件示例（demo）
   * 表格（demo\_table）
      * 综合表格（demo\_table\_complex）
      * 行内边界表格（demo\_table\_Inline）
      * 自定义表格（demo\_table\_custom）
      * 动态表格（demo\_table\_dynamic）
   * 列表（demo\_list）
   * 卡片（demo\_card）
   * 描述（demo\_description）
   * 编辑器（demo\_edit）
   * 表单（demo\_form）
      * 综合表单（demo\_form\_complex）
      * 分步表单（demo\_form\_step）
* 其它（other）
   * 工作流（other\_flow）
   * 图标（other\_icon）
   * 打印（other\_print）
   * 时间线（other\_time）
   * 动作描点（other\_trace）
   * 拖拽（other\_drag）
   * 视频播放（other\_video）
   * CSS动画（other\_css）
   * Flex布局（other\_flex）
   * 第三方登录（other\_login）
   * 外链（other\_link）
   * iframe（other\_iframe）
   * execl（other\_execl）

# （2）开发日志
1. 标签右键菜单功能
2. Layout默认主题颜色及变量定义
3. 面包屑动态数据绑定
4. 多标签、菜单、导航样式
5. 头部响应式样式
6. 栏目布局下左侧菜单数据绑定和样式
7. 多语言功能及头部语言切换功能
8. 通知面板功能
9. 头部搜索操作功能及搜索页面
10. 头部设置按钮操作功能
11. 头部个人头像操作功能
12. 登录页面
13. 登录操作
14. 页面主体内容区域样式组件
15. 统一axios数据请求处理
16. 模拟登录请求及路由处理
17. 菜单管理页面
18. 右侧滑出面板配置功能
19. 表格页面模板
20. 分离store，保持功能单一原则
21. 构建用户的store，模拟登录验证
22. 拖拽构建表单

# （3）常用链接
---
Element Plus：[https://element-plus.org/zh-CN/](https://element-plus.org/zh-CN/)

Element Plus主题切换：[https://element-plus.github.io/theme-chalk-preview/#/zh-CN](https://element-plus.github.io/theme-chalk-preview/#/zh-CN)

Vue3：[https://staging-cn.vuejs.org/guide/introduction.html](https://staging-cn.vuejs.org/guide/introduction.html)

Vue Router：[https://router.vuejs.org/zh/installation.html](https://router.vuejs.org/zh/installation.html)

Vite：[https://www.vitejs.net/](https://www.vitejs.net/)

vue-admin-beautiful：[https://vue-admin-beautiful.com/](https://vue-admin-beautiful.com/)

色卡：[https://www.colorhunt.co/](https://www.colorhunt.co/)

CSS3速查表：[http://www.w3chtml.com/css3/](http://www.w3chtml.com/css3/)

icon： [https://icones.js.org/](https://icones.js.org/)

mock:[http://mockjs.com/0.1/](http://mockjs.com/0.1/)

## 辅助组件
---
css-color-function

rgb-hex

axios：[https://www.axios-http.cn/docs/intro](https://www.axios-http.cn/docs/intro)

vite-plugin-mock：[https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh\_CN.md](https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md)

页面模板： [https://colorlib.com/wp/](https://colorlib.com/wp/)

## 开源项目
---
vue-pure-admin：[https://github.com/xiaoxian521/vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin)

vue-vben-admin：[https://github.com/vbenjs/vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)

vue-element-admin：[https://panjiachen.github.io/vue-element-admin-site/zh/](https://panjiachen.github.io/vue-element-admin-site/zh/)

vue3-composition-admin：[https://github.com/RainManGO/vue3-composition-admin](https://github.com/RainManGO/vue3-composition-admin)

BuildAdmin：[https://demo.buildadmin.com/](https://demo.buildadmin.com/)

## 博客推荐
---
体验vite + vue3 + ts搭建项目的全过程：[https://juejin.cn/post/6973288527802925092#heading-11](https://juejin.cn/post/6973288527802925092#heading-11)

Vite + Vue3 的 ESlint 和 Prettier 基礎配置：[https://stark920.github.io/2022/04/27/vue3-2-eslint/](https://stark920.github.io/2022/04/27/vue3-2-eslint/)

配置使用vite 脚手架创建的项目的eslint：[https://juejin.cn/post/7097565293995622414](https://juejin.cn/post/7097565293995622414)

Vite推荐插件：[https://juejin.cn/post/6998059092497399845](https://juejin.cn/post/6998059092497399845)

Vue3 Element-Plus 动态更换主题简单实现：[https://juejin.cn/post/7024025899813044232](https://juejin.cn/post/7024025899813044232)

## 官方资料
---
MDN：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)

内置对象（Array）：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global\_Objects/Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

内置对象（Object）：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global\_Objects/Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

内置对象（Promise）：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global\_Objects/Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

CSS（盒模型）：[https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building\_blocks/The\_box\_model](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)

CSS （选择器）：[https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building\_blocks/Selectors](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)

CSS （布局）：[https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS\_layout](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout)

Sass：[https://www.sass.hk/docs/](https://www.sass.hk/docs/)

Vue Awesome： [https://github.com/vitejs/awesome-vite#plugins](https://github.com/vitejs/awesome-vite#plugins)

Pinia：[https://pinia.web3doc.top/introduction.html](https://pinia.web3doc.top/introduction.html)

Eslint：[http://eslint.cn/docs/user-guide/getting-started](http://eslint.cn/docs/user-guide/getting-started)

Prettier：[https://www.prettier.cn/docs/install.html](https://www.prettier.cn/docs/install.html)

页面线性进度条：[https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress)

Vue CLI：[https://cli.vuejs.org/zh/guide/](https://cli.vuejs.org/zh/guide/)

Vue Loader：[https://vue-loader.vuejs.org/zh/](https://vue-loader.vuejs.org/zh/)

Ant Design Vue：[https://next.antdv.com/docs/vue/introduce-cn](https://next.antdv.com/docs/vue/introduce-cn)

Vuex ：[https://next.vuex.vuejs.org/zh/index.html](https://next.vuex.vuejs.org/zh/index.html)

