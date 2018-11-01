import { NewTronWeb } from '../../utils/tools'
import utils from '../../../lib/utils'
import Alert from '../../components/kalert/function'
import { HISTORY_REQUEST_LIMIT, HISTORY_SHOW_LIMIT } from '../../../lib/constants'
export default {
  namespaced: true,
  state: {
    name: '',
    address: '',
    privateKey: '',
    keystore: '',
    balance: 0,
    cpu: 0,
    bandWidth: 0,
    tronPower: 0,
    frozenExpires: 0,
    assets: []
  },
  actions: {
    async loadAccount ({ commit, state, rootState }) {
      commit('loading', true, { root: true })
      try {
        const tronWeb = NewTronWeb()
        const accountData = await tronWeb.trx.getAccount(rootState.currentAccount.address)
        state.balance = utils.getTokenAmount(accountData.balance || 0)
        state.tronPower = accountData.frozen && accountData.frozen.length > 0 ? accountData.frozen[0].frozen_balance : 0
        state.frozenExpires = accountData.frozen && accountData.frozen.length > 0 ? accountData.frozen[0].expire_time : 0
        state.assets = accountData.asset || []
        const resData = await tronWeb.trx.getAccountResources(rootState.currentAccount.address)
        state.bandWidth = resData.NetLimit ? resData.NetLimit : 0
        state.cpu = resData.EnergyLimit ? resData.EnergyLimit : 0
        commit('loading', false, { root: true })
      } catch (e) {
        state.balance = 0
        state.tronPower = 0
        state.frozenExpires = 0
        state.assets = []
        state.bandWidth = 0
        state.cpu = 0
        Alert({
          message: rootState.curLng === 'zh' ? '加载失败' : 'load data error'
        })
        commit('loading', false, { root: true })
      }
    },
    async loadTransactionsByNode ({ commit, rootState }) {
      const tronWeb = NewTronWeb()
      const from = await tronWeb.trx.getTransactionsRelated(rootState.currentAccount.address, 'from', HISTORY_REQUEST_LIMIT)
      const to = await tronWeb.trx.getTransactionsRelated(rootState.currentAccount.address, 'to', HISTORY_REQUEST_LIMIT)
      // fix sort bug
      // gettransactionsfromthis & gettransactionstothis return result not sort or have no timestamp
      return (from.concat(to).sort((a, b) => b.raw_data.timestamp - a.raw_data.timestamp || b.raw_data.expiration - a.raw_data.expiration))
        .slice(0, HISTORY_SHOW_LIMIT)
      // return NewTronWeb().trx.getTransactionsRelated(
      //   rootState.currentAccount.address,
      //   'all',
      //   50)
    }
  }
}
