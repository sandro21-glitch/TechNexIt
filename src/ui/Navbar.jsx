import logo from "/images/logo-no-background.png";
import { Link } from "react-router-dom";
import NavList from "../constants/NavList";
import Hamburger from "hamburger-react";
import { useState } from "react";
import AuthenticatedUser from "./AuthenticatedUser";
import { useSelector } from "react-redux";
import { BsFillBasket2Fill } from "react-icons/bs";
const Navbar = ({ setIsOpenAuth }) => {
  const [isOpen, setOpen] = useState(false);
  const { cart } = useSelector((store) => store.cart);


  return (
    <header className="section-center font-rexFontLight">
      <nav className="py-5 lg:flex-between relative flex flex-col lg:flex-row lg:gap-0 gap-5 ">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="lg:w-[13rem] w-[10rem] cursor-pointer"
            />
          </Link>
          <button className="lg:hidden block">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <div className="flex flex-col">
          <ul
            className={`lg:gap-5 gap-1 flex items-start flex-col lg:flex-row lg:items-end overflow-hidden ${
              isOpen ? "h-44" : "h-0"
            } transition-all ease-in duration-[400ms] w-full lg:h-auto lg:w-auto`}
          >
            {NavList.map((list) => {
              return (
                <li
                  key={list.id}
                  className="flex-center gap-2 flex-row-reverse cursor-pointer text-[1rem] text-black font-medium hover:text-darkBlue transition-colors ease-in duration-150"
                  // onClick={() => handleAuthPage(list.id)}
                >
                  <p>{list.name}</p>
                  <p>{list.icon}</p>
                </li>
              );
            })}
            <li>
              <Link
                to="/cart"
                className="flex-center gap-2 cursor-pointer text-[1rem] text-black font-medium hover:text-darkBlue transition-colors ease-in duration-150"
              >
                <p>
                  <BsFillBasket2Fill className="text-yellow-400 text-[1.8rem]" />
                </p>
                <p className="font-bold">{cart.length}</p>
              </Link>
            </li>
          </ul>
          {/* authenticated user */}
          <AuthenticatedUser setIsOpenAuth={setIsOpenAuth} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
