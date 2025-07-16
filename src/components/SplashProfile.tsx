import { motion } from 'framer-motion';
import { useResponsive } from '../hooks/useResponsive';
import { ANIMATION_DELAYS, ANIMATION_DURATIONS } from '../constants/ui';

interface SplashProfileProps {
  onAnimationComplete: () => void;
}

export const SplashProfile = ({ onAnimationComplete }: SplashProfileProps) => {
  const { isMobile } = useResponsive();

  return (
    <motion.img
      src="/assets/profile.jpg"
      alt="Teuku Sem Profile"
      className="fixed object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      initial={{ 
        width: isMobile ? '160px' : '240px', 
        height: isMobile ? '200px' : '320px',
        opacity: 1,
        zIndex: 50
      }}
      animate={{
        width: isMobile ? ['160px', '80px', '80px'] : ['240px', '80px', '112px'],
        height: isMobile ? ['200px', '112px', '112px'] : ['320px', '112px', '144px'],
        x: [0, isMobile ? '20vw' : '35vw', isMobile ? '20vw' : '35vw'],
        y: [0, isMobile ? '10vh' : '20vh', isMobile ? '10vh' : '20vh'],
        opacity: [1, 1, 0],
        zIndex: 50
      }}
      transition={{
        duration: ANIMATION_DURATIONS.SPLASH,
        ease: "easeInOut",
        delay: ANIMATION_DELAYS.SPLASH_DELAY,
        times: [0, 0.8, 1]
      }}
      onAnimationComplete={onAnimationComplete}
    />
  );
};