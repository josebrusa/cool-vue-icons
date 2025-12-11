<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 7-5.846 5.938c-.105.106-.158.16-.205.202-.76.68-1.907.68-2.667 0a5 5 0 0 1-.205-.203c-.105-.106-.158-.16-.205-.202a2 2 0 0 0-2.667 0c-.047.042-.1.096-.204.202L4 17M20 7v6m0-6h-6"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconTrendingUp',
  components: { IconBase }
})
</script>
