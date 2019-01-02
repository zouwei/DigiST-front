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
const FundraisingComplete = AsyncComponent(import('containers/Fundraising/FundraisingComplete'))
const FundraisingMaturity = AsyncComponent(import('containers/Fundraising/FundraisingMaturity'))
const FundraisingPublish = AsyncComponent(import('containers/Fundraising/FundraisingPublish'))
const FundraisingDetail = AsyncComponent(import('containers/Fundraising/FundraisingDetail'))
const FundraisingPrecautions = AsyncComponent(import('containers/Fundraising/FundraisingPrecautions'))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      children: [
        {
          path: '',
          name: 'FundraisingComplete',
          component: FundraisingComplete
        },
        {
          path: 'publish',
          name: 'FundraisingPublish',
          component: FundraisingPublish
        },
        {
          path: 'maturity',
          name: 'FundraisingMaturity',
          component: FundraisingMaturity
        }
      ]
    },
    {
      path: '/fundraising_detail',
      name: 'FundraisingDetail',
      component: FundraisingDetail
    },
    {
      path: '/fundraising_precautions',
      name: 'FundraisingPrecautions',
      component: FundraisingPrecautions
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
