<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a9 9 0 1 0 9 9m-9-9a9 9 0 0 1 9 9m-9-9v9m9 0h-9m6 6.5L12 12"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconChartPie',
  components: { IconBase }
})
</script>
