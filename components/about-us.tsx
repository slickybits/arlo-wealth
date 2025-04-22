"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Award, Zap } from "lucide-react"

export default function AboutUs() {
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
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">About Arlo Wealth</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We're building the future of wealth management with AI-powered investment strategies that were previously
              only available to the ultra-wealthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Arlo Wealth Platform"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-md bg-blue-50 dark:bg-blue-900/20">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <TrendingUp className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Consistent Growth</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Our AI-powered strategies aim for 20% annual growth
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md bg-blue-50 dark:bg-blue-900/20">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Shield className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Advanced algorithms to protect your investments
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md bg-blue-50 dark:bg-blue-900/20">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Award className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-slate-600 dark:text-slate-300">Backed by financial experts and AI specialists</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md bg-blue-50 dark:bg-blue-900/20">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Zap className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Fast Execution</h3>
                    <p className="text-slate-600 dark:text-slate-300">Real-time market analysis and rapid execution</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-200">
                At Arlo Wealth, we combine cutting-edge AI technology with financial expertise to create investment
                strategies that were previously only available to institutional investors and the ultra-wealthy. Our
                name "Arlo" means "fortified hill," representing our commitment to building strong, secure financial
                futures for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
