<template>
  <div>
    <!-- eslint-disable vue/require-component-is -->
    <!-- <component :is="linkProps(to)">
      <slot />
    </component> -->
    <component v-bind="linkProps(to)">
      <slot />
    </component>
  </div>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'nuxt-link',
        to: url
      }
    }
  }
}
</script>
