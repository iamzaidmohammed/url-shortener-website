import logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";

const Header = () => {
  const menu = useRef();

  const showMenu = () => {
    const showMenu = menu.current.classList;
    showMenu.toggle("hidden");
  };
  return (
    <header className="flex items-center justify-between md:justify-start py-4 relative">
      <img src={logo} alt="" />
      <div className="hidden md:block" ref={menu}>
        <div className="w-60 h-68 px-5 bg-DarkViolet md:bg-inherit rounded-md absolute flex flex-col top-12 right-6 text-center md:w-screen md:static md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col font-bold text-white md:text-GrayText md:flex-row md:gap-x-5 md:basis-6/12">
            <a
              href="#"
              className="mt-5 mb-2 md:mt-0 md:mb-0 md:hover:text-black transition-all"
            >
              Features
            </a>
            <a
              href="#"
              className="my-2 md:my-0 md:hover:text-black transition-all"
            >
              Pricing
            </a>
            <a
              href="#"
              className="mt-2 mb-5 md:my-0 md:hover:text-black transition-all"
            >
              Resources
            </a>
          </div>
          <hr className="bg-DarkViolet opacity-40 md:hidden" />
          <div className="flex flex-col pb-8 md:pb-0 font-bold text-white md:text-black md:flex-row md:items-center md:gap-x-7 md:basis-6/12">
            <a
              href="#"
              className="mb-3 mt-3 md:mt-0 md:mb-0 md:text-GrayText md:hover:text-black transition-all"
            >
              Login
            </a>
            <a href="#" className="py-2 rounded-3xl bg-Cyan md:px-5 text-white">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="cursor-pointer md:hidden">
        <MenuIcon onClick={showMenu} />
      </div>
    </header>
  );
};

export default Header;
