export const Form = () => {
  return (
    <section className="container mx-auto xl:pt-16 lg:pt-14 pt-10">
      <div className="bg-white p-8 rounded-3xl flex justify-between  flex-wrap">
        <div>
          <img src="formImg.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="md:mt-0 mt-4">
            <h2 className="md:text-[40px] text-[32px] leading-10 font-bold text-[#363636]">
              Оставьте заявку и наш менеджер ответит на все ваши вопросы
            </h2>
          </div>
          <div>
            <form className="-my-2 mt-6">
              <input
                type="email"
                placeholder="Ваш e-mail"
                className="border border-footerGray rounded-3xl px-8 py-4 my-2 w-full"
              />
              <input
                type="phone"
                placeholder="Номер телефона"
                className="border border-footerGray rounded-3xl px-8 py-4 my-2 w-full"
              />
              <textarea
                placeholder="Комментарий"
                className="border border-footerGray rounded-3xl px-8 py-4 my-2 w-full"
                rows={4}
              />
              <div className="bg-color36 w-full text-center py-4 rounded-[36px] mt-10 transition ease-in-out hover:bg-neutral-900">
                <button className="text-white">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
