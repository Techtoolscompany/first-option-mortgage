'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Magnetic } from "@/components/Magnetic"
import { AnimateIn } from "@/components/AnimateIn"

export function HeroSection() {
  const [mode, setMode] = useState<'purchase' | 'refinance'>('purchase')

  const content = {
    purchase: "We know buying a home can be intimidating. It's a tremendous life experience, and we're proud to be a part of it, walking beside you through each step of the process. From pre-qualification to the house hunt, then securing financing before the exchange of keys, First Option will be there for you.",
    refinance: "Your home may be your most valuable financial asset. We work with you to protect it, and refinancing can help. When you refinance, you pay off your existing mortgage and simultaneously create a new one, sometimes combining a primary and secondary mortgage into a single new loan."
  }

  return (
    <section className="relative min-h-[85vh] flex items-center pt-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 z-10">
          <AnimateIn delay={0.1}>
            <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Experience the FOM Difference</span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="font-serif text-6xl md:text-8xl font-medium leading-[1.05] text-primary">
              Experience the <span className="italic">FOM Difference</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="font-display text-lg text-slate-600 max-w-md leading-relaxed mb-4">
              Click Below to Start Your Journey
            </p>
          </AnimateIn>
          
          {/* Quick Selector */}
          <AnimateIn delay={0.4}>
            <div className="bg-white p-2 shadow-2xl border border-primary/5 flex flex-col sm:flex-row max-w-lg rounded-[2rem] gap-2 mb-6">
              <Magnetic strength={10}>
                <button 
                  onClick={() => setMode('purchase')}
                  className={`font-display w-full flex-1 py-4 px-6 text-sm font-bold flex items-center justify-center gap-2 transition-all rounded-[1.5rem] duration-300 ${mode === 'purchase' ? 'bg-primary text-white shadow-md' : 'text-primary hover:bg-background-light'}`}
                >
                  <span className="material-symbols-outlined text-lg">home</span>
                  Purchase a Home
                </button>
              </Magnetic>
              <Magnetic strength={10}>
                <button 
                  onClick={() => setMode('refinance')}
                  className={`font-display w-full flex-1 py-4 px-6 text-sm font-bold flex items-center justify-center gap-2 transition-all rounded-[1.5rem] duration-300 ${mode === 'refinance' ? 'bg-primary text-white shadow-md' : 'text-primary hover:bg-background-light'}`}
                >
                  <span className="material-symbols-outlined text-lg">account_balance</span>
                  Refinance my Home
                </button>
              </Magnetic>
            </div>

            {/* Dynamic Content area */}
            <div className="min-h-[140px] max-w-lg relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <p className="font-display text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                    {content[mode]}
                  </p>
                  <button className="mt-6 font-display text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2 group hover:text-primary transition-colors">
                    {mode === 'purchase' ? 'Get Pre-Qualified' : 'Get a Free Quote'} 
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimateIn>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 rounded-[2.5rem]"></div>
          <div 
            className="relative h-full w-full bg-cover bg-center shadow-2xl border-4 border-white rounded-[2.5rem]"
            data-alt="Modern architectural luxury home exterior with clean lines" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSPj2L0zniBmSlGjQp7ZqAlohyVpYTWd5bel4lUAFu3f1W04snpy56OmtLwzvCfk_iWPB9RcsXK8lT4hVtKHpwrzP4f8efvZEHr-pv3MbbjXY7o1nq-f5_RdE9bck_FNQZIvYewU1WyHF5hyzrdZm6Zs1_KEppMaOwfkgRDcHXeMdmPR3jbuvK4tvmmAIc_naDpBIYu6PmrOaBUsxBhnJUVZywaBG6nIiXEfXqbLFrVReH6QyPgCfJFbNxiZ42DHWVU4AAKU6g0sE')" }}
          >
          </div>
        </motion.div>
      </div>
    </section>
  )
}
