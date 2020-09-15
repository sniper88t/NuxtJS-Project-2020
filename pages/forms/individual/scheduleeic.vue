<template>
  <div class="container">
    <Irs1040ScheduleEic />
  </div>
</template>

<script>
import Irs1040ScheduleEic from '~/components/PDF2HTML/Irs1040ScheduleEic.vue'

export default {
  components: {
    Irs1040ScheduleEic
  }
}
</script>

<style>
.container {
  margin: 10px;
}
</style>
