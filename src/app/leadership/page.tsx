import React from 'react'
import { motion } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const leaders = [
  {
    name: 'Alvin Shah',
    title: 'Managing Partner',
    image: '/leadership/Alvin-work.jpg',
  },
  {
    name: 'Kurt Nikolai',
    title: 'Managing Partner',
    image: '/leadership/Kurt-work.jpg',
  },
  {
    name: 'Mike Kiessel',
    title: 'VP Secondary Marketing',
    image: '/leadership/Mike.jpg',
  },
  {
    name: 'Clay Jones',
    title: 'VP Credit Risk',
    image: '/leadership/clay.jpg',
  },
  {
    name: 'Kevin Strika',
    title: 'VP Operations',
    image: '/leadership/Kevin.jpg',
  },
  {
    name: 'Stephen Lee',
    title: 'Director of Information Technology',
    image: '/leadership/slee_300.png',
  },
  {
    name: 'Rachel Eisenhut',
    title: 'Director of Human Resources',
    image: '/leadership/reisenhut_lg.png',
  },
  {
    name: 'Alex Joyner',
    title: 'Director of Marketing',
    image: '/leadership/Alex-New-Headshot-V2_reduced.jpg',
  }
]

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <AnimateIn delay={0.1}>
            <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Our Power</span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.05] text-primary mt-4 mb-6">
              Leadership <span className="italic text-accent">Team</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="font-display text-lg text-slate-600 leading-relaxed font-medium">
              Meet the experienced professionals guiding First Option Mortgage with a shared vision of putting people first and making homeownership accessible.
            </p>
          </AnimateIn>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px] pointer-events-none -z-10 translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute top-40 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] pointer-events-none -z-10 -translate-x-1/2"></div>
      </section>

      {/* Team Grid */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <AnimateIn 
                key={leader.name} 
                delay={0.2 + (index * 0.1)}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] mb-6 rounded-2xl overflow-hidden shadow-lg border border-primary/5 bg-white">
                  <div 
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                    style={{ backgroundColor: '#212f45' }}
                  ></div>
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${leader.image}')` }}
                  />
                  {/* Subtle gradient overlay to ensure the image sits well */}
                  <div className="absolute inset-y-0 inset-x-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    {leader.name}
                  </h3>
                  <p className="font-display text-sm font-bold tracking-wider uppercase text-slate-500">
                    {leader.title}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
