<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h6m-6-5h9m5-1v8m0 0 3-3m-3 3-3-3M4 7h12"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconSortAscending',
  components: { IconBase }
})
</script>
