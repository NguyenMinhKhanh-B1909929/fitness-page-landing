import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const pages = ["Home", "Benefits", "Our Classes", "Contact Us"];
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} flex-between fixed z-20 w-full py-6`}
      >
        <div className="flex-between mx-auto w-5/6">
          <div className="flex-between w-full gap-16">
            <img src={Logo} alt="logo" />
            {isAboveMediumScreens ? (
              <div className="flex-between w-full">
                <div className="flex-between gap-8 text-sm">
                  {pages.map((page) => (
                    <Link
                      key={page}
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                <div className="flex-between gap-8">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsToggleMenu(!isToggleMenu)}
              >
                <Bars3Icon className="size-6 text-white"></Bars3Icon>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreens && isToggleMenu && (
        <div className="bottom00 fixed right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsToggleMenu(!isToggleMenu)}>
              <XMarkIcon className="size-6 text-gray-400"></XMarkIcon>
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {pages.map((page) => (
              <Link
                key={page}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
