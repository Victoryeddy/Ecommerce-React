import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/assets/SVG/Furni.svg";
import User from "@/assets/SVG/user.svg";
import Cart from "@/assets/SVG/cart.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/#aboutUs", label: "About us" },
    { path: "/#services", label: "Services" },
    { path: "/#blogs", label: "Blog" },
    { path: "/#contact", label: "Contact us" },
  ];

  return (
    <>
      <div className="pt-10">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <div className="">
            <Link
              to="/"
              className="no-underline hover:text-primary-500 transition-colors"
            >
              <img src={Logo} alt="" />
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white relative before:content-[''] before:block before:w-6 before:h-0.5 before:bg-white before:absolute before:-top-2 after:content-[''] after:block after:w-6 after:h-0.5 after:bg-white after:absolute after:-bottom-2"></span>
          </button>

          <nav
            className={`hidden md:flex items-center space-x-8 ${
              isMenuOpen
                ? "flex flex-col absolute top-16 left-0 right-0 bg-white p-4 shadow-lg z-50"
                : ""
            }`}
          >
            <ul className="flex flex-col md:flex-row gap-6 space-x-4">
              {links.map((link) => (
                <li key={link.label} className="list-none">
                  <Link
                    to={link.path}
                    className="
              text-background 
              no-underline 
              font-medium
              relative
              pb-1
              after:content-['']
              after:absolute
              after:top-6
              after:left-0
              after:w-0
              after:h-[3px]
              after:bg-accent
              hover:after:w-full
              after:transition-all
              after:duration-300
            "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex lg:ms-[3rem] gap-4 mt-4 md:mt-0 space-x-3">
              <button type="button">
                <img src={User} alt="" />
              </button>
              <button type="button">
                <img src={Cart} alt="" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
