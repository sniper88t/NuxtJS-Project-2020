<template>
  <div class="wrapper wrapper-extra">
    <el-row>
      <el-col :span="2" class="label-col p-8 bg-white">
        <h6>Filing Status</h6>
      </el-col>
      <el-col :span="20">
        <vue-form-json-schema
          :model="model"
          :schema="schema"
          :ui-schema="uiSchema"
          @change="onChange"
          @submit="onSubmit"
        ></vue-form-json-schema>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" class="label-col p-8 bg-white">
        <span class="small mt--16">Check only</span>
        <span class="small mt--22">one box</span>
      </el-col>
      <el-col :span="20">
        <span class="small m-8 mt--6">
          If you checked the MFS box, enter the name of spouse. If you checked
          the HOH or QW box, enter the child’s name if the qualifying person is
        </span>
        <br />
        <span class="small m-8 mt--12">
          a child but not your dependent.
        </span>
        <input class="form-input w-70 mt--8" type="text" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueFormJsonSchema from 'vue-form-json-schema/dist/vue-form-json-schema.esm.js'
import {
  getBaseSchema,
  filingStatusSchema,
  getFilingStatusSchema
} from './library/pdf-ui-schema.js'

export default {
  name: 'FilingStatus',
  components: {
    'vue-form-json-schema': VueFormJsonSchema
  },
  data() {
    return {
      model: {},
      schema: {},
      uiSchema: []
    }
  },
  mounted() {
    const { schema, uiSchema } = filingStatusSchema()
    this.schema = schema
    this.uiSchema = uiSchema
    this.model = {
      TotalDeductionsAmt: 12200,
      IndividualReturnFilingStatusCd: ['Single']
    }
  },
  methods: {
    schemaReducer() {
      let { schema, uiSchema } = getBaseSchema()
      const filingStatusSchema = getFilingStatusSchema()
      schema = { ...schema, filingStatusSchema }
      uiSchema = { ...uiSchema }
      this.schema = schema
      this.uiSchema = uiSchema
    },
    onChange() {
      return {}
    },
    onSubmit() {
      return {}
    }
  }
}
</script>

<style>
.wrapper {
  width: 100% !important;
  border-bottom: 2px solid #000000;
  background-color: #dcfffb;
  -webkit-print-color-adjust: exact;
}
.wrapper-extra {
  height: 64px;
}
.checkbox-item {
  margin: 8px;
  font-size: 10px;
}
.small {
  font-size: 10px;
  margin: 0;
  padding: 0;
}
.label-col {
  width: 80px;
}
.form-input {
  border: 1px solid #cccccc;
}
.form-input:focus {
  border: none;
}
.w-70 {
  width: 70%;
}
.mt-8 {
  position: relative;
  top: 4px;
}
.mt--6 {
  position: relative;
  top: -6px;
}
.mt--8 {
  position: relative;
  top: -8px;
}
.mt--10 {
  position: relative;
  top: -10px;
}
.mt--12 {
  position: relative;
  top: -12px;
}
.mt--14 {
  position: relative;
  top: -14px;
}
.mt--16 {
  position: relative;
  top: -16px;
}
.mt--20 {
  position: relative;
  top: -20px;
}
.mt--22 {
  position: relative;
  top: -22px;
}
.p-8 {
  padding: 8px;
  padding-left: 0px;
}
.m-8 {
  margin: 8px;
}
.bg-white {
  background-color: #ffffff;
}
</style>
