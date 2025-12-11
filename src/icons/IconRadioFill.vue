<template>
  <IconBase>
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16"/><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></g>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconRadioFill',
  components: { IconBase }
})
</script>
