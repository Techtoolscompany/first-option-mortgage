"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the scroll margins
    // container: ref,
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--primary)",
    "var(--slate-900)",
    "var(--primary)",
  ];
  
  const [activeBackgroundColor, setActiveBackgroundColor] = useState(
    backgroundColors[0]
  );
  
  // Set default background color on load directly to a color
  useEffect(() => {
    setActiveBackgroundColor(backgroundColors[activeCard % backgroundColors.length]);
  }, [activeCard]);

  // Adjust container height based on screen size normally taking 100vh
  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor: activeBackgroundColor,
      }}
      className={cn(
        "h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-y-auto flex justify-center relative space-x-10 rounded-3xl p-6 md:p-10 no-scrollbar", 
        "scrollbar-hide" // Hide scrollbar class utility or add it in your global CSS
      )}
      style={{
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE/Edge
      }}
    >
      {/* Hide scrollbar for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
      
      <div className="div relative flex items-start px-4 w-full md:w-1/2">
        <div className="max-w-2xl w-full mx-auto">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 md:my-32 lg:my-40 first:mt-10 lg:first:mt-20 font-serif">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl md:text-5xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg md:text-xl text-slate-300 max-w-sm mt-10 font-display leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden md:block h-full w-full md:w-1/2 rounded-2xl bg-white sticky top-0 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
