<template>
  <div>
    <div
      class="overflow-x-none pv3 ph2 flex"
      :class="{ 'overflow-x-auto': expanded }"
    >
      <div
        :class="['shader' + shader, 'palette' + palette, modelValue]"
        class="mh1 pa1 b br2 pointer selected"
        @click="$emit('expandCollapse')"
      >
        {{ modelValue }}
      </div>

      <div
        v-for="f in foregrounds"
        :key="f"
        :class="['shader' + shader, 'palette' + palette, f]"
        class="mh1 pa1 b br2 pointer"
        @click="
          () => {
            $emit('expand');
            $emit('update:modelValue', f);
          }
        "
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
  modelValue: string;
  palette: number;
  shader: string;
  expanded: boolean;
}>();
</script>
