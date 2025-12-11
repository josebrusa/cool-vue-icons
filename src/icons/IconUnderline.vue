<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 19h12M8 5v6a4 4 0 0 0 8 0V5"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconUnderline',
  components: { IconBase }
})
</script>
