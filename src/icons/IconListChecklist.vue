<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17h9M8 15l-2.5 3L4 17m7-5h9M8 10l-2.5 3L4 12m7-5h9M8 5 5.5 8 4 7"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconListChecklist',
  components: { IconBase }
})
</script>
