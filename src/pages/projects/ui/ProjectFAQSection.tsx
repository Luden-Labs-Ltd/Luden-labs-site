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
  className?: string;
}

export function ProjectFAQSection({
  title = "ВОПРОСЫ",
  items,
  bannerBackgroundImage,
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
          <h2 className='font-days-one font-normal text-[28px] md:text-[36px] lg:text-[54px] xl:text-[65px] 2xl:text-[100px] leading-[1.273] text-white text-center uppercase m-0'>
            {title}
          </h2>
        </div>
      </div>

      {/* Аккордеоны */}
      <div className='mx-auto max-w-[1920px] p-[34px] px-[clamp(16px,5.21vw,100px)] pb-[clamp(40px,4.17vw,80px)] md:p-[45px] md:px-[clamp(16px,2.08vw,24px)] md:pb-[clamp(40px,5.21vw,50px)] lg:p-[60px] lg:px-[clamp(24px,2.32vw,40px)] lg:pb-[clamp(50px,4.83vw,60px)] xl:p-[80px] xl:px-[clamp(40px,2.93vw,60px)] xl:pb-[clamp(60px,4.39vw,70px)] 2xl:p-[100px] 2xl:px-[clamp(60px,3.13vw,100px)] 2xl:pb-[clamp(70px,3.65vw,80px)]'>
        <div className='flex flex-col gap-[clamp(16px,1.56vw,30px)] mt-0'>
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className='bg-gradient-to-r from-[#fde68a] to-[#fbbf24] rounded-[clamp(10px,0.78vw,15px)] overflow-hidden'
              >
                <button
                  type='button'
                  onClick={() => toggleItem(index)}
                  className='w-full flex flex-row items-center justify-between p-[clamp(20px,2.08vw,40px)] px-[clamp(24px,2.5vw,48px)] bg-transparent border-none cursor-pointer text-left gap-[clamp(20px,2.08vw,40px)]'
                  aria-expanded={isOpen}
                >
                  <span className='font-days-one font-normal text-[clamp(16px,1.67vw,32px)] leading-[1.273] text-white flex-1'>
                    {item.question}
                  </span>
                  <span className='w-[clamp(40px,4.17vw,80px)] h-[clamp(40px,4.17vw,80px)] min-w-[clamp(40px,4.17vw,80px)] min-h-[clamp(40px,4.17vw,80px)] rounded-full bg-white border-none flex items-center justify-center flex-shrink-0 relative'>
                    <span className='font-sans font-normal text-[clamp(32px,3.33vw,64px)] leading-[1] text-[#fbbf24] flex items-center justify-center m-0 p-0 w-full h-full absolute top-0 left-0 translate-y-[-2px]'>
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
                        <p className='font-days-one font-normal text-[clamp(14px,1.35vw,26px)] leading-[1.273] text-white m-0'>
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
