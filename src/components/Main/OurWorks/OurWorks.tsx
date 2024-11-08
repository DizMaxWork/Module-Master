import { WordsLibrary } from "../../../types";

export const OurWorks = ({ data }: { data: WordsLibrary["ourWorks"] }) => {
  return (
    <section className="container mx-auto pt-24">
      <div className="bg-white p-6 rounded-3xl">
        <h2 className="pb-8 text-[40px] font-bold">{data.title}</h2>
        <div className="flex flex-wrap justify-between -my-4">
          {data.imgs.map((img) => (
            <div className="py-4">
              <img src={img} alt={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
