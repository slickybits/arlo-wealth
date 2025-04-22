"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import QualificationForm from "./qualification-form"

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"

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
    <section className="min-h-screen pt-20 pb-10 flex items-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br -z-10"></div>

      {/* Light mode background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 -z-20 ${isDarkMode ? "opacity-0" : "opacity-30"}`}
      >
        <Image
          src="/ai-wealth-light.svg?height=1920&width=1920"
          alt="Light mode background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark mode background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 -z-20 ${isDarkMode ? "opacity-30" : "opacity-0"}`}
      >
        <Image
          src="/ai-wealth-dark.svg?height=1920&width=1920"
          alt="Dark mode background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div ref={sectionRef} className="section-fade-in">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=80&width=240"
                alt="Arlo Wealth Logo"
                width={240}
                height={80}
                className="h-20 w-auto"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 dark:text-white">
              AI-Powered <span className="text-blue-600 dark:text-blue-400">Wealth Growth</span> For Everyone
            </h1>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-lg text-slate-700 dark:text-slate-200">
                  Consistent 20% annual growth potential
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-lg text-slate-700 dark:text-slate-200">AI-powered investment strategies</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-lg text-slate-700 dark:text-slate-200">
                  Lower fees than traditional wealth managers
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-lg text-slate-700 dark:text-slate-200">Personalized investment strategy</span>
              </li>
            </ul>

            <div className="mb-8">
              <div className="flex flex-wrap gap-6 items-center">
                <Image src="/placeholder.svg?height=30&width=100" alt="Forbes" width={100} height={30} />
                <Image src="/placeholder.svg?height=30&width=100" alt="Bloomberg" width={100} height={30} />
                <Image src="/placeholder.svg?height=30&width=100" alt="Wall Street Journal" width={100} height={30} />
              </div>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600 dark:text-slate-300">
              <p className="text-lg">
                "Less than 1% of funds achieve 20% annual growth consistently. And none of them were available to the
                general public…until now."
              </p>
              <footer className="mt-2 text-sm font-medium">Forbes Magazine</footer>
            </blockquote>
          </div>

          {/* Right Column - Form */}
          <div className="section-fade-in visible">
            <QualificationForm />
          </div>
        </div>
      </div>

      <div className="scroll-indicator dark:border-white"></div>
    </section>
  )
}
