"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

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

function ContactHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex flex-col justify-end pb-24 px-8 md:px-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1920&auto=format&fit=crop"
          alt="Minimalist aesthetic"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[0.95] tracking-tight text-balance text-ivory-mist-50"
        >
          Connect & Apply.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-8 text-xs md:text-sm uppercase tracking-[0.2em] text-ivory-mist-50 max-w-md leading-loose"
        >
          Begin the dialogue. Step into the framework.
        </motion.p>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="py-32 px-8 md:px-16 flex items-center bg-ivory-mist-50 relative z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Left Column: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight text-carbon-black-900 mb-8">
            Inquiries
          </h2>
          <p className="text-sm md:text-base text-carbon-black-600 font-sans font-normal max-w-md leading-loose tracking-wide mb-12">
            For inquiries regarding The Framework, private consultations, press, or general questions. We approach every correspondence with intention and care.
          </p>
          
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-antique-white-600 mb-2 font-semibold">Direct</h3>
              <a href="mailto:hello@reclamationmethod.com" className="text-carbon-black-900 hover:text-antique-white-600 transition-colors duration-300 font-serif text-xl italic">
                hello@reclamationmethod.com
              </a>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-antique-white-600 mb-2 font-semibold">Response Time</h3>
              <p className="text-carbon-black-600 text-sm">Please allow 48-72 hours for a thoughtful response.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col justify-center"
        >
          <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-carbon-black-600 font-semibold">Name</label>
              <input 
                type="text" 
                id="name"
                className="bg-transparent border-b border-carbon-black-900/20 focus:border-carbon-black-900 outline-none py-3 font-sans text-base text-carbon-black-900 transition-colors duration-500 placeholder:text-carbon-black-900/30"
                placeholder="Jane Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-carbon-black-600 font-semibold">Email Address</label>
              <input 
                type="email" 
                id="email"
                className="bg-transparent border-b border-carbon-black-900/20 focus:border-carbon-black-900 outline-none py-3 font-sans text-base text-carbon-black-900 transition-colors duration-500 placeholder:text-carbon-black-900/30"
                placeholder="jane@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs uppercase tracking-[0.15em] text-carbon-black-600 font-semibold">Subject</label>
              <input 
                type="text" 
                id="subject"
                className="bg-transparent border-b border-carbon-black-900/20 focus:border-carbon-black-900 outline-none py-3 font-sans text-base text-carbon-black-900 transition-colors duration-500 placeholder:text-carbon-black-900/30"
                placeholder="Inquiry Type"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-carbon-black-600 font-semibold">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="bg-transparent border-b border-carbon-black-900/20 focus:border-carbon-black-900 outline-none py-3 font-sans text-base text-carbon-black-900 transition-colors duration-500 resize-none placeholder:text-carbon-black-900/30"
                placeholder="How can we assist you?"
              />
            </div>

            <button type="submit" className="group relative inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.25em] overflow-hidden border border-carbon-black-900 hover:border-carbon-black-900 transition-colors duration-700 mt-4 self-start rounded-[7px]">
              <span className="relative z-10 text-carbon-black-900 group-hover:text-ivory-mist-50 transition-colors duration-700">Send Message</span>
              <div className="absolute inset-0 bg-carbon-black-900 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-24 pb-12 px-8 md:px-16 bg-carbon-black-950 text-ivory-mist-50 border-t border-ivory-mist-50/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold mb-6">Reclamation Method</h3>
            <p className="text-ivory-mist-200 text-sm leading-relaxed max-w-sm font-sans">
              Intelligent restoration of the female nervous system. A neuroscience-informed framework centered on structured nourishment, regulation, and identity recalibration.
            </p>
          </div>
          
          {/* Links Column 1 */}
          <div className="md:col-span-2 md:col-start-8 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-antique-white-300 mb-2">Explore</h4>
            <Link href="/" className="text-sm text-ivory-mist-200 hover:text-ivory-mist-50 transition-colors duration-300">The Framework</Link>
            <Link href="/" className="text-sm text-ivory-mist-200 hover:text-ivory-mist-50 transition-colors duration-300">About Karita</Link>
            <Link href="/" className="text-sm text-ivory-mist-200 hover:text-ivory-mist-50 transition-colors duration-300">Journal</Link>
            <Link href="/contact" className="text-sm text-ivory-mist-200 hover:text-ivory-mist-50 transition-colors duration-300">Apply</Link>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-antique-white-300 mb-2">Connect</h4>
            <a href="#" className="text-sm text-ivory-mist-200 hover:text-ivory-mist-50 transition-colors duration-300">Instagram</a>
            <Link href="/contact" className="text-sm text-ivory-mist-200 hover:text-ivory-mist-50 transition-colors duration-300">Contact</Link>
            <a href="#" className="text-sm text-ivory-mist-200 hover:text-ivory-mist-50 transition-colors duration-300">Client Portal</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-ivory-mist-50/10 text-xs text-ivory-mist-200/60 uppercase tracking-[0.1em]">
          <div>© {new Date().getFullYear()} Reclamation Method. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-ivory-mist-50 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-ivory-mist-50 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ivory-mist-50 text-carbon-black-900 font-sans selection:bg-antique-white-600 selection:text-ivory-mist-50">
      <Nav />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
