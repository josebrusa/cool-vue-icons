<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 17h10M4 15.685V15.5A1.5 1.5 0 0 1 5.5 14h.04c.807 0 1.46.653 1.46 1.46 0 .35-.114.692-.324.973L4 20h3m3-8h10M10 7h10M4 5l2-1v6"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconListOrdered',
  components: { IconBase }
})
</script>
