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
} from "@/shared/assets/icons/target-audience";
import { COLOR_SCHEMES } from "@/entities/project";

interface TargetAudienceCard {
  icon?: "hands" | "puzzle" | "group" | "check" | React.ReactNode;
  text: string;
  gradient?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  hands: <HandsIcon />,
  puzzle: <PuzzleIcon />,
  group: <GroupIcon />,
  check: <CheckCircleIcon />,
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
  const isFourCards = cards.length === 4;

  const gradientsFromScheme = () => {
    if (!colorScheme) {
      return gradients;
    }
    const schemeGradient = COLOR_SCHEMES[colorScheme].gradient;
    const gradientUrl =
      typeof schemeGradient === "string" ? schemeGradient : schemeGradient.src;
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
        <div
          className={clsx(
            "grid gap-[clamp(20px,2vw,30px)]",
            isFourCards
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:[&>:nth-child(4)]:col-span-1 lg:[&>:nth-child(4)]:col-start-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
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
                <div className='z-[1] flex w-full items-center gap-[clamp(16px,2vw,24px)] max-sm:flex-col max-sm:text-center'>
                  <div className='flex flex-shrink-0 items-center justify-center'>
                    {typeof card.icon === "string"
                      ? iconMap[card.icon as keyof typeof iconMap]
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
    </motion.section>
  );
}
