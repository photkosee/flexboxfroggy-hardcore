const Frog = ({ color }: { color: "green" | "yellow" | "red" }) => {
  return (
    <div className="size-1/5 relative overflow-hidden">
      <div
        className="bg-[size:60%_60%] w-full h-full bg-center
        bg-no-repeat animate-dance"
        style={{ backgroundImage: `url('./frog-${color}.svg')` }}
      />
    </div>
  );
};

export default Frog;
