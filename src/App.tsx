import { useEffect, useState } from "react";

import Editor from "./components/Editor";
import Pond from "./components/Pond";
import Frog from "./components/Frog";
import Lilypad from "./components/Lilypad";

import useStore from "./store";
import { Color } from "./types";
import { randomFrogs } from "./helper";

function App() {
  const [home, setHome] = useState<Color[]>(["green"]);
  const {
    flexWrap,
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
    destFlexWrap,
    destFlexDirection,
    destJustifyContent,
    destAlignItems,
    destAlignContent,
    randomDest,
  } = useStore();

  useEffect(() => {
    const frogs = randomFrogs();
    setHome(frogs);
    randomDest();
  }, [randomDest]);

  useEffect(() => {
    const frogs = randomFrogs();
    setHome(frogs);
  }, [
    destFlexWrap,
    destFlexDirection,
    destJustifyContent,
    destAlignItems,
    destAlignContent,
  ]);

  return (
    <>
      <div
        className="w-full h-full max-w-[100vw] min-h-screen flex flex-col
        md:flex-row md:justify-between bg-[#43A047]"
      >
        <div
          className="order-2 md:order-1 px-10 py-3 flex flex-col gap-3
          min-w-[300px] w-full flex-1 relative md:py-10"
        >
          <img
            src="./logo.webp"
            className="h-[80px] self-center md:self-start md:h-[93px]"
          />
          <p className="text-white text-[14px] md:mb-2">
            Bring the frogs back to their lilypads by using CSS flexbox
            properties.
          </p>
          <Editor />
          <a
            href="https://github.com/photkosee/flexboxfroggy-hardcore"
            target="_blank"
            className="text-white text-[13px] underline md:mt-1 self-center"
          >
            GitHub
          </a>
        </div>

        <div
          className="md:sticky relative top-0 size-[calc(50vw)] min-h-[300px] min-w-[300px]
          max-h-[100vh] max-w-[100vh] overflow-hidden md:order-2 self-center md:self-start
          rounded-b-xl md:rounded-br-none bg-[#1F5768]"
        >
          <Pond
            flexWrap={destFlexWrap}
            flexDirection={destFlexDirection}
            justifyContent={destJustifyContent}
            alignItems={destAlignItems}
            alignContent={destAlignContent}
          >
            {home.map((color, index) => (
              <Lilypad key={index} color={color} />
            ))}
          </Pond>
          <Pond
            flexWrap={flexWrap}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            alignItems={alignItems}
            alignContent={alignContent}
          >
            {home.map((color, index) => (
              <Frog key={index} color={color} />
            ))}
          </Pond>
        </div>
      </div>
    </>
  );
}

export default App;
