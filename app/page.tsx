"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Instagram, Mail, ArrowRight } from "lucide-react";

function Nav() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-10"
    >
      <Link href="/" className="text-xs uppercase tracking-[0.25em] font-semibold text-ivory-mist-50 hover:text-antique-white-600 transition-colors duration-500">
        Reclamation Method
      </Link>
      <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.25em] font-semibold text-ivory-mist-50">
        <Link href="/" className="hover:text-antique-white-600 transition-colors duration-500">The Framework</Link>
        <Link href="/" className="hover:text-antique-white-600 transition-colors duration-500">Journal</Link>
        <Link href="/contact" className="hover:text-antique-white-600 transition-colors duration-500">Apply</Link>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-24 px-8 md:px-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://static.showit.co/2400/jFqhAmITpJ8GffHwmIY0Zw/65205/pexels-anntarazevich-5935072.jpg"
          alt="Restoration and skin"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[0.95] tracking-tight text-balance text-ivory-mist-50"
        >
          Intelligent restoration of the female nervous system.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-12 text-xs md:text-sm uppercase tracking-[0.2em] text-ivory-mist-50 max-w-md leading-loose"
        >
          A neuroscience-informed framework centered on structured nourishment, regulation, and identity recalibration.
        </motion.p>
      </div>
    </section>
  );
}

function Premise() {
  return (
    <section className="py-32 md:py-56 px-8 md:px-16 flex justify-center items-center bg-ivory-mist-50 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl text-center"
      >
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-balance text-carbon-black-900">
          The core feeling is not beauty first. <br className="hidden md:block" />
          <span className="text-carbon-black-900 italic">It is restoration first.</span>
        </h2>
        <div className="mt-16 flex flex-col items-center">
          <div className="w-[1px] h-24 bg-antique-white-300 mb-12"></div>
          <p className="text-sm md:text-base text-carbon-black-600 font-sans font-normal max-w-xl mx-auto leading-loose tracking-wide">
            Not trends. Not self-care clichés. Not spiritual softness without structure. This is feminine intelligence, biological depth, calm authority, and restoration with method.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function FoundationalPillars() {
  const pillars = [
    {
      eyebrow: "Nervous System",
      headline: "Regulation as a foundation.",
      body: "Safety dictates physiology. Before nourishment can be absorbed or hormones balanced, the nervous system must be anchored. We build the capacity to hold both deep rest and high output.",
      cta: "Learn More",
      img: "https://static.showit.co/800/0zC2t_ftghvmEOnXvylxKg/65205/pablo-merchan-montes-lpyavwjqhac-unsplash.jpg"
    },
    {
      eyebrow: "Female Nutrition Architecture",
      headline: "Nourishment with structure.",
      body: "A framework built explicitly for female physiology, hormonal rhythms, and metabolic demands. We do not adapt male models. We nourish the female body with precision.",
      cta: "Learn More",
      img: "https://static.showit.co/1200/yGojs6HIqbK2fFkO9mlPww/65205/faruk-tokluoglu-e697-8vtriw-unsplash.jpg"
    },
    {
      eyebrow: "Identity Recalibration",
      headline: "Who you become.",
      body: "Physical transformation is fragile without an internal shift. We rebuild the psychological architecture of how you relate to your body, your boundaries, and your standards.",
      cta: "Learn More",
      img: "https://static.showit.co/200/3hAmVcfP7j15w5h3bQoW5A/65205/faruk-tokluoglu-dshzs6yb8ay-unsplash.jpg"
    }
  ];

  return (
    <section className="py-32 md:py-48 px-8 md:px-16 bg-antique-white-100 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-carbon-black-900 mb-6">The Foundation</h3>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-carbon-black-900">Three pillars of restoration.</h2>
          </div>
          <p className="text-sm text-carbon-black-600 font-normal max-w-sm leading-relaxed tracking-wide">
            A methodology that respects the complexity of the female body, integrating nervous system regulation, structural nourishment, and psychological recalibration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.2 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[2/3] w-full mb-10 overflow-hidden bg-ivory-mist-50">
                <Image
                  src={pillar.img}
                  alt={pillar.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-antique-white-600 mb-5 block">{pillar.eyebrow}</span>
              <h4 className="font-serif text-3xl md:text-4xl font-medium mb-6 tracking-tight text-carbon-black-900">{pillar.headline}</h4>
              <p className="text-carbon-black-600 font-sans font-normal leading-relaxed text-sm tracking-wide mb-10 flex-grow">
                {pillar.body}
              </p>
              <div>
                <Link href="/contact" className={buttonVariants({ variant: "link" })}>
                  {pillar.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar, i }: { pillar: any, i: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-32 items-center`}>
      <div className="w-full md:w-1/2">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] w-full overflow-hidden bg-ivory-mist-50"
        >
          <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
            <Image
              src={pillar.img}
              alt={pillar.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="font-serif text-antique-white-600 text-2xl italic mb-8 block">{pillar.num}</span>
          <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-8 tracking-tight text-carbon-black-900">{pillar.title}</h4>
          <p className="text-carbon-black-600 font-sans font-normal leading-relaxed max-w-md text-sm md:text-base tracking-wide">
            {pillar.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function Framework() {
  const pillars = [
    {
      num: "01",
      title: "Structured Nourishment",
      desc: "Moving beyond intuitive eating into biological precision. Rebuilding the foundation of cellular energy and hormonal stability through deliberate, methodical nourishment.",
      img: "https://static.showit.co/200/KhNEiSuduwpMscfhrIInUw/65205/getty-images-xp3ocbbmzyq-unsplash.jpg"
    },
    {
      num: "02",
      title: "Nervous System Regulation",
      desc: "Somatic restoration that respects the physiology of trauma and chronic stress. Cultivating a resilient, adaptable nervous system capable of holding both deep rest and high capacity.",
      img: "https://static.showit.co/200/TqGEbPIACj5coNa8kuCawQ/65205/karolina-grabowska-1r-rkuiewm4-unsplash.jpg"
    },
    {
      num: "03",
      title: "Identity Recalibration",
      desc: "The psychological architecture of healing. Shedding performative states of being and anchoring into a self-possessed, grounded, and authoritative female identity.",
      img: "https://static.showit.co/800/0zC2t_ftghvmEOnXvylxKg/65205/pablo-merchan-montes-lpyavwjqhac-unsplash.jpg"
    },
    {
      num: "04",
      title: "Biological Understanding",
      desc: "Demystifying the female body. Replacing fear and confusion with scientific literacy, allowing for intelligent, autonomous decision-making regarding one's own physiology.",
      img: "https://static.showit.co/1200/yGojs6HIqbK2fFkO9mlPww/65205/faruk-tokluoglu-e697-8vtriw-unsplash.jpg"
    }
  ];

  return (
    <section className="py-32 md:py-48 px-8 md:px-16 bg-ivory-mist-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 md:mb-48 text-center md:text-left">
          <h3 className="text-xs uppercase tracking-[0.25em] text-carbon-black-900 mb-8">The Methodology</h3>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-carbon-black-900">A framework for depth.</h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-56">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureIntro() {
  return (
    <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-8 md:px-16 bg-antique-white-50 relative z-10 border-t border-antique-white-300/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-start">
        <div className="md:w-1/3">
          <h3 className="text-xs uppercase tracking-[0.25em] text-carbon-black-900 mb-8">The Architecture</h3>
        </div>
        <div className="md:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-carbon-black-900 mb-12"
          >
            A multi-dimensional structure for long-term physiological stability.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-carbon-black-600 font-sans font-normal leading-relaxed max-w-2xl text-sm md:text-base tracking-wide"
          >
            Reclamation Method is not a singular intervention. It is a comprehensive architecture constructed from integrated disciplines. By addressing the nervous system, metabolic function, and physical rhythm simultaneously, we create a stable, enduring foundation for female health. Each discipline supports a different layer of restoration, allowing the body to anchor into deep, compounding vitality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-12"
          >
            <Link href="/contact" className={buttonVariants({ variant: "outlined" })}>
              Explore the Architecture
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CoreDisciplines() {
  const disciplines = [
    {
      num: "01",
      title: "Nervous System Regulation",
      desc: "True resilience begins with internal safety. We address the autonomic nervous system to shift emotional patterning, optimize recovery, and create the biological conditions necessary for hormonal and digestive repair."
    },
    {
      num: "02",
      title: "Female Nutrition Architecture",
      desc: "Nourishment engineered for female physiology. A structured approach to mineral balance, metabolic stability, and hormonal rhythm that provides the raw materials for sustained energy."
    },
    {
      num: "03",
      title: "Rhythm, Movement & Sweat",
      desc: "Physical vitality through intelligent exertion. We utilize movement to restore capacity and align with the body's natural rhythms, prioritizing structural integrity and recovery over depletion."
    },
    {
      num: "04",
      title: "Sustainable Vitality Practices",
      desc: "The compounding effect of daily environment. We establish the restorative habits, environmental cues, and consistent lifestyle patterns that allow deep health to anchor and expand over time."
    }
  ];

  return (
    <section className="pb-24 md:pb-32 pt-8 md:pt-16 px-8 md:px-16 bg-antique-white-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 md:gap-y-32">
          {disciplines.map((discipline, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className={`flex flex-col border-t border-antique-white-300/50 pt-12 ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="flex justify-between items-start mb-12">
                <h4 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-carbon-black-900 max-w-[200px] md:max-w-[250px]">{discipline.title}</h4>
                <span className="font-serif text-antique-white-600 text-2xl italic">{discipline.num}</span>
              </div>
              <p className="text-carbon-black-600 font-sans font-normal leading-relaxed max-w-md text-sm md:text-base tracking-wide">
                {discipline.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NutritionFeature() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-16 bg-antique-white-50 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src="https://static.showit.co/200/3hAmVcfP7j15w5h3bQoW5A/65205/faruk-tokluoglu-dshzs6yb8ay-unsplash.jpg"
              alt="Structural nourishment"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] text-antique-white-600 mb-8">The Signature Framework</h3>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-carbon-black-900 mb-10">
              Nourishment as structure.
            </h2>
            <div className="space-y-8 text-carbon-black-600 font-sans font-normal leading-relaxed text-sm md:text-base tracking-wide max-w-lg">
              <p>
                Conventional wellness often reduces nutrition to restriction, or relies on borrowed models that ignore the biological reality of the female body. We approach nourishment as an architectural necessity.
              </p>
              <p>
                Designed specifically around hormonal rhythms and metabolic function, Female Nutrition Architecture is not a temporary meal plan or a passing trend. It is a precise framework that utilizes food to stabilize the nervous system, replenish mineral reserves, and build long-term metabolic resilience.
              </p>
              <p className="text-carbon-black-900 font-medium italic font-serif text-lg">
                Intelligent nourishment is the foundation of a regulated body.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Atmosphere() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image
          src="https://static.showit.co/2400/jFqhAmITpJ8GffHwmIY0Zw/65205/pexels-anntarazevich-5935072.jpg"
          alt="Atmosphere"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-8"
      >
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium italic text-ivory-mist-50 max-w-4xl leading-[1.1] tracking-tight">
          &quot;The body should be treated as intelligent, not decorative.&quot;
        </h2>
      </motion.div>
    </section>
  );
}

function FounderIntro() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between py-12 px-8 md:px-16 overflow-hidden bg-[#35302C]">
      {/* Background Image - Founder */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://static.showit.co/800/0zC2t_ftghvmEOnXvylxKg/65205/pablo-merchan-montes-lpyavwjqhac-unsplash.jpg" 
          alt="Karita Cassia" 
          fill 
          className="object-cover object-[50%_30%] opacity-90" 
          referrerPolicy="no-referrer"
        />
        {/* Gradients for dramatic lighting and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#35302C]/30 via-transparent to-[#35302C]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#35302C]/60 via-transparent to-[#35302C]/60" />
      </div>

      {/* Top Section: Eyebrow & Inset Image */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-between items-start mt-8">
        {/* Vertical Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-antique-white-300/50" />
          <h3 
            className="text-xs uppercase tracking-[0.3em] text-antique-white-300" 
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            About the Founder
          </h3>
        </motion.div>

        {/* Floating Inset Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-32 md:w-48 lg:w-56 aspect-[3/4] p-2 bg-ivory-mist-50/10 backdrop-blur-sm border border-ivory-mist-50/20 shadow-2xl"
        >
          <div className="relative w-full h-full">
            <Image 
              src="https://static.showit.co/800/0zC2t_ftghvmEOnXvylxKg/65205/pablo-merchan-montes-lpyavwjqhac-unsplash.jpg" 
              alt="Method detail" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Massive Typography & Bio */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 mb-8 mt-32">
        
        {/* Massive Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full md:w-2/3"
        >
          <h2 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-medium leading-[0.85] tracking-tighter text-ivory-mist-50">
            Karita <br />
            <span className="italic font-light text-antique-white-300 ml-12 md:ml-32 block mt-2">Cassia</span>
          </h2>
        </motion.div>

        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="w-full md:w-1/3 lg:w-1/4"
        >
          <p className="font-sans text-xs md:text-sm leading-relaxed tracking-wide text-ivory-mist-200 text-justify border-l border-ivory-mist-50/20 pl-6 py-2">
            Reclamation Method was born from a necessity to treat the female body with intellectual rigor and biological respect. Karita’s work bridges nervous system regulation, structural nourishment, and female physiology into a single, cohesive discipline. The objective is not temporary relief, but enduring physiological stability and self-possessed strength.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function FounderRoots() {
  return (
    <section className="py-32 md:py-48 bg-ivory-mist-50 relative z-10 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] text-carbon-black-900 mb-6">The Lineage</h3>
            <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-carbon-black-900 leading-[1.1]">
              Roots of the <br className="hidden md:block" />
              <span className="italic font-light">Method</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full md:w-1/3"
          >
             <p className="text-carbon-black-600 font-sans text-sm leading-relaxed tracking-wide border-l border-antique-white-300 pl-6 py-2">
               The foundation of the practice was not built in a clinic, but inherited through a lineage of deep bodily respect and intuitive nourishment.
             </p>
          </motion.div>
        </div>

        {/* Editorial Grid Layout */}
        <div className="relative w-full">
          {/* Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-antique-white-300/50 -translate-x-1/2 hidden md:block" />

          {/* Block 01: The First Education */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-32 md:mb-48">
            <div className="md:col-span-8 relative aspect-[4/3] md:aspect-[16/9] w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative overflow-hidden"
              >
                <Image 
                  src="https://static.showit.co/200/KhNEiSuduwpMscfhrIInUw/65205/getty-images-xp3ocbbmzyq-unsplash.jpg" 
                  alt="The first education" 
                  fill 
                  className="object-cover" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="md:col-span-5 md:-ml-24 z-10 bg-ivory-mist-50 p-8 md:p-12 shadow-2xl shadow-carbon-black-900/5 border border-antique-white-300/20 mt-[-4rem] md:mt-16 relative"
            >
              <span className="text-antique-white-300 font-serif text-7xl md:text-9xl absolute -top-12 -left-6 opacity-20 pointer-events-none select-none">01</span>
              <h4 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-carbon-black-900 mb-6 relative z-10">
                The first education.
              </h4>
              <p className="text-carbon-black-600 font-sans text-sm leading-relaxed tracking-wide relative z-10">
                Health was first understood through attentiveness, not control. The earliest education in physiology did not come from clinical observation, but from the rhythm of a household where care, food quality, and bodily rhythm were treated as sacred. It established a baseline of what it means to truly nourish a system.
              </p>
            </motion.div>
          </div>

          {/* Block 02: Heritage of Nourishment */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="md:col-span-6 md:col-start-2 z-10 bg-ivory-mist-50 p-8 md:p-12 shadow-2xl shadow-carbon-black-900/5 border border-antique-white-300/20 mb-[-4rem] md:mb-16 relative order-2 md:order-1"
            >
              <span className="text-antique-white-300 font-serif text-7xl md:text-9xl absolute -top-12 -right-6 opacity-20 pointer-events-none select-none">02</span>
              <h4 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-carbon-black-900 mb-6 relative z-10">
                A heritage of nourishment.
              </h4>
              <p className="text-carbon-black-600 font-sans text-sm leading-relaxed tracking-wide relative z-10">
                As a first-generation American of Brazilian and Spanish descent, Karita was raised in an environment where food was synonymous with vitality, never restriction. This heritage forged a fundamentally humane relationship with the female body—one that views nourishment as the source of power, rather than a metric to be managed.
              </p>
            </motion.div>

            <div className="md:col-span-5 md:col-start-7 relative aspect-[4/3] w-full order-1 md:order-2 md:-ml-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative overflow-hidden"
              >
                <Image 
                  src="https://static.showit.co/200/TqGEbPIACj5coNa8kuCawQ/65205/karolina-grabowska-1r-rkuiewm4-unsplash.jpg" 
                  alt="A heritage of nourishment" 
                  fill 
                  className="object-cover" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 flex justify-center"
        >
          <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
            Apply for the Method
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 md:py-48 px-8 bg-antique-white-100 text-carbon-black-900 flex flex-col items-center justify-center text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center max-w-3xl"
      >
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-8 tracking-tight text-balance">
          Begin your restoration.
        </h2>
        <p className="text-carbon-black-600 font-sans text-sm md:text-base leading-relaxed tracking-wide mb-12 max-w-xl">
          Step into a framework designed for the exactness of female physiology. Reclaim your nervous system, your metabolism, and your biological authority.
        </p>
        <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
          Apply for the Method
        </Link>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-24 pb-12 px-8 md:px-16 bg-ivory-mist-50 text-carbon-black-900 border-t border-carbon-black-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold mb-6 text-carbon-black-900">Reclamation Method</h3>
            <p className="text-carbon-black-600 text-sm leading-relaxed max-w-sm font-sans mb-8">
              Intelligent restoration of the female nervous system. A neuroscience-informed framework centered on structured nourishment, regulation, and identity recalibration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-carbon-black-500 hover:text-antique-white-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-carbon-black-500 hover:text-antique-white-600 transition-colors duration-300">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div className="md:col-span-2 md:col-start-6 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-carbon-black-900 font-semibold mb-4">Explore</h4>
            <Link href="/" className="text-sm text-carbon-black-600 hover:text-antique-white-600 transition-colors duration-300">The Framework</Link>
            <Link href="/" className="text-sm text-carbon-black-600 hover:text-antique-white-600 transition-colors duration-300">About Karita</Link>
            <Link href="/" className="text-sm text-carbon-black-600 hover:text-antique-white-600 transition-colors duration-300">Journal</Link>
            <Link href="/contact" className="text-sm text-carbon-black-600 hover:text-antique-white-600 transition-colors duration-300">Apply</Link>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-carbon-black-900 font-semibold mb-4">Connect</h4>
            <a href="#" className="text-sm text-carbon-black-600 hover:text-antique-white-600 transition-colors duration-300">Instagram</a>
            <Link href="/contact" className="text-sm text-carbon-black-600 hover:text-antique-white-600 transition-colors duration-300">Contact</Link>
            <a href="#" className="text-sm text-carbon-black-600 hover:text-antique-white-600 transition-colors duration-300">Client Portal</a>
            <a href="#" className="text-sm text-carbon-black-600 hover:text-antique-white-600 transition-colors duration-300">FAQ</a>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-carbon-black-900 font-semibold mb-4">The Dispatch</h4>
            <p className="text-sm text-carbon-black-600 leading-relaxed mb-4">
              Receive essays on feminine physiology, nervous system regulation, and metabolic restoration.
            </p>
            <form className="flex w-full border-b border-carbon-black-200 pb-2 group focus-within:border-antique-white-600 transition-colors duration-300">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent w-full text-sm text-carbon-black-900 placeholder:text-carbon-black-400 focus:outline-none"
                required
              />
              <button type="submit" className="text-carbon-black-400 group-focus-within:text-antique-white-600 transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-carbon-black-100 text-xs text-carbon-black-500 uppercase tracking-[0.1em]">
          <div>© {new Date().getFullYear()} Reclamation Method. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-antique-white-600 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-antique-white-600 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ReclamationMethod() {
  return (
    <main className="min-h-screen bg-ivory-mist-50 text-carbon-black-900 font-sans selection:bg-antique-white-600 selection:text-ivory-mist-50">
      <Nav />
      <Hero />
      <Premise />
      <FoundationalPillars />
      <Framework />
      <ArchitectureIntro />
      <CoreDisciplines />
      <Atmosphere />
      <NutritionFeature />
      <FounderIntro />
      <FounderRoots />
      <CTA />
      <Footer />
    </main>
  );
}
