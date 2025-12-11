<template>
  <IconBase>
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><path d="M10.5 10.5 16 8l-2.5 5.5L8 16z"/></g>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconCompass',
  components: { IconBase }
})
</script>
