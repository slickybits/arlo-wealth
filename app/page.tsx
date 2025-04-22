import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Comparison from "@/components/comparison"
import FeeStructure from "@/components/fee-structure"
import ProfitCalculator from "@/components/profit-calculator"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Comparison />
      <FeeStructure />
      <ProfitCalculator />
      <Footer />
    </main>
  )
}
