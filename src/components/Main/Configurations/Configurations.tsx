export const Configurations = () => {
  return (
    <section className="container mx-auto pt-24">
      <h1 className="text-[40px] text-totalBlack font-bold">
        {moduleOptions.title}
      </h1>
      <div className="flex flex-wrap justify-between pt-10 -my-4">
        {moduleOptions.cards.map((card) => (
          <div className="bg-white rounded-3xl p-4 mb-6">
            <div>
              <img src={card.img} alt={card.title} />
            </div>
            <h3 className="text-xl text-totalBlack font-semibold pt-3">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
