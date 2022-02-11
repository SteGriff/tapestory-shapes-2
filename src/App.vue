<script setup lang="ts">
import { reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

import Box from "./components/Box.vue";
import { type IBox } from "@/types/IBox";

const boxModel = reactive<IBox>({
  shape: "round",
  shader: "g135",
  palette: 37,
});
</script>

<template>
  <HelloWorld msg="Henlo wurl" />
  Box: <Box :boxModel="boxModel" />
</template>

<style></style>
