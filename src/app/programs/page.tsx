import React from 'react'
import { AnimateIn } from '@/components/AnimateIn'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { Magnetic } from '@/components/Magnetic'
import { motion } from 'framer-motion'

const programs = [
  {
    title: "Conventional Loans",
    description: "The standard for home buying. Flexible terms and predictable rates for buyers with good credit scores.",
    icon: "real_estate_agent",
    features: ["Fixed and adjustable rates", "Lower costs than some government loans", "Flexible terms from 10 to 30 years"]
  },
  {
    title: "FHA Loans",
    description: "Backed by the Federal Housing Administration, perfect for first-time buyers with lower down payments.",
    icon: "home",
    features: ["Down payments as low as 3.5%", "More flexible credit requirements", "Seller can contribute to closing costs"]
  },
  {
    title: "VA Loans",
    description: "Exclusive benefits for our veterans and active military members as a thank you for your service.",
    icon: "military_tech",
    features: ["0% down payment required", "No private mortgage insurance (PMI)", "Competitive interest rates"]
  },
  {
    title: "Jumbo Loans",
    description: "Financing for high-value properties that exceed conventional conforming loan limits.",
    icon: "domain",
    features: ["Higher loan amounts available", "Competitive rates for luxury properties", "Flexible down payment options"]
  },
  {
    title: "Refinancing",
    description: "Lower your monthly payments, change your loan term, or access your home's equity.",
    icon: "currency_exchange",
    features: ["Cash-out options", "Rate-and-term adjustments", "Debt consolidation"]
  },
  {
    title: "USDA Loans",
    description: "Zero down payment loans for rural and suburban homebuyers who meet income requirements.",
    icon: "landscape",
    features: ["No down payment needed", "Low mortgage insurance", "Flexible credit guidelines"]
  }
]

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
          <AnimateIn delay={0.1}>
            <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Our Offerings</span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.05] text-primary mt-4 mb-6">
              Tailored <span className="italic text-accent">Programs</span> <br/>
              For Every Buyer.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="font-display text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mx-auto max-w-3xl">
              From first-time buyers to seasoned investors, our flexible loan options ensure you have the best path forward to achieve your homeownership and financial goals.
            </p>
          </AnimateIn>
        </div>
        
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none -z-10 translate-y-1/2"></div>
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10 -translate-x-1/2"></div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 lg:py-32 bg-primary/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimateIn key={index} delay={0.1 + (index * 0.1)}>
                <div className="bg-white rounded-3xl p-10 h-full flex flex-col shadow-lg border border-primary/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 text-[150px] text-accent/5 material-symbols-outlined group-hover:scale-110 transition-transform duration-500">
                    {program.icon}
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-3xl mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                      <span className="material-symbols-outlined">{program.icon}</span>
                    </div>
                    
                    <h3 className="font-serif text-3xl font-bold text-primary mb-4">{program.title}</h3>
                    <p className="font-display text-slate-500 mb-8 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                          <span className="font-display text-sm text-slate-600 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-slate-100 relative z-10 w-full">
                    <Magnetic strength={10}>
                      <Link href="/#arla" className="inline-flex w-full items-center justify-between text-primary font-bold text-sm tracking-widest uppercase hover:text-accent transition-colors">
                        <span>Apply For {program.title.split(' ')[0]}</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                    </Magnetic>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <AnimateIn delay={0.1}>
            <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Need Expert Guidance?</span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h2 className="font-serif text-5xl md:text-7xl font-medium text-primary mt-6 mb-8 italic">
              Talk to ARLA today.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="font-display text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Our AI-powered assistant can help match you with the perfect mortgage program and start your application instantly.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Magnetic strength={20}>
                <Link href="/#arla" className="font-display inline-flex items-center gap-2 bg-primary text-white px-12 py-5 font-bold tracking-widest uppercase text-sm rounded-full hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto">
                  <span className="material-symbols-outlined">mic</span>
                  Speak to ARLA
                </Link>
              </Magnetic>
              <Magnetic strength={10}>
                <Link href="/calculators" className="font-display text-primary underline underline-offset-8 decoration-accent hover:text-accent transition-colors font-bold text-sm tracking-widest uppercase">
                  Estimate Payments
                </Link>
              </Magnetic>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
