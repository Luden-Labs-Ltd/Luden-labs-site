import { motion } from "framer-motion";
import clsx from "clsx";

interface ProjectDescriptionSectionProps {
  title?: string;
  bannerText?: string;
  bannerBackgroundImage?: string;
  features?: Array<{
    number: number;
    title: string;
    description: string;
  }>;
  children?: React.ReactNode;
  className?: string;
}

export function ProjectDescriptionSection({
  title = "ОПИСАНИЕ",
  bannerText,
  bannerBackgroundImage,
  features,
  children,
  className,
}: ProjectDescriptionSectionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
      }}
      className={clsx("bg-white", className)}
    >
      {/* Заголовок */}
      <div className='mx-auto max-w-[1920px] px-4 pt-12 pb-8 md:px-8 md:pt-16 md:pb-10 lg:px-12 lg:pt-20 lg:pb-12'>
        <h2 className='font-days-one text-center text-[clamp(32px,3.9vw,75px)] leading-[1.273] font-normal text-[#5e6061] uppercase'>
          {title}
        </h2>
      </div>

      {/* Желтый баннер с текстом */}
      <div
        className='relative overflow-hidden'
        style={
          bannerBackgroundImage
            ? {
                backgroundImage: `url(${bannerBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {
                background: "linear-gradient(to right, #fde68a, #fbbf24)",
              }
        }
      >
        {/* Текст в верхней части баннера */}
        {bannerText && (
          <div className='w-full p-[clamp(32px,3.28vw,63px)] px-[clamp(20px,9.17vw,176px)] pb-[clamp(140px,15.1vw,290px)]'>
            <p className='font-days-one mx-auto max-w-[clamp(900px,81.7vw,1568px)] text-center text-[clamp(16px,1.67vw,32px)] leading-[1.273] font-normal text-white uppercase'>
              {bannerText}
            </p>
          </div>
        )}
      </div>

      {/* Карточки (наполовину на желтом фоне, наполовину на белом) */}
      {features && features.length > 0 && (
        <div className='relative z-10 mx-auto mt-0 max-w-[1920px] px-[clamp(16px,5.21vw,100px)] pb-[clamp(30px,3.13vw,60px)] max-md:mt-0 md:-mt-[100px] lg:-mt-[120px] xl:-mt-[150px] 2xl:-mt-[190px]'>
          <div className='grid grid-cols-1 gap-[clamp(20px,1.98vw,38px)] sm:grid-cols-3'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4 + index * 0.1,
                }}
                className='relative'
              >
                {/* Большой номер в левом верхнем углу, частично перекрывает карточку */}
                <div className='absolute top-[-5px] left-[10px] z-10 md:top-[-10px] md:left-[-10px] lg:top-[-25px] lg:left-[-12px] xl:top-[-35px] xl:left-[-15px] 2xl:top-[-45px] 2xl:left-[-20px]'>
                  <span className='font-montserrat pointer-events-none text-[90px] leading-[1.219] font-semibold text-[#8c8c8c] select-none md:text-[clamp(90px,9.77vw,75px)] lg:text-[clamp(75px,9.65vw,100px)] xl:text-[clamp(100px,11.7vw,160px)] 2xl:text-[clamp(160px,10.42vw,200px)]'>
                    {feature.number}
                  </span>
                </div>

                {/* Карточка с градиентным бордером */}
                <div className='relative h-full rounded-[clamp(10px,0.78vw,15px)] bg-gradient-to-b from-transparent to-[rgba(255,203,30,1)] p-[clamp(2px,0.16vw,3px)]'>
                  <div className='flex h-full min-h-[clamp(280px,19.84vw,381px)] flex-col rounded-[clamp(8px,0.625vw,12px)] bg-white p-[clamp(24px,2.45vw,47px)] px-[clamp(16px,1.61vw,31px)]'>
                    <div className='flex flex-1 flex-col pl-[clamp(40px,4.84vw,93px)]'>
                      <h3 className='font-days-one mb-[clamp(20px,2.45vw,47px)] text-[clamp(18px,1.88vw,36px)] leading-[1.273] font-normal text-[#5e6061] uppercase'>
                        {feature.title}
                      </h3>
                      <p className='font-days-one text-[clamp(14px,1.35vw,26px)] leading-[1.273] font-normal text-[#5e6061]'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Дополнительный контент */}
      {children && (
        <div className='mx-auto max-w-[1920px] px-4 pb-12 md:px-8 md:pb-16 lg:px-12 lg:pb-20'>
          {children}
        </div>
      )}
    </motion.section>
  );
}
