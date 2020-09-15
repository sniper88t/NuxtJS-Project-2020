<template>
  <div class="app-container">
    <h2>TaxTC ERO Forms Library</h2>
    <br />
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content">
          <v-jstree
            :data="federal"
            allow-batch
            whole-row
            @item-click="itemClick"
          ></v-jstree></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content">
          <v-jstree
            :data="state"
            allow-batch
            whole-row
            @item-click="itemClick"
          ></v-jstree>
        </div>
      </el-col>
      <el-col :span="5"
        ><div class="grid-content">
          <v-jstree
            :data="fire"
            allow-batch
            whole-row
            @item-click="itemClick"
          ></v-jstree></div
      ></el-col>
      <el-col :span="5"
        ><div class="grid-content">
          <v-jstree
            :data="ssa"
            allow-batch
            whole-row
            @item-click="itemClick"
          ></v-jstree></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import { stateForms } from '~/services/state-forms'
import { fireForms } from '~/services/fire-forms'
import { federalForms } from '~/services/federal-forms'
import { ssaForms } from '~/services/ssa-forms'
export default {
  layout: 'dashboard',
  data() {
    return {
      federal: federalForms,
      state: stateForms,
      fire: fireForms,
      ssa: ssaForms,
      filterText: '',
      data2: [
        {
          id: 1,
          label: 'Level one 1',
          children: [
            {
              id: 4,
              label: 'Level two 1-1',
              children: [
                {
                  id: 9,
                  label: 'Level three 1-1-1'
                },
                {
                  id: 10,
                  label: 'Level three 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: 'Level one 2',
          children: [
            {
              id: 5,
              label: 'Level two 2-1'
            },
            {
              id: 6,
              label: 'Level two 2-2'
            }
          ]
        },
        {
          id: 3,
          label: 'Level one 3',
          children: [
            {
              id: 7,
              label: 'Level two 3-1'
            },
            {
              id: 8,
              label: 'Level two 3-2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.includes(value)
    },
    itemClick(node) {
      // console.log(node.model.link + ' clicked !')
      this.$router.push({
        path: node.model.link
      })
    }
  }
}
</script>
<style scoped>
/* .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
} */
.el-col {
  border-radius: 4px;

  /* font: 10px Verdana, sans-serif; */
  box-shadow: 0 0 5px #ccc;
  padding: 10px;
  /* border-radius: 5px; */
  margin: 7px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #ecf5ff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
