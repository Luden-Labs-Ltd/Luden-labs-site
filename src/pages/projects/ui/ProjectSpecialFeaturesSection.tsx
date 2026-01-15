import { motion } from "framer-motion";
import clsx from "clsx";
import {
  GamepadIcon,
  PaintIcon,
  NavigationIcon,
  PhoneIcon,
  LightbulbIcon,
  HeadphonesIcon,
} from "@/shared/assets/icons/special-features";

interface SpecialFeature {
  icon?: string;
  iconKey?: string;
  title: string;
}

interface ProjectSpecialFeaturesSectionProps {
  title?: string;
  features: SpecialFeature[];
  accentColor?: string;
  className?: string;
}

const DEFAULT_ACCENT_COLOR = "#ff6b35";

const hexToRgba = (hexColor: string, alpha: number) => {
  const normalizedHex = hexColor.replace("#", "");
  if (normalizedHex.length !== 6) {
    return `rgba(255, 107, 53, ${alpha})`;
  }

  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export function ProjectSpecialFeaturesSection({
  title = "ЧТО В ЭТОМ ОСОБЕННОГО?",
  features,
  accentColor,
  className,
}: ProjectSpecialFeaturesSectionProps) {
  const resolvedAccentColor = accentColor || DEFAULT_ACCENT_COLOR;
  const accentSoft = hexToRgba(resolvedAccentColor, 0.12);

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
      style={
        {
          ["--accent-color" as string]: resolvedAccentColor,
          ["--accent-soft" as string]: accentSoft,
        } as React.CSSProperties
      }
    >
      <div className='mx-auto max-w-[1920px] px-4 pt-12 pb-8 md:px-8 md:pt-16 md:pb-10 lg:px-12 lg:pt-20 lg:pb-12'>
        <h2 className='font-days-one text-center text-[clamp(32px,3.9vw,75px)] leading-[1.273] font-normal text-[#5e6061] uppercase'>
          {title}
        </h2>
      </div>

      <div className='mx-auto max-w-[1920px] px-[clamp(16px,5.21vw,100px)] pb-[clamp(30px,3.13vw,60px)]'>
        <div className='grid grid-cols-1 gap-[clamp(20px,1.98vw,38px)] md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
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
              className='relative'
            >
              <div
                className='relative h-full overflow-hidden rounded-[15px] border-2 bg-white transition-colors'
                style={{
                  borderColor: resolvedAccentColor,
                }}
              >
                <div className='flex h-full min-h-[clamp(200px,18vw,345px)] flex-col items-center justify-center bg-transparent p-[clamp(24px,2.45vw,47px)] px-[clamp(16px,1.61vw,31px)] text-center'>
                  {(() => {
                    let IconComponent = null;
                    
                    if (feature.iconKey === "navigation") {
                      IconComponent = NavigationIcon;
                    } else if (feature.iconKey === "phone") {
                      IconComponent = PhoneIcon;
                    } else if (feature.iconKey === "lightbulb") {
                      IconComponent = LightbulbIcon;
                    } else if (feature.iconKey === "headphones") {
                      IconComponent = HeadphonesIcon;
                    } else if (feature.iconKey === "gamepad") {
                      IconComponent = GamepadIcon;
                    } else if (feature.iconKey === "paint") {
                      IconComponent = PaintIcon;
                    } else if (feature.title.includes("Геймификация")) {
                      IconComponent = GamepadIcon;
                    } else if (feature.title.includes("Командная динамика")) {
                      IconComponent = PaintIcon;
                    }

                    if (IconComponent) {
                      const iconProps: Record<string, unknown> = {
                        width: 80,
                        height: 80,
                        className: "",
                      };

                      if (feature.iconKey === "navigation") {
                        iconProps.mainColor = "#020202";
                        iconProps.stripesColor = resolvedAccentColor;
                      } else if (feature.iconKey === "phone") {
                        iconProps.topPhoneColor = "#020202";
                        iconProps.bottomPhoneColor = "#020202";
                        iconProps.accentColor = resolvedAccentColor;
                      } else if (feature.iconKey === "lightbulb") {
                        iconProps.bulbColor = "#020202";
                        iconProps.paintColor = resolvedAccentColor;
                      } else if (feature.iconKey === "headphones") {
                        iconProps.headphonesColor = "#020202";
                        iconProps.leftEarCupColor = resolvedAccentColor;
                        iconProps.rightEarCupColor = resolvedAccentColor;
                      } else if (feature.iconKey === "gamepad") {
                        iconProps.tieColor = resolvedAccentColor;
                      } else if (feature.iconKey === "paint") {
                        iconProps.paintColor = "#020202";
                        iconProps.splashColor = resolvedAccentColor;
                      } else {
                        iconProps.mainColor = "#020202";
                        iconProps.accentColor = resolvedAccentColor;
                      }

                      return (
                        <div className='flex flex-col items-center'>
                          <div className='mb-[clamp(16px,1.56vw,30px)] flex h-[clamp(60px,6.25vw,120px)] w-[clamp(60px,6.25vw,120px)] items-center justify-center'>
                            <IconComponent {...iconProps} />
                          </div>
                          <p
                            className='font-days-one m-0 text-center text-[clamp(14px,1.35vw,26px)] leading-[1.273] font-normal'
                            style={{ color: resolvedAccentColor }}
                          >
                            {feature.title}
                          </p>
                        </div>
                      );
                    }

                    if (feature.icon) {
                      return (
                        <>
                          <div className='mb-[clamp(16px,1.56vw,30px)] flex h-[clamp(60px,6.25vw,120px)] w-[clamp(60px,6.25vw,120px)] items-center justify-center'>
                            <img
                              src={feature.icon}
                              alt=''
                              className='h-full w-full object-contain'
                            />
                          </div>
                          <p className='font-days-one m-0 text-center text-[clamp(14px,1.35vw,26px)] leading-[1.273] font-normal text-(--accent-color)'>
                            {feature.title}
                          </p>
                        </>
                      );
                    }

                    return (
                      <p className='font-days-one m-0 text-center text-[clamp(14px,1.35vw,26px)] leading-[1.273] font-normal text-(--accent-color)'>
                        {feature.title}
                      </p>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
