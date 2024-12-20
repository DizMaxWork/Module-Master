import { useState } from "react";
import { WordsLibrary } from "../../types";
import styles from "./BurgerMenu.module.css";
export const BurgerMenu = ({
  nav,
  setIsMenuVisible,
}: {
  nav: WordsLibrary["nav"];
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [active, setActive] = useState<string>();
  return (
    <div className="App">
      <div className={`${styles.menu} ${styles.visible}`}>
        <div>
          <div className="mb-8">
            <img src="logo.svg" alt="" />
          </div>
          <ul className="menu-list  -my-2.5">
            {nav.map((item, index) => (
              <li key={index} className=" py-2.5 text-sm">
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
        </div>
        <div>
          <button onClick={() => setIsMenuVisible(false)}>
            <img src="close.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
