import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "@/assets/SVG/Furni.svg";
import User from "@/assets/SVG/user.svg";
import Cart from "@/assets/SVG/cart.svg";
import CloseIcon from "@/assets/SVG/close.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
              onClick={closeMenu}
            >
              <img src={Logo} alt="Furni Logo" />
            </Link>
          </div>

         
          <button
            className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <img src={CloseIcon} alt="Close menu" className="w-6 h-6" />
            ) : (
              <span className="block w-6 h-0.5 bg-white relative before:content-[''] before:block before:w-6 before:h-0.5 before:bg-white before:absolute before:-top-2 after:content-[''] after:block after:w-6 after:h-0.5 after:bg-white after:absolute after:-bottom-2"></span>
            )}
          </button>

        
          <nav className="hidden md:flex items-center space-x-8">
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
                <img src={User} alt="User account" />
              </button>
              <button type="button">
                <img src={Cart} alt="Shopping cart" />
              </button>
            </div>
          </nav>
        </div>

       
        <div className={`
          fixed inset-0 z-50 transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
         
          <div 
            className="absolute inset-0 bg-transparent backdrop-blur-xl"
            onClick={closeMenu}
          />
          
         
          <div className={`
            absolute right-0 top-0 h-full w-4/5 max-w-sm bg-header
            shadow-xl overflow-y-auto
            flex flex-col
          `}>
            <div className="p-4 flex justify-between items-center border-background border-b">
              <Link
                to="/"
                className="no-underline hover:text-background transition-colors"
                onClick={closeMenu}
              >
                <img src={Logo} alt="Furni Logo" />
              </Link>
              <button onClick={closeMenu} aria-label="Close menu">
                <img src={CloseIcon} alt="Close menu" className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 p-4">
              <ul className="flex flex-col gap-6">
                {links.map((link) => (
                  <li key={link.label} className="list-none">
                    <Link
                      to={link.path}
                      className="
                        text-background
                        no-underline 
                        font-medium
                        text-lg
                        block
                        py-2
                        hover:text-accent
                        transition-colors
                      "
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-background border-t flex justify-center gap-6">
              <button type="button" className="p-2">
                <img src={User} alt="User account" className="w-6 h-6" />
              </button>
              <button type="button" className="p-2">
                <img src={Cart} alt="Shopping cart" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}