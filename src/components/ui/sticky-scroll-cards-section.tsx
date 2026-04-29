"use client";
import React, { useState, useEffect, useRef } from 'react';

export interface StickyFeature {
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  textColor: string;
  prefix?: string;
}

// --- Custom Hook for Scroll Animation ---
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the element's intersection status changes.
        setInView(entry.isIntersecting);
      },
      {
        root: null, // observing intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1, // 10% of the item must be visible to trigger the callback
      }
    );

    observer.observe(element);

    // Cleanup function to disconnect the observer when the component unmounts.
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

// --- Header Component ---
const AnimatedHeader = ({ title, subtitle }: { title: React.ReactNode, subtitle: string }) => {
    const [headerRef, headerInView] = useScrollAnimation();
    const [pRef, pInView] = useScrollAnimation();

    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
                ref={headerRef}
                className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out text-gray-900 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {title}
            </h2>
            <p 
                ref={pRef}
                className={`text-lg text-gray-600 mt-4 transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {subtitle}
            </p>
        </div>
    );
};

// This is the main component that orchestrates everything.
export function StickyFeatureSection({ title, subtitle, features }: { title: React.ReactNode, subtitle: string, features: StickyFeature[] }) {
  return (
    <div className="bg-[#ead7c7] font-sans">
      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* The main section for the features */}
          <section className="py-24 md:py-32 flex flex-col items-center">
            
            <AnimatedHeader title={title} subtitle={subtitle} />

            {/* The container for the sticky cards */}
            <div className="w-full relative">
              {features.map((feature, index) => (
                <div
                    key={index}
                    // The sticky class makes the card stick to the top of the container.
                    className={`${feature.bgColor} grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 p-8 md:p-12 rounded-3xl mb-16 sticky shadow-sm border border-gray-100/50`}
                    // All cards will stick at the same position, creating the stacking effect.
                    style={{ top: '150px' }}
                >
                  {/* Card Content */}
                  <div className="flex flex-col justify-center">
                    {feature.prefix && <h3 className="text-2xl font-bold mb-2 text-[#34a0a4]">{feature.prefix}</h3>}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#34a0a4]">{feature.title}</h3>
                    <p className={feature.textColor}>{feature.description}</p>
                  </div>
                  
                  {/* Card Image */}
                  <div className="image-wrapper mt-8 md:mt-0 h-64 md:h-80 w-full overflow-hidden rounded-2xl">
                    <img 
                        src={feature.imageUrl} 
                        alt={feature.title}
                        loading="lazy"
                        className="w-full h-full shadow-md object-cover rounded-2xl"
                        // Simple fallback in case an image fails to load
                        onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found"; }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}