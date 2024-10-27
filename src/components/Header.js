import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className=" absolute top-5 flex items-center gap-14 left-[5%] z-50 w-[90%]">
      <div className="w-[80px]">
        {" "}
        <img src="/Logo.png" />{" "}
      </div>
      <ul className="flex items-center gap-8 text-white text-[1.3rem] font-medium ">
        <li>
          <Link
            to="/"
            className=" cursor-pointer hover:text-secondary duration-300 block"
          >
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className=" cursor-pointer hover:text-secondary duration-300 block"
          >
            {" "}
            About{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className=" cursor-pointer hover:text-secondary duration-300 block"
          >
            {" "}
            Contact{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className=" cursor-pointer hover:text-secondary duration-300 block"
          >
            {" "}
            Find Store{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
