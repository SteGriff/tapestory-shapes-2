<template>
  <div class="mv4 neu overflow-hidden">
    <div class="overflow-x-auto pv3 ph2 ws-nw">
      <div
        v-for="s in shaders"
        :key="s"
        :class="['shader' + s, 'palette' + palette]"
        class="mh1 dib sqr32 br2 pointer"
        @click="$emit('update:modelValue', s)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { shaders } from "@/data/constants";

defineProps<{
  palette: number;
  modelValue: string;
}>();
</script>
