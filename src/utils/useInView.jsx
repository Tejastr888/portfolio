import { useEffect, useState, useRef } from 'react';

const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const { threshold = 0.1, rootMargin = '0px', ...restOptions } = options;
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold,
      rootMargin,
      ...restOptions
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [elementRef, isInView];
};

export default useInView;