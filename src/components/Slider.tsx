import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { WordsLibrary } from "../types";
export const SliderIMG = ({ data }: { data: WordsLibrary["ourWorks"] }) => {
  const settings = {
    dots: true, // Показ точек навигации
    infinite: true, // Бесконечный цикл
    speed: 500, // Скорость анимации в миллисекундах
    slidesToShow: 1, // Количество слайдов, показываемых одновременно
    slidesToScroll: 1, // Количество слайдов, прокручиваемых за один раз
    arrows: false,
  };

  return (
    <div className=" container mx-auto md:hidden block pt-8 bg-white p-6 rounded-3xl mt-12">
      <h2 className="pb-4 text-[40px] font-bold">{data.title}</h2>
      <Slider {...settings}>
        {data.imgs.map((img) => (
          <div>
            <img
              src={img}
              alt=""
              className="h-[316px] text-center w-full px-1"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
