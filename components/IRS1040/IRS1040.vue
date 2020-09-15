<template>
  <div id="root">
    <div id="container">
      <FormTitle />
      <FilingStatus />
    </div>
  </div>
</template>

<script>
import FormTitle from './FormTitle'
import FilingStatus from './FilingStatus'

export default {
  name: 'Irs1040',
  components: {
    FormTitle,
    FilingStatus
  },
  data() {
    return {}
  }
}
</script>

<style>
#root {
  margin: auto;
  margin-top: 40px;
  padding: 40px 80px;
  border: 1px solid #ccc;
  width: 1000px;
  height: 1000px;
  box-shadow: 0px 0px 4px #ddd;
  font-family: 'Helvetica';
}
</style>
