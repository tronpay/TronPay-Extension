<template>
  <section>
    <setting-navigation :title="$t('title.setting')" />
    <section class="app-container">
      <section class="settings">
        <section class="item" v-for="link in links">
          <router-link :to="{ name: link.route }">
            <span class="icon">
              <img :src="`/images/${link.icon}-icon.png`">
            </span><span class="text">{{link.name}}</span>
          </router-link>
        </section>
        <section class="item">
          <a @click="lockApp">
            <figure class="icon">
              <img src="/images/time-icon.png">
            </figure>
            <figure class="text">{{$t('settings.lock')}}</figure>
          </a>
        </section>
      </section>
    </section>
  </section>
</template>
<script>
import SettingNavigation from '../../components/setting-navigation'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('wallet')
export default {
  components: {
    SettingNavigation
  },
  data () {
    return {
      links: [
        { route: 'network', name: this.$i18n.t('settings.network'), icon: 'network' },
        { route: 'language', name: this.$i18n.t('settings.language'), icon: 'language' },
        { route: 'modifyPassword', name: this.$i18n.t('settings.modifyPassword'), icon: 'password' },
        { route: 'lockSetting', name: this.$i18n.t('settings.lockSetting'), icon: 'lock' },
        { route: 'about', name: this.$i18n.t('settings.about'), icon: 'tronpay' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'lock'
    ]),
    lockApp () {
      this.lock().then(() => {
        this.$router.push({ name: 'unlock' })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";
.settings {
  padding:40px 0;
  .item {
    transition:background 0.2s ease;
    a{
      display: inline-block;
      width: 100%;
      padding:0 65px;
    }
    &:hover {
      background:#f8f8f8;
    }
    .icon {
      padding:16px 0;
      display:inline-block;
      font-size:18px;
      color: $color-base;
      width:30px;
      text-align:center;
      margin-right:10px;
      img{
        vertical-align: middle;
        position: relative;
        top: -3px;
      }
    }
    .text {
      padding: 16px 0;
      display: inline-block;
      font-size: 18px;
      color: $color-base;
    }
  }
}
</style>
