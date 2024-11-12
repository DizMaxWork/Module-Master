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
  };

  return (
    <div className="w-1/2 mx-auto md:hidden sm:block">
      <Slider {...settings}>
        {data.imgs.map((img) => (
          <div>
            <img src={img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
