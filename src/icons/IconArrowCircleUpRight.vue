<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13V9m0 0h-4m4 0-6 6m12-3a9 9 0 1 0-18 0 9 9 0 0 0 18 0"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconArrowCircleUpRight',
  components: { IconBase }
})
</script>
