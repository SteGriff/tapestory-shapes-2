<template>
  <div class="mv4 neu overflow-hidden">
    <div class="overflow-x-auto pv3 ph2 ws-nw">
      <div
        v-for="p in palettes"
        :key="p"
        :class="['palette' + p]"
        class="mh1 dib ba sqr32 br2 pointer overflow-hidden"
        @click="$emit('update:modelValue', p)"
      >
        <div class="dib palSlice bg-first"></div>
        <div class="dib palSlice bg-second"></div>
        <div class="dib palSlice bg-third"></div>
        <div class="dib palSlice bg-fourth"></div>
        <div class="dib palSlice bg-fifth"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { palettes } from "@/data/constants.ts";

defineProps<{
  modelValue: number;
}>();
</script>
