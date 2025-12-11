<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconSearchMagnifyingGlass',
  components: { IconBase }
})
</script>
