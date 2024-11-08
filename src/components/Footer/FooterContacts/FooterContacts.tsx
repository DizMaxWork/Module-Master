import { WordsLibrary } from "../../../types";

export const FooterContacts = ({
  data,
}: {
  data: WordsLibrary["footer"]["contactsTitle"];
}) => {
  return (
    <div>
      <h3 className="uppercase font-semibold pb-6">{data}</h3>
      <div>
        <ul className="flex -mx-3 mb-4">
          <li className="px-3">
            <img src="/ModulMaster/tg.svg" alt="Telegram" />
          </li>
          <li className="px-3">
            <img src="/ModulMaster/inst.svg" alt="Instagram" />
          </li>
          <li className="px-3">
            <img src="/ModulMaster/vk.svg" alt="VK" />
          </li>
          <li className="px-3">
            <img src="/ModulMaster/youtube.svg" alt="Youtube" />
          </li>
        </ul>
      </div>
      <div className="pb-6">support@yoursite.com</div>
      <div>
        <a href="tel:+37122057799" className="text-lg font-bold">
          +371 220 57 799
        </a>
      </div>
    </div>
  );
};
