<template>
  <section>
    <logo-header />
    <section class="app-container">
      <div class="text-center mt30">
        <img src="/images/new-account.png" />
      </div>
      <el-button class="full-btn mt30" type="primary" @click="createAccount">{{$t('button.createAccount')}}</el-button>
      <section class="small-tip text-center mt10">{{$t('message.recommendNew')}}</section>
      <div class="text-center mt15">
        <img src="/images/import-account.png" />
      </div>
      <el-button class="full-btn mt30" type="primary" @click="importAccount">{{$t('button.importAccount')}}</el-button>
      <section class="small-tip text-center mt10">{{$t('message.recommendOld')}}</section>
    </section>
    <!-- create account -->
    <el-dialog
      top="15vh"
      center
      :title="$t('title.createAccount')"
      @closed="closedDialog"
      :visible.sync="currentCreateVisible">
      <div class="warm-tip">{{$t('message.savePrivateKey')}}</div>
      <section class="privateKey-area">
        {{currentCreateAccount.privateKey}}
      </section>
      <div class="warm-tip">{{$t('message.privateKeyOnly')}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button class="full-btn" type="primary" v-clipboard:copy="currentCreateAccount.privateKey"
                   v-clipboard:success="copySuccess"
                   v-clipboard:error="copyError">{{$t('button.copyPrivate')}}</el-button>
        <el-button class="full-btn gradual-button mt20" style="margin-left: 0 !important;" @click="jumpHome">{{$t('button.doneCopy')}}</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script>
import LogoHeader from '../../components/logo-header'
import { createAccountName } from '../../utils/tools'
import utils from '../../../lib/utils'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    LogoHeader
  },
  computed: {
    ...mapState([
      'currentCreateAccount'
    ]),
    currentCreateVisible: {
      get () {
        return this.$store.state.currentCreateVisible
      },
      set (val) {
        this.setCurrentCreateVisible(val)
      }
    }
  },
  methods: {
    ...mapMutations('wallet', [
      'addAccount'
    ]),
    ...mapMutations([
      'setCurrentAccount',
      'setCurrentCreateAccount',
      'setCurrentCreateVisible'
    ]),
    closedDialog () {
      this.setCurrentCreateAccount({ privateKey: '', address: '', name: '' })
    },
    copySuccess () {
      this.$kalert({
        message: this.$i18n.t('alert.copySuccess')
      })
    },
    copyError () {
      this.$kalert({
        message: this.$i18n.t('alert.copyFail')
      })
    },
    createAccount () {
      const account = utils.generateAccount()
      this.setCurrentCreateAccount({ privateKey: account.privateKey, address: account.address, name: createAccountName() })
      this.setCurrentCreateVisible(true)
    },
    importAccount () {
      this.$router.push({ name: 'importAccount' })
    },
    jumpHome () {
      this.setCurrentCreateVisible(false)
      this.addAccount(this.currentCreateAccount)
      this.setCurrentAccount(this.currentCreateAccount)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";
.privateKey-area{
  background-color: $bg-shallow;
  font-size: 12px;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
}
</style>
