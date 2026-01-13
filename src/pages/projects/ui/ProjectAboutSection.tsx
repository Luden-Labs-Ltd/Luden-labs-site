import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import earthImage from "@/shared/assets/images/pages/projects/about-hero/earth.png?format=webp";
import starsImage from "@/shared/assets/images/pages/projects/about-hero/stars.png?format=webp";
import clsx from "clsx";

interface ProjectAboutSectionProps {
  className?: string;
}

export function ProjectAboutSection({ className }: ProjectAboutSectionProps) {
  const navigate = useNavigate();

  return (
    <section
      className={clsx(
        "relative flex h-[560px] w-full flex-col overflow-hidden md:h-[770px] lg:h-[930px] xl:h-[1090px] 2xl:h-[clamp(1220px,69.27vw,1330px)]",
        className,
      )}
    >
      {/* Фоновое изображение Stars (звездное небо) */}
      <div className='absolute inset-0 top-0 left-0 z-1 h-[560px] w-full md:h-[770px] lg:h-[930px] xl:h-[1090px] 2xl:h-full'>
        <img
          src={starsImage}
          alt='Stars'
          className='h-full w-full object-cover'
        />
      </div>

      {/* Изображение Earth (планета) с эффектом свечения */}
      <div className='pointer-events-none absolute top-[90px] left-0 z-2 flex h-[600px] w-full items-center justify-center pt-0 pl-[clamp(20px,3.38vw,64.9px)] md:top-[230px] md:h-[700px] lg:top-[270px] lg:h-[850px] xl:top-[290px] xl:h-[950px] 2xl:top-[clamp(340px,22.4vw,430px)] 2xl:h-[1080px]'>
        <img
          src={earthImage}
          alt='Earth'
          className='h-auto w-full max-w-[1814px] object-contain'
          style={{
            filter: "drop-shadow(0px 4px 134.2px rgba(255, 255, 255, 0.8))",
          }}
        />
      </div>

      {/* Текст о Luden Labs - поверх звезд и планеты */}
      <div className='relative z-10 min-h-[150px] px-[20px] pt-[30px] pr-0 md:min-h-[180px] md:px-[30px] md:pt-[50px] lg:px-[clamp(40px,8vw,100px)] lg:pt-[60px] xl:px-[clamp(100px,15vw,200px)] xl:pt-[70px] 2xl:px-[clamp(200px,16.22vw,311.51px)] 2xl:pt-[clamp(60px,4.17vw,80px)]'>
        <p className='font-days-one m-0 mx-auto max-w-[1299px] text-center text-[18px] leading-[1.2177031834920247em] font-normal text-white md:text-[clamp(20px,3vw,24px)] lg:text-[clamp(24px,3vw,28px)] xl:text-[clamp(28px,2.5vw,32px)] 2xl:text-[36px]'>
          Мы Luden Labs и мы сосредоточены на создании игровых сценариев,
          которые улучшают и совершенствуют человеческое взаимодействие, делая
          мир более взаимосвязанным и гармоничным.
        </p>
      </div>

      {/* Белая карточка - поверх планеты, внизу секции */}
      <div className='absolute top-[360px] right-0 left-0 z-20 flex w-full items-start justify-center md:top-[540px] lg:top-[640px] xl:top-[740px] 2xl:top-[clamp(860px,53.13vw,1020px)]'>
        <div className='m-0 flex w-full max-w-none flex-col items-center gap-[18px] rounded-t-[30px] bg-white p-[40px_20px_50px] md:rounded-t-[40px] md:p-[60px_40px] lg:rounded-t-[50px] lg:p-[80px_clamp(60px,12vw,200px)] xl:rounded-t-[55px] xl:p-[90px_clamp(150px,25vw,300px)] 2xl:rounded-t-[60px] 2xl:p-[80px_clamp(200px,16.22vw,311.51px)_100px]'>
          <p className='font-days-one m-0 max-w-[1013px] text-center text-[18px] leading-[1.22] font-normal tracking-[0%] text-[#404040] md:text-[21px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px]'>
            Для того чтобы вернуться на карту и продолжить изучать наши кейсы,
            переходи по кнопке ниже
          </p>
          <Button
            variant='primary'
            onClick={() => navigate("/")}
            className='font-days-one rounded-[10px] border-none p-[8.5px_15px] text-center text-[18px] leading-[1.22] font-normal text-white transition-[background-color] duration-200 md:rounded-[15px] md:p-[15px_25px] md:text-[21px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px]'
            style={{ backgroundColor: "#ACD97C", color: "#ffffff" }}
          >
            Вернуться
          </Button>
        </div>
      </div>
    </section>
  );
}
