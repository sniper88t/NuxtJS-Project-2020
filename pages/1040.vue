<template>
  <div>
    <Steps />
    <Toolbar />
    <el-tabs
      v-model="activeName"
      type="border-card"
      editable
      style="margin-top: 20px"
      closable
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="form in formComponents"
        :key="form.title"
        :label="form.title"
        :name="form.title"
      >
        <component :is="form.component" :item="form"> </component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Steps from '~/components/Steps/Steps.vue'
import Toolbar from '~/components/Toolbar/Toolbar.vue'
import Irs1040 from '~/components/PDF2HTML/Irs1040.vue'
import Irs1040Schedule1 from '~/components/PDF2HTML/Irs1040Schedule1'
import Irs1040Schedule2 from '~/components/PDF2HTML/Irs1040Schedule2'
import Irs1040ScheduleA from '~/components/PDF2HTML/Irs1040ScheduleA'
import Irs1040Schedule3 from '~/components/PDF2HTML/Irs1040Schedule3'
import Irsw2 from '~/components/PDF2HTML/Irsw2'
import Irs8962 from '~/components/PDF2HTML/Irs8962'
import Irs1040ScheduleC from '~/components/PDF2HTML/Irs1040ScheduleC'
import Irs8888 from '~/components/PDF2HTML/Irs8888'
import Irs1040ScheduleB from '~/components/PDF2HTML/Irs1040ScheduleB'
import Irs1040Schedule8812 from '~/components/PDF2HTML/Irs1040Schedule8812'
import Irs1099R from '~/components/PDF2HTML/Irs1099R'
import Irs1040ScheduleEic from '~/components/PDF2HTML/Irs1040ScheduleEic'
import Irs461 from '~/components/PDF2HTML/Irs461'
import { ADD_SCHEDULE_1, SCHEDULE1_UPDATED } from '~/events/'
import {
  ADD_SCHEDULE_2,
  ADD_SCHEDULE_A,
  ADD_SCHEDULE_3,
  ADD_IRSW2,
  IRSW2_UPDATED,
  SCHEDULE2_UPDATED,
  SCHEDULE3_UPDATED,
  ADD_IRS8962,
  IRS8962_UPDATED,
  ADD_SCHEDULE_C,
  SCHEDULEC_UPDATED,
  ADD_SCHEDULE_B,
  SCHEDULEB_UPDATED,
  ADD_IRS8888,
  ADD_SCHEDULE_8812,
  ADD_IRS1099R,
  IRS1099R_UPDATED,
  SCHEDULE8812_UPDATED,
  ADD_SCHEDULE_EIC,
  ADD_IRS461,
  IRS461_UPDATED
} from '~/events/event'
import { formService } from '~/services/form-service'

export default {
  layout: 'dashboard',
  components: {
    Steps,
    Toolbar,
    Irs1040,
    Irs1040Schedule1,
    Irs1040Schedule2,
    Irs1040ScheduleA,
    Irs1040Schedule3,
    Irsw2,
    Irs8962,
    Irs1040ScheduleC,
    Irs8888,
    Irs1040ScheduleB,
    Irs1099R,
    Irs1040ScheduleEic,
    Irs461
  },
  data() {
    return {
      activeName: 'W-2',
      ReturnHeader: {},
      ReturnData: [],
      formComponents: []
    }
  },
  mounted() {
    this.onAddW2()
    this.formComponents.push({ title: '1040', component: Irs1040 })
    formService.$on(ADD_SCHEDULE_1, () => {
      const formName = 'Schedule 1'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAddSchedule1()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_SCHEDULE_2, () => {
      const formName = 'Schedule 2'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAddSchedule2()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_SCHEDULE_A, () => {
      const formName = 'Schedule A'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAddScheduleA()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_SCHEDULE_3, () => {
      const formName = 'Schedule 3'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAddSchedule3()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_IRSW2, () => {
      const formName = 'W-2'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAddW2()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_IRS8962, () => {
      const formName = 'Form 8962'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAdd8962()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_SCHEDULE_C, () => {
      const formName = 'Schedule C'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAddScheduleC()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_SCHEDULE_B, () => {
      const formName = 'Schedule B'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAddScheduleB()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_IRS8888, () => {
      const formName = 'Form 8888'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAdd8888()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_SCHEDULE_8812, () => {
      const formName = 'Schedule 8812'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAddSchedule8812()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_IRS1099R, () => {
      const formName = 'Form 1099R'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAdd1099R()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_SCHEDULE_EIC, () => {
      const formName = 'Schedule EIC'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAddScheduleEic()
        this.setActiveName(formName)
      }
    })
    formService.$on(ADD_IRS461, () => {
      const formName = 'Form 461'
      const query = this.formComponents.filter((item) => {
        return item.title === formName
      })
      if (query.length === 0) {
        this.onAdd461()
        this.setActiveName(formName)
      }
    })
  },
  methods: {
    setActiveName(name) {
      this.activeName = name
    },
    removeTab(targetName) {
      const tabs = this.formComponents
      let activeName = this.activeName
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.title === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.title
            }
          }
        })
      }
      if (targetName !== '1040' && targetName !== 'W-2') {
        this.activeName = activeName
        this.formComponents = tabs.filter((tab) => tab.title !== targetName)
        this.clearDataOnRemove(targetName)
      }
    },
    onAddSchedule1() {
      this.formComponents.push({
        title: 'Schedule 1',
        component: Irs1040Schedule1
      })
    },
    onAddSchedule2() {
      this.formComponents.push({
        title: 'Schedule 2',
        component: Irs1040Schedule2
      })
    },
    onAddScheduleA() {
      this.formComponents.push({
        title: 'Schedule A',
        component: Irs1040ScheduleA
      })
    },
    onAddSchedule3() {
      this.formComponents.push({
        title: 'Schedule 3',
        component: Irs1040Schedule3
      })
    },
    onAddW2() {
      this.formComponents.push({
        title: 'W-2',
        component: Irsw2
      })
    },
    onAdd8962() {
      this.formComponents.push({
        title: 'Form 8962',
        component: Irs8962
      })
    },
    onAddScheduleC() {
      this.formComponents.push({
        title: 'Schedule C',
        component: Irs1040ScheduleC
      })
    },
    onAddScheduleB() {
      this.formComponents.push({
        title: 'Schedule B',
        component: Irs1040ScheduleB
      })
    },
    onAdd8888() {
      this.formComponents.push({
        title: 'Form 8888',
        component: Irs8888
      })
    },
    onAddSchedule8812() {
      this.formComponents.push({
        title: 'Schedule 8812',
        component: Irs1040Schedule8812
      })
    },
    onAdd1099R() {
      this.formComponents.push({
        title: 'Form 1099R',
        component: Irs1099R
      })
    },
    onAddScheduleEic() {
      this.formComponents.push({
        title: 'Schedule EIC',
        component: Irs1040ScheduleEic
      })
    },
    onAdd461() {
      this.formComponents.push({
        title: 'Form 461',
        component: Irs461
      })
    },
    clearDataOnRemove(target) {
      if (target === 'W-2') {
        this.$store.commit('UPDATE_W2_DATA', {})
        formService.$emit(IRSW2_UPDATED)
      } else if (target === 'Schedule 1') {
        // this.$store.commit('UPDATE_SCHEDULE1_DATA', data)
        formService.$emit(SCHEDULE1_UPDATED)
      } else if (target === 'Schedule 2') {
        formService.$emit(SCHEDULE2_UPDATED)
      } else if (target === 'Schedule 3') {
        formService.$emit(SCHEDULE3_UPDATED)
      } else if (target === 'Form 8962') {
        formService.$emit(IRS8962_UPDATED)
      } else if (target === 'Schedule C') {
        formService.$emit(SCHEDULEC_UPDATED)
      } else if (target === 'Schedule B') {
        formService.$emit(SCHEDULEB_UPDATED)
      } else if (target === 'Form 1099R') {
        formService.$emit(IRS1099R_UPDATED)
      } else if (target === 'Schedule 8812') {
        formService.$emit(SCHEDULE8812_UPDATED)
      } else if (target === 'Form 461') {
        formService.$emit(IRS461_UPDATED)
      }
    }
  }
}
</script>

<style>
body {
  /* margin: 20px 40px 80px 40px;
  width: 100%; */
  overflow-x: hidden;
}
.el-tabs--border-card > .el-tabs__content {
  width: 890px;
  margin: auto;
}
/* .main-container {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
}
.document-container {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
} */
.el-tabs__new-tab {
  display: none !important;
}
</style>
