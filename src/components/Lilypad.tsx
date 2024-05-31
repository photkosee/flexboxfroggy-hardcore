import { useEffect, useState } from "react";

const Lilypad = ({ color }: { color: "green" | "yellow" | "red" }) => {
  const [degrees, setDegrees] = useState(0);
  const [size, setSize] = useState(1);

  useEffect(() => {
    const possibleSizes = [88, 91, 94, 97];
    const randomDegrees = Math.floor(Math.random() * 360);
    const randomSize =
      possibleSizes[Math.floor(Math.random() * possibleSizes.length)];
    setDegrees(randomDegrees);
    setSize(randomSize);
  }, []);

  return (
    <div className="size-1/5 relative overflow-hidden">
      <div
        className="bg-[url('./lilypad-green.svg')]
        w-full h-full bg-center bg-no-repeat"
        style={{
          transform: `rotate(${degrees}deg)`,
          backgroundImage: `url('./lilypad-${color}.svg')`,
          backgroundSize: `${size}% ${size}%`,
        }}
      />
    </div>
  );
};

export default Lilypad;
