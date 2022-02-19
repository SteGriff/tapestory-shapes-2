<template>
  <div class="flex h-100">
    <aside class="h-100 w2 minw2 br b--gray z-0">
      <palette-picker
        class="z-99 fl ml1 mw3 mv4 ba br4 bg-white overflow-hidden"
        :class="{ mw6: state.expandedTool == ToolType.Palette }"
        @click="() => (state.expandedTool = ToolType.Palette)"
        v-model="selectedBox.palette"
        :expanded="state.expandedTool == ToolType.Palette"
      />
    </aside>

    <main class="ph2 w-100 ba measure center mv4">
      <div>
        <div v-for="(se, index) in state.storyElements" :key="index">
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
          <td class="ba pa1">{{ state.selectedElementIndex }}</td>
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

import { computed, reactive } from "vue";
import type { IAppState } from "./types/IAppState";
import { ToolType } from "./types/ToolType";
import { initialBox, randomBox } from "./data/StoryElementFactory";

const state = reactive<IAppState>({
  expandedTool: ToolType.None,
  selectedElementIndex: 0,
  storyElements: [initialBox()],
});

const selectedBox = computed(
  () => state.storyElements[state.selectedElementIndex]
);

const selectBox = (index: number) => {
  state.selectedElementIndex = index;
};

const addBox = () => {
  state.storyElements.push(randomBox());
};
</script>
