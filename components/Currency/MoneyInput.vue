<template>
  <div class="input-area" :style="divStyle">
    <input
      v-model.lazy="displayValue"
      class="no-outline"
      :data-line-number="line"
      type="text"
      :style="'width:' + width + 'px; height:' + height + 'px'"
      :name="name"
      :readonly="readonly"
      @blur="isInputActive = false"
      @focus="isInputActive = true"
      @keypress="onlyNumber"
    />
  </div>
</template>
<script>
export default {
  name: 'MoneyInput',
  props: {
    value: {
      type: String,
      default: '',
      required: true
    },
    width: { type: String, required: false, default: '108' },
    height: { type: String, required: false, default: '17' },
    name: { type: String, required: false, default: '' },
    line: { type: String, required: false, default: '' },
    inputId: { type: String, required: false, default: '' },
    divStyle: { type: String, required: false, default: '' },
    readonly: { type: Boolean, required: false, default: false }
  },
  data() {
    return {
      isInputActive: false
    }
  },
  computed: {
    displayValue: {
      get() {
        if (this.isInputActive) {
          // Cursor is inside the input field. unformat display value for user
          return this.value.toString()
        }
        if (Number(this.value) === 0) {
          return null
        } else {
          // User is not modifying now. Format display value for user interface
          return (
            '' +
            Number(this.value)
              .toFixed(0)
              .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
          )
        }
      },
      set(modifiedValue) {
        // Recalculate value after ignoring "" and "," in user input
        // eslint-disable-next-line no-useless-escape
        let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ''))

        // Ensure that it is not NaN
        if (isNaN(newValue)) {
          newValue = 0
        }
        newValue = Math.round(newValue)
        // Using lazy modifier instead of this below statement
        // if (this.isInputActive) {
        //   newValue = Math.round(newValue)
        // }

        // $emit the event so that parent component gets it
        this.$emit('input', newValue)
      }
    }
  },
  methods: {
    // Prevent text input
    onlyNumber($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault()
      }
    }
  }
}
</script>
<style scoped>
input {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: #f1f4ff;
  max-width: 100%;
  height: 19px;
  padding-left: 3px;
  font-size: 12px;
}
.no-outline:focus {
  outline: none;
  background-color: white;
}
</style>
