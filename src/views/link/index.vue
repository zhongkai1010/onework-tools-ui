<template>
  <page-view class="container">
    <template v-for="(group, x) in data" :key="x">
      <h1>{{ group.text }}</h1>
      <hr />
      <ul>
        <li v-for="(link, y) in group.links" :key="y">
          <span> {{ link.text }}</span>
          <a :href="link.link" target="_blank">{{ link.link }}</a>
        </li>
      </ul>
    </template>
  </page-view>
</template>

<script setup lang="ts">
  const data = [
    {
      text: '常用链接',
      links: [
        {
          text: 'Element Plus',
          link: 'https://element-plus.org/zh-CN/'
        },
        {
          text: 'Element Plus主题切换',
          link: 'https://element-plus.github.io/theme-chalk-preview/#/zh-CN'
        },
        {
          text: 'Vue3',
          link: 'https://staging-cn.vuejs.org/guide/introduction.html'
        },
        {
          text: 'Vue Router',
          link: 'https://router.vuejs.org/zh/installation.html'
        },
        {
          text: 'Vite',
          link: 'https://cn.vitejs.dev/guide/'
        },
        {
          text: 'vue-admin-beautiful',
          link: 'https://vue-admin-beautiful.com/'
        },
        {
          text: '色卡',
          link: 'https://www.colorhunt.co/'
        },
        {
          text: 'CSS3速查表',
          link: 'http://www.w3chtml.com/css3/'
        }
      ]
    },
    {
      text: '辅助组件',
      links: [
        {
          text: 'css-color-function',
          link: 'https://element-plus.org/zh-CN/'
        },
        {
          text: 'rgb-hex',
          link: 'https://element-plus.org/zh-CN/'
        }
      ]
    },
    {
      text: '开源项目',
      links: [
        {
          text: 'vue-pure-admin',
          link: 'https://github.com/xiaoxian521/vue-pure-admin'
        },
        {
          text: 'vue-vben-admin',
          link: 'https://github.com/vbenjs/vue-vben-admin'
        },
        {
          text: 'vue-element-admin',
          link: 'https://panjiachen.github.io/vue-element-admin-site/zh/'
        },
        {
          text: 'vue3-composition-admin',
          link: 'https://github.com/RainManGO/vue3-composition-admin'
        }
      ]
    },
    {
      text: '博客推荐',
      links: [
        {
          text: '体验vite + vue3 + ts搭建项目的全过程',
          link: 'https://element-plus.org/zh-CN/'
        },
        {
          text: 'Vite + Vue3 的 ESlint 和 Prettier 基礎配置',
          link: 'https://element-plus.org/zh-CN/'
        },
        {
          text: '配置使用vite 脚手架创建的项目的eslint',
          link: 'https://juejin.cn/post/7097565293995622414'
        },
        {
          text: 'Vite推荐插件',
          link: 'https://juejin.cn/post/6998059092497399845'
        },
        {
          text: 'Vue3 Element-Plus 动态更换主题简单实现',
          link: 'https://juejin.cn/post/7024025899813044232'
        }
      ]
    },
    {
      text: '官方资料',
      links: [
        {
          text: 'MDN',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'
        },
        {
          text: '内置对象（Array）',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array'
        },
        {
          text: '内置对象（Object）',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object'
        },
        {
          text: '内置对象（Promise）',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise'
        },
        {
          text: 'CSS（盒模型）',
          link: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model'
        },
        {
          text: 'CSS （选择器）',
          link: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors'
        },
        {
          text: 'CSS （布局）',
          link: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout'
        },
        {
          text: 'Sass',
          link: 'https://www.sass.hk/docs/'
        },
        {
          text: 'Vue Awesome',
          link: 'https://github.com/vitejs/awesome-'
        },
        {
          text: 'Pinia',
          link: 'https://pinia.web3doc.top/introduction.html'
        },
        {
          text: 'Eslint',
          link: 'http://eslint.cn/docs/user-guide/getting-started'
        },
        {
          text: 'Prettier',
          link: 'https://www.prettier.cn/docs/install.html'
        },
        {
          text: '页面线性进度条',
          link: 'https://github.com/rstacruz/nprogress'
        },
        {
          text: 'Vue CLI',
          link: 'https://cli.vuejs.org/zh/guide/'
        },
        {
          text: 'Vue Loader',
          link: 'https://vue-loader.vuejs.org/zh/'
        },
        {
          text: 'Ant Design Vue',
          link: 'https://next.antdv.com/docs/vue/introduce-cn'
        },
        {
          text: 'Vuex',
          link: 'https://next.vuex.vuejs.org/zh/index.html'
        }
      ]
    }
  ];
</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
    color: rgb(7, 20, 42);
    font-size: 12px;

    h1 {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: large;

      &:first-child {
        margin-top: 0px;
      }
    }

    hr {
      margin: 0 auto;
      border: 0;
      height: 1px;
      background: #333;
      background-image: linear-gradient(to right, rgb(68, 138, 255), #333, rgb(9, 206, 91));
    }

    ul {
      margin: 10px;

      li {
        line-height: 40px;
      }
    }

    span {
      display: inline-block;
      text-align: left;
      width: 250px;
      word-wrap: normal;
    }

    a {
      color: rgb(68, 138, 255);
      text-decoration: underline solid rgb(68, 138, 255);
    }
  }
</style>
