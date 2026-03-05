'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { Magnetic } from '@/components/Magnetic'

const programs = [
  {
    id: 'conventional',
    icon: 'home',
    title: 'Conventional Loans',
    subtitle: 'The classic choice for qualified borrowers',
    description: 'Ideal for borrowers with good credit and a steady income looking for stability. Conventional loans offer competitive rates, flexible terms from 10 to 30 years, and the ability to drop mortgage insurance once you reach 20% equity.',
    features: ['As low as 3% down', 'No upfront mortgage insurance', 'Fixed and adjustable rates', 'Primary, second home & investment'],
    image: '/images/conventional.png',
  },
  {
    id: 'fha',
    icon: 'diversity_3',
    title: 'FHA Loans',
    subtitle: 'Built for first-time homebuyers',
    description: 'Perfect for first-time buyers with flexible credit and low down payment options. FHA loans are government-insured, making homeownership accessible even if your credit history isn\'t perfect.',
    features: ['As low as 3.5% down', 'Credit scores from 580+', 'Gift funds accepted', 'Competitive interest rates'],
    image: '/images/fha.png',
  },
  {
    id: 'va',
    icon: 'military_tech',
    title: 'VA Loans',
    subtitle: 'Honoring those who serve',
    description: 'Specialized benefits for our veterans and active military personnel. VA loans offer some of the best terms available anywhere—no down payment, no private mortgage insurance, and competitive rates as a thank-you for your service.',
    features: ['$0 down payment', 'No PMI required', 'Competitive rates', 'Flexible credit guidelines'],
    image: '/images/va.png',
  },
  {
    id: 'jumbo',
    icon: 'villa',
    title: 'Jumbo Loans',
    subtitle: 'For homes that exceed the ordinary',
    description: 'Financing for luxury properties that exceed standard conforming loan limits. When your dream home demands more than conventional limits allow, our jumbo loan solutions deliver the capital you need with premium service.',
    features: ['Loan amounts up to $3M+', 'Competitive jumbo rates', 'Primary & second homes', 'Interest-only options available'],
    image: '/images/jumbo.png',
  },
]

export function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setActiveIndex(index)
            }
          }
        })
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-background-light" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimateIn delay={0.1}>
            <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Tailored Solutions</span>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-primary mb-4 italic mt-4">Bespoke Loan Programs</h2>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Scrolling Text Cards */}
          <div className="space-y-8 lg:space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                ref={(el) => { cardRefs.current[index] = el }}
              >
                <AnimateIn delay={0.1 + index * 0.1}>
                  <div
                    className={`bg-white p-8 md:p-12 rounded-[2.5rem] border shadow-sm transition-all duration-700 ${
                      activeIndex === index
                        ? 'border-accent/30 shadow-xl scale-[1.02]'
                        : 'border-primary/5 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                        activeIndex === index ? 'bg-accent text-white' : 'bg-primary/5 text-primary'
                      }`}>
                        <span className="material-symbols-outlined text-2xl">{program.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-serif text-2xl font-bold text-primary">{program.title}</h4>
                        <p className="font-display text-xs text-slate-400 tracking-wide">{program.subtitle}</p>
                      </div>
                    </div>

                    <p className="font-display text-sm text-slate-500 mb-8 leading-relaxed">{program.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent text-sm">check_circle</span>
                          <span className="font-display text-xs text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Magnetic strength={15}>
                      <a className="font-display text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2 group" href="#">
                        Learn More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </a>
                    </Magnetic>
                  </div>
                </AnimateIn>
              </div>
            ))}
          </div>

          {/* Right: Sticky Image */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={programs[activeIndex].id}
                    src={programs[activeIndex].image}
                    alt={programs[activeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>

                {/* Gradient overlay with label */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={programs[activeIndex].id + '-label'}
                    className="absolute bottom-8 left-8 right-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  >
                    <span className="font-display text-accent text-xs font-bold uppercase tracking-widest">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(programs.length).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-3xl text-white font-medium italic mt-1">
                      {programs[activeIndex].title}
                    </h3>
                  </motion.div>
                </AnimatePresence>

                {/* Progress dots */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  {programs.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 rounded-full transition-all duration-500 ${
                        i === activeIndex ? 'h-8 bg-accent' : 'h-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
