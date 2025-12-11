<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 18 8 6 3 18m8-4H5m16 4v-3m0 0v-3m0 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconFont',
  components: { IconBase }
})
</script>
