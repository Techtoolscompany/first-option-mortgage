import { AnimateIn } from '@/components/AnimateIn'

export function ExperienceSection() {
  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 relative z-10">
            <div className="max-w-2xl">
              <AnimateIn delay={0.1}>
                <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Efficiency Defined</span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 italic">Your First Option is Also Your Fastest Option!</h2>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.2} direction="left">
              <p className="font-display text-slate-300 max-w-xs text-sm leading-relaxed mb-1">
                Your loan is all set and ready for your closing, thanks to our First Option Mortgage Process.
              </p>
            </AnimateIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <AnimateIn delay={0.3}>
              <div className="bg-white/5 py-14 px-10 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">
                <span className="material-symbols-outlined text-accent text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">speed</span>
                <h3 className="font-serif text-3xl font-medium mb-4 italic">15 Minutes</h3>
                <p className="font-display text-slate-300 text-lg leading-relaxed">Contact a loan originator or <a href="/#arla" className="text-accent underline underline-offset-4 hover:text-white transition-colors">apply online</a> – it only takes about 15 minutes to submit a loan application.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.5}>
              <div className="bg-white/5 py-14 px-10 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">
                <span className="material-symbols-outlined text-accent text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">calendar_today</span>
                <h3 className="font-serif text-3xl font-medium mb-4 italic">15 Days</h3>
                <p className="font-display text-slate-300 text-lg leading-relaxed">When you qualify, you receive a pre-approval, and our team will process your loan and clear to close in under 15 days.</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
