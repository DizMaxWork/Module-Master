import { WordsLibrary } from "../../../types";

export const MainBlock = ({
  mainBlock,
}: {
  mainBlock: WordsLibrary["mainBlock"];
}) => {
  return (
    <section className="bg-main-image bg-no-repeat h-[720px] container mx-auto mt-10 text-white pl-16 pt-32">
      <h1 className="text-5xl font-bold w-3/5 pb-7 leading-[65px]">
        {mainBlock.title}
      </h1>
      <div className="-my-3 w-2/5 mb-20">
        {mainBlock.content.map((content, item) => (
          <p key={item} className="text-white py-3">
            {content}
          </p>
        ))}
      </div>
      <div className="bg-white -mx-6 -my-4 w-64 ml-0.5 rounded-xl text-center">
        <button className=" text-black px-6 py-4 font-semibold">
          {mainBlock.btn}
        </button>
      </div>
    </section>
  );
};
