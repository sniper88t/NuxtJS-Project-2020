<template>
  <el-steps
    :active="$store.state.activeStep"
    finish-status="success"
    simple
    style="margin-top: 5px; margin-bottom: 20px"
  >
    <el-step title="Upload"></el-step>
    <el-step title="Fill"></el-step>
    <el-step title="Review"></el-step>
    <el-step title="Sign & Pay"></el-step>
    <el-step title="Transmit"></el-step>
  </el-steps>
</template>

<script>
export default {
  name: 'Steps',
  data() {
    return {}
  },
  methods: {
    onComplete() {
      return {}
    }
  }
}
</script>

<style></style>
