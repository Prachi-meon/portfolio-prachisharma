import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options: {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
} = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px'
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isInView };
};

export const useStaggerAnimation = (
  items: any[],
  options: {
    threshold?: number;
    triggerOnce?: boolean;
    rootMargin?: string;
    staggerDelay?: number;
  } = {}
) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px',
    staggerDelay = 100
  } = options;

  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  const refs = items.map(() => useRef<HTMLElement>(null));

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const element = ref.current;
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setAnimatedItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * staggerDelay);

            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setAnimatedItems(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        {
          threshold,
          rootMargin
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && refs[index].current) {
          observer.unobserve(refs[index].current!);
        }
      });
    };
  }, [refs, threshold, triggerOnce, rootMargin, staggerDelay, items.length]);

  return { refs, animatedItems };
};
