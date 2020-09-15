<template>
  <el-dialog
    title="Upload a PDF document"
    :visible.sync="visible"
    width="31.4%"
    :before-close="handleClose"
  >
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <div slot="tip" class="el-upload__tip">
        pdf files with a size less than 2Mb
      </div>
    </el-upload>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$store.commit('toggleFormUploader')">Cancel</el-button>
      <el-button type="primary" @click="$store.commit('toggleFormUploader')">
        Upload
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DocumentUploader',
  props: {
    visible: Boolean
  },
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    onUpload() {
      return {}
    },
    handleClose() {
      return {}
    },
    handlePreview() {
      return {}
    },
    handleRemove() {
      return {}
    }
  }
}
</script>
