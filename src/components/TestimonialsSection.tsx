import { AnimateIn } from '@/components/AnimateIn'

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <AnimateIn delay={0.1}>
              <h2 className="font-serif text-5xl font-medium text-primary italic mb-6">Our Clients Speak</h2>
              <div className="w-20 h-px bg-accent mb-6"></div>
              <p className="font-display text-slate-500 text-sm leading-relaxed">
                Join over 50,000 families who have found their perfect home financing solution through First Option.
              </p>
            </AnimateIn>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateIn delay={0.2} direction="left">
              <div className="bg-white p-10 italic text-slate-600 border border-primary/5 rounded-[2.5rem] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <span className="material-symbols-outlined text-accent mb-4">format_quote</span>
                <p className="font-display text-sm mb-6 leading-relaxed flex-grow">"Sarah was very knowledgeable, communicative, and responsive. She worked hard to make sure everything was complete on a short timeline, while still prioritizing my goals. Although this was my first time buying a house, I can't imagine that anyone could do it better. I would recommend her service to anyone in a heartbeat!"</p>
                <div className="flex items-center gap-4 not-italic mt-auto pt-4 border-t border-primary/5">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">AB</div>
                  <div>
                    <p className="font-display text-sm font-bold text-primary">Adam B.</p>
                    <p className="font-display text-xs text-slate-400">Granite City, IL</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.4} direction="left">
              <div className="bg-white p-10 italic text-slate-600 border border-primary/5 rounded-[2.5rem] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <span className="material-symbols-outlined text-accent mb-4">format_quote</span>
                <p className="font-display text-sm mb-6 leading-relaxed flex-grow">"Rez was exceptional throughout our loan process. He demonstrated deep knowledge, guided us through every question with clarity, and kept us consistently informed at each stage. His passion for his work, combined with his experience and professionalism, made the entire experience seamless and reassuring."</p>
                <div className="flex items-center gap-4 not-italic mt-auto pt-4 border-t border-primary/5">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">H</div>
                  <div>
                    <p className="font-display text-sm font-bold text-primary">Homebuyer</p>
                    <p className="font-display text-xs text-slate-400">Frisco, TX</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
