<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9v6m-4-6v6m2 6a9 9 0 1 1 0-18 9 9 0 0 1 0 18"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconPauseCircle',
  components: { IconBase }
})
</script>
