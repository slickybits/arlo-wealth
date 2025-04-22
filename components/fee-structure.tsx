"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeeStructure() {
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
    <section id="fees" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Fee Structure</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our innovative fee structure aligns our success with yours, ensuring we only profit when you do.
            </p>
          </div>

          <Tabs defaultValue="traditional" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="traditional">Traditional Model</TabsTrigger>
              <TabsTrigger value="arlo">Arlo Wealth Model</TabsTrigger>
            </TabsList>

            <TabsContent value="traditional">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Traditional Fee Structure</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-slate-700 dark:text-slate-200">
                        Annual Management Fee
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Traditional wealth managers typically charge 1-2% of assets under management annually,
                        regardless of performance.
                      </p>

                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                        <p className="font-medium text-slate-700 dark:text-slate-200">Example:</p>
                        <p className="text-slate-600 dark:text-slate-300">
                          On a $500,000 investment, you would pay $5,000-$10,000 in fees every year, even if your
                          portfolio loses value.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-slate-700 dark:text-slate-200">Hidden Fees</h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Many traditional managers also charge additional fees for:
                      </p>

                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                        <li>Account maintenance</li>
                        <li>Transaction fees</li>
                        <li>Fund expense ratios</li>
                        <li>Advisory services</li>
                        <li>Account closing or transfer fees</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-slate-700 dark:text-slate-200">
                        Long-Term Impact
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        These fees compound over time and can significantly reduce your returns. A 2% annual fee can
                        reduce your portfolio value by over 40% over 25 years.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="arlo">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    Arlo Wealth Fee Structure
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-slate-700 dark:text-slate-200">
                        Performance-Based Model
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        We only charge fees on the profits we generate for you. If we don't perform, you don't pay.
                      </p>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <p className="font-medium text-slate-700 dark:text-slate-200">Our Structure:</p>
                        <p className="text-slate-600 dark:text-slate-300">
                          A small base fee (0.25%) plus a performance fee on profits above a predetermined benchmark.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-slate-700 dark:text-slate-200">
                        Complete Transparency
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        With Arlo Wealth, you'll always know exactly what you're paying:
                      </p>

                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                        <li>No hidden fees</li>
                        <li>No transaction costs</li>
                        <li>No account maintenance fees</li>
                        <li>No early withdrawal penalties</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-slate-700 dark:text-slate-200">
                        Aligned Incentives
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Our performance-based fee structure means we only succeed when you do. This aligns our
                        incentives with your financial goals and ensures we're always working to maximize your returns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
