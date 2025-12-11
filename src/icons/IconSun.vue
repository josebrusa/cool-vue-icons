<template>
  <IconBase>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4V2m0 18v2M6.414 6.414 5 5m12.728 12.728 1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728 5 19.142M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: 'IconSun',
  components: { IconBase }
})
</script>
