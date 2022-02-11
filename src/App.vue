<template>
  <div class="ph2">
    <main class="sans-serif w-99 measure center mv4">
      <box :boxModel="boxModel" />

      <!-- Palette Selector -->
      <div class="mv4 ba br4 overflow-hidden">
        <div class="overflow-x-auto pv3 ph2 ws-nw">
          <div
            v-for="p in palettes"
            :key="p"
            :class="['palette' + p]"
            class="mh1 dib ba sqr32 br2 pointer overflow-hidden"
            @click="setPalette(p)"
          >
            <div class="dib palSlice bg-first"></div>
            <div class="dib palSlice bg-second"></div>
            <div class="dib palSlice bg-third"></div>
            <div class="dib palSlice bg-fourth"></div>
            <div class="dib palSlice bg-fifth"></div>
          </div>
        </div>
      </div>

      <!-- Shader Selector -->
      <div class="mv4 ba br4 overflow-hidden">
        <div class="overflow-x-auto pv3 ph2 ws-nw">
          <div
            v-for="s in shaders"
            :key="s"
            :class="['shader' + s, 'palette' + boxModel.palette]"
            class="mh1 dib sqr32 br2 pointer"
            @click="setShader(s)"
          ></div>
        </div>
      </div>

      <!-- Forground Selector -->
      <div class="mv4 ba br4 overflow-hidden">
        <div class="overflow-x-auto pv3 ph2 ws-nw">
          <div
            v-for="f in foregrounds"
            :key="f"
            :class="[
              'shader' + boxModel.shader,
              'palette' + boxModel.palette,
              f,
            ]"
            class="mh1 dib pa1 b br2 pointer"
            @click="setForeground(f)"
          >
            {{ f }}
          </div>
        </div>
      </div>

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
import box from "./components/Box.vue";
import { reactive } from "vue";
import { type IBox } from "@/types/IBox";

// Options
// TODO Import from TS files?
const palettes = [
  0, 1, 3, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 23, 26, 27, 28,
  29, 34, 35, 37, 38, 40, 45, 47, 50, 55, 57, 60, 67, 69, 71, 73,
];
const shaders = ["1", "2", "3", "4", "5", "g13", "g35", "g135", "a", "b"];
const foregrounds = [
  "black",
  "white",
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
];

// Selection
const boxModel = reactive<IBox>({
  shape: "round",
  shader: "g135",
  palette: 38,
  foreground: "black",
  text: "This is my story",
});

// Functions
const setPalette = (p: number) => {
  boxModel.palette = p;
};

const setShader = (s: string) => {
  boxModel.shader = s;
};

const setForeground = (f: string) => {
  boxModel.foreground = f;
};
</script>

<style></style>
