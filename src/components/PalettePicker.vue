<template>
  <div>
    <div class="overflow-x-auto pv3 ph2 flex">
      <div :class="['palette' + props.modelValue]" class="mh1">
        <palette-chips />
      </div>

      <div v-if="props.expanded" class="dtr">
        <div
          v-for="p in paletteList"
          :key="p"
          :class="['palette' + p]"
          class="mh1"
          @click="$emit('update:modelValue', p)"
        >
          <palette-chips />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { palettes } from "@/data/Constants";
import { computed } from "vue";
import paletteChips from "./PaletteChips.vue";

const props = defineProps<{
  modelValue: number;
  expanded: boolean;
}>();

let paletteList = computed(() => [...palettes]);
</script>
