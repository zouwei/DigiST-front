import Vue from 'vue'
import Router from 'vue-router'
import AsyncComponent from './AsyncComponent'

// 首页相关
const Home = AsyncComponent(import('containers/Home/Home'))

// 投资相关
const Investment = AsyncComponent(import('containers/Investment/Index'))
const InvestmentDetail = AsyncComponent(import('containers/Investment/Detail'))


// 募资相关
const Fundraising = AsyncComponent(import('containers/Fundraising/Fundraising'))
const FundraisingIndex = AsyncComponent(import('containers/Fundraising/FundraisingIndex/index'))
const FundraisingDetail = AsyncComponent(import('containers/Fundraising/FundraisingDetail'))
const FundraisingPrecautions = AsyncComponent(import('containers/Fundraising/FundraisingPrecautions'))
const FundraisingStart = AsyncComponent(import('containers/Fundraising/FundraisingStart/index'))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Investment',
          component: Investment
        },
        {
          path: 'detail',
          name: 'InvestmentDetail',
          component: InvestmentDetail
        }
      ]
    },
    {
      path: '/investment',
      name: 'Investment',
      component: Investment,
      redirect: '/investment/index',
      children: [
        {
          path: 'index',
          name: 'Investment',
          component: Investment
        },
        {
          path: 'detail',
          name: 'InvestmentDetail',
          component: InvestmentDetail
        }
      ]
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
        },
        {
          path: 'start',
          name: 'FundraisingStart',
          component: FundraisingStart
        }
      ]
    }
  ]
})
