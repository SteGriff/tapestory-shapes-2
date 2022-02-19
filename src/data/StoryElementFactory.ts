import type { IStoryElement } from "@/types/IStoryElement";
import { StoryElementType } from "@/types/StoryElementType";
import { randomFrom } from "@/utils/random";
import { randomShaders, palettes } from "./Constants";

export function initialBox(): IStoryElement {
  return {
    elementType: StoryElementType.Box,
    shape: "round",
    shader: "g135",
    palette: 38,
    foreground: "black",
    text: "This is my story",
  };
}

export function randomBox(): IStoryElement {
  return {
    elementType: StoryElementType.Box,
    shape: "round",
    shader: randomFrom(randomShaders),
    palette: randomFrom(palettes),
    foreground: "white",
    text: "Hi, I'm new",
  };
}
