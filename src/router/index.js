import Vue from 'vue'
import Router from 'vue-router'
import AsyncComponent from './AsyncComponent'

// 组件要这样引用
const Example = AsyncComponent(import('components/Example'))

// 首页相关
const Home = AsyncComponent(import('containers/Home/Home'))

// 投资相关
const Investment = AsyncComponent(import('containers/Investment/Investment'))

// 募资相关
const Fundraising = AsyncComponent(import('containers/Fundraising/Fundraising'))
const FundraisingIndex = AsyncComponent(import('containers/Fundraising/FundraisingIndex/index'))
const FundraisingDetail = AsyncComponent(import('containers/Fundraising/FundraisingDetail'))
const FundraisingPrecautions = AsyncComponent(import('containers/Fundraising/FundraisingPrecautions'))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    // {
    //   path: '/example',
    //   name: 'Example',
    //   component: Example
    // },
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/investment',
      name: 'Investment',
      component: Investment
    },
    {
      path: '/fundraising',
      name: 'Fundraising',
      component: Fundraising,
      redirect: '/fundraising/index',
      children: [
        {
          path: 'index',
          name: 'FundraisingIndex',
          component: FundraisingIndex
        },
        {
          path: 'detail',
          name: 'FundraisingDetail',
          component: FundraisingDetail
        },
        {
          path: 'precautions',
          name: 'FundraisingPrecautions',
          component: FundraisingPrecautions
        }
      ]
    }
  ]
})
