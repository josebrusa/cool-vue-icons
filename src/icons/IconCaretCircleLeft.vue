<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 15-3-3 3-3m8 3a9 9 0 1 0-18 0 9 9 0 0 0 18 0"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconCaretCircleLeft',
  components: { IconBase }
})
</script>
