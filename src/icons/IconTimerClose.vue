<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 15 2-2m0 0 2-2m-2 2-2-2m2 2 2 2m7-9-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconTimerClose',
  components: { IconBase }
})
</script>
