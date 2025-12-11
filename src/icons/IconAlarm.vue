<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5h5m4.004-7.429L17.939 2M6.064 2 3 4.571M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconAlarm',
  components: { IconBase }
})
</script>
