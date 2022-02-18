<template>
  <div class="flex h-100">
    <aside class="h-100 w2 minw2 br b--gray z-0">
      <palette-picker
        class="z-99 fl ml1 mw3 mv4 ba br4 bg-white overflow-hidden"
        :class="{ mw6: expanded }"
        @click="() => (expanded = !expanded)"
        v-model="selectedBox.palette"
      />
    </aside>

    <main class="ph2 w-100 ba measure center mv4">
      <div>
        <div v-for="(se, index) in storyElements" :key="index">
          <box :box-model="se" @click="selectBox(index)" />
        </div>
      </div>

      <!-- <h1 class="heading palette38 shaderg135">Hello World</h1> -->

      <button
        class="bg-white ba b--black black pointer br-pill f2 w3 h3 db center tc"
        @click="addBox"
      >
        +
      </button>
      <!-- 
      <shader-picker
        v-model="selectedBox.shader"
        :palette="selectedBox.palette"
      />

      <foreground-picker
        v-model="selectedBox.foreground"
        :palette="selectedBox.palette"
        :shader="selectedBox.shader"
      />-->

      <!-- Debug -->
      <table class="w5 center tc" cell-spacing="0">
        <tr>
          <td class="ba pa1">{{ selectedBoxIndex }}</td>
          <td class="ba pa1">{{ selectedBox.palette }}</td>
          <td class="ba pa1">{{ selectedBox.shader }}</td>
          <td class="ba pa1">{{ selectedBox.foreground }}</td>
        </tr>
      </table>
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
import { palettes, randomShaders } from "./data/constants";
import type { IAppState } from "./types/IAppState";
import { ToolType } from "./types/ToolType";

// Move this and addBox box into a boxFactory.ts kind of thing
const initialBox: IStoryElement = {
  elementType: StoryElementType.Box,
  shape: "round",
  shader: "g135",
  palette: 38,
  foreground: "black",
  text: "This is my story",
};

// Use me instead of things below
const state = reactive<IAppState>({
  expandedTool: ToolType.None,
  selectedElementIndex: 0,
  storyElements: [initialBox],
});

const storyElements = reactive<IStoryElement[]>([initialBox]);
const selectedBoxIndex = ref(0);

const selectedBox = computed(() => storyElements[selectedBoxIndex.value]);

const selectBox = (index: number) => {
  selectedBoxIndex.value = index;
};

const addBox = () => {
  const newBox: IStoryElement = {
    elementType: StoryElementType.Box,
    shape: "round",
    shader: randomFrom(randomShaders),
    palette: randomFrom(palettes),
    foreground: "white",
    text: "Hi, I'm new",
  };
  storyElements.push(newBox);
};
</script>
