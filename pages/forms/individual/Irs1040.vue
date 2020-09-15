<template>
  <div class="container">
    <Irs1040 />
  </div>
</template>

<script>
// import Irs1040 from '~/components/IRS1040/IRS1040.vue'
import Irs1040 from '~/components/PDF2HTML/Irs1040.vue'

export default {
  components: {
    Irs1040
  }
}
</script>

<style>
.container {
  margin: 10px;
}
</style>
