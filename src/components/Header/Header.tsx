import { useState } from "react";
import { WordsLibrary } from "../../types";
import { HeaderBtn } from "./HeaderBtn";
import { BurgerMenu } from "./BurgerMenu";

export const Header = ({
  nav,
  defaultValue,
}: {
  nav: WordsLibrary["nav"];
  defaultValue: string;
}) => {
  // const [state, setState] = useState("Главная");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const [active, setActive] = useState<string>();
  return (
    <header className="xl:w-[1353px] container mx-auto bg-whiteToHeader rounded-[36px] px-6 mt-4 py-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="mt-1.5 lg:hidden block">
          <button onClick={toggleMenu}>
            <img src="burger.svg" alt="" />
          </button>
        </div>
        {isMenuVisible && (
          <nav>
            <BurgerMenu setIsMenuVisible={setIsMenuVisible} nav={nav} />
          </nav>
        )}
        {!isMenuVisible && (
          <>
            <div>
              <img src="logo.svg" alt="Лого" />
            </div>
            <nav className=" -mx-3 lg:block hidden">
              <ul className="flex">
                {nav.map((item, index) => (
                  <li
                    key={index}
                    className="px-3 hover:font-bold lg:text-base text-sm"
                  >
                    <a
                      href={item.link}
                      onClick={() => setActive(item.title)}
                      className={
                        active === item.title ? "font-bold" : "" // Применяем стиль для активной ссылки
                      }
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center ">
              <a href="tel:+37122057799" className="lg:mr-6 font-bold text-lg">
                <span className="xl:block hidden">+371 220 57 799</span>
                <img
                  src="phoneIcon.svg"
                  alt="Phone"
                  className="lg:hidden block"
                />
              </a>
              <HeaderBtn defaultValue={defaultValue} />
            </div>
          </>
        )}
      </div>
    </header>
  );
};
