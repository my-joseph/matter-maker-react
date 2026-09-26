import { Handbag, Heart, Menu, Search, User } from "lucide-react";

export default function GlobalNavbar() {
  return (
    <>
      <nav className=" w-full relative top-0 border-b h-nav">
        <div className=" flex justify-between px-4 py-4 content-center md:grid md:grid-cols-3">
          <div className=" w-full h-full flex items-center md:justify-center">
            <a
              href="/index.html"
              className=" grid place-items-center w-62.5 h-6 overflow-hidden shrink-0 md:w-70"
            >
              <img
                src="/src/assets/images/logo/matter-maker-logo-text.png"
                alt=""
                className=" w-full h-full object-contain object-center"
              />
            </a>
          </div>
          <div className=" flex justify-end items-center md:order-first md:justify-start">
            <Menu></Menu>
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
              <li className="">
                <a href="">
                  <Handbag></Handbag>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
