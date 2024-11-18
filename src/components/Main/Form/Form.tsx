import { WordsLibrary } from "../../../types";

export const Form = ({ data }: { data: WordsLibrary["form"] }) => {
  return (
    <section className="container mx-auto xl:pt-16 lg:pt-14 pt-10">
      <div className="bg-white p-8 rounded-3xl flex justify-between  flex-wrap">
        <div>
          <img src="formImg.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="md:mt-0 mt-4">
            <h2 className="md:text-[40px] text-[32px] leading-10 font-bold text-[#363636]">
              {data.title}
            </h2>
          </div>
          <div>
            <form className="-my-2 mt-6">
              <input
                type="email"
                placeholder={data.firstInput}
                className="border border-[#C5C5C5] rounded-3xl px-8 py-4 my-2 w-full"
              />
              <input
                type="phone"
                placeholder={data.secondInput}
                className="border border-[#C5C5C5] rounded-3xl px-8 py-4 my-2 w-full"
              />
              <textarea
                placeholder={data.thirdInput}
                className="border border-[#C5C5C5] rounded-3xl px-8 py-4 my-2 w-full"
                rows={6}
              />
              <div className="mt-10">
                <button className="text-white bg-color36 w-full text-center py-4 rounded-[36px]  transition ease-in-out hover:bg-neutral-900">
                  {data.btn}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
