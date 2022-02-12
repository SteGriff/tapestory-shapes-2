<template>
  <div
    contenteditable
    class="box tc b"
    :class="[
      'shape' + boxModel.shape,
      'shader' + boxModel.shader,
      'palette' + boxModel.palette,
      boxModel.foreground,
    ]"
  >
    {{ boxModel.text }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { type IStoryElement } from "@/types/IStoryElement";

defineProps<{
  boxModel: IStoryElement;
}>();
</script>
