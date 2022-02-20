<template>
  <div class="flex h-100">
    <aside class="h-100 w2 minw2 br b--gray z-0">
      <palette-picker
        v-model="selectedElement.palette"
        class="z-99 fl ml1 mw3 mv4 ba b--gray br4 bg-white overflow-hidden"
        :class="{ mw6: toolIs(ToolType.Palette) }"
        :expanded="toolIs(ToolType.Palette)"
        @expandCollapse="expandCollapse(ToolType.Palette)"
        @expand="expand(ToolType.Palette)"
      />
      <shader-picker
        v-model="selectedElement.shader"
        class="z-99 fl ml1 mw3 mb4 ba b--gray br4 bg-white overflow-hidden"
        :class="{ mw6: toolIs(ToolType.Shader) }"
        :palette="selectedElement.palette"
        :expanded="toolIs(ToolType.Shader)"
        @expandCollapse="expandCollapse(ToolType.Shader)"
        @expand="expand(ToolType.Shader)"
      />
      <foreground-picker
        v-model="selectedElement.foreground"
        class="z-99 fl ml1 mw3 mb4 ba b--gray br4 bg-white overflow-hidden"
        :class="{ mw6: toolIs(ToolType.Foreground) }"
        :palette="selectedElement.palette"
        :shader="selectedElement.shader"
        :expanded="toolIs(ToolType.Foreground)"
        @expandCollapse="expandCollapse(ToolType.Foreground)"
        @expand="expand(ToolType.Foreground)"
      />
    </aside>

    <main
      class="ph2 w-100 measure center mv4"
      @click="state.expandedTool = ToolType.None"
    >
      <div>
        <div v-for="(se, index) in state.storyElements" :key="index">
          <box :box-model="se" @click="selectBox(index)" />
        </div>
      </div>

      <!-- <h1 class="heading palette38 shaderg135">Hello World</h1> -->

      <button
        class="bg-white bn black pointer br-pill f2 w3 h3 db center tc"
        :class="bottomElementClasses"
        @click="addBox"
      >
        +
      </button>

      <!-- Debug -->
      <!-- <table class="w5 center tc" cell-spacing="0">
        <tr>
          <td class="ba pa1">{{ state.selectedElementIndex }}</td>
          <td class="ba pa1">{{ selectedElement.palette }}</td>
          <td class="ba pa1">{{ selectedElement.shader }}</td>
          <td class="ba pa1">{{ selectedElement.foreground }}</td>
        </tr>
      </table> -->
    </main>
  </div>
</template>

<script setup lang="ts">
import box from "@/components/Box.vue";
import palettePicker from "@/components/PalettePicker.vue";
import shaderPicker from "./components/ShaderPicker.vue";
import foregroundPicker from "./components/ForegroundPicker.vue";

import { computed, reactive } from "vue";
import type { IAppState } from "./types/IAppState";
import { ToolType } from "./types/ToolType";
import { elementLike, initialBox, randomBox } from "./data/StoryElementFactory";

const state = reactive<IAppState>({
  expandedTool: ToolType.None,
  selectedElementIndex: 0,
  storyElements: [initialBox()],
});

const selectedElement = computed(
  () => state.storyElements[state.selectedElementIndex]
);

const bottomElement = computed(
  () => state.storyElements[state.storyElements.length - 1]
);

const bottomElementClasses = computed(() => [
  "palette" + bottomElement.value.palette,
  "shader" + bottomElement.value.shader,
  bottomElement.value.foreground,
]);

const selectBox = (index: number) => {
  state.selectedElementIndex = index;
};

const addBox = () => {
  state.storyElements.push(elementLike(bottomElement.value));
};

const toolIs = (t: ToolType) => state.expandedTool === t;
const expand = (t: ToolType) => {
  state.expandedTool = t;
};
const expandCollapse = (t: ToolType) => {
  state.expandedTool = state.expandedTool === t ? ToolType.None : t;
  console.log(t);
};
</script>
