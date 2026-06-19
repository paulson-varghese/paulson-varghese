import { type ReactNode, type CSSProperties } from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
  style?: CSSProperties;
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
}: RevealProps) {
  const { ref, inView } = useInView();

  const getTransform = () => {
    if (inView) return 'none';
    switch (direction) {
      case 'left':  return 'translateX(-28px)';
      case 'right': return 'translateX(28px)';
      case 'scale': return 'scale(0.94) translateY(14px)';
      default:      return 'translateY(26px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
