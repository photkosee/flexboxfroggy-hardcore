import { useState } from "react";
import {
  isOfTypeAlignContent,
  isOfTypeAlignItems,
  isOfTypeFlexDirection,
  isOfTypeFlexWrap,
  isOfTypeJustifyContent,
} from "../helper";
import useStore from "../store";
import {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from "../types";

/**
 * The code is quite messy here.
 * These chunks of input components can be refactored into a single component.
 */

const Editor = () => {
  const {
    destFlexWrap,
    destFlexDirection,
    destJustifyContent,
    destAlignItems,
    destAlignContent,
    updateFlexWrap,
    updateFlexDirection,
    updateJustifyContent,
    updateAlignItems,
    updateAlignContent,
    resetFlexWrap,
    resetFlexDirection,
    resetJustifyContent,
    resetAlignItems,
    resetAlignContent,
    randomDest,
  } = useStore();
  const [currFlexWrap, setCurrFlexWrap] = useState("");
  const [currFlexDirection, setCurrFlexDirection] = useState("");
  const [currJustifyContent, setCurrJustifyContent] = useState("");
  const [currAlignItems, setCurrAlignItems] = useState("");
  const [currAlignContent, setCurrAlignContent] = useState("");

  const handleFlexWrap = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setCurrFlexWrap(value);
    if (isOfTypeFlexWrap(value)) {
      updateFlexWrap(value as FlexWrap);
    } else {
      resetFlexWrap();
    }
  };

  const handleFlexDirection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setCurrFlexDirection(value);
    if (isOfTypeFlexDirection(value)) {
      updateFlexDirection(value as FlexDirection);
    } else {
      resetFlexDirection();
    }
  };

  const handleJustifyContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setCurrJustifyContent(value);
    if (isOfTypeJustifyContent(value)) {
      updateJustifyContent(value as JustifyContent);
    } else {
      resetJustifyContent();
    }
  };

  const handleAlignItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setCurrAlignItems(value);
    if (isOfTypeAlignItems(value)) {
      updateAlignItems(value as AlignItems);
    } else {
      resetAlignItems();
    }
  };

  const handleAlignContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setCurrAlignContent(value);
    if (isOfTypeAlignContent(value)) {
      updateAlignContent(value as AlignContent);
    } else {
      resetAlignContent();
    }
  };

  return (
    <div className="text-[15px] font-[#777] relative">
      <div
        className="h-[235px] relative py-1 pr-3 bg-[#e0e0e0]
        rounded-md overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 h-full py-1 pl-3 pr-2
          text-right bg-[#999] text-[#d5d5d5]"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <div key={n}>
              {n}
              <br />
            </div>
          ))}
        </div>

        <div className="text-[#777] pl-11 font-[monospace]">
          {`#pond {`}
          <br />
          &nbsp;&nbsp;{`display: flex;`}
          <br />
          <div
            className={`
              ml-[16px] items-center
              ${destFlexWrap === "nowrap" ? "hidden" : "flex"}
            `}
          >
            {`flex-wrap:`}
            <input
              type="text"
              className="h-[20px] w-[calc(100%-100.5px)] ml-2
              outline-none overflow-auto"
              onChange={handleFlexWrap}
              value={currFlexWrap}
            />
            {`;`}
          </div>
          <div
            className={`
              ml-[16px] items-center
              ${destFlexDirection === "row" ? "hidden" : "flex"}
            `}
          >
            {`flex-direction:`}
            <input
              type="text"
              className="h-[20px] w-[calc(100%-142px)] ml-2
              outline-none overflow-auto"
              onChange={handleFlexDirection}
              value={currFlexDirection}
            />
            {`;`}
          </div>
          <div
            className={`
              ml-[16px] items-center
              ${destJustifyContent === "flex-start" ? "hidden" : "flex"}
            `}
          >
            {`justify-content:`}
            <input
              type="text"
              className="h-[20px] w-[calc(100%-150px)] ml-2
              outline-none overflow-auto"
              onChange={handleJustifyContent}
              value={currJustifyContent}
            />
            {`;`}
          </div>
          <div
            className={`
              ml-[16px] items-center
              ${destAlignItems === "stretch" ? "hidden" : "flex"}
            `}
          >
            {`align-items:`}
            <input
              type="text"
              className="h-[20px] w-[calc(100%-117px)] ml-2
              outline-none overflow-auto"
              onChange={handleAlignItems}
              value={currAlignItems}
            />
            {`;`}
          </div>
          <div
            className={`
              ml-[16px] items-center
              ${destAlignContent === "stretch" ? "hidden" : "flex"}
            `}
          >
            {`align-content:`}
            <input
              type="text"
              className="h-[20px] w-[calc(100%-133.5px)] ml-2
              outline-none overflow-auto"
              onChange={handleAlignContent}
              value={currAlignContent}
            />
            {`;`}
          </div>
          {`}`}
        </div>

        <button
          className="absolute bottom-3 right-3 py-1.5 px-3.5 bg-red-600
          text-white rounded-[4px] hover:bg-red-600/90 disabled:bg-red-600/50
          animate-button disabled:animate-none"
          disabled={
            !(
              (currFlexWrap === destFlexWrap || destFlexWrap === "nowrap") &&
              (currFlexDirection === destFlexDirection ||
                destFlexDirection === "row") &&
              (currJustifyContent === destJustifyContent ||
                destJustifyContent === "flex-start") &&
              (currAlignItems === destAlignItems ||
                destAlignItems === "stretch") &&
              (currAlignContent === destAlignContent ||
                destAlignContent === "stretch")
            )
          }
          onClick={() => {
            randomDest();
            setCurrFlexWrap("");
            setCurrFlexDirection("");
            setCurrJustifyContent("");
            setCurrAlignItems("");
            setCurrAlignContent("");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Editor;
