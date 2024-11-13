import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/languageSlice";
import { useState } from "react";

export const HeaderBtn = ({ defaultValue }: { defaultValue: string }) => {
  const dispatch = useDispatch();
  const language = useSelector(
    (state: {
      language: {
        language: "RU" | "EN" | "ET" | "DE" | "NL" | "PT" | "ES" | "SV";
      };
    }) => state.language.language
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    dispatch(setLanguage(value));
    setIsOpen(false); // Закрыть список после выбора
  };

  return (
    <div className="-mx-2 border rounded-3xl p-1 border-[#ABABAB] lg:block hidden">
      <div className="flex items-center">
        <span className="pr-2">{language}</span>
        <div className="relative">
          {/* Кнопка для отображения выбранного языка */}
          <button
            className="cursor-pointer bg-darkGrey transition hover:bg-stone-600 text-white px-2 py-0.5 rounded-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {defaultValue}
          </button>

          {/* Выпадающий список */}
          {isOpen && (
            <ul className="absolute bg-darkGrey text-white rounded-2xl mt-1 w-full py-1">
              <li
                className="px-2 py-1 cursor-pointer transition rounded-2xl hover:bg-stone-600 hover:bg-transparent"
                onClick={() => handleSelect("RU")}
              >
                Russia
              </li>
              <li
                className="px-2 py-1 cursor-pointer transition rounded-2xl hover:bg-stone-600 hover:bg-transparent"
                onClick={() => handleSelect("EN")}
              >
                English
              </li>
              <li
                className="px-2 py-1 cursor-pointer transition rounded-2xl hover:bg-stone-600 hover:bg-transparent"
                onClick={() => handleSelect("ET")}
              >
                Estonian
              </li>
              <li
                className="px-2 py-1 cursor-pointer transition rounded-2xl hover:bg-stone-600 hover:bg-transparent"
                onClick={() => handleSelect("DE")}
              >
                German
              </li>
              <li
                className="px-2 py-1 cursor-pointer transition rounded-2xl hover:bg-stone-600 hover:bg-transparent"
                onClick={() => handleSelect("NL")}
              >
                Dutch
              </li>
              <li
                className="px-2 py-1 cursor-pointer transition rounded-2xl hover:bg-stone-600 hover:bg-transparent"
                onClick={() => handleSelect("PT")}
              >
                Portuguese
              </li>
              <li
                className="px-2 py-1 cursor-pointer transition rounded-2xl hover:bg-stone-600 hover:bg-transparent"
                onClick={() => handleSelect("ES")}
              >
                Spanish
              </li>
              <li
                className="px-2 py-1 cursor-pointer transition rounded-2xl hover:bg-stone-600 hover:bg-transparent"
                onClick={() => handleSelect("SV")}
              >
                Sweden
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
