<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h6m0 0h6m-6 0v6m0-6V6"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconAddPlus',
  components: { IconBase }
})
</script>
