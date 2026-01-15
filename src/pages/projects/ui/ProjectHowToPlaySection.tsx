import { motion } from "framer-motion";
import clsx from "clsx";

interface HowToPlayCard {
  image?: string;
  text: string;
}

interface ProjectHowToPlaySectionProps {
  title?: string;
  cards: HowToPlayCard[];
  className?: string;
  borderColor?: string;
}

export function ProjectHowToPlaySection({
  title = "КАК ИГРАТЬ?",
  cards,
  className,
  borderColor,
}: ProjectHowToPlaySectionProps) {
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

      {/* Карточки */}
      <div className='mx-auto max-w-[1920px] px-[clamp(16px,5.21vw,100px)] pb-[clamp(30px,3.13vw,60px)]'>
        <div className='grid grid-cols-1 gap-[clamp(20px,1.98vw,38px)] sm:grid-cols-3'>
          {cards.map((card, index) => (
            <motion.div
              key={index}
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
              className='group relative'
            >
              {/* Рамка с hover эффектом */}
              <div
                className='group/card relative h-full overflow-hidden rounded-[15px] border-2 bg-white transition-colors hover:bg-[var(--border-color)]'
                style={
                  {
                    borderColor: borderColor || "#ffda5e",
                    "--border-color": borderColor || "#ffda5e",
                  } as React.CSSProperties & { "--border-color": string }
                }
              >
                <div className='flex h-full min-h-[clamp(300px,25vw,480px)] flex-col bg-transparent'>
                  {/* Изображение */}
                  {card.image && (
                    <div className='box-border flex h-[clamp(180px,15vw,288px)] w-full items-center justify-center overflow-hidden bg-white p-[21px] transition-colors group-hover/card:bg-[var(--border-color)]'>
                      <img
                        src={card.image}
                        alt=''
                        className={clsx(
                          "h-full w-full rounded-[15px] object-cover",
                          index === 2 && "object-center",
                        )}
                      />
                    </div>
                  )}

                  {/* Текст */}
                  <div className='flex flex-1 flex-col justify-center p-[clamp(24px,2.45vw,47px)] px-[clamp(16px,1.61vw,31px)]'>
                    <p className='font-days-one m-0 text-center text-[clamp(14px,1.35vw,26px)] leading-[1.273] font-normal text-[#5e6061] transition-colors group-hover/card:text-white'>
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
