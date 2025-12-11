<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 13 3 3m0 0-3 3m3-3H5m3-5L5 8m0 0 3-3M5 8h14"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconArrowLeftRight',
  components: { IconBase }
})
</script>
