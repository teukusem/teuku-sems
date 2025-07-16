import { useEffect, useState, type RefObject } from 'react';

export const useInView = (
  ref: RefObject<HTMLParagraphElement | null>, 
  options?: IntersectionObserverInit
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
};