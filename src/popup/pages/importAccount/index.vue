<template>
  <section class="app-container">
    <navigation :title="$t('title.importAccount')" />
    <el-form ref="form" :model="formData" :rules="formRules" label-position="top">
      <el-form-item :label="$t('label.tronPrivate')" prop="privateKey">
        <el-input type="textarea" :rows="4" v-model="formData.privateKey"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="full-btn mt20" type="primary" @click="importAccount('form')">{{$t('button.importSure')}}</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import utils from '../../../lib/utils'
import { createAccountName } from '../../utils/tools'
import { createNamespacedHelpers } from 'vuex'
import InternalMessage from '../../../messages/InternalMessage'
import * as InternalMessageTypes from '../../../messages/InternalMessageTypes'
import Navigation from '../../components/navigation'
const { mapMutations, mapState } = createNamespacedHelpers('wallet')
export default {
  components: {
    Navigation
  },
  data () {
    return {
      formData: {
        privateKey: ''
      },
      formRules: {
        privateKey: []
      }
    }
  },
  computed: {
    ...mapState([
      'accounts'
    ])
  },
  methods: {
    ...mapMutations([
      'addAccount'
    ]),
    importAccount (formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (!utils.validatePrivateKey(this.formData.privateKey)) {
            this.$kalert({
              message: this.$i18n.t('alert.illegalPrivateKey')
            })
            return false
          }
          const address = utils.privateKeyToAddress(this.formData.privateKey)
          if (this.accounts.find(ele => ele.address === address)) {
            this.$kalert({
              message: this.$i18n.t('alert.existAccount')
            })
            return false
          }
          const { keystore } = await InternalMessage.widthPayload(InternalMessageTypes.ENCRYPTKEYSTORE, {privateKey: this.formData.privateKey})
            .send()
          const account = { privateKey: '', keystore: keystore, address: address, name: createAccountName() }
          this.addAccount(account)
          this.$store.commit('setCurrentAccount', account)
          this.$router.push({ name: 'home' })
        }
      })
    }
  }
}
</script>
