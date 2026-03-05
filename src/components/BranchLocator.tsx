'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { Magnetic } from '@/components/Magnetic'

const mockBranches = [
  {
    id: 1,
    name: "Corporate Headquarters",
    address: "702 Old Peachtree Rd., Suite 200, Suwanee, GA 30024",
    phone: "(770) 423-8200",
    distance: "2.4 miles"
  },
  {
    id: 2,
    name: "Atlanta Downtown",
    address: "100 Peachtree St NW, Atlanta, GA 30303",
    phone: "(770) 555-0198",
    distance: "28.1 miles"
  },
  {
    id: 3,
    name: "Marietta Branch",
    address: "500 Roswell St NE, Marietta, GA 30060",
    phone: "(770) 555-0245",
    distance: "31.5 miles"
  }
]

export function BranchLocator() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    // Simulate network request
    setTimeout(() => setIsSearching(false), 800)
  }

  return (
    <section className="py-24 bg-white border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimateIn delay={0.1}>
            <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Find Us Locally</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-primary mt-4 italic">Locate a Branch</h2>
            <p className="font-display text-slate-500 max-w-2xl mx-auto mt-6">
              With branches across the country, a personalized First Option Mortgage experience is closer than you think. Enter your zip code or city to begin.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50 rounded-[3rem] p-4 lg:p-8">
          {/* Search and List */}
          <div className="lg:col-span-5 bg-white rounded-[2rem] p-8 shadow-sm">
            <AnimateIn delay={0.2}>
              <form onSubmit={handleSearch} className="relative mb-8">
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-slate-400">search</span>
                  <input
                    type="text"
                    placeholder="Enter zip code or city/state"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-2xl py-4 pl-12 pr-32 font-display text-primary placeholder:text-slate-400 transition-all font-medium"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 bg-primary text-white font-display text-xs font-bold uppercase tracking-wider px-6 rounded-xl hover:bg-accent transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>

              <div className="space-y-4">
                {isSearching ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="w-8 h-8 border-4 border-slate-200 border-t-accent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  mockBranches.map((branch, index) => (
                    <motion.div 
                      key={branch.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:border-transparent transition-all cursor-pointer bg-white"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-serif text-xl font-medium text-primary group-hover:text-accent transition-colors">{branch.name}</h4>
                        <span className="bg-primary/5 text-primary text-xs font-bold font-display px-3 py-1 rounded-full">{branch.distance}</span>
                      </div>
                      <p className="font-display text-sm text-slate-500 mb-4">{branch.address}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <span className="font-display text-sm font-bold text-primary flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent text-sm">call</span>
                          {branch.phone}
                        </span>
                        <span className="font-display text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Directions
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </AnimateIn>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-7 rounded-[2rem] overflow-hidden relative min-h-[400px] lg:min-h-[600px] bg-slate-200">
            <AnimateIn delay={0.3} className="h-full w-full">
              {/* This is a stylish abstract placeholder for a map. 
                  In a real implementation, you'd mount Google Maps or Mapbox here. */}
              <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale sepia" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent mix-blend-multiply"></div>
              
              {mockBranches.map((branch, i) => (
                <div 
                  key={branch.id} 
                  className="absolute z-10 flex flex-col items-center group cursor-pointer"
                  // Randomizing position slightly for the mockup visual
                  style={{ 
                    top: `${40 + (i * 15)}%`, 
                    left: `${30 + (i * 20)}%` 
                  }}
                >
                  <div className="bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-xl shadow-xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 absolute top-full pointer-events-none whitespace-nowrap">
                    <span className="font-serif font-medium text-primary">{branch.name}</span>
                  </div>
                  {/* Ping effect */}
                  <div className="absolute top-0 w-10 h-10 bg-accent/40 rounded-full animate-ping"></div>
                </div>
              ))}
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
