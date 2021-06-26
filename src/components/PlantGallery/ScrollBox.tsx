import { useRef, useState, useEffect, RefObject } from 'react';
import { useElementScroll, useTransform, motion } from 'framer-motion';

type ScrollBoxPropsType = Readonly<{
  children: React.ReactNode;
  scrollRef: RefObject<HTMLDivElement>;
}>;

export default function ScrollBox({ children, scrollRef }: ScrollBoxPropsType) {
  const { scrollY } = useElementScroll(scrollRef);
  const ref = useRef<HTMLDivElement>();
  const [elementTop, setElementTop] = useState(null);
  const [elementBottom, setElementBottom] = useState(0);
  const [scrollableHeight, setScrollableHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
      setScrollableHeight(scrollRef.current.offsetHeight);
    };

    setValues();
    document.addEventListener('load', setValues);
    window.addEventListener('resize', setValues);

    return () => {
      document.removeEventListener('load', setValues);
      window.removeEventListener('resize', setValues);
    };
  }, [ref, scrollRef]);

  const opacityRange = [0, 1, 1, 0];
  const scaleRange = [0.8, 1, 1, 0.8];
  const viewportRange = [
    elementBottom,
    elementTop,
    elementBottom - scrollableHeight,
    elementTop - scrollableHeight,
  ];

  const opacity = useTransform(scrollY, viewportRange, opacityRange);
  const scale = useTransform(scrollY, viewportRange, scaleRange);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      style={{ height: '40vh', opacity, scale }}
    >
      {children}
    </motion.div>
  );
}
