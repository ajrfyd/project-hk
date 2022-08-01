import { useEffect } from "react";

type ObserverProps = {
  target: HTMLElement | null,
  onInterSect: IntersectionObserverCallback,
  root?: Element | Document | null,
  rootMargin?: string,
  threshold?: number
}

export const useObserver = ({ target, onInterSect, root = null, rootMargin = '0px', threshold = 1.0 }: ObserverProps) => {
  
  useEffect(() => {
    if(!target) return;
    let observer: IntersectionObserver;

    if(target) {
      observer = new IntersectionObserver(onInterSect, {
        root, rootMargin, threshold
      });

      observer.observe(target);
    }

    return () => {
      // observer.unobserve(target);
      observer && observer.disconnect();
    }
  }, [target, rootMargin, threshold])
}

export const playList = [
  {
    name: 'Infinite',
    idx: 1,
  },
  {
    name: 'Wordle',
    idx: 2,
  },
  {
    name: 'Component',
    idx: 3,
  },
  {
    name: 'Board',
    idx: 4,
  }
]
