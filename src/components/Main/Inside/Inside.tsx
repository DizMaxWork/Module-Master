import { WordsLibrary } from "../../../types";

export const Inside = ({ data }: { data: WordsLibrary["inside"] }) => {
  return (
    <section className="container mx-auto 2xl:pt-24 xl:pt-16 lg:pt-14 pt-10">
      <div className="p-6 bg-white rounded-3xl flex justify-between xl:flex-nowrap flex-wrap">
        <div>
          <h2 className="text-[40px] font-bold text-totalBlack pb-6">
            {data.title}
          </h2>
          <div className="-mb-5">
            {data.text.map((item) => (
              <p className="pb-5">{item}</p>
            ))}
          </div>
        </div>
        <div className="mr-3 xl:block xl:justify-normal xl:w-auto xl:mt-0 mt-10 flex justify-center w-full ">
          <img src="inside.png" alt="Дом" className=" md:h-[410px] h-[194px]" />
        </div>
      </div>
    </section>
  );
};
