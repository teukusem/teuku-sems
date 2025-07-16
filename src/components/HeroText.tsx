import { useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../constants/animations';
import { SCROLL_MULTIPLIERS } from '../constants/ui';
import { useScroll } from '../hooks/useScroll';
import { useResponsive } from '../hooks/useResponsive';

interface HeroTextProps {
  splashComplete: boolean;
}

export const HeroText = ({ splashComplete }: HeroTextProps) => {
  const [frontEndHovered, setFrontEndHovered] = useState(false);
  const scrollY = useScroll();
  const { isMobile } = useResponsive();

  const frontEndStyles = {
    x: Math.max(-60, Math.min(0, -scrollY * SCROLL_MULTIPLIERS.HERO_TEXT)),
    fontSize: isMobile ? '65px' : '85px'
  };

  const developerStyles = {
    x: Math.min(60, Math.max(0, scrollY * SCROLL_MULTIPLIERS.HERO_TEXT)),
    fontSize: isMobile ? '65px' : '85px'
  };

  const profileImageStyles = {
    x: -scrollY * SCROLL_MULTIPLIERS.PROFILE_IMAGE,
    rotate: -scrollY * SCROLL_MULTIPLIERS.PROFILE_ROTATION,
    opacity: splashComplete ? 1 : 0
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full gap-4 overflow-hidden md:items-center max-w-7xl"
      variants={containerVariants}
      initial="hidden"
      animate={splashComplete ? "visible" : "hidden"}
    >
      <div className="flex flex-col items-start w-full gap-2 px-2 md:items-center md:gap-4 md:px-0">
        <motion.span
          variants={itemVariants}
          className="w-full font-extrabold leading-none text-left uppercase break-words transition-colors duration-300 cursor-pointer md:text-center hover:text-red-500"
          whileHover={{ color: '#EF4444' }}
          onMouseEnter={() => setFrontEndHovered(true)}
          onMouseLeave={() => setFrontEndHovered(false)}
          style={frontEndStyles}
        >
          Front-End
        </motion.span>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center w-full my-2"
          style={{ margin: '0.5rem 0' }}
        >
          <svg viewBox="0 0 100 32" width="100%" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <polyline points="0,0 100,0 0,32 100,32" stroke="white" strokeWidth="3" fill="none" />
          </svg>
        </motion.div>

        <div className="flex flex-col items-start w-full gap-0 md:items-end">
          <motion.span
            variants={itemVariants}
            className="w-full font-extrabold leading-none text-left uppercase break-words transition-colors duration-300 cursor-pointer md:text-center"
            whileHover={{ color: '#FACC15' }}
            animate={{
              color: frontEndHovered ? '#FACC15' : '#EF4444'
            }}
            transition={{ duration: 0.3 }}
            style={developerStyles}
          >
            Developer
          </motion.span>

          <div className="mt-2 mr-[12%] md:mr-[16%] lg:mr-[18%] hidden md:block">
            <motion.img
              src="/assets/profile.jpg"
              alt="Teuku Sem Profile"
              className="object-cover w-20 h-28 md:w-28 md:h-36 rounded-full"
              style={{ minWidth: '5rem', minHeight: '7rem' }}
              animate={profileImageStyles}
              transition={{ type: 'spring', stiffness: 40, damping: 20 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};