import { WordsLibrary } from "../../../types";

export const SmallMainBlock = ({
  mainBlock,
}: {
  mainBlock: WordsLibrary["mainBlock"];
}) => {
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
        <div className="-my-3 md:w-8/12 sm:w-9/12 sm:mb-20 mb-12">
          {mainBlock.content.map((content, item) => (
            <p key={item} className="text-white py-3">
              {content}
            </p>
          ))}
        </div>
        <div className="bg-white -mx-6 -my-4 w-[93%] ml-0.5 rounded-xl text-center  ">
          <button className=" text-black px-6 py-4 font-semibold ">
            {mainBlock.btn}
          </button>
        </div>
      </div>
    </section>
  );
};
