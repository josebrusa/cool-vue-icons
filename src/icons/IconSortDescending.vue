<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h12M4 12h9M4 7h6m8 6V5m0 0 3 3m-3-3-3 3"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconSortDescending',
  components: { IconBase }
})
</script>
