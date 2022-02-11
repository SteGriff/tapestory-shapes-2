<script setup lang="ts">
import { type IBox } from "@/types/IBox";

defineProps<{
  boxModel: IBox;
}>();
</script>

<template>
  <ul>
    <li>{{ boxModel.shape }}</li>
    <li>{{ boxModel.shader }}</li>
    <li>{{ boxModel.palette }}</li>
  </ul>
</template>

<style scoped></style>
