<template>
  <section>
    <setting-navigation :title="$t('settings.modifyPassword')" />
    <section class="app-container">
      <section class="setting-tip">{{$t('message.verifyPassword')}}</section>
      <section v-if="show" class="modify-password mt20">
        <el-input v-model="oldPassword" type="password" :placeholder="$t('placeholder.password')"></el-input>
        <el-button class="full-btn mt100" type="primary" @click="modifyPassword">{{$t('button.modifyPassword')}}</el-button>
      </section>
      <el-form class="mt20" v-else ref="form" :model="formData" :rules="formRules">
        <el-form-item prop="password">
          <el-input v-model="formData.password" type="password" :placeholder="$t('placeholder.password')"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input v-model="formData.repassword" type="password" :placeholder="$t('placeholder.repassword')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="full-btn mt60" type="primary" @click="onSubmit('form')">{{$t('button.sure')}}</el-button>
        </el-form-item>
      </el-form>
    </section>
  </section>
</template>
<script>
import SettingNavigation from '../../components/setting-navigation'
import { mapState, mapMutations, mapActions } from 'vuex'
import utils from '../../../lib/utils'
export default {
  components: {
    SettingNavigation
  },
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$i18n.t('verify.passwordNull')))
      } else if (value.length < 8) {
        callback(new Error(this.$i18n.t('verify.passwordLength')))
      } else {
        if (this.formData.repassword !== '') {
          this.$refs.form.validateField('repassword')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$i18n.t('verify.passwordSure')))
      } else if (value !== this.formData.password) {
        callback(new Error(this.$i18n.t('verify.passwordMatch')))
      } else {
        callback()
      }
    }
    return {
      formData: {
        password: '',
        repassword: ''
      },
      formRules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        repassword: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      oldPassword: '',
      show: true
    }
  },
  computed: {
    ...mapState('wallet', [
      'password',
      'pwdhash'
    ])
  },
  methods: {
    ...mapMutations('wallet', [
      'setPassword',
      'changePasswordAccounts'
    ]),
    ...mapActions('wallet', [
      'setSeed'
    ]),
    ...mapMutations([
      'changePassword'
    ]),
    modifyPassword () {
      if (utils.hashPassword(this.oldPassword) === this.pwdhash) {
      // if (this.password === this.oldPassword) {
        this.show = false
      } else {
        this.$kalert({
          message: this.$i18n.t('alert.passwordError')
        })
      }
    },
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.changePassword({oldpwd: this.oldPassword, newpwd: this.formData.password})
          this.changePasswordAccounts({oldpwd: this.oldPassword, newpwd: this.formData.password})
          this.setPassword(this.formData.password)
          this.setSeed(this.formData.password).then(() => {
            this.$router.go(-1)
          })
          this.$kalert({
            message: this.$i18n.t('alert.modifyPasswordSuccess')
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.setting-tip{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px dashed #e6e6e6;
}
</style>
