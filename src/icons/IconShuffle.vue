<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 20 3-3m0 0-3-3m3 3h-4a5 5 0 0 1-5-5 5 5 0 0 0-5-5H3m15-3 3 3m0 0-3 3m3-3h-4a4.98 4.98 0 0 0-3 1M3 17h4a4.98 4.98 0 0 0 3-1"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconShuffle',
  components: { IconBase }
})
</script>
