import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  dva:{},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  fastRefresh: true,
  proxy: {
    '/api': {
      target: 'http://localhost:8081/api',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' 过期',
      path: '/expire',
      component: './ExpireManage',
    },
  ],
  npmClient: 'npm',
});
