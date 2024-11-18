import { useState } from "react";
import { WordsLibrary } from "../../../types";
import { PopUp } from "../PopUp";

export const SmallMainBlock = ({
  mainBlock,
  data,
}: {
  mainBlock: WordsLibrary["mainBlock"];
  data: WordsLibrary["form"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className="bg-footerGray container mx-auto mt-10 text-white rounded-[46px] md:hidden pb-10"
      id="main"
    >
      <img src="smallMain.png" alt="" className="w-full" />
      <div className="mx-8 mt-4">
        <h1 className="sm:text-4xl font-bold pb-7 sm:leading-[50px] text-[22px]">
          {mainBlock.title}
        </h1>
        <div className="-my-1 md:w-8/12 sm:w-9/12 sm:mb-20 mb-12">
          {mainBlock.content.map((content, item) => (
            <p key={item} className="text-white py-1">
              {content}
            </p>
          ))}
        </div>
        <div className="bg-white -mx-6 -my-4 w-[96%] ml-0.5 rounded-3xl text-center  ">
          <button
            className=" text-black px-6 py-4 font-semibold uppercase"
            onClick={() => setIsOpen(true)}
          >
            {mainBlock.btn}
          </button>
        </div>
      </div>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
    </section>
  );
};
