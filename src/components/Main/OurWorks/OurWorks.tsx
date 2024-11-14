import { WordsLibrary } from "../../../types";

export const OurWorks = ({ data }: { data: WordsLibrary["ourWorks"] }) => {
  return (
    <section
      className="container mx-auto 2xl:pt-24 xl:pt-16 lg:pt-14 md:pt-10 md:block hidden"
      id="ourWorks"
    >
      <div className="bg-white md:p-6 p-0 rounded-3xl">
        <h2 className="pb-8 md:text-[40px] text-[32px] font-bold">
          {data.title}
        </h2>
        <div className="flex flex-wrap justify-between -my-4">
          {data.imgs.map((img) => (
            <div className="py-4 2xl:w-auto xl:w-[32%]">
              <img src={img} alt={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
