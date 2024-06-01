import {
  AlignContent,
  AlignItems,
  Color,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from "./types";

const isOfTypeFlexWrap = (value: string): value is FlexWrap => {
  return ["nowrap", "wrap", "wrap-reverse"].includes(value);
};

const isOfTypeFlexDirection = (value: string): value is FlexDirection => {
  return ["row", "column", "row-reverse", "column-reverse"].includes(value);
};

const isOfTypeJustifyContent = (value: string): value is JustifyContent => {
  return [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ].includes(value);
};

const isOfTypeAlignItems = (value: string): value is AlignItems => {
  return ["flex-start", "flex-end", "center", "baseline", "stretch"].includes(
    value
  );
};

const isOfTypeAlignContent = (value: string): value is AlignContent => {
  return [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
  ].includes(value);
};

const randomColor = () => {
  const colors: Color[] = ["green", "yellow", "red"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const randomFrogs = () => {
  let arraySize = 11;
  do {
    arraySize = Math.floor(Math.random() * 11) + 6;
  } while (arraySize === 10 || arraySize === 15);
  const randomArray = Array.from({ length: arraySize }, () => randomColor());
  return randomArray;
};

const randomFlexWrap = () => {
  const flexWraps: FlexWrap[] = ["wrap", "wrap-reverse"];
  return flexWraps[Math.floor(Math.random() * flexWraps.length)];
};

const randomFlexDirection = () => {
  const flexDirections: FlexDirection[] = [
    "row",
    "column",
    "row-reverse",
    "column-reverse",
  ];
  return flexDirections[Math.floor(Math.random() * flexDirections.length)];
};

const randomJustifyContent = () => {
  const justifyContents: JustifyContent[] = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ];
  return justifyContents[Math.floor(Math.random() * justifyContents.length)];
};

const randomAlignItems = () => {
  const alignItems: AlignItems[] = [
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ];
  return alignItems[Math.floor(Math.random() * alignItems.length)];
};

const randomAlignContent = () => {
  const alignContents: AlignContent[] = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
  ];
  return alignContents[Math.floor(Math.random() * alignContents.length)];
};

export {
  isOfTypeFlexWrap,
  isOfTypeFlexDirection,
  isOfTypeJustifyContent,
  isOfTypeAlignItems,
  isOfTypeAlignContent,
  randomColor,
  randomFrogs,
  randomFlexWrap,
  randomFlexDirection,
  randomJustifyContent,
  randomAlignItems,
  randomAlignContent,
};
