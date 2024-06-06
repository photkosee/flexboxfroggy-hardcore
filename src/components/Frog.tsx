import useStore from "../store";

const Frog = ({ color }: { color: "green" | "yellow" | "red" }) => {
  const transitioning = useStore((state) => state.transitioning);

  return (
    <div
      className={`size-1/5 relative overflow-hidden ${
        transitioning && "animate-fly"
      }`}
    >
      <div
        className={`
          bg-[size:60%_60%] w-full h-full bg-center bg-no-repeat
          ${!transitioning && "animate-dance"}
        `}
        style={{ backgroundImage: `url('./frog-${color}.svg')` }}
      />
    </div>
  );
};

export default Frog;
