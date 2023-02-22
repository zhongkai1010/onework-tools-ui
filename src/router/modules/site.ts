import { LAYOUT, EMPTY_LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'site',
    path: '/site',
    component: LAYOUT,
    redirect: '/site/index',
    meta: { title: t('router.site.site'), orderNo: 1 },
    children: [
      {
        name: 'site_index',
        path: 'index',
        component: () => import('/@/views/site/index.vue'),
        meta: { title: t('router.site.index'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'site_crc',
        path: 'crc',
        meta: { title: t('router.site.crc.index'), icon: 'ant-design:ant-design-outlined' },
        component: EMPTY_LAYOUT,
        redirect: '/site/crc/entry',
        children: [
          {
            name: 'site_crc_entry',
            path: 'entry',
            component: () => import('/@/views/site/crc/entry.vue'),
            meta: {
              title: t('router.site.crc.entry'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_crc_job',
            path: 'job',
            component: () => import('/@/views/site/crc/job.vue'),
            meta: {
              title: t('router.site.crc.job'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_crc_inter_site',
            path: 'inter_site',
            component: () => import('/@/views/site/crc/inter_site.vue'),
            meta: {
              title: t('router.site.crc.inter_site'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_crc_inter_warning',
            path: 'warning',
            component: () => import('/@/views/site/crc/warning.vue'),
            meta: {
              title: t('router.site.crc.warning'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_crc_inter_dimission',
            path: 'dimission',
            component: () => import('/@/views/site/crc/dimission.vue'),
            meta: {
              title: t('router.site.crc.dimission'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_crc_inter_badge',
            path: 'badge',
            component: () => import('/@/views/site/crc/badge.vue'),
            meta: {
              title: t('router.site.crc.badge'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_crc_inter_job_register',
            path: 'job_register',
            component: () => import('/@/views/site/crc/job_register.vue'),
            meta: {
              title: t('router.site.crc.job_register'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_crc_inter_distribution',
            path: 'distribution',
            component: () => import('/@/views/site/crc/distribution.vue'),
            meta: {
              title: t('router.site.crc.distribution'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      },
      {
        name: 'site_project',
        path: 'project',
        redirect: '/site/project/manage',
        component: EMPTY_LAYOUT,
        meta: { title: t('router.site.project.index'), icon: 'ant-design:ant-design-outlined' },
        children: [
          {
            name: 'site_project_manage',
            path: 'manage',
            component: () => import('/@/views/site/project/manage.vue'),
            meta: { title: t('router.site.project.manage'), icon: 'ant-design:ant-design-outlined' }
          },
          {
            name: 'site_project_report',
            path: 'report',
            component: () => import('/@/views/site/project/report.vue'),
            meta: { title: t('router.site.project.report'), icon: 'ant-design:ant-design-outlined' }
          },
          {
            name: 'site_project_appointment',
            path: 'appointment',
            component: () => import('/@/views/site/project/appointment.vue'),
            meta: {
              title: t('router.site.project.appointment'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      },
      {
        name: 'site_team',
        path: 'team',
        component: () => import('/@/views/site/team/index.vue'),
        meta: { title: t('router.site.team.index'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'site_cooperation',
        path: 'cooperation',
        redirect: '/site/cooperation/sponsor',
        component: EMPTY_LAYOUT,
        meta: {
          title: t('router.site.cooperation.sponsor'),
          icon: 'ant-design:ant-design-outlined'
        },
        children: [
          {
            name: 'site_cooperation_sponsor',
            path: 'sponsor',
            component: () => import('/@/views/site/cooperation/sponsor.vue'),
            meta: {
              title: t('router.site.cooperation.sponsor'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_cooperation_smo',
            path: 'smo',
            component: () => import('/@/views/site/cooperation/smo.vue'),
            meta: {
              title: t('router.site.cooperation.smo'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      },
      {
        name: 'site_training',
        path: 'training',
        component: EMPTY_LAYOUT,
        meta: {
          title: t('router.site.training.information'),
          icon: 'ant-design:ant-design-outlined'
        },
        children: [
          {
            name: 'site_training_information',
            path: 'information',
            component: () => import('/@/views/site/training/information.vue'),
            meta: {
              title: t('router.site.training.information'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_training_topic',
            path: 'topic',
            component: () => import('/@/views/site/training/topic.vue'),
            meta: {
              title: t('router.site.training.topic'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_training_manage',
            path: 'manage',
            component: () => import('/@/views/site/training/manage.vue'),
            meta: {
              title: t('router.site.training.manage'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_training_assess',
            path: 'assess',
            component: () => import('/@/views/site/training/assess.vue'),
            meta: {
              title: t('router.site.training.assess'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      },
      {
        name: 'site_emergency',
        path: 'emergency',
        redirect: '/site/emergency/leave',
        component: EMPTY_LAYOUT,
        meta: { title: t('router.site.emergency.index'), icon: 'ant-design:ant-design-outlined' },
        children: [
          {
            name: 'site_emergency_leave',
            path: 'leave',
            component: () => import('/@/views/site/emergency/leave.vue'),
            meta: {
              title: t('router.site.emergency.leave'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_emergency_return',
            path: 'return',
            component: () => import('/@/views/site/emergency/return.vue'),
            meta: {
              title: t('router.site.emergency.return'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      },
      {
        name: 'site_questionnaire_index',
        path: 'questionnaire',
        component: () => import('/@/views/site/questionnaire/index.vue'),
        meta: {
          title: t('router.site.questionnaire.index'),
          icon: 'ant-design:ant-design-outlined'
        }
      },
      {
        name: 'site_statistics',
        path: 'statistics',
        component: EMPTY_LAYOUT,
        redirect: '/site/statistics/crc',
        meta: {
          title: t('router.site.statistics.index'),
          icon: 'ant-design:ant-design-outlined'
        },
        children: [
          {
            name: 'site_statistics_crc',
            path: 'crc',
            component: () => import('/@/views/site/statistics/crc.vue'),
            meta: {
              title: t('router.site.statistics.crc'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_statistics_crc_resume',
            path: 'crc_resume',
            component: () => import('/@/views/site/statistics/crc_resume.vue'),
            meta: {
              title: t('router.site.statistics.crc_resume'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_statistics_crc_professional',
            path: 'professional',
            component: () => import('/@/views/site/statistics/professional.vue'),
            meta: {
              title: t('router.site.statistics.professional'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_statistics_project',
            path: 'project',
            component: () => import('/@/views/site/statistics/project.vue'),
            meta: {
              title: t('router.site.statistics.project'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_statistics_smo',
            path: 'smo',
            component: () => import('/@/views/site/statistics/smo.vue'),
            meta: {
              title: t('router.site.statistics.smo'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      },
      {
        name: 'site_message',
        path: 'message',
        component: EMPTY_LAYOUT,
        meta: {
          title: t('router.site.message.index'),
          icon: 'ant-design:ant-design-outlined'
        },
        redirect: '/site/message/news',
        children: [
          {
            name: 'site_message_news',
            path: 'news',
            component: () => import('/@/views/site/message/news.vue'),
            meta: {
              title: t('router.site.message.news'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_message_notice',
            path: 'notice',
            component: () => import('/@/views/site/message/notice.vue'),
            meta: {
              title: t('router.site.message.notice'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      },
      {
        name: 'site_set',
        path: 'set',
        meta: {
          title: t('router.site.set.index'),
          icon: 'ant-design:ant-design-outlined'
        },
        component: EMPTY_LAYOUT,
        redirect: '/site/set/info',
        children: [
          {
            name: 'site_set_info',
            path: 'info',
            component: () => import('/@/views/site/set/info.vue'),
            meta: {
              title: t('router.site.set.info'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_set_professional',
            path: 'professional',
            component: () => import('/@/views/site/set/professional.vue'),
            meta: {
              title: t('router.site.set.professional'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_set_template',
            path: 'template',
            component: () => import('/@/views/site/set/template.vue'),
            meta: {
              title: t('router.site.set.template'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_set_config',
            path: 'config',
            component: () => import('/@/views/site/set/config.vue'),
            meta: {
              title: t('router.site.set.config'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_set_admin',
            path: 'admin',
            component: () => import('/@/views/site/set/admin.vue'),
            meta: {
              title: t('router.site.set.admin'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'site_set_crc_admin',
            path: 'crc_admin',
            component: () => import('/@/views/site/set/crc_admin.vue'),
            meta: {
              title: t('router.site.set.crc_admin'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      }
    ]
  }
] as AppRouteRecordRaw[];