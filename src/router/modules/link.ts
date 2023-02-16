import { AppRouteRecordRaw } from '/#/route';
import { LAYOUT } from '../constant';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'link',
    path: '/link',
    component: LAYOUT,
    redirect: '/link/index',
    meta: {
      title: t('router.link.link'),
      icon: 'akar-icons:link-chain',
      orderNo: 10
    },
    children: [
      {
        name: 'link_index',
        path: 'index',
        component: () => import('/@/views/link/index.vue'),
        meta: {
          title: t('router.link.index'),
          icon: 'carbon:application-web'
        }
      },
      // {
      //   name: "link_element_plus",
      //   path: "element-plus",
      //   component: FRAME_VIEW,
      //   meta: {
      //     title: "Element Plus",
      //     icon: "ep:element-plus",
      //     frameSrc : "https://element-plus.org/zh-CN/"
      //   }
      // },
      // {
      //   name: "link_vue",
      //   path: "vue3",
      //   component: FRAME_VIEW,
      //   meta: {
      //     title: "Vue3",
      //     icon: "akar-icons:vue-fill",
      //     frameSrc : "https://staging-cn.vuejs.org/guide/introduction.html"
      //   }
      // },

      // {
      //   name: "link_css",
      //   path: "css3",
      //   component: FRAME_VIEW,
      //   meta: {
      //     title: "CSS3速查表",
      //     icon: "akar-icons:css-fill",
      //     frameSrc : "http://www.w3chtml.com/css3/"
      //   }
      // },
      {
        name: 'link_vite',
        path: 'vite',
        meta: {
          title: t('router.link.vite'),
          icon: 'file-icons:vite',

          link: 'https://www.vitejs.net/'
        }
      },
      {
        name: 'link_mdn',
        path: 'mdn',
        meta: {
          title: t('router.link.mdn'),
          icon: 'cib:mozilla-firefox',

          link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'
        }
      }
    ]
  }
] as AppRouteRecordRaw[];
