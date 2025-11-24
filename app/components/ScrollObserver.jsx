'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return elementRef;
}

export function ScrollAnimatedSection({ children, className = '' }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={`scroll-fade-in ${className}`}>
      {children}
    </div>
  );
}
