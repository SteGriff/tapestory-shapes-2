<template>
  <div>
    <div class="overflow-x-auto pv3 ph2 ws-nw">
      <div
        v-for="p in paletteList"
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
import { palettes } from "@/data/constants";
import { computed, reactive, ref } from "vue";

const props = defineProps<{
  modelValue: number;
}>();

let paletteList = computed(() => [props.modelValue, ...palettes]);
const expanded = ref(false);
</script>
