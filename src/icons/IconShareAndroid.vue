<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 13.5 6 3m0-9-6 3M18 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6M6 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m12-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconShareAndroid',
  components: { IconBase }
})
</script>
