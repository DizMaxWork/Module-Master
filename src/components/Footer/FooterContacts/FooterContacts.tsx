import { WordsLibrary } from "../../../types";

export const FooterContacts = ({
  data,
}: {
  data: WordsLibrary["footer"]["contactsTitle"];
}) => {
  return (
    <div>
      <h3 className="uppercase font-semibold pb-6">{data}</h3>
      {/* <div>
        <ul className="flex -mx-3 mb-4">
          <li className="px-3">
            <a href="https://web.telegram.org">
              <img src="tg.svg" alt="Telegram" />
            </a>
          </li>
          <li className="px-3">
            <a href="https://www.instagram.com">
              <img src="inst.svg" alt="Instagram" />
            </a>
          </li>
          <li className="px-3">
            <a href="https://vk.com/">
              <img src="vk.svg" alt="VK" />
            </a>
          </li>
          <li className="px-3">
            <a href="https://www.youtube.com">
              <img src="youtube.svg" alt="Youtube" />
            </a>
          </li>
        </ul>
      </div> */}
      <div className="pb-6">
        <a href="mailto:mm@modulmaster.eu">mm@modulmaster.eu</a>
      </div>
      <div>
        <a href="tel:+37122057799" className="text-lg font-bold">
          +371 22 05 77 99
        </a>
      </div>
    </div>
  );
};
