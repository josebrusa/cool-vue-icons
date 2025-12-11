<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h4.5M8 12V5h4.5a3.5 3.5 0 1 1 0 7M8 12v7h5.5a3.5 3.5 0 1 0 0-7h-1"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconBold',
  components: { IconBase }
})
</script>
