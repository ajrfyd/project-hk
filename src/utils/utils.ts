// import React, { useEffect } from "react";

// type ObserverProps = {
//   target: HTMLDivElement | null,
//   onInterSect: () => void,
//   root: number | null,
//   rootMargin: string,
//   threshold: number
// }

// export const useObserver = ({ target, onInterSect, root = null, rootMargin = '0px', threshold = 1.0 }: ObserverProps) => {
//   let observer: any;
//   if(target) {
//     if(target.current) {

//     }
//   }
//   if(target && target.current) {
//     observer = new IntersectionObserver(onInterSect, {
//       root, rootMargin, threshold
//     });

//     observer.ovserve(target.current);
//   }
//   useEffect(() => {

//   }, [])

//   return () => {
//     observer && observer.disconnect();
//   }
// }

export default 1;