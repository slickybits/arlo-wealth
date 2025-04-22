"use client"

import { useEffect, useRef } from "react"
import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Comparison() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section id="comparison" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              Why Choose Arlo Wealth
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              See how we compare to traditional wealth management services and why our approach delivers superior
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-center">Traditional Wealth Managers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">High fees (1-2% of assets annually)</p>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Average annual returns of 5-10%</p>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Limited transparency on investment decisions</p>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Human bias in investment decisions</p>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Slow to adapt to market changes</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Personal relationship with advisor</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-blue-600 dark:bg-blue-700 text-white transform scale-105 z-10">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-center">Arlo Wealth</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-white">Lower fee structure (performance-based)</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-white">Target 20% annual returns</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-white">Full transparency on investment strategy</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-white">AI-driven decisions remove human bias</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-white">Real-time adaptation to market conditions</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-white">Digital dashboard with 24/7 access</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-center">Robo-Advisors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Low fees (0.25-0.5% annually)</p>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Average annual returns of 4-8%</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Transparent investment approach</p>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Basic algorithms with limited AI</p>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Limited strategy customization</p>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">No personal financial advice</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
