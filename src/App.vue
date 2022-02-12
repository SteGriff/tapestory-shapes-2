<template>
  <div class="ph2">
    <main class="sans-serif w-99 measure center mv4">
      <box :box-model="boxModel" />

      <palette-picker v-model="boxModel.palette" />

      <shader-picker v-model="boxModel.shader" :palette="boxModel.palette" />

      <foreground-picker
        v-model="boxModel.foreground"
        :palette="boxModel.palette"
        :shader="boxModel.shader"
      />

      <!-- Debug -->
      <ul>
        <li>Palette {{ boxModel.palette }}</li>
        <li>Shader {{ boxModel.shader }}</li>
        <li>Foreground {{ boxModel.foreground }}</li>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
import box from "@/components/Box.vue";
import palettePicker from "@/components/PalettePicker.vue";
import shaderPicker from "@/components/ShaderPicker.vue";
import foregroundPicker from "@/components/ForegroundPicker.vue";

import { reactive } from "vue";
import { type IBox } from "@/types/IBox";

// Selection
const boxModel = reactive<IBox>({
  shape: "round",
  shader: "g135",
  palette: 38,
  foreground: "black",
  text: "This is my story",
});
</script>

<style></style>
