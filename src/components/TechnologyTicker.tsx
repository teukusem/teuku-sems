import { motion } from 'framer-motion';
import { childVariants } from '../constants/animations';
import { ANIMATION_DURATIONS } from '../constants/ui';

interface TechnologyTickerProps {
  technologies: string[];
  direction: 'left' | 'right';
  backgroundColor: string;
  textColor: string;
  symbolColor: string;
  duration?: number;
  marginTop?: string;
}

export const TechnologyTicker = ({
  technologies,
  direction,
  backgroundColor,
  textColor,
  symbolColor,
  duration = ANIMATION_DURATIONS.TICKER,
  marginTop = '0'
}: TechnologyTickerProps) => {
  const animationValues = direction === 'left' 
    ? { from: '0%', to: '-100%' }
    : { from: '-100%', to: '0%' };

  return (
    <motion.div
      className={`w-screen py-4 overflow-hidden ${backgroundColor} whitespace-nowrap max-w-none`}
      style={{ marginTop }}
      variants={childVariants}
    >
      <motion.div
        className="inline-block w-full"
        style={{ willChange: 'transform' }}
        animate={{ x: [animationValues.from, animationValues.to] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {technologies.map((tech, index) => (
          <span key={index} className={`mx-8 text-2xl font-bold ${textColor} uppercase md:text-3xl`}>
            {tech} <span className={`mx-2 ${symbolColor}`}>◆</span>
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};