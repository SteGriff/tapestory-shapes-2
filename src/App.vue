<template>
  <div class="ph2">
    <main class="sans-serif w-99 measure center mv4">
      <div v-for="(se, index) in storyElements" :key="index">
        <box :box-model="se" @click="selectBox(index)" />
      </div>

      <button class="bg-white ba b--black pointer br-pill db center f2 w3 h3" @click="addBox">+</button>

      <palette-picker v-model="selectedBox.palette" />

      <shader-picker v-model="selectedBox.shader" :palette="selectedBox.palette" />

      <foreground-picker
        v-model="selectedBox.foreground"
        :palette="selectedBox.palette"
        :shader="selectedBox.shader"
      />

      <!-- Debug -->
      <ul>
        <li>{{ selectedBoxIndex }}</li>
        <li>Palette {{ selectedBox.palette }}</li>
        <li>Shader {{ selectedBox.shader }}</li>
        <li>Foreground {{ selectedBox.foreground }}</li>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
import box from "@/components/Box.vue";
import palettePicker from "@/components/PalettePicker.vue";
import shaderPicker from "@/components/ShaderPicker.vue";
import foregroundPicker from "@/components/ForegroundPicker.vue";

import { computed, reactive, ref } from "vue";
import type { IStoryElement } from "./types/IStoryElement";
import { StoryElementType } from "./types/StoryElementType";
import { randomFrom } from "./utils/random";
import { palettes, shaders } from "./data/constants";

const initialBox: IStoryElement = {
  elementType: StoryElementType.Box,
  shape: "round",
  shader: "g135",
  palette: 38,
  foreground: "black",
  text: "This is my story",
};

const storyElements = reactive<IStoryElement[]>([initialBox]);
const selectedBoxIndex = ref(0);

const selectedBox = computed(() => storyElements[selectedBoxIndex.value]);

const selectBox = (index: number) => {
  console.log(index);
  selectedBoxIndex.value = index;
}

const addBox = () => {
  const newBox: IStoryElement = {
    elementType: StoryElementType.Box,
    shape: "round",
    shader: randomFrom(shaders),
    palette: randomFrom(palettes),
    foreground: "white",
    text: "Hi, I'm new",
  }
  storyElements.push(newBox)
}
</script>
