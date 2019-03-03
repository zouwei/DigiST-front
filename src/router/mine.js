import AsyncComponent from './AsyncComponent'
const MineIndex = AsyncComponent(import('containers/Mine/Index'))
const Mine = AsyncComponent(import('containers/Mine/Mine'))
const ImportWallet = AsyncComponent(import('containers/Mine/ImportWallet'))
const Mnemonic = AsyncComponent(import('containers/Mine/Mnemonic'))
const CreateWallet = AsyncComponent(import('containers/Mine/CreateWallet'))
const BackupWallet = AsyncComponent(import('containers/Mine/BackupWallet'))

export default [{
    name: 'mine',
    path: '/mine',
    component: MineIndex,
    redirect: '/mine/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Mine
      },{
        path: 'mnemonic',
        name: 'mnemonic',
        component: Mnemonic
      },{
        path: 'importWallet',
        name: 'importWallet',
        component: ImportWallet
      },{
        path: 'createWallet',
        name: 'createWallet',
        component: CreateWallet,
      },{
        path: 'backupWallet',
        name: 'backupWallet',
        component: BackupWallet
      }
    ]
  }]
