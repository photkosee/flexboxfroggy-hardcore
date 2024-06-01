type Color = "red" | "green" | "yellow";
type FlexWrap = "nowrap"| "wrap" | "wrap-reverse";
type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type JustifyContent =
  "flex-start" |
  "flex-end" |
  "center" |
  "space-between" |
  "space-around" |
  "space-evenly"
;
type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
type AlignContent = 
  "flex-start" |
  "flex-end" |
  "center" |
  "space-between" |
  "space-around" |
  "space-evenly" |
  "stretch"
;

export { Color, FlexWrap, FlexDirection, JustifyContent, AlignItems, AlignContent };
