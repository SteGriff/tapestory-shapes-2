<template>
  <div>
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
