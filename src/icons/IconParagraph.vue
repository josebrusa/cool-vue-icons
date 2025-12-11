<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v8m0-8h4m-4 0h-1a4 4 0 1 0 0 8h1m0 0v6m4-14v14m0-14h1"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconParagraph',
  components: { IconBase }
})
</script>
