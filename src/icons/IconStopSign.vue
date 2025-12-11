<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.75 5.75 12.5 12.5M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconStopSign',
  components: { IconBase }
})
</script>
