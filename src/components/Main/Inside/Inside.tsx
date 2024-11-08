import { WordsLibrary } from "../../../types";

export const Inside = ({ data }: { data: WordsLibrary["inside"] }) => {
  return (
    <section className="container mx-auto pt-24">
      <div className="p-6 bg-white rounded-3xl flex justify-between">
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
        <div className="mr-3">
          <img
            src="/ModuleMaster/inside.png"
            alt="Дом"
            className=" h-[410px]"
          />
        </div>
      </div>
    </section>
  );
};
