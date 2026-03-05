'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AnimateIn } from '@/components/AnimateIn'
import { Magnetic } from '@/components/Magnetic'

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<'purchase' | 'refinance'>('purchase')

  // Shared utility
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimateIn delay={0.1}>
              <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">Financial Tools</span>
              <h1 className="font-serif text-5xl md:text-6xl font-medium text-primary mt-4 italic">Mortgage Calculators</h1>
              <p className="font-display text-slate-500 max-w-2xl mx-auto mt-6 text-lg">
                Explore scenarios for a new purchase or estimate the savings from refinancing your current home.
              </p>
            </AnimateIn>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-2xl shadow-sm flex inline-flex">
              <button
                onClick={() => setActiveTab('purchase')}
                className={`px-8 py-4 rounded-xl font-display font-bold uppercase tracking-widest text-xs transition-all ${
                  activeTab === 'purchase' ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-primary'
                }`}
              >
                Purchase Calculator
              </button>
              <button
                onClick={() => setActiveTab('refinance')}
                className={`px-8 py-4 rounded-xl font-display font-bold uppercase tracking-widest text-xs transition-all ${
                  activeTab === 'refinance' ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-primary'
                }`}
              >
                Refinance Calculator
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'purchase' && <PurchaseCalculator key="purchase" formatCurrency={formatCurrency} />}
            {activeTab === 'refinance' && <RefinanceCalculator key="refinance" formatCurrency={formatCurrency} />}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function PurchaseCalculator({ formatCurrency }: { formatCurrency: (v: number) => string }) {
  const [homePrice, setHomePrice] = useState(450000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [annualTaxes, setAnnualTaxes] = useState(3600)
  const [annualInsurance, setAnnualInsurance] = useState(1200)
  const [monthlyHOA, setMonthlyHOA] = useState(0)

  // Math
  const downPaymentAmount = homePrice * (downPaymentPercent / 100)
  const principalAmount = homePrice - downPaymentAmount
  const monthlyRate = (interestRate / 100) / 12
  const numberOfPayments = loanTerm * 12
  
  const monthlyPrincipalAndInterest = interestRate === 0 
    ? (principalAmount / numberOfPayments) 
    : (principalAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1))

  const monthlyTaxes = annualTaxes / 12
  const monthlyInsurance = annualInsurance / 12
  const totalMonthly = monthlyPrincipalAndInterest + monthlyTaxes + monthlyInsurance + monthlyHOA

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-primary/5"
    >
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="flex justify-between items-end mb-4">
            <label className="font-serif text-xl font-medium text-primary">Home Price</label>
            <input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="font-display text-2xl font-bold text-accent bg-transparent text-right w-48 focus:outline-none border-b-2 border-transparent focus:border-accent" />
          </div>
          <input type="range" min="100000" max="3000000" step="10000" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent" />
        </div>

        <div>
          <div className="flex justify-between items-end mb-4">
            <label className="font-serif text-xl font-medium text-primary">Down Payment</label>
            <div className="flex items-center gap-4">
              <input type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="font-display text-2xl font-bold text-accent bg-transparent text-right w-16 focus:outline-none border-b-2 border-transparent focus:border-accent" />
              <span className="font-display text-2xl text-accent font-bold">%</span>
            </div>
          </div>
          <input type="range" min="0" max="100" step="1" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent" />
          <p className="font-display text-sm text-slate-400 mt-2 text-right">Amount: {formatCurrency(downPaymentAmount)}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="font-serif text-xl font-medium text-primary block mb-4">Loan Term</label>
            <div className="flex bg-slate-100 rounded-2xl p-1 relative">
              {[15, 20, 30].map(term => (
                <button
                  key={term}
                  onClick={() => setLoanTerm(term)}
                  className={`flex-1 py-3 text-sm font-bold font-display z-10 transition-colors ${loanTerm === term ? 'text-white' : 'text-slate-500 hover:text-primary'}`}
                >
                  {term}y
                </button>
              ))}
              <div 
                className={`absolute top-1 bottom-1 w-[calc(33.33%-4px)] bg-accent rounded-xl transition-all duration-300 ease-out ${loanTerm === 15 ? 'left-1' : loanTerm === 20 ? 'left-[calc(33.33%+2px)]' : 'left-[calc(66.66%+2px)]'}`}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="font-serif text-xl font-medium text-primary">Interest Rate</label>
              <div className="flex items-center">
                <input type="number" step="0.125" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="font-display text-2xl font-bold text-accent bg-transparent text-right w-24 focus:outline-none border-b-2 border-transparent focus:border-accent" />
                <span className="font-display text-2xl text-accent font-bold">%</span>
              </div>
            </div>
            <input type="range" min="2.0" max="10.0" step="0.125" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Annual Taxes</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400 font-display">$</span>
              <input type="number" value={annualTaxes} onChange={(e) => setAnnualTaxes(Number(e.target.value))} className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-xl py-3 pl-8 pr-4 font-display font-bold text-primary" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Annual Ins.</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400 font-display">$</span>
              <input type="number" value={annualInsurance} onChange={(e) => setAnnualInsurance(Number(e.target.value))} className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-xl py-3 pl-8 pr-4 font-display font-bold text-primary" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Monthly HOA</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400 font-display">$</span>
              <input type="number" value={monthlyHOA} onChange={(e) => setMonthlyHOA(Number(e.target.value))} className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-xl py-3 pl-8 pr-4 font-display font-bold text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 bg-primary rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between text-white relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,163,115,0.2),transparent)]"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-10">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent mb-4">Total Monthly Payment</h3>
            <motion.div 
              key={totalMonthly}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-serif text-6xl md:text-7xl font-bold text-white flex items-start dropdown-numeric"
            >
              <span className="text-3xl mt-2 mr-1 text-white/50">$</span>
              {Math.round(totalMonthly).toLocaleString()}
            </motion.div>
          </div>

          <div className="space-y-5 flex-grow font-display">
            <div className="flex justify-between items-center pb-5 border-b border-white/10">
              <span className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                Principal & Interest
              </span>
              <span className="font-bold text-lg">{formatCurrency(monthlyPrincipalAndInterest)}</span>
            </div>
            <div className="flex justify-between items-center pb-5 border-b border-white/10">
              <span className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white/50"></div>
                Property Taxes
              </span>
              <span className="font-bold text-lg">{formatCurrency(monthlyTaxes)}</span>
            </div>
            <div className="flex justify-between items-center pb-5 border-b border-white/10">
              <span className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                Home Insurance
              </span>
              <span className="font-bold text-lg">{formatCurrency(monthlyInsurance)}</span>
            </div>
            {monthlyHOA > 0 && (
              <div className="flex justify-between items-center pb-5 border-b border-white/10">
                <span className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  HOA Dues
                </span>
                <span className="font-bold text-lg">{formatCurrency(monthlyHOA)}</span>
              </div>
            )}
          </div>

          <div className="mt-10">
            <Magnetic strength={15}>
              <button className="w-full bg-accent text-primary py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-xl">
                Get Pre-Approved
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function RefinanceCalculator({ formatCurrency }: { formatCurrency: (v: number) => string }) {
  const [currentBalance, setCurrentBalance] = useState(350000)
  const [currentRate, setCurrentRate] = useState(7.5)
  const [newRate, setNewRate] = useState(5.5)
  const [newTerm, setNewTerm] = useState(30)
  const [estimatedClosingCosts, setEstimatedClosingCosts] = useState(4500)

  // Math
  const currentMonthlyRate = (currentRate / 100) / 12
  const currentRemainingPayments = 30 * 12 // Simplified assumption for demo
  const currentPayment = (currentBalance * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, currentRemainingPayments))) / (Math.pow(1 + currentMonthlyRate, currentRemainingPayments) - 1)

  const newMonthlyRate = (newRate / 100) / 12
  const newNumberOfPayments = newTerm * 12
  const newPayment = ((currentBalance + estimatedClosingCosts) * (newMonthlyRate * Math.pow(1 + newMonthlyRate, newNumberOfPayments))) / (Math.pow(1 + newMonthlyRate, newNumberOfPayments) - 1)

  const monthlySavings = currentPayment - newPayment
  const breakevenMonths = monthlySavings > 0 ? Math.ceil(estimatedClosingCosts / monthlySavings) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-primary/5"
    >
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="flex justify-between items-end mb-4">
            <label className="font-serif text-xl font-medium text-primary">Current Loan Balance</label>
            <input type="number" value={currentBalance} onChange={(e) => setCurrentBalance(Number(e.target.value))} className="font-display text-2xl font-bold text-accent bg-transparent text-right w-48 focus:outline-none border-b-2 border-transparent focus:border-accent" />
          </div>
          <input type="range" min="50000" max="2000000" step="10000" value={currentBalance} onChange={(e) => setCurrentBalance(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="font-serif text-xl font-medium text-primary mb-0 block">Current Rate</label>
            </div>
            <div className="flex items-center">
              <input type="number" step="0.125" value={currentRate} onChange={(e) => setCurrentRate(Number(e.target.value))} className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-xl py-3 pl-4 pr-12 font-display font-bold text-primary text-xl" />
              <span className="font-display text-xl text-slate-400 font-bold -ml-10 pointer-events-none">%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="font-serif text-xl font-medium text-primary block">New Rate (Expected)</label>
            </div>
            <div className="flex items-center">
             <input type="number" step="0.125" value={newRate} onChange={(e) => setNewRate(Number(e.target.value))} className="w-full bg-accent/10 border-transparent focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-xl py-3 pl-4 pr-12 font-display font-bold text-accent text-xl" />
             <span className="font-display text-xl text-accent font-bold -ml-10 pointer-events-none">%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
          <div>
            <label className="font-serif text-xl font-medium text-primary block mb-4">New Loan Term</label>
            <div className="flex bg-slate-100 rounded-2xl p-1 relative">
              {[15, 20, 30].map(term => (
                <button
                  key={term}
                  onClick={() => setNewTerm(term)}
                  className={`flex-1 py-3 text-sm font-bold font-display z-10 transition-colors ${newTerm === term ? 'text-white' : 'text-slate-500 hover:text-primary'}`}
                >
                  {term}y
                </button>
              ))}
              <div 
                className={`absolute top-1 bottom-1 w-[calc(33.33%-4px)] bg-primary rounded-xl transition-all duration-300 ease-out ${newTerm === 15 ? 'left-1' : newTerm === 20 ? 'left-[calc(33.33%+2px)]' : 'left-[calc(66.66%+2px)]'}`}
              ></div>
            </div>
          </div>
          <div>
            <label className="font-serif text-xl font-medium text-primary block mb-4">Est. Closing Costs</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400 font-display text-xl">$</span>
              <input type="number" value={estimatedClosingCosts} onChange={(e) => setEstimatedClosingCosts(Number(e.target.value))} className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-xl py-3 pl-8 pr-4 font-display font-bold text-primary text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 flex flex-col justify-between gap-6">
        <div className="bg-primary/5 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Estimated Monthly Savings</h3>
            <motion.div 
              key={monthlySavings}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`font-serif text-6xl md:text-7xl font-bold flex items-start ${monthlySavings > 0 ? 'text-green-600' : 'text-red-500'}`}
            >
              <span className="text-3xl mt-2 mr-1 opacity-50">{monthlySavings > 0 ? '+' : ''}$</span>
              {Math.round(monthlySavings).toLocaleString()}
            </motion.div>
        </div>

        <div className="flex gap-4">
          <div className="bg-white border border-slate-100 rounded-[2rem] p-6 flex-1 text-center shadow-sm">
             <h4 className="font-display text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Current Payment</h4>
             <span className="font-display text-2xl font-bold text-slate-700">{formatCurrency(currentPayment)}</span>
          </div>
          <div className="bg-white border border-slate-100 rounded-[2rem] p-6 flex-1 text-center shadow-sm">
             <h4 className="font-display text-xs font-bold uppercase tracking-widest text-accent mb-2">New Payment</h4>
             <span className="font-display text-2xl font-bold text-primary">{formatCurrency(newPayment)}</span>
          </div>
        </div>

        {breakevenMonths && (
          <div className="bg-accent/10 rounded-2xl p-4 text-center">
             <p className="font-display text-sm text-accent font-bold">
               Refinance Breakeven Point: <span className="text-primary">{breakevenMonths} months</span>
             </p>
             <p className="font-display text-xs text-slate-500 mt-1">Time to recover your estimated closing costs.</p>
          </div>
        )}

        <Magnetic strength={15}>
          <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors shadow-xl mt-4">
            Explore Refinance Options
          </button>
        </Magnetic>
      </div>
    </motion.div>
  )
}
