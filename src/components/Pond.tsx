interface PondProps {
  children?: React.ReactNode;
}

const Pond: React.FC<PondProps> = ({ children }) => {
  return <div className="flex absolute size-full p-2 z-20">{children}</div>;
};

export default Pond;
