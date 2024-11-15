export const PopUp = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-3xl w-[375px]">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-gray-500 hover:text-gray-700"
              >
                <img src="close.svg" alt="" />
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#363636]">
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
                />
                <div className="bg-color36 w-full text-center py-4 rounded-[36px] mt-10">
                  <button className="text-white">Отправить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
