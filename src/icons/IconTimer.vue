<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V9m9-3-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconTimer',
  components: { IconBase }
})
</script>
