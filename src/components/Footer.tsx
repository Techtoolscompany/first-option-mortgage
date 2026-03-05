import { AnimateIn } from '@/components/AnimateIn'

export function Footer() {
  return (
    <footer className="bg-white border-t border-primary/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <AnimateIn delay={0.1}>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">home_work</span>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold tracking-tighter text-primary uppercase leading-none">First Option</span>
                  <span className="font-display text-[9px] tracking-[0.2em] uppercase text-accent font-semibold leading-tight">Mortgage</span>
                </div>
              </div>
              <p className="font-display text-xs text-slate-400 leading-relaxed">
                A premier national lender providing sophisticated mortgage solutions with a focus on speed, transparency, and client experience.
              </p>
            </AnimateIn>
          </div>
          <div className="flex flex-col gap-4">
            <AnimateIn delay={0.2}>
              <h5 className="font-display text-xs font-bold uppercase tracking-widest text-primary">Solutions</h5>
            </AnimateIn>
            <AnimateIn delay={0.3}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Purchase a Home</a></AnimateIn>
            <AnimateIn delay={0.4}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Refinance Your Home</a></AnimateIn>
            <AnimateIn delay={0.5}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Loan Programs</a></AnimateIn>
            <AnimateIn delay={0.6}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Mortgage Rates</a></AnimateIn>
          </div>
          <div className="flex flex-col gap-4">
            <AnimateIn delay={0.3}>
              <h5 className="font-display text-xs font-bold uppercase tracking-widest text-primary">Resources</h5>
            </AnimateIn>
            <AnimateIn delay={0.4}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Calculators</a></AnimateIn>
            <AnimateIn delay={0.5}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Knowledge Center</a></AnimateIn>
            <AnimateIn delay={0.6}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Client Reviews</a></AnimateIn>
            <AnimateIn delay={0.7}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Find an Officer</a></AnimateIn>
          </div>
          <div className="flex flex-col gap-4">
            <AnimateIn delay={0.4}>
              <h5 className="font-display text-xs font-bold uppercase tracking-widest text-primary">Company</h5>
            </AnimateIn>
            <AnimateIn delay={0.5}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">About Us</a></AnimateIn>
            <AnimateIn delay={0.6}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Careers</a></AnimateIn>
            <AnimateIn delay={0.7}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Privacy Policy</a></AnimateIn>
            <AnimateIn delay={0.8}><a className="font-display text-xs text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Contact</a></AnimateIn>
          </div>
        </div>
        <AnimateIn delay={0.5}>
          <div className="border-t border-primary/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center border border-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-sm">share</span>
              </div>
              <div className="w-8 h-8 flex items-center justify-center border border-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-sm">person</span>
              </div>
            </div>
            <div className="font-display text-center md:text-right space-y-1">
              <p className="text-[10px] text-slate-400">Corporate Headquarters: 702 Old Peachtree Rd., Suite 200, Suwanee, GA 30024</p>
              <p className="text-[10px] text-slate-400">Phone: (770) 423-8200 | Toll Free: (888) 766-3506</p>
              <p className="text-[10px] text-slate-400">© 2024 First Option Mortgage, LLC. All Rights Reserved. NMLS ID #123411.</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </footer>
  )
}
