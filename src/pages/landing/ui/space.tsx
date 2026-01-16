import facebookIcon from "@assets/icons/Facebook.svg";
import linkedinIcon from "@assets/icons/Linkedin.svg";
import twitterIcon from "@assets/icons/Twitter_x.svg";
import earthLanding from "@assets/images/landing/earthLanding.webp";
import starySky from "@assets/images/landing/starySky.webp";
import { useNavigate } from "react-router-dom";
import styles from "./Space.module.css";

export function Space() {
  const navigate = useNavigate();
  const handleEarthClick = () => {
    navigate("/map");
  };

  return (
    <div className='h-screen w-full overflow-hidden bg-white'>

      <img
        src={starySky}
        alt=''
        className='absolute inset-0 h-full w-full object-cover object-center'
      />

      {/* earch section */}
      <section className='relative inset-0 h-full w-full'>
        <button
          className={`${styles.earth} z-100 flex cursor-pointer items-end justify-start`}
          onClick={handleEarthClick}
        >
          <img
            src={earthLanding}
            alt=''
            className={`${styles.earthImg} w-full h-full object-contain object-center`}
            style={{
              filter: "drop-shadow(0px 0px 24px rgba(255, 255, 255, 1))",
            }}
          />
        </button>

        {/* Heading */}
        <h1 className={`${styles.heading} absolute top-0 left-0 right-0 text-center text-[240px] 
        font-bold text-white whitespace-nowrap`}>Luden Labs</h1>

        <section className={`${styles.iconsAndTitleSubtitleContainer} absolute z-10 flex justify-between items-end`}>
          <section className={`${styles.iconsContainer} flex flex-col gap-5`}>
            <div className='flex justify-center items-center rounded-[8px] border border-[#D1D4D4] gap-[10px] bg-white/20 w-[40px] h-[40px]'>
              <img src={twitterIcon} alt='facebook icon' className='object-contain w-[20px] h-[20px]' />

            </div>

            <div className='flex justify-center items-center rounded-[8px] border border-[#D1D4D4] gap-[10px] bg-white/20 w-[40px] h-[40px]'>
              <img src={facebookIcon} alt='facebook icon' className='object-contain w-[20px] h-[20px]' />

            </div>

            <div className='flex justify-center items-center rounded-[8px] border border-[#D1D4D4] gap-[10px] bg-white/20 w-[40px] h-[40px]'>
              <img src={linkedinIcon} alt='facebook icon' className='object-contain w-[20px] h-[20px]' />
            </div>

          </section>

          <section className={`${styles.titleSubtitleContainer} flex flex-col items-end`}>

           

            <h2 className={`${styles.title} leading-18 font-semibold text-[#F39A01]`}>Инновации</h2>

            <h3 className={`${styles.subtitle} font-medium text-white`}>через психотехнологии</h3>

          </section>

        </section>

      </section>

    </div>
  );
}
