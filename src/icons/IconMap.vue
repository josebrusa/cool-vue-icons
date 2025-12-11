<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6v15m0-15 6-3v15l-6 3m0-15L9 3m6 18-6-3m0 0-6 3V6l6-3m0 15V3"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconMap',
  components: { IconBase }
})
</script>
