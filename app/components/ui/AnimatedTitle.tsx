import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle = ({ title, containerClass }: AnimatedTitleProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Set the initial state explicitly (prevents jumping)
      titleAnimation.set(".animated-word", {
        opacity: 0,
        transform: "translate3d(10px, 50px, -50px) rotateY(60deg) rotateX(-40deg)",
      });

      // 2. Animate to the final state
      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0,0,0) rotateY(0) rotateX(0)",
          ease: "power2.inOut",
          stagger: 0.05, // Slightly slower stagger for a cleaner ripple
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {/* Regex to handle <br />, <br>, or \n for line breaks */}
      {title.split(/<br\s*\/?>|\n/g).map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="flex flex-wrap justify-center gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word text-4xl font-black uppercase leading-[0.8] tracking-tighter text-white opacity-0 md:text-2xl"
              // Adding HTML allow allows for special characters like &copy; inside words
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;