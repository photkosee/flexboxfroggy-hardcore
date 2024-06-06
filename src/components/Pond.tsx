import {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from "../types";

interface PondProps {
  children?: React.ReactNode;
  flexWrap?: FlexWrap;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
}

const Pond: React.FC<PondProps> = ({
  children,
  flexWrap,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
}) => {
  return (
    <div
      className="flex absolute size-full p-2 z-20 overflow-hidden"
      style={{
        flexWrap: flexWrap ?? "nowrap",
        flexDirection: flexDirection ?? "row",
        alignItems: alignItems ?? "stretch",
        justifyContent: justifyContent ?? "flex-start",
        alignContent: alignContent ?? "stretch",
      }}
    >
      {children}
    </div>
  );
};

export default Pond;
