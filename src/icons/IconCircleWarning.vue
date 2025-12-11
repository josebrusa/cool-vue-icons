<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.45v4M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m.05-5.55v.1h-.1v-.1z"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconCircleWarning',
  components: { IconBase }
})
</script>
