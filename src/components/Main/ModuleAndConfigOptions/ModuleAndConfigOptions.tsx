import { WordsLibrary } from "../../../types";

export const ModuleAndConfigOptions = ({
  options,
  type,
}: {
  options: WordsLibrary["moduleOptions"] | WordsLibrary["configurations"];
  type: string;
}) => {
  return (
    <>
      {type === "moduleOptions" && (
        <section className="container mx-auto 2xl:pt-24 xl:pt-16" id="module">
          <h1 className="text-[40px] text-totalBlack font-bold">
            {options.title}
          </h1>
          <div className="flex flex-wrap justify-between pt-10 -my-4">
            {(options as WordsLibrary["moduleOptions"]).cards.map((card) => (
              <div className="bg-white rounded-3xl p-4 mb-6 2xl:w-auto xl:w-[24%]">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full object-cover h-full transition ease-in-out hover:scale-110 hover:object-cover hover:w-full hover:h-full"
                  />
                </div>
                <h3 className="text-xl text-totalBlack font-semibold pt-3">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      )}
      {type === "configBlock" && (
        <section className="container mx-auto 2xl:pt-24 xl:pt-16" id="config">
          <h1 className="text-[40px] text-totalBlack font-bold">
            {options.title}
          </h1>
          <div className="flex flex-wrap justify-between pt-10 -my-4 ">
            {(options as WordsLibrary["configurations"]).cards.map((card) => (
              <div className="bg-white rounded-3xl p-4 mb-6 2xl:w-auto xl:w-[32%]">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full object-cover h-full transition ease-in-out hover:scale-110 hover:object-cover hover:w-full hover:h-full"
                  />
                </div>
                <div className="flex justify-between items-center px-3">
                  <h3 className="text-xl text-totalBlack font-semibold pt-3">
                    {card.title}
                  </h3>
                  <img src={card.formImg} alt={card.formImg} className="mt-3" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
