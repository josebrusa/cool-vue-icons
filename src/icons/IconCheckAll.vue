<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 12.485 4.243 4.243 8.484-8.485M3 12.485l4.243 4.243m8.485-8.485L12.5 11.5"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconCheckAll',
  components: { IconBase }
})
</script>
