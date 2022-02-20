<template>
  <div class="z-99 fl ml1 mw3 mv4 ba b--gray br4 bg-white overflow-hidden">
    <div
      class="overflow-x-none pv3 ph2 flex"
      :class="{ 'overflow-x-auto': expanded }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  expanded: boolean;
}>();
</script>
