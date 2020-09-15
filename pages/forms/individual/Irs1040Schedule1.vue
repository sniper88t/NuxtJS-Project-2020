<template>
  <div class="container">
    <Irs1040Schedule1 />
  </div>
</template>

<script>
import Irs1040Schedule1 from '~/components/PDF2HTML/Irs1040Schedule1.vue'

export default {
  components: {
    Irs1040Schedule1
  }
}
</script>

<style>
.container {
  margin: 10px;
}
</style>
