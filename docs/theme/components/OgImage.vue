<template>
  <img
    :src="`https://banners.beyondco.de/${encodeURIComponent(
      name
    )}?theme=light&packageManager=&packageName=&pattern=ticTacToe&style=style_1&description=&md=1&showWatermark=0&fontSize=100px&images=lightning-bolt`"
  />
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
