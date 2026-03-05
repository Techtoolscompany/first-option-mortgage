import { Magnetic } from '@/components/Magnetic'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 w-full max-w-7xl mx-auto px-6">
      <div className="bg-background-light/90 backdrop-blur-md border border-primary/10 rounded-[2rem] h-20 px-8 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex items-center gap-2">
          <div className="text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">home_work</span>
          </div>
          <Link href="/" className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tighter text-primary uppercase leading-none">First Option</span>
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-accent font-semibold leading-tight">Mortgage</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="font-display text-sm font-medium hover:text-accent transition-colors" href="/programs">Programs</Link>
          <Link className="font-display text-sm font-medium hover:text-accent transition-colors" href="/calculators">Calculators</Link>
          <Link className="font-display text-sm font-medium hover:text-accent transition-colors" href="/about">About</Link>
          <Link className="font-display text-sm font-medium hover:text-accent transition-colors" href="/leadership">Leadership</Link>
        </nav>
        <div className="flex items-center gap-6">
          <Magnetic strength={10}>
            <button className="font-display hidden lg:block text-sm font-bold text-primary hover:text-accent underline underline-offset-4">Log In</button>
          </Magnetic>
          <Magnetic strength={20}>
            <Link href="/#arla" className="font-display inline-block bg-primary text-white px-8 py-3 text-sm font-bold hover:bg-primary/90 transition-all uppercase tracking-widest rounded-full">
              Apply Now
            </Link>
          </Magnetic>
        </div>
      </div>
    </header>
  )
}
