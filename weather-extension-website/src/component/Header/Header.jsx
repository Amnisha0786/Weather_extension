import Image from "next/image";
import logo from "../../../Images/icon.png"

const Header = () => {
  return (
    <header className="p-2 bg-primary font-semibold text-[21px] text-white">
      <div className="flex items-end">
          <Image src={logo} width={60} height={60} />
          <h1 className="px-1 uppercase hidden lg:block">Weather</h1>
      </div>
    </header>
  );
};

export default Header;
