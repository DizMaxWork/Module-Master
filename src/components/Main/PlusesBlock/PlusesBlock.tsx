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
          <div key={index} className="bg-white rounded-3xl px-8 py-6 w-[22%]">
            <h2 className="font-bold pb-4 text-3xl">{block.title}</h2>
            <p>{block.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
