import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import earthImage from "@/shared/assets/images/about-hero/earth.png";
import starsImage from "@/shared/assets/images/about-hero/stars.png";
import clsx from "clsx";

interface ProjectAboutSectionProps {
  className?: string;
}

export function ProjectAboutSection({ className }: ProjectAboutSectionProps) {
  const navigate = useNavigate();

  return (
    <section className={clsx("about-hero-section relative w-full", className)}>
      {/* Фоновое изображение Stars (звездное небо) */}
      <div className='about-hero-background absolute inset-0'>
        <img
          src={starsImage}
          alt='Stars'
          className='h-full w-full object-cover'
        />
      </div>

      {/* Изображение Earth (планета) с эффектом свечения */}
      <div className='about-hero-earth absolute inset-0 flex items-center justify-center'>
        <img
          src={earthImage}
          alt='Earth'
          className='about-hero-earth-image h-auto w-full max-w-[1814px] object-contain'
          style={{
            filter: "drop-shadow(0px 4px 134.2px rgba(255, 255, 255, 0.8))",
          }}
        />
      </div>

      {/* Текст о Luden Labs - поверх звезд и планеты */}
      <div className='about-hero-text-top'>
        <p className='about-hero-text max-w-[1299px] text-center text-white'>
          Мы Luden Labs и мы сосредоточены на создании игровых сценариев,
          которые улучшают и совершенствуют человеческое взаимодействие, делая
          мир более взаимосвязанным и гармоничным.
        </p>
      </div>

      {/* Белая карточка - поверх планеты, внизу секции */}
      <div className='about-hero-bottom-white'>
        <div className='about-hero-bottom-white-card flex w-full flex-col items-center gap-[18px]'>
          <p className='about-hero-bottom-text-white text-center'>
            Для того чтобы вернуться на карту и продолжить изучать наши кейсы,
            переходи по кнопке ниже
          </p>
          <Button
            variant='primary'
            onClick={() => navigate("/")}
            className='about-hero-button rounded-[15px]'
            style={{ backgroundColor: "#ACD97C", color: "#ffffff" }}
          >
            Вернуться
          </Button>
        </div>
      </div>
    </section>
  );
}
