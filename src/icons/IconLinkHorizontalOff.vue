<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h4m0 0L8 8m4 4 8 8M15 8h2a4 4 0 0 1 2.645 7M9 16H7a4 4 0 0 1 0-8h1m0 0L4 4"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconLinkHorizontalOff',
  components: { IconBase }
})
</script>
