import { create } from "zustand";
import {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from "./types";
import {
  randomAlignContent,
  randomAlignItems,
  randomFlexDirection,
  randomFlexWrap,
  randomJustifyContent,
} from "./helper";

interface State {
  flexWrap: FlexWrap;
  flexDirection: FlexDirection;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  alignContent: AlignContent;
  destFlexWrap: FlexWrap;
  destFlexDirection: FlexDirection;
  destJustifyContent: JustifyContent;
  destAlignItems: AlignItems;
  destAlignContent: AlignContent;
  updateFlexWrap: (newFlexWrap: FlexWrap) => void;
  updateFlexDirection: (newFlexDirection: FlexDirection) => void;
  updateJustifyContent: (newJustifyContent: JustifyContent) => void;
  updateAlignItems: (newAlignItems: AlignItems) => void;
  updateAlignContent: (newAlignContent: AlignContent) => void;
  updateDestFlexWrap: (newFlexWrap: FlexWrap) => void;
  updateDestFlexDirection: (newFlexDirection: FlexDirection) => void;
  updateDestJustifyContent: (newJustifyContent: JustifyContent) => void;
  updateDestAlignItems: (newAlignItems: AlignItems) => void;
  updateDestAlignContent: (newAlignContent: AlignContent) => void;
  resetFlexWrap: () => void;
  resetFlexDirection: () => void;
  resetJustifyContent: () => void;
  resetAlignItems: () => void;
  resetAlignContent: () => void;
  isHome: () => boolean;
  randomDest: () => void;
}

const useStore = create<State>((set, get) => ({
  flexWrap: "nowrap",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  alignContent: "flex-start",
  destFlexWrap: randomFlexWrap(),
  destFlexDirection: randomFlexDirection(),
  destJustifyContent: randomJustifyContent(),
  destAlignItems: randomAlignItems(),
  destAlignContent: randomAlignContent(),
  updateFlexWrap: (newFlexWrap: FlexWrap) => set({ flexWrap: newFlexWrap }),
  updateFlexDirection: (newFlexDirection: FlexDirection) =>
    set({ flexDirection: newFlexDirection }),
  updateJustifyContent: (newJustifyContent: JustifyContent) =>
    set({ justifyContent: newJustifyContent }),
  updateAlignItems: (newAlignItems: AlignItems) =>
    set({ alignItems: newAlignItems }),
  updateAlignContent: (newAlignContent: AlignContent) =>
    set({ alignContent: newAlignContent }),
  updateDestFlexWrap: (newFlexWrap: FlexWrap) =>
    set({ destFlexWrap: newFlexWrap }),
  updateDestFlexDirection: (newFlexDirection: FlexDirection) =>
    set({ destFlexDirection: newFlexDirection }),
  updateDestJustifyContent: (newJustifyContent: JustifyContent) =>
    set({ destJustifyContent: newJustifyContent }),
  updateDestAlignItems: (newAlignItems: AlignItems) =>
    set({ destAlignItems: newAlignItems }),
  updateDestAlignContent: (newAlignContent: AlignContent) =>
    set({ destAlignContent: newAlignContent }),
  resetFlexWrap: () => set({ flexWrap: "nowrap" }),
  resetFlexDirection: () => set({ flexDirection: "row" }),
  resetJustifyContent: () => set({ justifyContent: "flex-start" }),
  resetAlignItems: () => set({ alignItems: "flex-start" }),
  resetAlignContent: () => set({ alignContent: "flex-start" }),
  isHome: () => {
    const state = get();
    return (
      state.flexWrap === state.destFlexWrap &&
      state.flexDirection === state.destFlexDirection &&
      state.justifyContent === state.destJustifyContent &&
      state.alignItems === state.destAlignItems &&
      state.alignContent === state.destAlignContent
    );
  },
  randomDest: () => {
    const random = Math.floor(Math.random() * 2);
    set({
      destFlexWrap: randomFlexWrap(),
      destFlexDirection: randomFlexDirection(),
      destJustifyContent: randomJustifyContent(),
      destAlignItems: random === 0 ? "flex-start" : randomAlignItems(),
      destAlignContent: random === 1 ? "flex-start" : randomAlignContent(),
      flexWrap: "nowrap",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "flex-start",
    });
  },
}));

export default useStore;
