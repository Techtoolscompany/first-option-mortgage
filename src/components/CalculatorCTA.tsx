'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { Magnetic } from '@/components/Magnetic'

export function CalculatorCTA() {
  const [homePrice, setHomePrice] = useState(400000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)

  // Derived calculations
  const downPaymentAmount = homePrice * (downPaymentPercent / 100)
  const principalAmount = homePrice - downPaymentAmount
  
  // Standard Amortization Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1 ]
  const monthlyRate = (interestRate / 100) / 12
  const numberOfPayments = loanTerm * 12
  
  const calculateMonthlyPayment = () => {
    if (interestRate === 0) return principalAmount / numberOfPayments
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)
    const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1
    return principalAmount * (numerator / denominator)
  }

  const monthlyPrincipalAndInterest = calculateMonthlyPayment()
  
  // Estimates
  const estimatedTaxes = homePrice * 0.012 / 12 // ~1.2% annual avg
  const estimatedInsurance = homePrice * 0.0035 / 12 // ~0.35% annual avg
  const totalMonthly = monthlyPrincipalAndInterest + estimatedTaxes + estimatedInsurance

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)

  return (
    <section className="py-24 bg-background-light relative overflow-hidden" id="calculator">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-primary/5">
          <div className="text-center mb-12">
            <AnimateIn delay={0.1}>
              <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Estimate Your Cost</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-primary mt-4 italic">Interactive Mortgage Calculator</h2>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Controls (Left) */}
            <div className="lg:col-span-7 space-y-10">
              <AnimateIn delay={0.2}>
                {/* Home Price */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="font-serif text-xl font-medium text-primary">Home Price</label>
                    <span className="font-display text-2xl font-bold text-accent">{formatCurrency(homePrice)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100000" 
                    max="2000000" 
                    step="10000"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                {/* Down Payment */}
                <div className="mt-8">
                  <div className="flex justify-between items-end mb-4">
                    <label className="font-serif text-xl font-medium text-primary">Down Payment</label>
                    <div className="text-right">
                      <span className="font-display text-2xl font-bold text-accent">{downPaymentPercent}%</span>
                      <p className="font-display text-sm text-slate-400">{formatCurrency(downPaymentAmount)}</p>
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="1"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {/* Loan Term */}
                  <div>
                    <label className="font-serif text-xl font-medium text-primary block mb-4">Loan Term</label>
                    <div className="flex bg-slate-100 rounded-2xl p-1 relative">
                      {[15, 30].map(term => (
                        <button
                          key={term}
                          onClick={() => setLoanTerm(term)}
                          className={`flex-1 py-3 text-sm font-bold font-display z-10 transition-colors ${loanTerm === term ? 'text-white' : 'text-slate-500 hover:text-primary'}`}
                        >
                          {term} Years
                        </button>
                      ))}
                      <div 
                        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-accent rounded-xl transition-all duration-300 ease-out ${loanTerm === 15 ? 'left-1' : 'left-[calc(50%+2px)]'}`}
                      ></div>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="font-serif text-xl font-medium text-primary mb-0 block">Interest Rate</label>
                      <span className="font-display text-xl font-bold text-accent">{interestRate.toFixed(3)}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="2.0" 
                      max="10.0" 
                      step="0.125"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent mt-2"
                    />
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Results (Right) */}
            <div className="lg:col-span-5 bg-primary/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between">
              <AnimateIn delay={0.3} className="h-full flex flex-col">
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">Estimated Monthly Payment</h3>
                
                <div className="mb-12">
                  <motion.div 
                    key={totalMonthly}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-6xl md:text-7xl font-bold text-primary flex items-start dropdown-numeric"
                  >
                    <span className="text-3xl mt-2 mr-1">$</span>
                    {Math.round(totalMonthly).toLocaleString()}
                    <span className="font-display text-base text-slate-400 font-normal ml-2 self-end mb-2">/mo</span>
                  </motion.div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex justify-between items-center text-sm font-display border-b border-primary/5 pb-4">
                    <span className="flex items-center gap-2 text-slate-600">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                      Principal & Interest
                    </span>
                    <span className="font-bold text-primary">{formatCurrency(monthlyPrincipalAndInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-display border-b border-primary/5 pb-4">
                    <span className="flex items-center gap-2 text-slate-600">
                      <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                      Property Taxes <span className="text-[10px] text-slate-400 font-normal ml-1">(Est.)</span>
                    </span>
                    <span className="font-bold text-primary">{formatCurrency(estimatedTaxes)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-display pb-4">
                    <span className="flex items-center gap-2 text-slate-600">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      Home Insurance <span className="text-[10px] text-slate-400 font-normal ml-1">(Est.)</span>
                    </span>
                    <span className="font-bold text-primary">{formatCurrency(estimatedInsurance)}</span>
                  </div>
                </div>

                <Magnetic strength={15}>
                  <button className="font-display w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors shadow-xl">
                    Get a Free Quote Now
                  </button>
                </Magnetic>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
