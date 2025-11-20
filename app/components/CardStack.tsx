"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/CardStack.css';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: "Modern UI/UX Design",
    description: "Crafting intuitive user experiences with cutting-edge design principles.",
    colorClass: "card-1"
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description: "Building robust applications from front-end to back-end.",
    colorClass: "card-2"
  },
  {
    id: 3,
    title: "Mobile Responsive",
    description: "Ensuring your website looks perfect on all devices.",
    colorClass: "card-3"
  }
];

const CardStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const section = sectionRef.current;
    const stack = stackRef.current;
    const cardElements = cardsRef.current;
    const bgText = bgTextRef.current;

    if (!stack || !section || cardElements.some(card => !card) || !bgText) return;

    // Performance optimization: disable animations on very slow devices
    const isLowPerformance = window.innerWidth < 768 || 
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
    
    if (isLowPerformance) {
      gsap.config({ force3D: true, nullTargetWarn: false });
    }

    // Initial card positioning with increased rotation
    gsap.set(cardElements, {
      y: 0,
      rotationZ: (index) => isMobile ? 0 : (index * 4 - 6),
      zIndex: (index) => cards.length - index,
      force3D: true,
      willChange: "transform",
    });

    // Background text animation
    gsap.to(bgText, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
      scale: isMobile ? 0.05 : 1.1,
      opacity: isMobile ? 0.15 : 0.3,
      duration: 0.5,
      force3D: true,
      willChange: "transform",
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      }
    });

    // Add card animations to timeline
    cardElements.forEach((card, index) => {
      if (!card) return;
      
      tl.to(card, {
        y: -800,
        duration: 0.5,
        ease: "power3.in",
        force3D: true,
        willChange: "transform",
      }, index * 0.33);
    });

    return () => {
      // More efficient cleanup
      ScrollTrigger.killAll();
      tl.kill();
    };
  }, []);

return (
    <>
      <section className="card-stack-section" ref={sectionRef}>
        <p className="section-description">
          Building responsive and dynamic websites that provide an exceptional user experience and meet modern web standards.
        </p>
        <div className="background-text text-3xl  md:text-9xl" ref={bgTextRef}>
          I build Websites!
        </div>
        <div className="card-stack" ref={stackRef}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el: HTMLDivElement | null) => {
                cardsRef.current[index] = el;
              }}
              className={`card ${card.colorClass}`}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardStack; 