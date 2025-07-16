import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  isTransitioning: boolean;
  onTransitionComplete?: () => void;
}

export default function PageTransition({ children, isTransitioning, onTransitionComplete }: PageTransitionProps) {
  const [showContent, setShowContent] = useState(!isTransitioning);

  useEffect(() => {
    if (isTransitioning) {
      setShowContent(false);
      const timer = setTimeout(() => {
        setShowContent(true);
        onTransitionComplete?.();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, onTransitionComplete]);

  return (
    <div className="relative">
      <AnimatePresence>
        {isTransitioning && (
          <>
            {/* Left side white curtain */}
            <motion.div
              className="fixed top-0 left-0 z-50 w-1/2 h-full bg-white"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* Right side white curtain */}
            <motion.div
              className="fixed top-0 right-0 z-50 w-1/2 h-full bg-white"
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* Inner closing effect */}
            <motion.div
              className="fixed inset-0 z-40 bg-white"
              initial={{ 
                clipPath: 'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%, 50% 0%, 50% 100%, 100% 100%, 100% 0%)'
              }}
              animate={{ 
                clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 50% 0%, 50% 100%, 50% 100%, 50% 0%)'
              }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            />
          </>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}