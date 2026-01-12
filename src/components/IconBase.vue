<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="customClass"
    :style="colorStyle"
    v-bind="$attrs"
    role="img"
    :aria-hidden="ariaHidden"
  >
    <slot />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'IconBase',
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    viewBox: {
      type: String,
      default: '0 0 24 24'
    },
    customClass: {
      type: [String, Object, Array],
      default: ''
    },
    ariaHidden: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#111827'
    }
  },
  setup(props) {
    const colorStyle = computed(() => {
      if (props.color) {
        return { color: props.color }
      }
      return {}
    })

    return {
      colorStyle
    }
  }
})
</script>