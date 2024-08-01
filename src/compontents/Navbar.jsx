import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon  } from '@heroicons/react/24/solid'
import { useState } from "react";
const Navbar = () => {
  const Links = [
    { name: "হোম", route: "/" },
    { name: "মালা জপ", route: "/mala-jope" },
    { name: "মন্ত্র", route: "/montro" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed z-50">
      <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to="/">মালা জপ</Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 -mt-2 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="md:ml-8 md:my-0 my-7 font-semibold hover:text-blue-200"
            >
              <NavLink
                to={link.route}
                key={index}
                className={({ isActive, isPending }) => (
                  isPending ? "" : "", isActive ? "text-blue-200" : ""
                )}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
