import { motion } from 'framer-motion';
import clsx from 'clsx';

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
  title = 'ОПИСАНИЕ',
  bannerText,
  bannerBackgroundImage,
  features,
  children,
  className,
}: ProjectDescriptionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className={clsx('project-description-section bg-white', className)}
    >
      {/* Заголовок */}
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 lg:pb-12">
        <h2 className="project-description-title text-center uppercase">
          {title}
        </h2>
      </div>

      {/* Желтый баннер с текстом */}
      <div
        className="project-description-banner relative"
        style={
          bannerBackgroundImage
            ? {
                backgroundImage: `url(${bannerBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {
                background: 'linear-gradient(to right, #fde68a, #fbbf24)',
              }
        }
      >
        {/* Текст в верхней части баннера */}
        {bannerText && (
          <div className="w-full project-description-banner-padding">
            <p className="project-description-banner-text text-center uppercase">
              {bannerText}
            </p>
          </div>
        )}
      </div>

      {/* Карточки (наполовину на желтом фоне, наполовину на белом) */}
      {features && features.length > 0 && (
        <div className="max-w-[1920px] mx-auto project-description-cards-wrapper relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[clamp(20px,_1.98vw,_38px)]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="project-feature-card relative"
              >
                {/* Большой номер в левом верхнем углу, частично перекрывает карточку */}
                <div className="project-feature-number-wrapper">
                  <span className="project-feature-number">{feature.number}</span>
                </div>

                {/* Карточка с градиентным бордером */}
                <div className="project-feature-card-border h-full">
                  <div className="project-feature-card-inner h-full flex flex-col">
                    <div className="project-feature-content-padding flex-1 flex flex-col">
                      <h3 className="project-feature-title project-feature-title-margin uppercase">
                        {feature.title}
                      </h3>
                      <p className="project-feature-description">
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
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20">
          {children}
        </div>
      )}
    </motion.section>
  );
}

