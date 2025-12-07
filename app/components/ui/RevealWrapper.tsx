"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface RevealWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    amount?: number; // Distance to move
}

const RevealWrapper = ({
    children,
    className,
    delay = 0,
    duration = 0.8,
    direction = "up",
    amount = 50,
}: RevealWrapperProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            let x = 0;
            let y = 0;

            switch (direction) {
                case "up":
                    y = amount;
                    break;
                case "down":
                    y = -amount;
                    break;
                case "left":
                    x = amount;
                    break;
                case "right":
                    x = -amount;
                    break;
                default:
                    break;
            }

            gsap.fromTo(
                containerRef.current,
                {
                    opacity: 0,
                    y: y,
                    x: x,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: duration,
                    delay: delay,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%", // Triggers when the top of the element hits 85% of the viewport height
                        toggleActions: "play none none reverse", // Replays when scrolling back up
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [delay, duration, direction, amount]);

    return (
        <div ref={containerRef} className={clsx("opacity-0", className)}>
            {children}
        </div>
    );
};

export default RevealWrapper;
