// Custom animation utilities to replace Framer Motion

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  easing?: string;
  onComplete?: () => void;
}

export const animate = (
  element: HTMLElement,
  properties: Record<string, string | number>,
  options: AnimationOptions = {}
) => {
  const {
    duration = 300,
    delay = 0,
    easing = 'ease-out',
    onComplete
  } = options;

  // Set initial state
  element.style.transition = `all ${duration}ms ${easing}`;
  
  if (delay > 0) {
    element.style.transitionDelay = `${delay}ms`;
  }

  // Apply the properties
  Object.entries(properties).forEach(([property, value]) => {
    element.style[property as any] = typeof value === 'number' ? `${value}px` : value;
  });

  // Handle completion
  if (onComplete) {
    setTimeout(onComplete, duration + delay);
  }
};

export const animateInView = (
  element: HTMLElement,
  properties: Record<string, string | number>,
  options: AnimationOptions = {}
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(element, properties, options);
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
  return () => observer.unobserve(element);
};

export const staggerAnimation = (
  elements: HTMLElement[],
  properties: Record<string, string | number>,
  options: AnimationOptions & { staggerDelay?: number } = {}
) => {
  const { staggerDelay = 100, ...animationOptions } = options;

  elements.forEach((element, index) => {
    const delay = animationOptions.delay || 0;
    animate(element, properties, {
      ...animationOptions,
      delay: delay + (index * staggerDelay)
    });
  });
};

// CSS animation classes
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
  scaleIn: 'animate-scale-in',
  rotateIn: 'animate-rotate-in',
  flipIn: 'animate-flip-in',
  bounceIn: 'animate-bounce-in',
  slideInUp: 'animate-slide-in-up',
  slideInDown: 'animate-slide-in-down',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  zoomIn: 'animate-zoom-in',
  zoomOut: 'animate-zoom-out',
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  fadeInLeft: 'animate-fade-in-left',
  fadeInRight: 'animate-fade-in-right',
};

// Hook for React components
export const useAnimation = () => {
  const animateElement = (
    elementRef: React.RefObject<HTMLElement>,
    properties: Record<string, string | number>,
    options: AnimationOptions = {}
  ) => {
    if (elementRef.current) {
      animate(elementRef.current, properties, options);
    }
  };

  const animateInViewElement = (
    elementRef: React.RefObject<HTMLElement>,
    properties: Record<string, string | number>,
    options: AnimationOptions = {}
  ) => {
    if (elementRef.current) {
      return animateInView(elementRef.current, properties, options);
    }
  };

  return { animateElement, animateInViewElement };
};
