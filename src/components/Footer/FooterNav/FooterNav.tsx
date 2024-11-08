import { WordsLibrary } from "../../../types";

export const FooterNav = ({
  data,
}: {
  data: WordsLibrary["footer"]["nav"];
}) => {
  return (
    <div>
      <h3 className="uppercase font-semibold pb-6">{data.title}</h3>
      <div>
        <ul className="-my-1.5">
          {data.links.map((link) => (
            <li className="py-1.5">{link}</li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};
