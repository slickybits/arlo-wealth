"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProfitCalculator() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [manager, setManager] = useState("fidelity")
  const [amount, setAmount] = useState(100000)
  const [years, setYears] = useState(10)

  // Manager average annual returns
  const managerReturns = {
    fidelity: 0.08,
    vanguard: 0.07,
    schwab: 0.075,
    morganstanley: 0.09,
    jpmorgan: 0.085,
    bofa: 0.08,
    wellsfargo: 0.075,
    tdameritrade: 0.07,
    edwardjones: 0.065,
    independent: 0.08,
  }

  // Manager fees
  const managerFees = {
    fidelity: 0.012,
    vanguard: 0.008,
    schwab: 0.01,
    morganstanley: 0.015,
    jpmorgan: 0.0135,
    bofa: 0.014,
    wellsfargo: 0.0125,
    tdameritrade: 0.009,
    edwardjones: 0.013,
    independent: 0.015,
  }

  // Manager display names
  const managerNames = {
    fidelity: "Fidelity",
    vanguard: "Vanguard",
    schwab: "Charles Schwab",
    morganstanley: "Morgan Stanley",
    jpmorgan: "JPMorgan Chase",
    bofa: "Bank of America/Merrill Lynch",
    wellsfargo: "Wells Fargo",
    tdameritrade: "TD Ameritrade",
    edwardjones: "Edward Jones",
    independent: "Independent Financial Advisor",
  }

  // Arlo return and fee
  const arloReturn = 0.2
  const arloPerformanceFee = 0.15

  // Calculate results
  const calculateResults = () => {
    const selectedManagerReturn = managerReturns[manager as keyof typeof managerReturns] || 0.08
    const selectedManagerFee = managerFees[manager as keyof typeof managerFees] || 0.012

    // Traditional manager calculations
    let traditionalAmount = amount
    let traditionalFees = 0

    for (let i = 0; i < years; i++) {
      const yearReturn = traditionalAmount * selectedManagerReturn
      const yearFee = traditionalAmount * selectedManagerFee

      traditionalFees += yearFee
      traditionalAmount += yearReturn - yearFee
    }

    const traditionalProfit = traditionalAmount - amount

    // Arlo calculations
    let arloAmount = amount
    let arloFees = 0

    for (let i = 0; i < years; i++) {
      const yearReturn = arloAmount * arloReturn
      const yearFee = yearReturn * arloPerformanceFee

      arloFees += yearFee
      arloAmount += yearReturn - yearFee
    }

    const arloProfit = arloAmount - amount

    return {
      traditional: {
        final: Math.round(traditionalAmount),
        profit: Math.round(traditionalProfit),
        fees: Math.round(traditionalFees),
      },
      arlo: {
        final: Math.round(arloAmount),
        profit: Math.round(arloProfit),
        fees: Math.round(arloFees),
      },
    }
  }

  const results = calculateResults()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="calculator" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Profit Calculator</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              See how much more you could earn with Arlo Wealth compared to traditional wealth managers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <Label htmlFor="manager" className="block text-sm font-medium mb-1">
                      Who manages your money?
                    </Label>
                    <Select value={manager} onValueChange={setManager}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select manager" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fidelity">Fidelity</SelectItem>
                        <SelectItem value="vanguard">Vanguard</SelectItem>
                        <SelectItem value="schwab">Charles Schwab</SelectItem>
                        <SelectItem value="morganstanley">Morgan Stanley</SelectItem>
                        <SelectItem value="jpmorgan">JPMorgan Chase</SelectItem>
                        <SelectItem value="bofa">Bank of America/Merrill Lynch</SelectItem>
                        <SelectItem value="wellsfargo">Wells Fargo</SelectItem>
                        <SelectItem value="tdameritrade">TD Ameritrade</SelectItem>
                        <SelectItem value="edwardjones">Edward Jones</SelectItem>
                        <SelectItem value="independent">Independent Financial Advisor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="amount" className="block text-sm font-medium mb-1">
                      Investment Amount
                    </Label>
                    <Select value={amount.toString()} onValueChange={(value) => setAmount(Number(value))}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10000">$10,000</SelectItem>
                        <SelectItem value="50000">$50,000</SelectItem>
                        <SelectItem value="100000">$100,000</SelectItem>
                        <SelectItem value="250000">$250,000</SelectItem>
                        <SelectItem value="500000">$500,000</SelectItem>
                        <SelectItem value="1000000">$1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="years" className="block text-sm font-medium mb-1">
                      Time Period
                    </Label>
                    <Select value={years.toString()} onValueChange={(value) => setYears(Number(value))}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 years</SelectItem>
                        <SelectItem value="10">10 years</SelectItem>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="25">25 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                      With {managerNames[manager as keyof typeof managerNames]}
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Final Investment Value</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                          ${results.traditional.final.toLocaleString()}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Total Profit</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                          ${results.traditional.profit.toLocaleString()}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Total Fees Paid</p>
                        <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                          ${results.traditional.fees.toLocaleString()}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-300 dark:border-slate-600">
                        <p className="text-sm text-slate-600 dark:text-slate-300">Average Annual Return</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          {(managerReturns[manager as keyof typeof managerReturns] * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-2 border-blue-500 dark:border-blue-400">
                    <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">With Arlo Wealth</h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-blue-700 dark:text-blue-300">Final Investment Value</p>
                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                          ${results.arlo.final.toLocaleString()}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-blue-700 dark:text-blue-300">Total Profit</p>
                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                          ${results.arlo.profit.toLocaleString()}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-blue-700 dark:text-blue-300">Total Fees Paid</p>
                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                          ${results.arlo.fees.toLocaleString()}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-blue-300 dark:border-blue-700">
                        <p className="text-sm text-blue-700 dark:text-blue-300">Average Annual Return</p>
                        <p className="text-xl font-bold text-blue-900 dark:text-blue-100">
                          {(arloReturn * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center">
                    <div className="text-blue-500 text-3xl mr-4">💰</div>
                    <div>
                      <p className="font-bold text-blue-800 dark:text-blue-300">
                        That's ${(results.arlo.profit - results.traditional.profit).toLocaleString()} more profit with
                        Arlo Wealth!
                      </p>
                      <p className="text-sm text-blue-700 dark:text-blue-400">
                        {((results.arlo.profit / results.traditional.profit) * 100 - 100).toFixed(0)}% better returns
                        over {years} years.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
