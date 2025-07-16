import { motion } from 'framer-motion';
import { useTime } from '../hooks/useTime';
import { ANIMATION_DELAYS, ANIMATION_DURATIONS } from '../constants/ui';

export const Header = () => {
  const currentTime = useTime();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATIONS.HEADER, delay: ANIMATION_DELAYS.HEADER_DELAY }}
      className="top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-8"
    >
      <div className="text-lg font-bold uppercase md:text-xl">Teuku Sem</div>
      <div className="text-sm md:text-base">{currentTime}</div>
    </motion.header>
  );
};