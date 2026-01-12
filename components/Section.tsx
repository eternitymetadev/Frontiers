import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", dark = false }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'active' class to all reveal elements within this section
            const reveals = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right');
            reveals.forEach((el) => el.classList.add('active'));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Cleanup not strictly necessary for single page mount/unmount but good practice
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-24 px-4 md:px-8 min-h-screen flex flex-col justify-center relative overflow-hidden ${dark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;