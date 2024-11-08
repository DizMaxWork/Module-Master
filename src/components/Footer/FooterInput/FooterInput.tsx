import { WordsLibrary } from "../../../types";

export const FooterInput = ({
  data,
}: {
  data: WordsLibrary["footer"]["rightBlock"];
}) => {
  return (
    <div className="w-[42%]">
      <h2 className="uppercase font-semibold pb-7 text-3xl">
        {data.footerTitle}
      </h2>
      <div className="flex justify-between w-[95%] items-center">
        <div>
          <input
            type="email"
            placeholder={data.inputPlaceholder}
            className="rounded-3xl pl-6 py-4 w-[434px] border-none outline-none text-totalBlack"
          />
        </div>
        <button className="rounded-3xl bg-white py-2.5 px-6">
          <img src="arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  );
};
