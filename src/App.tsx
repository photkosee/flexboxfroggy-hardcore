import Editor from "./components/Editor";
import Pond from "./components/Pond";
import Frog from "./components/Frog";
import Lilypad from "./components/Lilypad";

function App() {
  return (
    <>
      <div
        className="w-full h-full max-w-[100vw] min-h-screen flex flex-col
        md:flex-row md:justify-between bg-[#43A047]"
      >
        <div
          className="order-2 md:order-1 p-10 flex flex-col gap-3
          min-w-[300px] w-full flex-1"
        >
          <h1 className="uppercase text-white self-center md:self-start">
            Flexbox Froggy
          </h1>
          <p className="text-white text-[14px]">
            Bring the frogs back to their lilypads by using the flexbox CSS
            properties
          </p>
          <Editor />
        </div>

        <div
          className="md:sticky relative top-0 size-[calc(50vw)] min-h-[300px] min-w-[300px]
          max-h-[100vh] max-w-[100vh] overflow-hidden md:order-2 self-center md:self-start
          rounded-b-xl md:rounded-br-none bg-[#1F5768]"
        >
          <Pond>
            <Lilypad color="green" />
            <Lilypad color="red" />
            <Lilypad color="yellow" />
            <Lilypad color="green" />
          </Pond>
          <Pond>
            <Frog color="green" />
            <Frog color="red" />
            <Frog color="yellow" />
            <Frog color="green" />
          </Pond>
        </div>
      </div>
    </>
  );
}

export default App;
