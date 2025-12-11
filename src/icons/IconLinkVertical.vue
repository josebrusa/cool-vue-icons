<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m4-1v2a4 4 0 0 1-8 0v-2m8-6V7a4 4 0 0 0-8 0v2"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconLinkVertical',
  components: { IconBase }
})
</script>
