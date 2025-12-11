<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m-4 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconRemoveMinusCircle',
  components: { IconBase }
})
</script>
