"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function QualificationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    investmentAmount: "",
    selfManaged: "",
    currentManager: "",
    returns6Months: "",
    returns12Months: "",
    returns24Months: "",
    currentFees: "",
    primaryGoal: "",
    secondaryGoal: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit the form data to your backend or CRM
      console.log("Form submitted:", formData)
      // Show success message or redirect
      setStep(4)
    }
  }

  return (
    <Card className="w-full shadow-lg border-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl text-center text-slate-800 dark:text-white">See If You Qualify</CardTitle>
        <CardDescription className="text-center">
          Provide basic details about your finances to see if you qualify to join.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
              </div>

              <Button type="submit" className="w-full">
                Financial Details &gt;&gt;
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4">Financial Info</h3>

              <div className="space-y-2">
                <Label htmlFor="investmentAmount">How much are you planning to invest?</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("investmentAmount", value)}
                  value={formData.investmentAmount}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under25k">Under $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                    <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                    <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                    <SelectItem value="over1m">Over $1,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Are you currently managing your own portfolio?</Label>
                <RadioGroup
                  onValueChange={(value) => handleRadioChange("selfManaged", value)}
                  value={formData.selfManaged}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="self-yes" />
                    <Label htmlFor="self-yes">Yes, I do</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="self-no" />
                    <Label htmlFor="self-no">No, someone else does</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.selfManaged === "no" && (
                <div className="space-y-2">
                  <Label htmlFor="currentManager">Who is currently managing your money?</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("currentManager", value)}
                    value={formData.currentManager}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select manager" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fidelity">Fidelity</SelectItem>
                      <SelectItem value="vanguard">Vanguard</SelectItem>
                      <SelectItem value="schwab">Charles Schwab</SelectItem>
                      <SelectItem value="jpmorgan">JP Morgan</SelectItem>
                      <SelectItem value="morganstanley">Morgan Stanley</SelectItem>
                      <SelectItem value="bofa">Bank of America</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label>What are your returns for the last:</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="returns6Months" className="text-sm">
                      6 months
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("returns6Months", value)}
                      value={formData.returns6Months}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="negative">Negative</SelectItem>
                        <SelectItem value="0-5">0-5%</SelectItem>
                        <SelectItem value="5-10">5-10%</SelectItem>
                        <SelectItem value="10-15">10-15%</SelectItem>
                        <SelectItem value="15+">15%+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="returns12Months" className="text-sm">
                      12 months
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("returns12Months", value)}
                      value={formData.returns12Months}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="negative">Negative</SelectItem>
                        <SelectItem value="0-5">0-5%</SelectItem>
                        <SelectItem value="5-10">5-10%</SelectItem>
                        <SelectItem value="10-15">10-15%</SelectItem>
                        <SelectItem value="15-20">15-20%</SelectItem>
                        <SelectItem value="20+">20%+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="returns24Months" className="text-sm">
                      24 months
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("returns24Months", value)}
                      value={formData.returns24Months}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="negative">Negative</SelectItem>
                        <SelectItem value="0-10">0-10%</SelectItem>
                        <SelectItem value="10-20">10-20%</SelectItem>
                        <SelectItem value="20-30">20-30%</SelectItem>
                        <SelectItem value="30+">30%+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentFees">What fees are you currently paying?</Label>
                <Input
                  id="currentFees"
                  name="currentFees"
                  placeholder="e.g., 1% annually"
                  value={formData.currentFees}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full">
                Financial Goals &gt;&gt;
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4">Financial Goals</h3>

              <div className="space-y-2">
                <Label>What is your primary financial goal at the moment?</Label>
                <RadioGroup
                  onValueChange={(value) => handleRadioChange("primaryGoal", value)}
                  value={formData.primaryGoal}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="growth" id="primary-growth" />
                    <Label htmlFor="primary-growth">Portfolio Growth</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="income" id="primary-income" />
                    <Label htmlFor="primary-income">Income Generation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maintenance" id="primary-maintenance" />
                    <Label htmlFor="primary-maintenance">Wealth Maintenance</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>What is your secondary financial goal at the moment?</Label>
                <RadioGroup
                  onValueChange={(value) => handleRadioChange("secondaryGoal", value)}
                  value={formData.secondaryGoal}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="growth" id="secondary-growth" />
                    <Label htmlFor="secondary-growth">Portfolio Growth</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="income" id="secondary-income" />
                    <Label htmlFor="secondary-income">Income Generation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maintenance" id="secondary-maintenance" />
                    <Label htmlFor="secondary-maintenance">Wealth Maintenance</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">
                Submit to See If You Qualify
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Your application has been submitted. Our team will review your information and contact you shortly.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setStep(1)
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    zipCode: "",
                    investmentAmount: "",
                    selfManaged: "",
                    currentManager: "",
                    returns6Months: "",
                    returns12Months: "",
                    returns24Months: "",
                    currentFees: "",
                    primaryGoal: "",
                    secondaryGoal: "",
                  })
                }}
              >
                Start Over
              </Button>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
