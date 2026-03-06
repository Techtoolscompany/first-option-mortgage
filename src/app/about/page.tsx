'use client'

import { motion } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { Magnetic } from '@/components/Magnetic'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref} className="text-6xl md:text-7xl font-bold font-display text-accent tracking-tighter drop-shadow-lg mb-4 block">0{suffix}</span>
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <Navbar />

      <section className="relative flex items-center pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6 space-y-10 z-10">
            <AnimateIn delay={0.1}>
              <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Our Philosophy</span>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[5rem] font-medium leading-[1.05] text-primary">
                Putting <br/>
                <span className="italic text-accent">People</span> First.
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.3} className="space-y-6">
              <p className="font-display text-lg text-slate-600 leading-relaxed font-medium">
                At First Option, mortgages are about much more than numbers and rates. They're about people: families and veterans, newlyweds and retirees, looking for a better life.
              </p>
              <p className="font-display text-lg text-slate-600 leading-relaxed font-medium">
                Purchasing a home is life-changing, which is why we're committed to every call that inquires about rates and every person who walks through the doors of our local branch offices with a dream of home ownership.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <div className="bg-primary/5 rounded-[2rem] p-8 border-l-4 border-accent shadow-sm">
                <p className="font-display text-xl font-medium text-primary leading-relaxed italic">
                  "We care about each other and our customers, because we believe in putting people first. We believe in making a difference."
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.5} className="pt-4 flex flex-col sm:flex-row gap-4">
              <Magnetic strength={15}>
                <Link href="/calculators" className="font-display inline-block bg-primary text-white px-10 py-4 font-bold tracking-widest uppercase text-xs rounded-full hover:bg-primary/90 transition-colors shadow-xl w-full sm:w-auto text-center">
                  Start Your Journey
                </Link>
              </Magnetic>
              <Magnetic strength={10}>
                <button className="font-display inline-block bg-white text-primary border border-primary/10 px-10 py-4 font-bold tracking-widest uppercase text-xs rounded-full hover:bg-background-light transition-colors shadow-sm w-full sm:w-auto text-center">
                  Find a Branch
                </button>
              </Magnetic>
            </AnimateIn>
          </div>
          
          <div className="lg:col-span-6 relative h-[500px] lg:h-[700px] w-full">
             <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-10"
            >
              <div 
                className="w-full h-full bg-cover bg-center rounded-[2.5rem] shadow-2xl border-4 border-white"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
                // Real estate themed photo
              />
            </motion.div>
            <div className="absolute inset-0 bg-accent/20 translate-x-6 translate-y-6 rounded-[2.5rem] border border-accent/10 -z-0"></div>
          </div>
        </div>
      </section>
      
      {/* Featured Metrics Section */}
      <section className="py-24 lg:py-32 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <AnimateIn delay={0.1}>
              <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Our Track Record</span>
              <h2 className="font-serif text-5xl md:text-7xl font-medium text-primary mt-4 italic">By The Numbers</h2>
            </AnimateIn>
          </div>

          <div className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: '98% Customer Satisfaction',
                  number: 98,
                  suffix: '%',
                  description: 'We pride ourselves on providing the best possible experience for our clients, prioritizing clear communication and a stress-free procedure from start to finish. Our commitment to putting people first is reflected in our nearly perfect satisfaction score, ensuring that every family feels supported and informed.',
                  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                },
                {
                  title: '24 Days to Close (Avg)',
                  number: 24,
                  suffix: ' Days',
                  description: 'Speed matters in real estate. We work efficiently, utilizing modern technology and a highly optimized process to get you perfectly settled in your new home without unnecessary delays. Our average time to close is significantly faster than the industry standard, ensuring you secure your dream home quickly.',
                  image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                },
                {
                  title: '15+ Years in Business',
                  number: 15,
                  suffix: '+ Years',
                  description: 'Over a decade and a half of dedicated mortgage services, navigating various market cycles and building deep trust across the communities we serve. Our longevity is a testament to our sustainable practices, reliable financial guidance, and unwavering dedication to our clients over the long term.',
                  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                },
                {
                  title: '50k+ Families Helped',
                  number: 50,
                  suffix: 'k+',
                  description: 'We measure our ultimate success not just in loans closed, but by the tens of thousands of families who have achieved their dreams of homeownership through our tailored programs. From veterans to first-time buyers, we have made a tangible difference in communities nationwide.',
                  image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                }
              ].map((item, idx) => (
                <AnimateIn key={idx} delay={0.1 * idx}>
                  <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-primary/5 shadow-xl hover:shadow-2xl transition-all duration-500 h-[500px] md:h-[600px] flex flex-col justify-end">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                      style={{ backgroundImage: `url('${item.image}')` }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                    
                    <div className="relative z-10 p-10 mt-auto">
                      <AnimatedNumber value={item.number} suffix={item.suffix} />
                      <h3 className="text-2xl font-serif text-white font-medium mb-3 italic">{item.title}</h3>
                      <p className="text-slate-200 text-sm font-display leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-24">
             <p className="text-xs text-slate-400 font-display">* Avg days from loan opening to loan closing 08/01/2020 – 08/31/2020</p>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 translate-x-1/3 translate-y-1/3 rounded-[100%] blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-primary/5 -translate-x-1/3 -translate-y-1/4 rounded-[100%] blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <AnimateIn delay={0.1}>
            <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Ready to Begin?</span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h2 className="font-serif text-5xl md:text-7xl font-medium text-primary mt-6 mb-8 italic">
              Let's make it happen.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="font-display text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Whether you're buying your first home, upgrading, or refinancing, our expert advisors are here to guide you every step of the way.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Magnetic strength={20}>
                <Link href="/#arla" className="font-display inline-block bg-primary text-white px-12 py-5 font-bold tracking-widest uppercase text-sm rounded-full hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto text-center">
                  Apply Online Now
                </Link>
              </Magnetic>
              <Magnetic strength={10}>
                <Link href="/calculators" className="font-display text-primary underline underline-offset-8 decoration-accent hover:text-accent transition-colors font-bold text-sm tracking-widest uppercase">
                  Run the numbers
                </Link>
              </Magnetic>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Decorative blurred background shapes */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] pointer-events-none z-[-1]"></div>
      <div className="absolute top-[40%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-[-1]"></div>

      <Footer />
    </main>
  )
}
