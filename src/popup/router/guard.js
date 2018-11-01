/**
 * 路由守卫
 */
import router from './index'
import store from '../store'
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('wallet/isUnlocked').then(unlocked => {
      if (unlocked) {
        if (!store.state.currentAccount.address && to.name !== 'initAccount') {
          next({ name: 'initAccount' })
        } else {
          next()
        }
      } else {
        next({ name: 'unlock' })
      }
    })
  } else if (to.matched.some(record => record.meta.requiresKeystore)) {
    if (!store.state.wallet.pwdhash && !store.state.wallet.password) {
      next({ name: 'createWallet' })
    } else {
      next()
    }
  } else {
    next()
  }
})
// 页面离开出除loading
router.afterEach(() => {
  store.commit('loading', false)
})
