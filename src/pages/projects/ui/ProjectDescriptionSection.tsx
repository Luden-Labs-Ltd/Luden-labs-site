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
      className={clsx("project-description-section bg-white", className)}
    >
      {/* Заголовок */}
      <div className='mx-auto max-w-[1920px] px-4 pt-12 pb-8 md:px-8 md:pt-16 md:pb-10 lg:px-12 lg:pt-20 lg:pb-12'>
        <h2 className='project-description-title text-center uppercase'>
          {title}
        </h2>
      </div>

      {/* Желтый баннер с текстом */}
      <div
        className='project-description-banner relative'
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
          <div className='project-description-banner-padding w-full'>
            <p className='project-description-banner-text text-center uppercase'>
              {bannerText}
            </p>
          </div>
        )}
      </div>

      {/* Карточки (наполовину на желтом фоне, наполовину на белом) */}
      {features && features.length > 0 && (
        <div className='project-description-cards-wrapper relative z-10 mx-auto max-w-[1920px]'>
          <div className='grid grid-cols-1 gap-[clamp(20px,_1.98vw,_38px)] sm:grid-cols-3'>
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
                className='project-feature-card relative'
              >
                {/* Большой номер в левом верхнем углу, частично перекрывает карточку */}
                <div className='project-feature-number-wrapper'>
                  <span className='project-feature-number'>
                    {feature.number}
                  </span>
                </div>

                {/* Карточка с градиентным бордером */}
                <div className='project-feature-card-border h-full'>
                  <div className='project-feature-card-inner flex h-full flex-col'>
                    <div className='project-feature-content-padding flex flex-1 flex-col'>
                      <h3 className='project-feature-title project-feature-title-margin uppercase'>
                        {feature.title}
                      </h3>
                      <p className='project-feature-description'>
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
