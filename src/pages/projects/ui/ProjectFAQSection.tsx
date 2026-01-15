import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface FAQItem {
  question: string;
  answer: string;
}

interface ProjectFAQSectionProps {
  title?: string;
  items: FAQItem[];
  bannerBackgroundImage?: string;
  iconColor?: string;
  className?: string;
}

export function ProjectFAQSection({
  title = "ВОПРОСЫ",
  items,
  bannerBackgroundImage,
  iconColor = "#fbbf24",
  className,
}: ProjectFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      {/* Баннер с заголовком */}
      <div
        className='relative overflow-hidden rounded-none'
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
        <div className='w-full p-[34px] px-[clamp(20px,9.17vw,176px)]'>
          <h2 className='font-days-one m-0 text-center text-[28px] leading-[1.273] font-normal text-white uppercase md:text-[36px] lg:text-[54px] xl:text-[65px] 2xl:text-[100px]'>
            {title}
          </h2>
        </div>
      </div>

      {/* Аккордеоны */}
      <div className='mx-auto max-w-[1920px] p-[34px] px-[clamp(16px,5.21vw,100px)] pb-[clamp(40px,4.17vw,80px)] md:p-[45px] md:px-[clamp(16px,2.08vw,24px)] md:pb-[clamp(40px,5.21vw,50px)] lg:p-[60px] lg:px-[clamp(24px,2.32vw,40px)] lg:pb-[clamp(50px,4.83vw,60px)] xl:p-[80px] xl:px-[clamp(40px,2.93vw,60px)] xl:pb-[clamp(60px,4.39vw,70px)] 2xl:p-[100px] 2xl:px-[clamp(60px,3.13vw,100px)] 2xl:pb-[clamp(70px,3.65vw,80px)]'>
        <div className='mt-0 flex flex-col gap-[clamp(16px,1.56vw,30px)]'>
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className='overflow-hidden rounded-[clamp(10px,0.78vw,15px)]'
                style={{
                  background: iconColor
                    ? `linear-gradient(to right, ${iconColor}80, ${iconColor})`
                    : "linear-gradient(to right, #fde68a, #fbbf24)",
                }}
              >
                <button
                  type='button'
                  onClick={() => toggleItem(index)}
                  className='flex w-full cursor-pointer flex-row items-center justify-between gap-[clamp(20px,2.08vw,40px)] border-none bg-transparent p-[clamp(20px,2.08vw,40px)] px-[clamp(24px,2.5vw,48px)] text-left'
                  aria-expanded={isOpen}
                >
                  <span className='font-days-one flex-1 text-[clamp(16px,1.67vw,32px)] leading-[1.273] font-normal text-white'>
                    {item.question}
                  </span>
                  <span className='relative flex h-[clamp(40px,4.17vw,80px)] min-h-[clamp(40px,4.17vw,80px)] w-[clamp(40px,4.17vw,80px)] min-w-[clamp(40px,4.17vw,80px)] shrink-0 items-center justify-center rounded-full border-none bg-white'>
                    <span
                      className='absolute top-0 left-0 m-0 flex h-full w-full translate-y-[-2px] items-center justify-center p-0 font-sans text-[clamp(32px,3.33vw,64px)] leading-none font-normal'
                      style={{ color: iconColor }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className='overflow-hidden'
                    >
                      <div className='p-0 px-[clamp(24px,2.5vw,48px)] pb-[clamp(20px,2.08vw,40px)]'>
                        <p className='font-days-one m-0 text-[clamp(14px,1.35vw,26px)] leading-[1.273] font-normal text-white'>
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
