import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';

import { GetConfigResult, GetUserInfoResult, LoginPwdResult } from '/@/api/model/common';
import { Result } from '/#/axios';
import { DEFAULT_TITLE } from '/@/settings/constant';

export default [
  {
    url: '/api/getConfig',
    method: 'get',
    timeout: 2000,
    response: (): Result<GetConfigResult> => {
      return {
        code: 0,
        message: Random.string(5, 10),
        result: {
          title: DEFAULT_TITLE,
          version: '0.0.0.1',
          sid: Random.guid()
        }
      };
    }
  },
  {
    url: '/api/login/pwd',
    method: 'post',
    timeout: 2000,
    // statusCode: 500,
    response: (): Result<LoginPwdResult> => {
      return {
        code: 0,
        // message: Random.ctitle(8, 10),
        result: {
          token: Random.guid()
        }
      };
    }
  },
  {
    url: '/api/user/logout',
    method: 'post',
    timeout: 2000,
    response: (): Result<any> => {
      return {
        code: 0,
        message: Random.string(5, 10)
      };
    }
  },
  {
    url: '/api/user/getUserInfo',
    method: 'get',
    timeout: 2000,
    response: (): Result<GetUserInfoResult> => {
      return {
        code: 0,
        // message: Random.string(5, 10),
        result: {
          defaultName: Random.cname(),
          avatar: Random.pick(['/public/avatar01.png', '/public/avatar02.png']),
          permission: [
            'page_dashboard',
            'page_dashboard_analysis',
            'page_dashboard_monitor',
            'page_dashboard_workplace',
            'page_demo',
            'page_demo_layout',
            'page_demo_null',
            'page_demo_blank',
            'page_demo_error',
            'page_demo_table',
            'page_demo_page_standard',
            'page_demo_page_left_right',
            'page_demo_page_up_down',
            'page_demo_list',
            'page_demo_list_dynamic',
            'page_demo_list_card',
            'page_demo_message',
            'page_demo_axios',
            'page_demo_edit',
            'page_demo_form',
            'page_demo_form_complex',
            'page_demo_form_step',
            'page_system',
            'page_system_page',
            'page_system_user',
            'page_system_role',
            'page_system_menu',
            'page_system_department',
            'page_system_post',
            'page_system_dictionary',
            'page_system_dictionary_single',
            'page_system_dictionary_multiple',
            'page_system_config',
            'page_system_notice',
            'page_system_log',
            'page_system_log_operate',
            'page_system_log_login',
            'page_process',
            'page_flow_management',
            'page_flow_design',
            'page_process_monitor',
            'page_flow_expression',
            'page_flow_form',
            'page_monitor',
            'page_monitor_user',
            'page_monitor_task',
            'page_monitor_data',
            'page_monitor_service',
            'page_monitor_cache',
            'page_monitor_list',
            'page_platform',
            'page_platform_application',
            'page_operation',
            'page_operation_database',
            'page_operation_file',
            'page_operation_interface',
            'page_operation_message',
            'page_operation_message_log',
            'page_operation_message_template',
            'page_tool',
            'page_tool_model',
            'page_tool_translate',
            'page_tool_generator',
            'page_tool_page',
            'page_other',
            'page_other_flow',
            'page_other_icon',
            'page_other_print',
            'page_other_time',
            'page_other_trace',
            'page_other_drag',
            'page_other_video',
            'page_other_css',
            'page_other_flex',
            'page_other_login',
            'page_other_execl',
            'page_link',
            'page_link_index',
            'page_link_vite',
            'page_link_mdn',
            'page_test'
          ],
          menus: [
            {
              order: 1,
              name: 'dashboard',
              title: '工作台',
              path: '/dashboard',
              paths: ['/dashboard'],
              icon: 'ep:platform',
              redirect: '/dashboard/analysis',
              children: [
                {
                  name: 'dashboard_analysis',
                  title: '分析页',
                  path: '/dashboard/analysis',
                  paths: ['/dashboard', '/dashboard/analysis'],
                  parentPath: '/dashboard',
                  icon: 'ep:platform'
                },
                {
                  name: 'dashboard_monitor',
                  title: '监控页',
                  path: '/dashboard/monitor',
                  paths: ['/dashboard', '/dashboard/monitor'],
                  parentPath: '/dashboard',
                  icon: 'ep:platform'
                },
                {
                  name: 'dashboard_workplace',
                  title: '工作台',
                  path: '/dashboard/workplace',
                  paths: ['/dashboard', '/dashboard/workplace'],
                  parentPath: '/dashboard',
                  icon: 'ep:platform'
                }
              ]
            },
            {
              name: 'dashboard_analysis',
              title: '分析页',
              path: '/dashboard/analysis',
              paths: ['/dashboard', '/dashboard/analysis'],
              parentPath: '/dashboard',
              icon: 'ep:platform'
            },
            {
              name: 'dashboard_monitor',
              title: '监控页',
              path: '/dashboard/monitor',
              paths: ['/dashboard', '/dashboard/monitor'],
              parentPath: '/dashboard',
              icon: 'ep:platform'
            },
            {
              name: 'dashboard_workplace',
              title: '工作台',
              path: '/dashboard/workplace',
              paths: ['/dashboard', '/dashboard/workplace'],
              parentPath: '/dashboard',
              icon: 'ep:platform'
            },
            {
              order: 2,
              name: 'demo',
              title: '示例',
              path: '/demo',
              paths: ['/demo'],
              icon: 'carbon:calendar-tools',
              redirect: '/demo/table',
              children: [
                {
                  name: 'demo_layout',
                  title: '栅栏布局',
                  path: '/demo/layout',
                  paths: ['/demo', '/demo/layout'],
                  parentPath: '/demo',
                  icon: 'bi:layout-wtf'
                },
                {
                  name: 'demo_null',
                  title: '页面容器',
                  path: '/demo/null',
                  paths: ['/demo', '/demo/null'],
                  parentPath: '/demo',
                  icon: 'fluent:border-none-24-filled'
                },
                {
                  name: 'demo_blank',
                  title: '空白页面',
                  path: '/demo/blank',
                  paths: ['/demo', '/demo/blank'],
                  parentPath: '/demo',
                  icon: 'bx:file-blank'
                },
                {
                  name: 'demo_error',
                  title: '错误页面',
                  path: '/demo/error',
                  paths: ['/demo', '/demo/error'],
                  parentPath: '/demo',
                  icon: 'akar-icons:chat-error'
                },
                {
                  name: 'demo_table',
                  title: '布局示例',
                  path: '/demo/page',
                  paths: ['/demo', '/demo/page'],
                  parentPath: '/demo',
                  icon: 'ant-design:table-outlined',
                  redirect: '/demo/page/standard',
                  children: [
                    {
                      name: 'demo_page_standard',
                      title: '卡片布局',
                      path: '/demo/page/standard',
                      paths: ['/demo', '/demo/page', '/demo/page/standard'],
                      parentPath: '/demo/page',
                      icon: 'codicon:layout-centered'
                    },
                    {
                      name: 'demo_page_left_right',
                      title: '导航布局',
                      path: '/demo/page/left-right',
                      paths: ['/demo', '/demo/page', '/demo/page/left-right'],
                      parentPath: '/demo/page',
                      icon: 'icon-park-solid:horizontally-centered'
                    },
                    {
                      name: 'demo_page_up_down',
                      title: '面板布局',
                      path: '/demo/page/up-down',
                      paths: ['/demo', '/demo/page', '/demo/page/up-down'],
                      parentPath: '/demo/page',
                      icon: 'icon-park-solid:vertically-centered'
                    }
                  ]
                },
                {
                  name: 'demo_list',
                  title: '列表',
                  path: '/demo/list',
                  paths: ['/demo', '/demo/list'],
                  parentPath: '/demo',
                  icon: 'ant-design:unordered-list-outlined',
                  children: [
                    {
                      name: 'demo_list_dynamic',
                      title: '动态配置表格',
                      path: '/demo/list/dynamic',
                      paths: ['/demo', '/demo/list', '/demo/list/dynamic'],
                      parentPath: '/demo/list',
                      icon: 'carbon:data-table-reference'
                    },
                    {
                      name: 'demo_list_card',
                      title: '卡片布局',
                      path: '/demo/list/card',
                      paths: ['/demo', '/demo/list', '/demo/list/card'],
                      parentPath: '/demo/list',
                      icon: 'dashicons:table-row-after'
                    }
                  ]
                },
                {
                  name: 'demo_message',
                  title: '消息提示',
                  path: '/demo/message',
                  paths: ['/demo', '/demo/message'],
                  parentPath: '/demo',
                  icon: 'bi:credit-card'
                },
                {
                  name: 'demo_axios',
                  title: '异步请求',
                  path: '/demo/axios',
                  paths: ['/demo', '/demo/axios'],
                  parentPath: '/demo',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'demo_edit',
                  title: '编辑器',
                  path: '/demo/edit',
                  paths: ['/demo', '/demo/edit'],
                  parentPath: '/demo',
                  icon: 'akar-icons:edit'
                },
                {
                  name: 'demo_form',
                  title: '表单',
                  path: '/demo/form',
                  paths: ['/demo', '/demo/form'],
                  parentPath: '/demo',
                  icon: 'clarity:form-line',
                  redirect: '/demo/form/complex',
                  children: [
                    {
                      name: 'demo_form_complex',
                      title: '综合表单',
                      path: '/demo/form/complex',
                      paths: ['/demo', '/demo/form', '/demo/form/complex'],
                      parentPath: '/demo/form',
                      icon: 'ant-design:form-outlined'
                    },
                    {
                      name: 'demo_form_step',
                      title: '分步表单',
                      path: '/demo/form/step',
                      paths: ['/demo', '/demo/form', '/demo/form/step'],
                      parentPath: '/demo/form',
                      icon: 'fluent:form-20-regular'
                    }
                  ]
                }
              ]
            },
            {
              name: 'demo_layout',
              title: '栅栏布局',
              path: '/demo/layout',
              paths: ['/demo', '/demo/layout'],
              parentPath: '/demo',
              icon: 'bi:layout-wtf'
            },
            {
              name: 'demo_null',
              title: '页面容器',
              path: '/demo/null',
              paths: ['/demo', '/demo/null'],
              parentPath: '/demo',
              icon: 'fluent:border-none-24-filled'
            },
            {
              name: 'demo_blank',
              title: '空白页面',
              path: '/demo/blank',
              paths: ['/demo', '/demo/blank'],
              parentPath: '/demo',
              icon: 'bx:file-blank'
            },
            {
              name: 'demo_error',
              title: '错误页面',
              path: '/demo/error',
              paths: ['/demo', '/demo/error'],
              parentPath: '/demo',
              icon: 'akar-icons:chat-error'
            },
            {
              name: 'demo_table',
              title: '布局示例',
              path: '/demo/page',
              paths: ['/demo', '/demo/page'],
              parentPath: '/demo',
              icon: 'ant-design:table-outlined',
              redirect: '/demo/page/standard',
              children: [
                {
                  name: 'demo_page_standard',
                  title: '卡片布局',
                  path: '/demo/page/standard',
                  paths: ['/demo', '/demo/page', '/demo/page/standard'],
                  parentPath: '/demo/page',
                  icon: 'codicon:layout-centered'
                },
                {
                  name: 'demo_page_left_right',
                  title: '导航布局',
                  path: '/demo/page/left-right',
                  paths: ['/demo', '/demo/page', '/demo/page/left-right'],
                  parentPath: '/demo/page',
                  icon: 'icon-park-solid:horizontally-centered'
                },
                {
                  name: 'demo_page_up_down',
                  title: '面板布局',
                  path: '/demo/page/up-down',
                  paths: ['/demo', '/demo/page', '/demo/page/up-down'],
                  parentPath: '/demo/page',
                  icon: 'icon-park-solid:vertically-centered'
                }
              ]
            },
            {
              name: 'demo_page_standard',
              title: '卡片布局',
              path: '/demo/page/standard',
              paths: ['/demo', '/demo/page', '/demo/page/standard'],
              parentPath: '/demo/page',
              icon: 'codicon:layout-centered'
            },
            {
              name: 'demo_page_left_right',
              title: '导航布局',
              path: '/demo/page/left-right',
              paths: ['/demo', '/demo/page', '/demo/page/left-right'],
              parentPath: '/demo/page',
              icon: 'icon-park-solid:horizontally-centered'
            },
            {
              name: 'demo_page_up_down',
              title: '面板布局',
              path: '/demo/page/up-down',
              paths: ['/demo', '/demo/page', '/demo/page/up-down'],
              parentPath: '/demo/page',
              icon: 'icon-park-solid:vertically-centered'
            },
            {
              name: 'demo_list',
              title: '列表',
              path: '/demo/list',
              paths: ['/demo', '/demo/list'],
              parentPath: '/demo',
              icon: 'ant-design:unordered-list-outlined',
              children: [
                {
                  name: 'demo_list_dynamic',
                  title: '动态配置表格',
                  path: '/demo/list/dynamic',
                  paths: ['/demo', '/demo/list', '/demo/list/dynamic'],
                  parentPath: '/demo/list',
                  icon: 'carbon:data-table-reference'
                },
                {
                  name: 'demo_list_card',
                  title: '卡片布局',
                  path: '/demo/list/card',
                  paths: ['/demo', '/demo/list', '/demo/list/card'],
                  parentPath: '/demo/list',
                  icon: 'dashicons:table-row-after'
                }
              ]
            },
            {
              name: 'demo_list_dynamic',
              title: '动态配置表格',
              path: '/demo/list/dynamic',
              paths: ['/demo', '/demo/list', '/demo/list/dynamic'],
              parentPath: '/demo/list',
              icon: 'carbon:data-table-reference'
            },
            {
              name: 'demo_list_card',
              title: '卡片布局',
              path: '/demo/list/card',
              paths: ['/demo', '/demo/list', '/demo/list/card'],
              parentPath: '/demo/list',
              icon: 'dashicons:table-row-after'
            },
            {
              name: 'demo_message',
              title: '消息提示',
              path: '/demo/message',
              paths: ['/demo', '/demo/message'],
              parentPath: '/demo',
              icon: 'bi:credit-card'
            },
            {
              name: 'demo_axios',
              title: '异步请求',
              path: '/demo/axios',
              paths: ['/demo', '/demo/axios'],
              parentPath: '/demo',
              icon: 'akar-icons:file'
            },
            {
              name: 'demo_edit',
              title: '编辑器',
              path: '/demo/edit',
              paths: ['/demo', '/demo/edit'],
              parentPath: '/demo',
              icon: 'akar-icons:edit'
            },
            {
              name: 'demo_form',
              title: '表单',
              path: '/demo/form',
              paths: ['/demo', '/demo/form'],
              parentPath: '/demo',
              icon: 'clarity:form-line',
              redirect: '/demo/form/complex',
              children: [
                {
                  name: 'demo_form_complex',
                  title: '综合表单',
                  path: '/demo/form/complex',
                  paths: ['/demo', '/demo/form', '/demo/form/complex'],
                  parentPath: '/demo/form',
                  icon: 'ant-design:form-outlined'
                },
                {
                  name: 'demo_form_step',
                  title: '分步表单',
                  path: '/demo/form/step',
                  paths: ['/demo', '/demo/form', '/demo/form/step'],
                  parentPath: '/demo/form',
                  icon: 'fluent:form-20-regular'
                }
              ]
            },
            {
              name: 'demo_form_complex',
              title: '综合表单',
              path: '/demo/form/complex',
              paths: ['/demo', '/demo/form', '/demo/form/complex'],
              parentPath: '/demo/form',
              icon: 'ant-design:form-outlined'
            },
            {
              name: 'demo_form_step',
              title: '分步表单',
              path: '/demo/form/step',
              paths: ['/demo', '/demo/form', '/demo/form/step'],
              parentPath: '/demo/form',
              icon: 'fluent:form-20-regular'
            },
            {
              order: 2,
              name: 'system',
              title: '系统',
              path: '/system',
              paths: ['/system'],
              icon: 'ic:sharp-manage-accounts',
              redirect: '/system/role',
              children: [
                {
                  name: 'system_page',
                  title: '页面管理',
                  path: '/system/page',
                  paths: ['/system', '/system/page'],
                  parentPath: '/system',
                  icon: 'iconoir:journal-page'
                },
                {
                  name: 'system_user',
                  title: '用户管理',
                  path: '/system/user',
                  paths: ['/system', '/system/user'],
                  parentPath: '/system',
                  icon: 'ant-design:user-outlined',
                  cache: true
                },
                {
                  name: 'system_role',
                  title: '角色管理',
                  path: '/system/role',
                  paths: ['/system', '/system/role'],
                  parentPath: '/system',
                  icon: 'carbon:user-role'
                },
                {
                  name: 'system_menu',
                  title: '菜单管理',
                  path: '/system/menu',
                  paths: ['/system', '/system/menu'],
                  parentPath: '/system',
                  icon: 'ant-design:menu-outlined'
                },
                {
                  name: 'system_department',
                  title: '部门管理',
                  path: '/system/department',
                  paths: ['/system', '/system/department'],
                  parentPath: '/system',
                  icon: 'bi:postcard'
                },
                {
                  name: 'system_post',
                  title: '岗位管理',
                  path: '/system/post',
                  paths: ['/system', '/system/post'],
                  parentPath: '/system',
                  icon: 'eos-icons:job'
                },
                {
                  name: 'system_dictionary',
                  title: '数据字典',
                  path: '/system/dictionary',
                  paths: ['/system', '/system/dictionary'],
                  parentPath: '/system',
                  icon: 'arcticons:dictionary',
                  redirect: '/system/dictionary/single',
                  children: [
                    {
                      name: 'system_dictionary_single',
                      title: '单项字典',
                      path: '/system/dictionary/single',
                      paths: ['/system', '/system/dictionary', '/system/dictionary/single'],
                      parentPath: '/system/dictionary',
                      icon: 'arcticons:dictionary'
                    },
                    {
                      name: 'system_dictionary_multiple',
                      title: '多项字典',
                      path: '/system/dictionary/multiple',
                      paths: ['/system', '/system/dictionary', '/system/dictionary/multiple'],
                      parentPath: '/system/dictionary',
                      icon: 'arcticons:dictionary'
                    }
                  ]
                },
                {
                  name: 'system_config',
                  title: '参数设置',
                  path: '/system/config',
                  paths: ['/system', '/system/config'],
                  parentPath: '/system',
                  icon: 'codicon:symbol-parameter'
                },
                {
                  name: 'system_notice',
                  title: '通知公告',
                  path: '/system/notice',
                  paths: ['/system', '/system/notice'],
                  parentPath: '/system',
                  icon: 'fe:notice-active'
                },
                {
                  name: 'system_log',
                  title: '系统',
                  path: '/system/log',
                  paths: ['/system', '/system/log'],
                  parentPath: '/system',
                  icon: 'codicon:symbol-parameter',
                  redirect: '/system/log/operate',
                  children: [
                    {
                      name: 'system_log_operate',
                      title: '操作日志',
                      path: '/system/log/operate',
                      paths: ['/system', '/system/log', '/system/log/operate'],
                      parentPath: '/system/log',
                      icon: 'radix-icons:activity-log'
                    },
                    {
                      name: 'system_log_login',
                      title: '登录日志',
                      path: '/system/log/login',
                      paths: ['/system', '/system/log', '/system/log/login'],
                      parentPath: '/system/log',
                      icon: 'ant-design:login-outlined'
                    }
                  ]
                }
              ]
            },
            {
              name: 'system_page',
              title: '页面管理',
              path: '/system/page',
              paths: ['/system', '/system/page'],
              parentPath: '/system',
              icon: 'iconoir:journal-page'
            },
            {
              name: 'system_user',
              title: '用户管理',
              path: '/system/user',
              paths: ['/system', '/system/user'],
              parentPath: '/system',
              icon: 'ant-design:user-outlined',
              cache: true
            },
            {
              name: 'system_role',
              title: '角色管理',
              path: '/system/role',
              paths: ['/system', '/system/role'],
              parentPath: '/system',
              icon: 'carbon:user-role'
            },
            {
              name: 'system_menu',
              title: '菜单管理',
              path: '/system/menu',
              paths: ['/system', '/system/menu'],
              parentPath: '/system',
              icon: 'ant-design:menu-outlined'
            },
            {
              name: 'system_department',
              title: '部门管理',
              path: '/system/department',
              paths: ['/system', '/system/department'],
              parentPath: '/system',
              icon: 'bi:postcard'
            },
            {
              name: 'system_post',
              title: '岗位管理',
              path: '/system/post',
              paths: ['/system', '/system/post'],
              parentPath: '/system',
              icon: 'eos-icons:job'
            },
            {
              name: 'system_dictionary',
              title: '数据字典',
              path: '/system/dictionary',
              paths: ['/system', '/system/dictionary'],
              parentPath: '/system',
              icon: 'arcticons:dictionary',
              redirect: '/system/dictionary/single',
              children: [
                {
                  name: 'system_dictionary_single',
                  title: '单项字典',
                  path: '/system/dictionary/single',
                  paths: ['/system', '/system/dictionary', '/system/dictionary/single'],
                  parentPath: '/system/dictionary',
                  icon: 'arcticons:dictionary'
                },
                {
                  name: 'system_dictionary_multiple',
                  title: '多项字典',
                  path: '/system/dictionary/multiple',
                  paths: ['/system', '/system/dictionary', '/system/dictionary/multiple'],
                  parentPath: '/system/dictionary',
                  icon: 'arcticons:dictionary'
                }
              ]
            },
            {
              name: 'system_dictionary_single',
              title: '单项字典',
              path: '/system/dictionary/single',
              paths: ['/system', '/system/dictionary', '/system/dictionary/single'],
              parentPath: '/system/dictionary',
              icon: 'arcticons:dictionary'
            },
            {
              name: 'system_dictionary_multiple',
              title: '多项字典',
              path: '/system/dictionary/multiple',
              paths: ['/system', '/system/dictionary', '/system/dictionary/multiple'],
              parentPath: '/system/dictionary',
              icon: 'arcticons:dictionary'
            },
            {
              name: 'system_config',
              title: '参数设置',
              path: '/system/config',
              paths: ['/system', '/system/config'],
              parentPath: '/system',
              icon: 'codicon:symbol-parameter'
            },
            {
              name: 'system_notice',
              title: '通知公告',
              path: '/system/notice',
              paths: ['/system', '/system/notice'],
              parentPath: '/system',
              icon: 'fe:notice-active'
            },
            {
              name: 'system_log',
              title: '系统',
              path: '/system/log',
              paths: ['/system', '/system/log'],
              parentPath: '/system',
              icon: 'codicon:symbol-parameter',
              redirect: '/system/log/operate',
              children: [
                {
                  name: 'system_log_operate',
                  title: '操作日志',
                  path: '/system/log/operate',
                  paths: ['/system', '/system/log', '/system/log/operate'],
                  parentPath: '/system/log',
                  icon: 'radix-icons:activity-log'
                },
                {
                  name: 'system_log_login',
                  title: '登录日志',
                  path: '/system/log/login',
                  paths: ['/system', '/system/log', '/system/log/login'],
                  parentPath: '/system/log',
                  icon: 'ant-design:login-outlined'
                }
              ]
            },
            {
              name: 'system_log_operate',
              title: '操作日志',
              path: '/system/log/operate',
              paths: ['/system', '/system/log', '/system/log/operate'],
              parentPath: '/system/log',
              icon: 'radix-icons:activity-log'
            },
            {
              name: 'system_log_login',
              title: '登录日志',
              path: '/system/log/login',
              paths: ['/system', '/system/log', '/system/log/login'],
              parentPath: '/system/log',
              icon: 'ant-design:login-outlined'
            },
            {
              order: 3,
              name: 'process',
              title: '流程',
              path: '/process',
              paths: ['/process'],
              icon: 'clarity:flow-chart-line',
              redirect: '/process/management',
              children: [
                {
                  name: 'flow_management',
                  title: '流程管理',
                  path: '/process/management',
                  paths: ['/process', '/process/management'],
                  parentPath: '/process',
                  icon: 'ant-design:ant-design-outlined'
                },
                {
                  name: 'flow_design',
                  title: '流程设计',
                  path: '/process/design',
                  paths: ['/process', '/process/design'],
                  parentPath: '/process',
                  icon: 'ant-design:ant-design-outlined'
                },
                {
                  name: 'process_monitor',
                  title: '流程监听',
                  path: '/process/monitor',
                  paths: ['/process', '/process/monitor'],
                  parentPath: '/process',
                  icon: 'ant-design:monitor-outlined'
                },
                {
                  name: 'flow_expression',
                  title: '表达式管理',
                  path: '/process/expression',
                  paths: ['/process', '/process/expression'],
                  parentPath: '/process',
                  icon: 'ooui:search-regular-expression'
                },
                {
                  name: 'flow_form',
                  title: '表单管理',
                  path: '/process/form',
                  paths: ['/process', '/process/form'],
                  parentPath: '/process',
                  icon: 'ant-design:form-outlined'
                }
              ]
            },
            {
              name: 'flow_management',
              title: '流程管理',
              path: '/process/management',
              paths: ['/process', '/process/management'],
              parentPath: '/process',
              icon: 'ant-design:ant-design-outlined'
            },
            {
              name: 'flow_design',
              title: '流程设计',
              path: '/process/design',
              paths: ['/process', '/process/design'],
              parentPath: '/process',
              icon: 'ant-design:ant-design-outlined'
            },
            {
              name: 'process_monitor',
              title: '流程监听',
              path: '/process/monitor',
              paths: ['/process', '/process/monitor'],
              parentPath: '/process',
              icon: 'ant-design:monitor-outlined'
            },
            {
              name: 'flow_expression',
              title: '表达式管理',
              path: '/process/expression',
              paths: ['/process', '/process/expression'],
              parentPath: '/process',
              icon: 'ooui:search-regular-expression'
            },
            {
              name: 'flow_form',
              title: '表单管理',
              path: '/process/form',
              paths: ['/process', '/process/form'],
              parentPath: '/process',
              icon: 'ant-design:form-outlined'
            },
            {
              order: 4,
              name: 'monitor',
              title: '监控',
              path: '/monitor',
              paths: ['/monitor'],
              icon: 'akar-icons:file',
              redirect: '/monitor/user',
              children: [
                {
                  name: 'monitor_user',
                  title: '在线用户',
                  path: '/monitor/user',
                  paths: ['/monitor', '/monitor/user'],
                  parentPath: '/monitor',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'monitor_task',
                  title: '定时任务',
                  path: '/monitor/task',
                  paths: ['/monitor', '/monitor/task'],
                  parentPath: '/monitor',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'monitor_data',
                  title: '数据监控',
                  path: '/monitor/data',
                  paths: ['/monitor', '/monitor/data'],
                  parentPath: '/monitor',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'monitor_service',
                  title: '服务监控',
                  path: '/monitor/service',
                  paths: ['/monitor', '/monitor/service'],
                  parentPath: '/monitor',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'monitor_cache',
                  title: '缓存监控',
                  path: '/monitor/cache',
                  paths: ['/monitor', '/monitor/cache'],
                  parentPath: '/monitor',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'monitor_list',
                  title: '缓存列表',
                  path: '/monitor/list',
                  paths: ['/monitor', '/monitor/list'],
                  parentPath: '/monitor',
                  icon: 'akar-icons:file'
                }
              ]
            },
            {
              name: 'monitor_user',
              title: '在线用户',
              path: '/monitor/user',
              paths: ['/monitor', '/monitor/user'],
              parentPath: '/monitor',
              icon: 'akar-icons:file'
            },
            {
              name: 'monitor_task',
              title: '定时任务',
              path: '/monitor/task',
              paths: ['/monitor', '/monitor/task'],
              parentPath: '/monitor',
              icon: 'akar-icons:file'
            },
            {
              name: 'monitor_data',
              title: '数据监控',
              path: '/monitor/data',
              paths: ['/monitor', '/monitor/data'],
              parentPath: '/monitor',
              icon: 'akar-icons:file'
            },
            {
              name: 'monitor_service',
              title: '服务监控',
              path: '/monitor/service',
              paths: ['/monitor', '/monitor/service'],
              parentPath: '/monitor',
              icon: 'akar-icons:file'
            },
            {
              name: 'monitor_cache',
              title: '缓存监控',
              path: '/monitor/cache',
              paths: ['/monitor', '/monitor/cache'],
              parentPath: '/monitor',
              icon: 'akar-icons:file'
            },
            {
              name: 'monitor_list',
              title: '缓存列表',
              path: '/monitor/list',
              paths: ['/monitor', '/monitor/list'],
              parentPath: '/monitor',
              icon: 'akar-icons:file'
            },
            {
              order: 5,
              name: 'platform',
              title: '平台',
              path: '/platform',
              paths: ['/platform'],
              icon: 'ep:platform',
              redirect: '/platform/application',
              children: [
                {
                  name: 'platform_application',
                  title: '应用管理',
                  path: '/platform/application',
                  paths: ['/platform', '/platform/application'],
                  parentPath: '/platform',
                  icon: 'ep:platform'
                }
              ]
            },
            {
              name: 'platform_application',
              title: '应用管理',
              path: '/platform/application',
              paths: ['/platform', '/platform/application'],
              parentPath: '/platform',
              icon: 'ep:platform'
            },
            {
              order: 6,
              name: 'operation',
              title: '运维',
              path: '/operation',
              paths: ['/operation'],
              icon: 'akar-icons:file',
              redirect: '/operation/database',
              children: [
                {
                  name: 'operation_database',
                  title: '数据库管理',
                  path: '/operation/database',
                  paths: ['/operation', '/operation/database'],
                  parentPath: '/operation',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'operation_file',
                  title: '文件附件',
                  path: '/operation/file',
                  paths: ['/operation', '/operation/file'],
                  parentPath: '/operation',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'operation_interface',
                  title: '系统接口',
                  path: '/operation/interface',
                  paths: ['/operation', '/operation/interface'],
                  parentPath: '/operation',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'operation_message',
                  title: '消息管理',
                  path: '/operation/message',
                  paths: ['/operation', '/operation/message'],
                  parentPath: '/operation',
                  icon: 'akar-icons:file',
                  redirect: '/operation/message/log',
                  children: [
                    {
                      name: 'operation_message_log',
                      title: '消息记录',
                      path: '/operation/message/log',
                      paths: ['/operation', '/operation/message', '/operation/message/log'],
                      parentPath: '/operation/message',
                      icon: 'akar-icons:file'
                    },
                    {
                      name: 'operation_message_template',
                      title: '消息模板',
                      path: '/operation/message/template',
                      paths: ['/operation', '/operation/message', '/operation/message/template'],
                      parentPath: '/operation/message',
                      icon: 'akar-icons:file'
                    }
                  ]
                }
              ]
            },
            {
              name: 'operation_database',
              title: '数据库管理',
              path: '/operation/database',
              paths: ['/operation', '/operation/database'],
              parentPath: '/operation',
              icon: 'akar-icons:file'
            },
            {
              name: 'operation_file',
              title: '文件附件',
              path: '/operation/file',
              paths: ['/operation', '/operation/file'],
              parentPath: '/operation',
              icon: 'akar-icons:file'
            },
            {
              name: 'operation_interface',
              title: '系统接口',
              path: '/operation/interface',
              paths: ['/operation', '/operation/interface'],
              parentPath: '/operation',
              icon: 'akar-icons:file'
            },
            {
              name: 'operation_message',
              title: '消息管理',
              path: '/operation/message',
              paths: ['/operation', '/operation/message'],
              parentPath: '/operation',
              icon: 'akar-icons:file',
              redirect: '/operation/message/log',
              children: [
                {
                  name: 'operation_message_log',
                  title: '消息记录',
                  path: '/operation/message/log',
                  paths: ['/operation', '/operation/message', '/operation/message/log'],
                  parentPath: '/operation/message',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'operation_message_template',
                  title: '消息模板',
                  path: '/operation/message/template',
                  paths: ['/operation', '/operation/message', '/operation/message/template'],
                  parentPath: '/operation/message',
                  icon: 'akar-icons:file'
                }
              ]
            },
            {
              name: 'operation_message_log',
              title: '消息记录',
              path: '/operation/message/log',
              paths: ['/operation', '/operation/message', '/operation/message/log'],
              parentPath: '/operation/message',
              icon: 'akar-icons:file'
            },
            {
              name: 'operation_message_template',
              title: '消息模板',
              path: '/operation/message/template',
              paths: ['/operation', '/operation/message', '/operation/message/template'],
              parentPath: '/operation/message',
              icon: 'akar-icons:file'
            },
            {
              order: 7,
              name: 'tool',
              title: '工具',
              path: '/tool',
              paths: ['/tool'],
              icon: 'carbon:tool-kit',
              redirect: '/tool/model',
              children: [
                {
                  name: 'tool_model',
                  title: '数据模型',
                  path: '/tool/model',
                  paths: ['/tool', '/tool/model'],
                  parentPath: '/tool',
                  icon: 'material-symbols:3p'
                },
                {
                  name: 'tool_translate',
                  title: '翻译记录',
                  path: '/tool/translate',
                  paths: ['/tool', '/tool/translate'],
                  parentPath: '/tool',
                  icon: 'material-symbols:3p'
                },
                {
                  name: 'tool_generator',
                  title: '代码生成',
                  path: '/tool/generator',
                  paths: ['/tool', '/tool/generator'],
                  parentPath: '/tool',
                  icon: 'material-symbols:3p'
                },
                {
                  name: 'tool_page',
                  title: '页面模板',
                  path: '/tool/page',
                  paths: ['/tool', '/tool/page'],
                  parentPath: '/tool',
                  icon: 'material-symbols:3p'
                }
              ]
            },
            {
              name: 'tool_model',
              title: '数据模型',
              path: '/tool/model',
              paths: ['/tool', '/tool/model'],
              parentPath: '/tool',
              icon: 'material-symbols:3p'
            },
            {
              name: 'tool_translate',
              title: '翻译记录',
              path: '/tool/translate',
              paths: ['/tool', '/tool/translate'],
              parentPath: '/tool',
              icon: 'material-symbols:3p'
            },
            {
              name: 'tool_generator',
              title: '代码生成',
              path: '/tool/generator',
              paths: ['/tool', '/tool/generator'],
              parentPath: '/tool',
              icon: 'material-symbols:3p'
            },
            {
              name: 'tool_page',
              title: '页面模板',
              path: '/tool/page',
              paths: ['/tool', '/tool/page'],
              parentPath: '/tool',
              icon: 'material-symbols:3p'
            },
            {
              order: 9,
              name: 'other',
              title: '其它',
              path: '/other',
              paths: ['/other'],
              icon: 'ic:baseline-devices-other',
              redirect: '/other/flow',
              children: [
                {
                  name: 'other_flow',
                  title: '工作流',
                  path: '/other/flow',
                  paths: ['/other', '/other/flow'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'other_icon',
                  title: '图标',
                  path: '/other/icon',
                  paths: ['/other', '/other/icon'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'other_print',
                  title: '打印',
                  path: '/other/print',
                  paths: ['/other', '/other/print'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'other_time',
                  title: '时间线',
                  path: '/other/time',
                  paths: ['/other', '/other/time'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'other_trace',
                  title: '动作描点',
                  path: '/other/trace',
                  paths: ['/other', '/other/trace'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'other_drag',
                  title: '拖拽',
                  path: '/other/drag',
                  paths: ['/other', '/other/drag'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'other_video',
                  title: '视频播放',
                  path: '/other/video',
                  paths: ['/other', '/other/video'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'other_css',
                  title: 'CSS动画',
                  path: '/other/css',
                  paths: ['/other', '/other/css'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'other_flex',
                  title: 'Flex布局',
                  path: '/other/flex',
                  paths: ['/other', '/other/flex'],
                  parentPath: '/other',
                  icon: 'akar-icons:file',
                  cache: true
                },
                {
                  name: 'other_login',
                  title: '第三方登录',
                  path: '/other/login',
                  paths: ['/other', '/other/login'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                },
                {
                  name: 'other_execl',
                  title: 'Execl',
                  path: '/other/execl',
                  paths: ['/other', '/other/execl'],
                  parentPath: '/other',
                  icon: 'akar-icons:file'
                }
              ]
            },
            {
              name: 'other_flow',
              title: '工作流',
              path: '/other/flow',
              paths: ['/other', '/other/flow'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              name: 'other_icon',
              title: '图标',
              path: '/other/icon',
              paths: ['/other', '/other/icon'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              name: 'other_print',
              title: '打印',
              path: '/other/print',
              paths: ['/other', '/other/print'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              name: 'other_time',
              title: '时间线',
              path: '/other/time',
              paths: ['/other', '/other/time'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              name: 'other_trace',
              title: '动作描点',
              path: '/other/trace',
              paths: ['/other', '/other/trace'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              name: 'other_drag',
              title: '拖拽',
              path: '/other/drag',
              paths: ['/other', '/other/drag'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              name: 'other_video',
              title: '视频播放',
              path: '/other/video',
              paths: ['/other', '/other/video'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              name: 'other_css',
              title: 'CSS动画',
              path: '/other/css',
              paths: ['/other', '/other/css'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              name: 'other_flex',
              title: 'Flex布局',
              path: '/other/flex',
              paths: ['/other', '/other/flex'],
              parentPath: '/other',
              icon: 'akar-icons:file',
              cache: true
            },
            {
              name: 'other_login',
              title: '第三方登录',
              path: '/other/login',
              paths: ['/other', '/other/login'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              name: 'other_execl',
              title: 'Execl',
              path: '/other/execl',
              paths: ['/other', '/other/execl'],
              parentPath: '/other',
              icon: 'akar-icons:file'
            },
            {
              order: 10,
              name: 'link',
              title: '外链',
              path: '/link',
              paths: ['/link'],
              icon: 'akar-icons:link-chain',
              redirect: '/link/index',
              children: [
                {
                  name: 'link_index',
                  title: '前端资源',
                  path: '/link/index',
                  paths: ['/link', '/link/index'],
                  parentPath: '/link',
                  icon: 'carbon:application-web'
                },
                {
                  name: 'link_vite',
                  title: 'Vite',
                  path: '/link/vite',
                  paths: ['/link', '/link/vite'],
                  parentPath: '/link',
                  icon: 'file-icons:vite',
                  link: 'https://www.vitejs.net/'
                },
                {
                  name: 'link_mdn',
                  title: 'MDN',
                  path: '/link/mdn',
                  paths: ['/link', '/link/mdn'],
                  parentPath: '/link',
                  icon: 'cib:mozilla-firefox',
                  link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'
                }
              ]
            },
            {
              name: 'link_index',
              title: '前端资源',
              path: '/link/index',
              paths: ['/link', '/link/index'],
              parentPath: '/link',
              icon: 'carbon:application-web'
            },
            {
              name: 'link_vite',
              title: 'Vite',
              path: '/link/vite',
              paths: ['/link', '/link/vite'],
              parentPath: '/link',
              icon: 'file-icons:vite',
              link: 'https://www.vitejs.net/'
            },
            {
              name: 'link_mdn',
              title: 'MDN',
              path: '/link/mdn',
              paths: ['/link', '/link/mdn'],
              parentPath: '/link',
              icon: 'cib:mozilla-firefox',
              link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'
            },
            {
              name: 'test',
              title: '测试',
              path: '/test',
              paths: ['/test'],
              icon: 'carbon:page-break'
            }
          ]
        }
      };
    }
  }
] as MockMethod[];
