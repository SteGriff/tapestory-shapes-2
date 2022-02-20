<template>
  <div>
    <div
      class="overflow-x-none pv3 ph2 flex"
      :class="{ 'overflow-x-auto': expanded }"
    >
      <div
        :class="['palette' + modelValue]"
        class="mh1"
        @click="$emit('expandCollapse')"
      >
        <palette-chips class="selected" />
      </div>

      <div
        v-for="p in paletteList"
        :key="p"
        :class="['palette' + p]"
        class="mh1"
        @click="
          () => {
            $emit('expand');
            $emit('update:modelValue', p);
          }
        "
      >
        <palette-chips />
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
