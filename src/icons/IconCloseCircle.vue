<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 9 3 3m0 0 3 3m-3-3-3 3m3-3 3-3m-3 12a9 9 0 1 1 0-18 9 9 0 0 1 0 18"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconCloseCircle',
  components: { IconBase }
})
</script>
