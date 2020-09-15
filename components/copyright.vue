<template>
  <div class="copyright">
    Copyright ©
    {{ new Date().getFullYear() + ' ' + 'TaxTC' }}
  </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>
<style scoped>
.copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  text-align: center;
  line-height: 60px;
}
</style>
