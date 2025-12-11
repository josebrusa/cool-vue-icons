<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m14-5 2-2m0 0 2-2m-2 2-2-2m2 2 2 2M9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconUserClose',
  components: { IconBase }
})
</script>
