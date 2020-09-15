<template>
  <div class="layout-login">
    <div class="login-form">
      <div class="logo login-logo">
        <!-- <h1 class="title">{{ $store.state.meta.appName }}</h1> -->
        <!-- <h1 class="title">Form web</h1> -->
        <img class="logo-img" src="/img/logo.png" />
      </div>
      <nuxt></nuxt>
    </div>
    <copyright></copyright>
  </div>
</template>
<script>
import Copyright from '@/components/copyright.vue'
export default {
  name: 'Login',
  components: {
    Copyright
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="css" scoped>
.layout-login {
  width: 100%;
  min-height: 100%;
  background-color: #f0f2f5;
  background-image: url('/background.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding: 90px 0 0;
  position: fixed;
}
.layout-login .title {
  margin: 0 auto 40px;
  text-align: center;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.85);
  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 500;
  position: relative;
  top: 2px;
}
.layout-login .main {
  width: 368px;
  margin: 0 auto 100px;
}
.layout-login button {
  width: 368px;
}

.login-form {
  max-width: 450px;
  height: 450px;
  margin: 0 auto 100px;
  padding: 50px 0 20px;
  background: #fff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
}
.logo-login {
  width: 260px;
  vertical-align: middle;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f3762;
  font-size: 2em;
  font-weight: 500;
}
.logo-img {
  margin-bottom: 32px;
  width: 190px;
}
</style>
