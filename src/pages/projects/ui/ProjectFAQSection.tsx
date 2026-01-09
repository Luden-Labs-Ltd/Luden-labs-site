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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      className={clsx("project-faq-section bg-white", className)}
    >
      {/* Баннер с заголовком */}
      <div
        className='project-faq-banner relative'
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
        <div className='project-faq-banner-padding w-full'>
          <h2 className='project-faq-banner-title text-center uppercase'>
            {title}
          </h2>
        </div>
      </div>

      {/* Аккордеоны */}
      <div className='project-faq-accordions-wrapper mx-auto max-w-[1920px]'>
        <div className='project-faq-accordions-container'>
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className='project-faq-item'>
                <button
                  type='button'
                  onClick={() => toggleItem(index)}
                  className='project-faq-question-button'
                  aria-expanded={isOpen}
                >
                  <span className='project-faq-question-text'>
                    {item.question}
                  </span>
                  <span className='project-faq-toggle-button'>
                    {isOpen ? (
                      <span className='project-faq-toggle-icon'>−</span>
                    ) : (
                      <span className='project-faq-toggle-icon'>+</span>
                    )}
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
                      className='project-faq-answer-wrapper'
                    >
                      <div className='project-faq-answer-content'>
                        <p className='project-faq-answer-text'>{item.answer}</p>
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
