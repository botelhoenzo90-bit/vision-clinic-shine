import { ReactNode, useEffect, useRef, useState } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function SlideLayout({ children, className = "", style }: SlideLayoutProps) {
  return (
    <div className={`slide-container relative overflow-hidden ${className}`} style={style}>
      {children}
    </div>
  );
}
