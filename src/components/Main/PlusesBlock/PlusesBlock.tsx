import { WordsLibrary } from "../../../types";

export const PlusesBlock = ({
  plusesBlock,
}: {
  plusesBlock: WordsLibrary["plusesBlock"];
}) => {
  return (
    <section className="container mx-auto pt-12">
      <div className="flex justify-between flex-wrap">
        {plusesBlock.map((block, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl px-8 py-6 xl:w-[22%] md:w-[48%] w-full xl:my-0 my-2"
          >
            <h2 className="font-bold pb-4 md:text-3xl text-2xl">
              {block.title}
            </h2>
            <p className="md:text-base md:font-normal text-sm font-light">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
