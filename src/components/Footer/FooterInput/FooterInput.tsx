import { WordsLibrary } from "../../../types";

export const FooterInput = ({
  data,
}: {
  data: WordsLibrary["footer"]["rightBlock"];
}) => {
  return (
    <div className="md:w-[42%] md:mt-0 mt-8">
      <h2 className="uppercase font-semibold pb-7 lg:text-3xl text-xl">
        {data.footerTitle}
      </h2>
      <div className="flex justify-between md:w-[95%] items-center">
        <div>
          <input
            type="email"
            placeholder={data.inputPlaceholder}
            className="rounded-3xl pl-6 py-4 2xl:w-[434px] xl:w-[350px] md:w-[200px] sm:w-[400px] w-[224px] border-none outline-none text-totalBlack"
          />
        </div>
        <button className="rounded-3xl bg-white py-2.5 px-6">
          <img src="arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  );
};
