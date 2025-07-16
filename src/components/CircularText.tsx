import { motion } from 'framer-motion';
import { ANIMATION_DELAYS, ANIMATION_DURATIONS } from '../constants/ui';

export const CircularText = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 z-20 pb-4 pl-4 text-xs md:text-sm md:pb-8 md:pl-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATIONS.HERO, delay: ANIMATION_DELAYS.HERO_DELAY, ease: "easeOut" }}
    >
      <div className="relative flex items-center justify-center w-24 h-24 p-0 m-0 md:w-32 md:h-32">
        <svg viewBox="0 0 128 128" width="96" height="96" className="animate-spin-slow" style={{ minWidth: '6rem', minHeight: '6rem', willChange: 'transform' }}>
          <defs>
            <path id="circlePath" d="M64,8a56,56 0 1,1 0,112a56,56 0 1,1 0,-112" />
          </defs>
          <text fill="#fff" fontSize="13" fontFamily="sans-serif" letterSpacing="2px">
            <textPath xlinkHref="#circlePath" startOffset="0">
              TEUKU SEM • TEUKU SEM • TEUKU SEM •
            </textPath>
          </text>
        </svg>
      </div>
    </motion.div>
  );
};