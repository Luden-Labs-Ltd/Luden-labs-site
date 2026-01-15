import { motion } from "framer-motion";
import clsx from "clsx";
import redOrangeGradient from "@/shared/assets/images/pages/projects/gradients/red-orange-gradient.png?format=webp";
import yellowOrangeGradient from "@/shared/assets/images/pages/projects/gradients/yellow-orange-gradient.png?format=webp";
import cyanBlueGradient from "@/shared/assets/images/pages/projects/gradients/cyan-blue-gradient.png?format=webp";
import purpleBlueGradient from "@/shared/assets/images/pages/projects/gradients/purple-blue-gradient.png?format=webp";
import {
  HandsIcon,
  PuzzleIcon,
  GroupIcon,
  CheckCircleIcon,
  PathIcon,
  MapIcon,
  QRCodeIcon,
  CertificateIcon,
  DonationIcon,
} from "@/shared/assets/icons/target-audience";
import { COLOR_SCHEMES } from "@/entities/project";

interface TargetAudienceCard {
  icon?:
    | "hands"
    | "puzzle"
    | "group"
    | "check"
    | "path"
    | "map"
    | "qrcode"
    | "certificate"
    | "donation"
    | React.ReactNode;
  text: string;
  gradient?: string;
}

const renderIcon = (iconKey: string, className?: string): React.ReactNode => {
  const iconProps = { className };
  switch (iconKey) {
    case "hands":
      return <HandsIcon width={80} height={80} {...iconProps} />;
    case "puzzle":
      return <PuzzleIcon width={80} height={80} {...iconProps} />;
    case "group":
      return <GroupIcon width={80} height={80} {...iconProps} />;
    case "check":
      return <CheckCircleIcon width={80} height={80} {...iconProps} />;
    case "path":
      return <PathIcon width={80} height={80} {...iconProps} />;
    case "map":
      return <MapIcon width={80} height={80} {...iconProps} />;
    case "qrcode":
      return <QRCodeIcon width={80} height={80} {...iconProps} />;
    case "certificate":
      return <CertificateIcon width={80} height={80} {...iconProps} />;
    case "donation":
      return <DonationIcon width={80} height={80} {...iconProps} />;
    default:
      return null;
  }
};

interface ProjectTargetAudienceSectionProps {
  title?: string;
  cards: TargetAudienceCard[];
  className?: string;
  colorScheme?: "scheme1" | "scheme2" | "scheme3" | "scheme4";
}

const gradients = [
  redOrangeGradient,
  yellowOrangeGradient,
  cyanBlueGradient,
  purpleBlueGradient,
];

export function ProjectTargetAudienceSection({
  title = "КОМУ ЭТО ПОДХОДИТ?",
  cards,
  className,
  colorScheme,
}: ProjectTargetAudienceSectionProps) {
  const gradientsFromScheme = () => {
    if (!colorScheme) {
      return gradients;
    }
    const schemeGradient = COLOR_SCHEMES[colorScheme].gradient;
    const gradientUrl =
      typeof schemeGradient === "string"
        ? schemeGradient
        : (schemeGradient as { src: string }).src;
    return [gradientUrl, gradientUrl, gradientUrl, gradientUrl];
  };

  const gradientsToUse = gradientsFromScheme();

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
      className={clsx("bg-white py-[clamp(40px,4vw,60px)]", className)}
    >
      <div className='mx-auto max-w-[1920px] px-[clamp(16px,2vw,24px)]'>
        {/* Заголовок */}
        <div className='mb-[clamp(30px,3vw,40px)]'>
          <h2 className='font-days-one text-center text-[clamp(32px,3.9vw,75px)] leading-[1.273] font-normal text-[#5e6061] uppercase'>
            {title}
          </h2>
        </div>

        {/* Карточки */}
        <div className='flex justify-center'>
          <div
            className={clsx(
              "grid gap-[clamp(20px,2vw,30px)]",
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {cards.map((card, index) => {
              const gradient =
                card.gradient || gradientsToUse[index % gradientsToUse.length];

              return (
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
                  className='project-target-audience-card relative flex min-h-[clamp(180px,20vw,240px)] items-center overflow-hidden rounded-[clamp(12px,1.5vw,20px)] p-[clamp(24px,3vw,40px)]'
                  style={{
                    backgroundImage: `url(${gradient})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className='z-1 flex w-full items-center gap-[clamp(16px,2vw,24px)] max-sm:flex-col max-sm:text-center'>
                    <div className='flex shrink-0 items-center justify-center [&>svg]:h-[80px] [&>svg]:w-[80px] sm:[&>svg]:h-[50px] sm:[&>svg]:w-[50px] md:[&>svg]:h-[50px] md:[&>svg]:w-[50px] lg:[&>svg]:h-[80px] lg:[&>svg]:w-[80px]'>
                      {typeof card.icon === "string"
                        ? renderIcon(card.icon)
                        : card.icon}
                    </div>
                    <p className='m-0 font-sans text-[clamp(16px,1.8vw,22px)] leading-[1.4] font-medium text-white'>
                      {card.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
