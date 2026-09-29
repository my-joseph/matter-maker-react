import { Handbag, Heart, Menu, Search, User, X } from "lucide-react";
import { useState } from "react";
import IconWrapper from "@/components/ui/IconWrapper";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useCart } from "../cart/context/CartContext";

export default function GlobalNavbar() {
  const [navOpen, setNavOpen] = useState(false);
  function handleMenuClick() {
    setNavOpen((prev) => !prev);
  }
  function handleCloseClick() {
    setNavOpen((prev) => !prev);
  }

  const { cartItem } = useCart();

  return (
    <>
      <nav className=" sticky w-full top-0 border-b h-nav z-50 bg-white">
        <div className=" relative flex justify-between px-4 py-4 md:content-center md:grid md:grid-cols-3 h-full">
          <div className=" w-full h-full flex items-center md:justify-center">
            <Link
              to={"/"}
              className=" grid place-items-center w-62.5 h-6 overflow-hidden shrink-0"
              onClick={() => {
                setNavOpen((navOpen = false));
              }}
            >
              <img
                src="/src/assets/images/logo/matter-maker-logo-text.png"
                alt=""
                className=" w-full h-full object-contain object-center"
              />
            </Link>
          </div>
          <div className=" flex justify-end items-center md:order-first md:justify-start">
            <button
              type="button"
              className=" flex justify-center items-center w-fit h-fit "
            >
              {!navOpen ? (
                <IconWrapper
                  icon={Menu}
                  onClick={() => handleMenuClick()}
                  className=" cursor-pointer"
                ></IconWrapper>
              ) : (
                <IconWrapper
                  icon={X}
                  onClick={() => handleCloseClick()}
                  className=" cursor-pointer"
                ></IconWrapper>
              )}
            </button>
          </div>
          <div className=" flex justify-end items-start">
            <ul className=" hidden gap-2 md:flex">
              <li className="">
                <a href="">
                  <Search></Search>
                </a>
              </li>
              <li className="">
                <a href="">
                  <Heart></Heart>
                </a>
              </li>
              <li className="">
                <a href="">
                  <User></User>
                </a>
              </li>
              <li className=" relative">
                {cartItem.length !== 0 && (
                  <span className=" absolute w-2 h-2 bg-red-600 rounded-full right-0 top-1"></span>
                )}
                <Link to={"/cart"}>
                  <Handbag></Handbag>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 1, x: "-100%" }}
              animate={{ opacity: 0.9, x: "0%" }}
              exit={{ opacity: 1, x: "-100%" }}
              transition={{
                duration: 0.8,
                ease: "anticipate",
              }}
              className=" z-50 fixed bottom-0 w-full h-banner-screen bg-slate-50 opacity-80 md:w-md overflow-y-auto"
            >
              <div className=" flex justify-center p-4">
                <ul
                  className=" flex flex-col w-full font-secondary text-xl font-semibold"
                  onClick={() => {
                    setNavOpen((prev) => !prev);
                  }}
                >
                  <li className=" flex items-center w-full">
                    <Link to={"/cart"}>
                      <motion.div
                        className=" relative py-0.5 w-full"
                        whileHover={{ x: "2.5%", opacity: 0.7 }}
                        transition={{ duration: 0.1, ease: "easeIn" }}
                      >
                        {cartItem.length !== 0 && (
                          <span className=" absolute w-2 h-2 bg-red-600 rounded-full right-0 top-3"></span>
                        )}
                        CART
                      </motion.div>
                    </Link>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      SILENCED LOGO{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      MM CREW{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      HAUNTED DOLL HOUSE{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      "HOTDOG"{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      INTRUSIVE THOUGHTS
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      SILENCED LOGO{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      MM CREW{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      HAUNTED DOLL HOUSE{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      "HOTDOG"{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      INTRUSIVE THOUGHTS
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      SILENCED LOGO{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      MM CREW{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      HAUNTED DOLL HOUSE{" "}
                    </motion.a>
                  </li>
                  <li className=" flex items-center w-full">
                    <motion.a
                      className=" py-0.5 w-full"
                      whileHover={{ x: "2.5%", opacity: 0.7 }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      href=""
                    >
                      "HOTDOG"{" "}
                    </motion.a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
