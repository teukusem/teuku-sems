import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { INTERSECTION_THRESHOLD } from '../constants/ui';

export const AboutMeHighlight = () => {
  const ref1 = useRef<HTMLParagraphElement>(null);
  const ref2 = useRef<HTMLParagraphElement>(null);
  const inView1 = useInView(ref1, { threshold: INTERSECTION_THRESHOLD });
  const inView2 = useInView(ref2, { threshold: INTERSECTION_THRESHOLD });

  const text1 = "I'm a full-stack software engineer with a primary focus on front-end development, specializing in React.js and Next.js. Passionate about creating clean, responsive, and user-friendly web applications. Eager to contribute to a team dedicated to building exceptional online experiences.";
  const text2 = "When I'm not building or exploring new web technologies, you'll likely find me indoors gaming or watching YouTube.";

  const words1 = text1.split(' ');
  const words2 = text2.split(' ');

  const renderAnimatedText = (words: string[], inView: boolean) => 
    words.map((word, index) => (
      <motion.span
        key={index}
        initial={{ color: '#6b7280' }}
        animate={inView ? { color: '#ffffff' } : { color: '#6b7280' }}
        transition={{ 
          duration: 0.3,
          delay: inView ? index * 0.1 : 0,
          ease: 'easeOut'
        }}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ));

  return (
    <div className="flex flex-col max-w-3xl gap-4">
      <p ref={ref1} className="text-lg leading-relaxed md:text-xl">
        {renderAnimatedText(words1, inView1)}
      </p>
      <p ref={ref2} className="text-lg leading-relaxed md:text-xl">
        {renderAnimatedText(words2, inView2)}
      </p>
    </div>
  );
};