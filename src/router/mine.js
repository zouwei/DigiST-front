import AsyncComponent from './AsyncComponent'
const Mine = AsyncComponent(import('containers/Mine/index'))
import ImportWallet from '../containers/Mine/ImportWallet'

export default [{
    name: 'mine',
    path: '/mine',
    component: ImportWallet,
    children: [
      {
        path: '/wallet',
        name: 'wallet',
        component: Mine
      },{
        path: '/importWallet',
        name: 'importWallet',
        component: ImportWallet
      }
    ]
  }]
