<template>
  <div class="ph2">
    <main class="sans-serif w-99 measure center mv4">
      <box :box-model="boxModel" />

      <!-- Palette Selector -->
      <div class="mv4 neu overflow-hidden">
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
      <div class="mv4 neu overflow-hidden">
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
      <div class="mv4 neu overfneulow-hidden">
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
import { palettes, shaders, foregrounds } from "@/data/constants.ts";

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
