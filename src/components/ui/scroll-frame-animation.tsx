"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface ScrollFrameAnimationProps {
  frameFolder: string;
  framePrefix: string;
  frameCount: number;
  frameExtension?: string;
  className?: string;
}

/**
 * A scroll-driven frame-by-frame animation component.
 * Preloads all frames and swaps them on a <canvas> based on scroll position.
 */
export const ScrollFrameAnimation: React.FC<ScrollFrameAnimationProps> = ({
  frameFolder,
  framePrefix,
  frameCount,
  frameExtension = "jpg",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `${frameFolder}/${framePrefix}${paddedIndex}.${frameExtension}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, [frameFolder, framePrefix, frameCount, frameExtension]);

  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = imagesRef.current[frameIndex];

      if (!canvas || !ctx || !img) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    },
    []
  );

  // Draw frame 0 once loaded
  useEffect(() => {
    if (loaded) {
      drawFrame(0);
    }
  }, [loaded, drawFrame]);

  // Update frame on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded) return;
    const frameIndex = Math.min(
      Math.floor(latest * frameCount),
      frameCount - 1
    );
    drawFrame(frameIndex);
  });

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        style={{ display: loaded ? "block" : "none" }}
      />
      {!loaded && (
        <div className="w-full h-full flex items-center justify-center bg-black/50">
          <div className="text-white/60 text-sm animate-pulse">
            Loading animation...
          </div>
        </div>
      )}
    </div>
  );
};
