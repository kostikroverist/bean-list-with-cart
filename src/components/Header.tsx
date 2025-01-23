import Bucket from "./Bucket";

const Header = () => {
  return (
    <header className="w-full h-[75px] bg-black flex justify-center items-center">
      <Bucket isEmpty={false} />
    </header>
  );
};

export default Header;
