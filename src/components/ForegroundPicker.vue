<template>
  <div class="mv4 neu overflow-hidden">
    <div class="overflow-x-auto pv3 ph2 ws-nw">
      <div
        v-for="f in foregrounds"
        :key="f"
        :class="['shader' + shader, 'palette' + palette, f]"
        class="mh1 dib pa1 b br2 pointer"
        @click="$emit('update:modelValue', f)"
      >
        {{ f }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { foregrounds } from "@/data/Constants";

defineProps<{
  palette: number;
  shader: string;
  modelValue: string;
}>();
</script>
