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
}

export function ProjectHowToPlaySection({
  title = "КАК ИГРАТЬ?",
  cards,
  className,
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
      <div className="mx-auto max-w-[1920px] px-4 pt-12 pb-8 md:px-8 md:pt-16 md:pb-10 lg:px-12 lg:pt-20 lg:pb-12">
        <h2 className="font-days-one font-normal text-[clamp(32px,3.9vw,75px)] text-[#5e6061] leading-[1.273] text-center uppercase">
          {title}
        </h2>
      </div>

      {/* Карточки */}
      <div className="mx-auto max-w-[1920px] px-[clamp(16px,5.21vw,100px)] pb-[clamp(30px,3.13vw,60px)]">
        <div className="grid grid-cols-1 gap-[clamp(20px,1.98vw,38px)] sm:grid-cols-3">
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
              className="relative group"
            >
              {/* Рамка с hover эффектом */}
              <div className="relative h-full rounded-[15px] border-2 border-[#ffda5e] bg-white transition-colors overflow-hidden hover:bg-[#ffda5e]">
                <div className="flex h-full min-h-[clamp(300px,25vw,480px)] flex-col bg-transparent">
                  {/* Изображение */}
                  {card.image && (
                    <div className="w-full h-[clamp(180px,15vw,288px)] overflow-hidden flex items-center justify-center bg-white p-[21px] box-border transition-colors group-hover:bg-[#ffda5e]">
                      <img
                        src={card.image}
                        alt=""
                        className={clsx(
                          "w-full h-full object-cover rounded-[15px]",
                          index === 2 && "object-center"
                        )}
                      />
                    </div>
                  )}

                  {/* Текст */}
                  <div className="flex flex-1 flex-col justify-center p-[clamp(24px,2.45vw,47px)] px-[clamp(16px,1.61vw,31px)]">
                    <p className="m-0 font-days-one font-normal text-[clamp(14px,1.35vw,26px)] leading-[1.273] text-[#5e6061] text-center transition-colors group-hover:text-white">
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
