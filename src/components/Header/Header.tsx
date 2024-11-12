import { useState } from "react";
import { WordsLibrary } from "../../types";
import { HeaderBtn } from "./HeaderBtn";

export const Header = ({
  nav,
  defaultValue,
}: {
  nav: WordsLibrary["nav"];
  defaultValue: string;
}) => {
  // const [state, setState] = useState("Главная");
  const [active, setActive] = useState<string>();
  return (
    <header className="container mx-auto bg-whiteToHeader rounded-3xl px-6 mt-4 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div>
          <img src="logo.svg" alt="Лого" />
        </div>
        <nav className="flex -mx-3">
          <ul className="flex">
            {nav.map((item, index) => (
              <li key={index} className="px-3 hover:font-bold">
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
        <div className="flex items-center">
          <a href="tel:+37122057799" className="mr-6 font-bold text-lg">
            +371 220 57 799
          </a>
          <HeaderBtn defaultValue={defaultValue} />
        </div>
      </div>
    </header>
  );
};
