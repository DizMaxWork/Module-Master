import { useState } from "react";
import { WordsLibrary } from "../../../types";
import { PopUp } from "../PopUp";
import { SmallMainBlock } from "./SmallMainBlock";

export const MainBlock = ({
  mainBlock,
}: {
  mainBlock: WordsLibrary["mainBlock"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        className="bg-no-repeat h-[720px] container mx-auto mt-10 text-white pl-16 pt-12 rounded-3xl md:block hidden"
        style={{ backgroundImage: `url(mainImg.png)` }}
        id="main"
      >
        <h1 className="md:text-5xl text-4xl font-bold md:w-1/2 pb-7 lg:leading-[65px] xl:mt-8 lg:mt-10 md:mt-4 md:leading-[55px] leading-[50px]">
          {mainBlock.title}
        </h1>
        <div className="-my-3 lg:w-2/5 md:w-8/12 w-9/12 mb-20">
          {mainBlock.content.map((content, item) => (
            <p key={item} className="text-white py-3">
              {content}
            </p>
          ))}
        </div>
        <div className="bg-white -mx-6 -my-4 w-64 ml-0.5 rounded-3xl text-center md:block transition ease-in-out hover:bg-neutral-200">
          <button
            className=" text-black px-6 py-4 font-semibold "
            onClick={() => setIsOpen(true)}
          >
            {mainBlock.btn}
          </button>
        </div>
      </section>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} />
      <SmallMainBlock mainBlock={mainBlock} />
    </>
  );
};
