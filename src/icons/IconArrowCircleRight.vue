<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 15 3-3m0 0-3-3m3 3H8m13 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconArrowCircleRight',
  components: { IconBase }
})
</script>
