'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'motion/react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, Menu, X, Brain, Clock, User } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em] mb-[0.1em]">
      {children}
    </motion.span>
  );
};

const ScrollRevealText = ({ text, className = "" }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });

  const words = text.split(" ");
  return (
    <h2 ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h2>
  );
};

const timelineItems = [
  {
    description:
      "Growing up in a household that treated food as nourishment, not restriction, gave her a different lens on how women should eat. Family traditions around eating became the first language of wellness.",
    image: {
      src: "https://picsum.photos/seed/timeline1/800/600",
      alt: "Relume placeholder image 1",
    },
    title: "First generation American with Brazilian and Spanish heritage"
  },
  {
    description:
      "Work with women under performance and aesthetic demands built her understanding of the female body in real conditions. She learned what the body needs when it is asked to excel.",
    image: {
      src: "https://picsum.photos/seed/timeline2/800/600",
      alt: "Relume placeholder image 2",
    },
    title: "Where precision meets purpose"
  },
  {
    description:
      "The realization that traditional wellness models were failing women led to the development of a new framework. One built specifically for female physiology.",
    image: {
      src: "https://picsum.photos/seed/timeline3/800/600",
      alt: "Relume placeholder image 3",
    },
    title: "A new paradigm for female health"
  },
  {
    description:
      "Integrating neuroscience, metabolic health, and behavioral psychology into a single cohesive system. The Reclamation Method is born.",
    image: {
      src: "https://picsum.photos/seed/timeline4/800/600",
      alt: "Relume placeholder image 4",
    },
    title: "The birth of The Reclamation Method"
  },
];

const TimelineItem = ({ item, index }: { item: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.2, 1, 1, 0.2]);
  const backgroundColor = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], ["#E2D5C0", "#C49A3C", "#C49A3C", "#E2D5C0"]);

  return (
    <div ref={ref} className="relative z-20 grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-y-6 py-16 sm:grid-cols-[4rem_1fr] md:w-auto md:grid-cols-[1fr_10rem_1fr] md:gap-y-0 lg:grid-cols-[1fr_12rem_1fr]">
      <motion.div
        className="[grid-area:1/2/2/3] md:text-right md:[grid-area:auto]"
        style={{ opacity }}
      >
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-dark tracking-tight">
          {item.title}
        </h3>
      </motion.div>
      <div className="flex justify-start [grid-area:1/1/3/2] md:justify-center md:[grid-area:auto]">
        <motion.div
          style={{ backgroundColor, opacity }}
          className="sticky top-[50vh] size-[0.9375rem] rounded-full shadow-[0_0_0_8px_#F5F4F0]"
        />
      </div>
      <motion.div style={{ opacity }}>
        <div className="mb-10 md:mb-14 lg:mb-16">
          <p className="text-base md:text-lg text-brand-dark/70 leading-relaxed font-light">
            {item.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <button className="px-6 py-3 border border-brand-dark/20 text-brand-dark text-[10px] tracking-[0.2em] uppercase hover:border-brand-dark hover:bg-brand-dark/5 transition-colors">
              Explore
            </button>
            <button className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase text-brand-olive hover:text-brand-sage transition-colors">
              Read More <ArrowRight className="ml-2 w-3 h-3" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden relative aspect-[4/3] w-full">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const timelineLineHeight = useTransform(timelineScroll, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const pillars = [
    {
      num: "01",
      title: "Nervous System Regulation",
      desc: "Understanding how stress, recovery, and emotional states influence digestion, hormones, and long-term health.",
      image: "https://picsum.photos/seed/nervous/800/1000"
    },
    {
      num: "02",
      title: "Female Nutrition Architecture",
      desc: "Designing nourishment around female physiology — emphasizing mineral balance, metabolic stability, and sustainable energy.",
      image: "https://picsum.photos/seed/nutrition/800/1000"
    },
    {
      num: "03",
      title: "Rhythm, Movement & Sweat",
      desc: "Supporting vitality through natural rhythms, intentional movement, and physical exertion that restores rather than depletes the body.",
      image: "https://picsum.photos/seed/movement/800/1000"
    },
    {
      num: "04",
      title: "Sustainable Vitality Practices",
      desc: "Long-term habits around rest, nourishment, environment, and lifestyle that allow health to compound over time.",
      image: "https://picsum.photos/seed/vitality/800/1000"
    }
  ];

  return (
    <main className="min-h-screen font-sans bg-brand-bg text-brand-dark selection:bg-brand-olive selection:text-brand-bg">
      {/* Navigation */}
      <nav className={`top-0 left-0 w-full z-50 flex items-center justify-center px-4 sm:px-6 py-4 sm:py-3 transition-colors duration-300 ${isMobileMenuOpen ? 'fixed bg-brand-bg' : 'absolute'}`}>
        <div className="w-full max-w-[1350px] flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-serif font-bold tracking-tight relative z-50">Reclamation Method</div>
          <div className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase font-medium text-brand-dark/70">
            <a href="#" className="hover:text-brand-olive transition-colors">Home</a>
            <a href="#" className="hover:text-brand-olive transition-colors">The Method</a>
            <a href="#" className="hover:text-brand-olive transition-colors">About</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-brand-olive transition-colors">
              Work With Me
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 relative z-50">
            <div className="hidden md:flex items-center gap-4">
              <button className="px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium border border-brand-olive/40 text-brand-olive hover:border-brand-olive hover:bg-brand-olive/5 transition-colors">
                Learn
              </button>
              <button className="px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium bg-brand-olive text-brand-bg hover:bg-brand-sage transition-colors">
                Consult
              </button>
            </div>
            <button 
              className="md:hidden p-2 -mr-2 text-brand-dark hover:text-brand-olive transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-40 bg-brand-bg flex flex-col px-6 pt-24 pb-16 sm:pb-12 h-[100dvh] overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-5 sm:gap-6 mt-4">
              <a href="#" className="font-serif text-3xl sm:text-4xl text-brand-dark hover:text-brand-olive transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#" className="font-serif text-3xl sm:text-4xl text-brand-dark hover:text-brand-olive transition-colors" onClick={() => setIsMobileMenuOpen(false)}>The Method</a>
              <a href="#" className="font-serif text-3xl sm:text-4xl text-brand-dark hover:text-brand-olive transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#" className="font-serif text-3xl sm:text-4xl text-brand-dark hover:text-brand-olive transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Work With Me</a>
              <a href="#" className="font-serif text-3xl sm:text-4xl text-brand-dark hover:text-brand-olive transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Journal</a>
              <a href="#" className="font-serif text-3xl sm:text-4xl text-brand-dark hover:text-brand-olive transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
            <div className="mt-auto pt-6 pb-4 flex flex-col gap-3">
              <button className="w-full px-6 py-3.5 text-[10px] tracking-[0.2em] uppercase font-medium bg-brand-gold text-brand-bg transition-colors">
                Book a Consultation
              </button>
              <button className="w-full px-6 py-3.5 text-[10px] tracking-[0.2em] uppercase font-medium border border-brand-olive/40 text-brand-olive transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 lg:pt-56 pb-16 md:pb-24 px-4 sm:px-6 flex flex-col items-center text-center max-w-[1350px] mx-auto w-full">
        <FadeIn className="flex flex-col items-center w-full">
          <div className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold mb-6">A Neuroscience-Informed Framework for Women</div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] tracking-tight mb-6 md:mb-8 text-brand-dark text-balance max-w-6xl mx-auto w-full">
            Intelligent restoration for the female nervous system
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-brand-dark/70 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            A neuroscience-informed framework that rebuilds your biological foundation through structured nourishment, nervous system regulation, and identity recalibration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-2 sm:px-0">
            <button className="px-8 py-4 bg-brand-gold text-brand-bg text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold/80 transition-colors w-full sm:w-auto">
              Book a Consultation
            </button>
            <button className="px-8 py-4 border border-brand-olive/40 text-brand-olive text-[10px] tracking-[0.2em] uppercase hover:border-brand-olive hover:bg-brand-olive/5 transition-colors w-full sm:w-auto">
              Learn About The Method
            </button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full px-2 sm:px-0">
            <div className="flex items-center gap-3">
              <Brain className="w-4 h-4 text-brand-gold shrink-0" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-brand-dark/50 font-medium">Neuroscience-Informed</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-brand-dark/10" />

            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-brand-gold shrink-0" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-brand-dark/50 font-medium">15+ Years of Practice</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-brand-dark/10" />

            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-brand-gold shrink-0" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-brand-dark/50 font-medium">100% Personalized</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Hero Image */}
      <section className="w-full pb-24">
        <FadeIn delay={0.2}>
          <div className="relative w-full h-[50vh] md:h-[80vh] bg-brand-surface flex items-center justify-center overflow-hidden">
            <Image
              src="https://picsum.photos/seed/hero-image/1920/800"
              alt="Hero image"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
      </section>

      {/* Architecture Section */}
      <section className="py-24 px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold mb-6">The Reclamation Method</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 text-brand-dark">
            This is not wellness. This is <br className="hidden md:block" />
            architecture.
          </h2>
          <p className="text-base md:text-lg text-brand-dark/70 max-w-2xl mx-auto leading-relaxed font-light">
            A complete framework integrating four disciplines into one cohesive system. Built on science. Designed for women who are ready to operate differently.
          </p>
        </FadeIn>
      </section>

      {/* 3 Column Cards Section */}
      <section className="pb-32 px-6 max-w-[1350px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              eyebrow: "Nervous System",
              title: "Regulation as a Foundation",
              desc: "Every protocol begins with the nervous system. When the body feels safe, everything else becomes possible.",
              image: "https://picsum.photos/seed/card1/600/800"
            },
            {
              eyebrow: "Female Nutrition Architecture",
              title: "Nourishment With Structure",
              desc: "A nutritional framework built around female physiology, hormonal cycles, and metabolic function. Not adapted. Original.",
              image: "https://picsum.photos/seed/card2/600/800"
            },
            {
              eyebrow: "Identity Recalibration",
              title: "Who You Are After the Work",
              desc: "Sustainable transformation requires more than physical change. It addresses the identity shift that makes results last.",
              image: "https://picsum.photos/seed/card3/600/800"
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative group overflow-hidden bg-brand-dark aspect-[3/4] flex flex-col justify-end p-8 text-brand-bg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent z-0" />
                <div className="relative z-10">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-brand-olive mb-4">{card.eyebrow}</div>
                  <h3 className="font-serif text-3xl mb-4">{card.title}</h3>
                  <p className="text-sm text-brand-bg/70 mb-8 leading-relaxed font-light">
                    {card.desc}
                  </p>
                  <a href="#" className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase hover:text-brand-olive transition-colors">
                    Learn More <svg className="ml-2 w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Core Framework Section */}
      <section className="py-32 px-6 bg-brand-dark text-brand-bg">
        <div className="max-w-[1350px] mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
              <div className="max-w-3xl">
                <div className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold mb-6">The Framework</div>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance">
                  A complete system built <br className="hidden md:block"/> on four integrated disciplines
                </h2>
              </div>
              <div className="max-w-sm lg:pb-2">
                <p className="text-base text-brand-bg/70 leading-relaxed font-light mb-8">
                  The Reclamation Method integrates four disciplines that address different layers of female biology. Each pillar strengthens a specific dimension of the body&apos;s internal architecture.
                </p>
                <button className="px-8 py-4 bg-brand-gold text-brand-bg text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold/80 transition-colors w-full sm:w-auto">
                  Explore the Framework
                </button>
              </div>
            </div>
          </FadeIn>

          <div className="border-t border-brand-bg/20">
            {pillars.map((pillar, i) => (
              <div key={i} className="border-b border-brand-bg/20">
                <button
                  onClick={() => setActivePillar(activePillar === i ? null : i)}
                  className="w-full py-8 md:py-12 flex items-center justify-between group text-left"
                >
                  <div className="flex items-baseline gap-6 md:gap-16">
                    <span className={`font-serif text-2xl md:text-4xl transition-colors duration-500 ${activePillar === i ? 'text-brand-gold' : 'text-brand-bg/30'}`}>
                      {pillar.num}
                    </span>
                    <h3 className={`font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight transition-all duration-500 ${activePillar === i ? 'text-brand-bg italic' : 'text-brand-bg/70 group-hover:text-brand-bg'}`}>
                      {pillar.title}
                    </h3>
                  </div>
                  <div className={`relative w-10 h-10 rounded-full border transition-colors duration-500 flex items-center justify-center shrink-0 ml-4 ${activePillar === i ? 'border-brand-gold text-brand-gold' : 'border-brand-bg/30 text-brand-bg/30 group-hover:border-brand-bg group-hover:text-brand-bg'}`}>
                    <motion.div animate={{ rotate: activePillar === i ? 45 : 0 }} transition={{ duration: 0.3 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: activePillar === i ? 'auto' : 0, opacity: activePillar === i ? 1 : 0 }}
                  className="overflow-hidden"
                  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="pb-12 md:pb-16 pt-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="lg:col-span-7 lg:pl-12">
                      <div className="space-y-6 text-xl md:text-2xl text-brand-bg/80 font-light leading-relaxed">
                        {pillar.desc.split('\n\n').map((p, j) => <p key={j}>{p}</p>)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Female Nutrition Architecture Section (Relume Layout 13 Adapted) */}
      <section className="py-32 px-6 bg-brand-bg">
        <div className="max-w-[1350px] mx-auto">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:items-center md:gap-x-16 lg:gap-x-24">
            <FadeIn>
              <div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold mb-6">
                  Female nutrition architecture
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 text-brand-dark text-balance">
                  The nutritional framework medicine has been missing
                </h2>
                <p className="text-base md:text-lg text-brand-dark/70 leading-relaxed font-light mb-10">
                  FNA is a proprietary system built entirely around female
                  physiology, hormonal cycles, and metabolic function. It is not a
                  diet. It is not a meal plan. It is a structural approach to
                  nourishment that treats the female body as the complex,
                  intelligent system it actually is.
                </p>
                
                {/* Logos - adapted to be subtle and elegant */}
                <div className="flex flex-wrap items-center gap-x-10 gap-y-8 py-8 mb-10 border-y border-brand-dark/10">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                    className="max-h-6 opacity-30 grayscale hover:opacity-60 transition-opacity"
                    alt="Webflow logo 1"
                  />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    className="max-h-6 opacity-30 grayscale hover:opacity-60 transition-opacity"
                    alt="Relume logo 1"
                  />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                    className="max-h-6 opacity-30 grayscale hover:opacity-60 transition-opacity"
                    alt="Webflow logo 2"
                  />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    className="max-h-6 opacity-30 grayscale hover:opacity-60 transition-opacity"
                    alt="Relume logo 2"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <button className="px-8 py-4 bg-brand-gold text-brand-bg text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold/80 transition-colors">
                    Explore the method
                  </button>
                  <button className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase font-medium text-brand-dark hover:text-brand-olive transition-colors group">
                    Learn
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/fna2/800/1000"
                  fill
                  className="object-cover"
                  alt="Female nutrition architecture"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* The Foundation Section (Relume Layout 484 Adapted) */}
      <section className="overflow-hidden px-6 py-24 md:py-32 bg-brand-surface">
        <div className="max-w-[1350px] mx-auto">
          <FadeIn>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold mb-6 md:mb-8">
                The foundation
              </p>
              <ScrollRevealText 
                text="Built from experience. Refined into method. Before the Reclamation Method, Karita Cassia founded Hom Wellness, an organic wellness brand that earned press recognition across Los Angeles. That work built the foundation. This is the evolution."
                className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-brand-dark mb-12 flex flex-wrap justify-center"
              />
              <div className="flex flex-wrap items-center justify-center gap-6">
                <button className="px-8 py-4 border border-brand-olive/40 text-brand-olive text-[10px] tracking-[0.2em] uppercase hover:border-brand-olive hover:bg-brand-olive/5 transition-colors">
                  Learn
                </button>
                <button className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase font-medium text-brand-dark hover:text-brand-olive transition-colors group">
                  Learn
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Meet Karita Cassia Section (Relume Header 5 Adapted) */}
      <section className="relative min-h-[80vh] flex items-center py-32 px-6 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/karita/1920/1080"
            fill
            className="object-cover"
            alt="Karita Cassia"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
        </div>

        {/* Content */}
        <div className="w-full max-w-[1350px] mx-auto relative z-10">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-bg tracking-tight mb-8 text-balance">
                Meet Karita Cassia
              </h2>
              <p className="text-lg md:text-xl text-brand-bg/90 font-light leading-relaxed mb-10">
                Karita Cassia is the founder of The Reclamation Method, a
                neuroscience-informed framework designed to restore women to
                physiological stability, clarity, and sustainable strength. Her
                work integrates female physiology, nervous system regulation, and
                structured nourishment into a methodology created specifically for
                women.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                  <button className="px-8 py-4 bg-brand-gold text-brand-bg text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold/80 transition-colors">
                  Consult
                </button>
                <button className="px-8 py-4 border border-brand-bg/30 text-brand-bg text-[10px] tracking-[0.2em] uppercase hover:border-brand-bg hover:bg-white/5 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section (Relume Layout 352 Adapted) */}
      <section className="relative z-0 bg-brand-bg">
        <div className="relative -z-30">
          <div>
            <div className="px-[5%] py-16 md:py-24 lg:py-28">
              <div className="container mx-auto">
                <div className="mx-auto max-w-lg text-center">
                  <p className="mb-3 text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold md:mb-4">Foundation</p>
                  <h2 className="mb-5 font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-brand-dark md:mb-6">
                    Where the method comes from
                  </h2>
                  <p className="md:text-lg text-brand-dark/70 leading-relaxed font-light">
                    Early exposure to nourishment and food quality shaped her
                    understanding of the body. Family traditions around eating
                    became the first language of wellness.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                    <button className="px-6 py-3 border border-brand-dark/20 text-brand-dark text-[10px] tracking-[0.2em] uppercase hover:border-brand-dark hover:bg-brand-dark/5 transition-colors">
                      Read More
                    </button>
                    <button className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase text-brand-olive hover:text-brand-sage transition-colors">
                      Discover <ArrowRight className="ml-2 w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[5%]">
              <div className="container mx-auto">
                <div ref={timelineRef} className="relative flex flex-col items-center justify-center">
                  <div className="absolute left-1.5 -z-20 h-full w-[3px] bg-brand-dark/10 md:left-auto">
                    <motion.div style={{ height: timelineLineHeight }} className="absolute top-0 left-0 w-full bg-brand-gold origin-top" />
                    <div className="absolute left-0 right-0 top-0 z-10 h-24 w-full bg-gradient-to-b from-brand-bg to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 z-10 h-24 w-full bg-gradient-to-t from-brand-bg to-transparent" />
                  </div>
                  {timelineItems.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="px-[5%] py-16 md:py-24 lg:py-28">
              <div className="container mx-auto">
                <div className="mx-auto max-w-lg text-center">
                  <p className="mb-3 text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold md:mb-4">Heritage</p>
                  <h2 className="mb-5 font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-brand-dark md:mb-6">
                    Where precision meets purpose
                  </h2>
                  <p className="md:text-lg text-brand-dark/70 leading-relaxed font-light">
                    Work with women under performance and aesthetic demands built
                    her understanding of the female body in real conditions. She
                    learned what the body needs when it is asked to excel.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                    <button className="px-6 py-3 border border-brand-dark/20 text-brand-dark text-[10px] tracking-[0.2em] uppercase hover:border-brand-dark hover:bg-brand-dark/5 transition-colors">
                      Discover
                    </button>
                    <button className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase text-brand-olive hover:text-brand-sage transition-colors">
                      Learn More <ArrowRight className="ml-2 w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Evidence Section (Relume Stats 7 Adapted) */}
      <section className="py-32 md:py-40 px-6 bg-brand-bg">
        <div className="max-w-[1350px] mx-auto">
          <FadeIn>
            <div className="mb-20 max-w-2xl">
              <div className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold mb-6">
                Evidence
              </div>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 text-brand-dark text-balance">
                Grounded in science. Tested in practice.
              </h2>
              <p className="text-lg md:text-xl text-brand-dark/70 leading-relaxed font-light">
                The Reclamation Method is built on peer-reviewed research in female
                physiology and neuroscience. Every pillar has been applied and
                refined through direct work with clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 lg:gap-x-20 border-t border-brand-dark/10 pt-16">
            <FadeIn delay={0.1}>
              <div className="border-l border-brand-gold/40 pl-8">
                <p className="font-serif text-7xl md:text-8xl lg:text-9xl text-brand-gold mb-6 leading-none">
                  6
                </p>
                <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-dark">
                  Integrated pillars
                </h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border-l border-brand-gold/40 pl-8">
                <p className="font-serif text-7xl md:text-8xl lg:text-9xl text-brand-gold mb-6 leading-none">
                  15+
                </p>
                <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-dark">
                  Years of practice
                </h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="border-l border-brand-gold/40 pl-8">
                <p className="font-serif text-7xl md:text-8xl lg:text-9xl text-brand-gold mb-6 leading-none">
                  100%
                </p>
                <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-dark">
                  Personalized approach
                </h3>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-20 flex flex-wrap items-center gap-6">
              <button className="px-8 py-4 border border-brand-olive/40 text-brand-olive text-[10px] tracking-[0.2em] uppercase hover:border-brand-olive hover:bg-brand-olive/5 transition-colors">
                Explore
              </button>
              <button className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase font-medium text-brand-dark hover:text-brand-olive transition-colors group">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter Section (Relume Cta 26 Adapted) */}
      <section className="py-32 md:py-40 px-6 bg-brand-surface">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-brand-dark text-balance">
              Insights on female biology and nervous system science
            </h2>
            <p className="text-base md:text-lg text-brand-dark/70 leading-relaxed font-light mb-12">
              Essays and frameworks delivered directly to your inbox. No noise. No
              trends. Just intelligence.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 bg-transparent border-b border-brand-dark/20 px-0 py-3 text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-olive transition-colors rounded-none" 
                  />
                  <button className="px-8 py-4 bg-brand-gold text-brand-bg text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold/80 transition-colors whitespace-nowrap">
                    Join the list
                  </button>
                </div>
                <p className="text-[10px] text-brand-dark/40 mt-4 font-light uppercase tracking-wider">
                  By joining, you agree to our Terms and Conditions.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA Section (Relume Cta 25 Adapted) */}
      <section className="py-32 md:py-40 px-6 bg-brand-dark text-brand-bg">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 text-balance">
              Begin your restoration now
            </h2>
            <p className="text-lg md:text-xl text-brand-bg/70 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
              A consultation is how we determine if this framework aligns with your
              needs and where you stand today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button className="px-10 py-5 bg-brand-gold text-brand-bg text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold/80 transition-colors">
                Book a Consultation
              </button>
              <button className="px-10 py-5 border border-brand-bg/30 text-brand-bg text-[10px] tracking-[0.2em] uppercase hover:border-brand-bg hover:bg-white/5 transition-colors">
                Explore the Method
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer Section (Relume Footer 2 Adapted) */}
      <footer className="pt-24 pb-12 px-6 bg-brand-bg border-t border-brand-dark/10">
        <div className="max-w-[1350px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
            
            {/* Logo & Links */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-4 gap-12">
              <div className="sm:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
                <div className="text-xl font-serif font-bold tracking-tight text-brand-dark">
                  Reclamation<br/>Method
                </div>
              </div>
              
              <div>
                <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-gold mb-6">Explore</h3>
                <ul className="space-y-4 text-sm text-brand-dark/70 font-light">
                  <li><a href="#" className="hover:text-brand-olive transition-colors">The Method</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Work With Me</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Journal</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Resources</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-gold mb-6">Connect</h3>
                <ul className="space-y-4 text-sm text-brand-dark/70 font-light">
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Book Now</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Newsletter</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Resources</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Speaking</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-gold mb-6">Legal</h3>
                <ul className="space-y-4 text-sm text-brand-dark/70 font-light">
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-brand-olive transition-colors">Cookies Settings</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-4">
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-gold mb-6">Updates</h3>
              <p className="text-sm text-brand-dark/70 font-light mb-6">
                Stay informed on new frameworks and offerings.
              </p>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-transparent border-b border-brand-dark/20 px-0 py-2 text-sm text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-olive transition-colors rounded-none" 
                  />
                  <button className="text-[10px] tracking-[0.2em] uppercase font-medium text-brand-dark hover:text-brand-olive transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-[10px] text-brand-dark/40 font-light mt-2 uppercase tracking-wider">
                  By subscribing you agree to our Privacy Policy.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-brand-dark/10 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-brand-dark/50 font-light">
              © 2026 Reclamation Method. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-brand-dark/50">
              <a href="#" className="hover:text-brand-olive transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-brand-olive transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-brand-olive transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-brand-olive transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="hover:text-brand-olive transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
