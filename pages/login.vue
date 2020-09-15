<template>
  <div class="login">
    <!--layout/login-->
    <div class="main">
      <el-form
        ref="loginForm"
        :model="form"
        status-icon
        :rules="rules"
        class=""
      >
        <el-form-item label="" prop="username">
          <el-input v-model.trim="form.username" placeholder="Email"></el-input>
          <!-- <span
            class="svg-container"
            style="position:absolute;left:-7px;top:-6px"
          >
            <svg-icon icon-class="user" />
          </span> -->
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            v-model.trim="form.password"
            placeholder="Password"
            type="password"
            auto-complete="off"
            @keyup.enter.native="handleLogin"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            icon="el-icon-lock"
            size="medium"
            @click="handleLogin"
            >log in</el-button
          >
        </el-form-item>
      </el-form>
      <!-- <div style="text-align: right">
        <nuxt-link to="/register">Register</nuxt-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  name: 'Login',
  components: {},
  data() {
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'Please enter Username', trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            message: 'Please enter the password',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {
    $route: {
      handler(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('login', this.form)
            .then(() => {
              this.loading = false
              this.$router.replace('/home')
            })
            .catch((e) => {
              // TODO Exception handling
              this.loading = false
              // eslint-disable-next-line no-console
              console.log(e)
            })
        } else {
          return false
        }
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          // this.$store.dispatch('user/login', this.loginForm).then(() => {
          //   this.$router.push({ path: this.redirect || '/' })
          //   this.loading = false
          // }).catch(() => {
          //   this.loading = false
          // })
          // this.$axios
          //   .$get({
          //     url: 'api/login',
          //     params: this.loginForm
          //   })
          //   .then((res) => {
          //     this.$store.commit('SET_TOKEN', res.token)
          //     // res.token
          //     this.$cookie.set('token', res.token, { expires: '30m' })
          //     this.$router.push({ path: '/home' })
          //   })
          // manually log user for the time being
          this.$store.commit('SET_TOKEN', 'jdnjndjdjdj')
          // res.token
          this.$cookie.set('token', 'jdnjndjdjdj', { expires: '30m' })
          this.$router.push({ path: '/' })
        } else {
          // eslint-disable-next-line no-console
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
/* .svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
} */
.el-input__inner {
  padding-left: 25px;
}
.main {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
}
.el-button--medium {
  width: 100%;
  margin-top: 20px;
}
</style>
