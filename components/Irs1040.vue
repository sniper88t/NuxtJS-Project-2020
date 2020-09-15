<template>
  <div v-if="!$store.state.loading" class="wrapper">
    <Steps />
    <el-card>
      <Toolbar />
      <el-divider></el-divider>
      <vue-form-json-schema
        :model="$store.state.model"
        :schema="$store.state.schema"
        :ui-schema="$store.state.uiSchema"
        @change="onChange"
        @submit="onSubmit"
      ></vue-form-json-schema>
    </el-card>
  </div>
</template>

<script>
import VueFormJsonSchema from 'vue-form-json-schema/dist/vue-form-json-schema.esm.js'
import { getSchema } from '../libraries/Irs1040'
import Steps from './Steps/Steps.vue'
import Toolbar from './Toolbar/Toolbar.vue'

export default {
  name: 'Irs1040',
  components: {
    'vue-form-json-schema': VueFormJsonSchema,
    Steps,
    Toolbar
  },
  computed: {},
  mounted() {
    const baseSchema = getSchema()
    this.$store.commit('setBaseSchema', baseSchema)
    setTimeout(() => {
      this.$store.commit('documentLoaded')
    }, 3000)
  },
  methods: {
    onChange(model) {
      this.$store.commit('updateModel', model)
    },
    onSubmit(evt) {}
  }
}
</script>

<style>
.form-label {
  font-weight: 500;
  font-size: 0.9em;
}
.display-block {
  display: block;
}
</style>
