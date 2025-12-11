<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 16-3 3m0 0-3-3m3 3V5m5 3 3-3m0 0 3 3m-3-3v14"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconArrowDownUp',
  components: { IconBase }
})
</script>
