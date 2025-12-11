<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-9m0 9 3-3m-3 3-3-3m3-6V3m0 9H3m9 0h9m-9-9L9 6m3-3 3 3M3 12l3 3m-3-3 3-3m15 3-3-3m3 3-3 3"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconMove',
  components: { IconBase }
})
</script>
