"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Wrench, Zap, Thermometer, Shield, Users, CheckCircle, Star, ArrowRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
 
export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    urgency: "",
    location: "",
    description: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch('/api/submit-service-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage("Thank you! Your service request has been submitted. Our team will contact you within 2 hours.")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          urgency: "",
          location: "",
          description: ""
        })
      } else {
        setSubmitMessage("There was an error submitting your request. Please try again or call us directly at (929) 208-8175.")
      }
    } catch (error) {
      setSubmitMessage("There was an error submitting your request. Please try again or call us directly at (929) 208-8175.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    const formSection = document.getElementById('service-request-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/primefix-logo.svg"
                alt="PrimeFix US Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">PrimeFix US</h1>
                <p className="text-sm text-gray-600">Texas Facility Management Experts</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Button onClick={scrollToForm} className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </nav>
          </div>
        </div>
      </header>
 
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                  🏢 Texas's Premier Facility Services
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Professional Facility Management
                  <span className="text-blue-600"> Across Texas</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From HVAC maintenance to electrical repairs, we provide comprehensive facility services
                  with 24/7 emergency response. Our certified engineers serve Dallas, Houston, Austin,
                  San Antonio, and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={scrollToForm} className="bg-blue-600 hover:bg-blue-700">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                    <a href="tel:+19292088175">
                      <Phone className="mr-2 h-5 w-5" />
                      Emergency: (929) 208-8175
                    </a>
                  </Button>
                </div>
                <div className="flex items-center mt-8 space-x-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">24/7 Emergency Service</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/facility-engineer-hvac.png"
                  alt="Professional HVAC technician working on facility systems"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Star className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">4.9/5 Rating</p>
                      <p className="text-sm text-gray-600">500+ Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 
        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Facility Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our certified engineers provide expert maintenance, repairs, and installations
                across all facility systems throughout Texas.
              </p>
            </div>
           
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Thermometer className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>HVAC Services</CardTitle>
                  <CardDescription>
                    Complete heating, ventilation, and air conditioning maintenance and repair
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Preventive maintenance programs</li>
                    <li>• Emergency repair services</li>
                    <li>• System installations & upgrades</li>
                    <li>• Energy efficiency audits</li>
                  </ul>
                </CardContent>
              </Card>
 
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle>Electrical Services</CardTitle>
                  <CardDescription>
                    Professional electrical maintenance, repairs, and installations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Electrical system maintenance</li>
                    <li>• Lighting repairs & upgrades</li>
                    <li>• Power distribution services</li>
                    <li>• Emergency electrical repairs</li>
                  </ul>
                </CardContent>
              </Card>
 
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Plumbing Services</CardTitle>
                  <CardDescription>
                    Complete plumbing maintenance and repair solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Pipe repairs & replacements</li>
                    <li>• Drain cleaning & maintenance</li>
                    <li>• Water heater services</li>
                    <li>• Emergency plumbing repairs</li>
                  </ul>
                </CardContent>
              </Card>
 
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Security Systems</CardTitle>
                  <CardDescription>
                    Access control, surveillance, and security system maintenance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Access control systems</li>
                    <li>• CCTV installation & repair</li>
                    <li>• Alarm system maintenance</li>
                    <li>• Security system upgrades</li>
                  </ul>
                </CardContent>
              </Card>
 
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>General Maintenance</CardTitle>
                  <CardDescription>
                    Comprehensive facility maintenance and repair services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Preventive maintenance programs</li>
                    <li>• Building repairs & upkeep</li>
                    <li>• Equipment maintenance</li>
                    <li>• Facility inspections</li>
                  </ul>
                </CardContent>
              </Card>
 
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Emergency Services</CardTitle>
                  <CardDescription>
                    24/7 emergency response for critical facility issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 24/7 emergency hotline</li>
                    <li>• Rapid response teams</li>
                    <li>• Critical system repairs</li>
                    <li>• Emergency backup solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
 
        {/* Lead Capture Form */}
        <section id="service-request-form" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Get Your Free Service Quote
                </h2>
                <p className="text-xl text-gray-600">
                  Submit your facility service request and our team will contact you within 2 hours
                </p>
              </div>
 
              <Card className="shadow-xl">
                <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Request Service</CardTitle>
                  <CardDescription className="text-blue-100">
                    Fill out the form below and we'll get back to you immediately
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter your first name" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name" 
                          required 
                        />
                      </div>
                    </div>
 
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567" 
                          required 
                        />
                      </div>
                    </div>
 
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name" 
                      />
                    </div>
 
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hvac">HVAC Services</SelectItem>
                            <SelectItem value="electrical">Electrical Services</SelectItem>
                            <SelectItem value="plumbing">Plumbing Services</SelectItem>
                            <SelectItem value="security">Security Systems</SelectItem>
                            <SelectItem value="general">General Maintenance</SelectItem>
                            <SelectItem value="emergency">Emergency Service</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (Immediate)</SelectItem>
                            <SelectItem value="urgent">Urgent (Same Day)</SelectItem>
                            <SelectItem value="normal">Normal (1-3 Days)</SelectItem>
                            <SelectItem value="scheduled">Scheduled Maintenance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
 
                    <div className="space-y-2">
                      <Label htmlFor="location">Facility Location *</Label>
                      <Input 
                        id="location" 
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="City, State (e.g., Dallas, TX)" 
                        required 
                      />
                    </div>
 
                    <div className="space-y-2">
                      <Label htmlFor="description">Service Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Please describe the service you need, including any specific issues or requirements..."
                        rows={4}
                        required
                      />
                    </div>
 
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded" required />
                      <Label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to be contacted by PrimeFix US regarding my service request
                      </Label>
                    </div>

                    {submitMessage && (
                      <div className={`p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                        {submitMessage}
                      </div>
                    )}
 
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Service Request'}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
 
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Texas's Most Trusted Facility Services Company
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over 15 years of experience serving businesses across Texas, PrimeFix US
                  has built a reputation for reliability, expertise, and exceptional customer service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Certified Engineers</h3>
                      <p className="text-gray-600">All our technicians are licensed, certified, and continuously trained</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Statewide Coverage</h3>
                      <p className="text-gray-600">Serving major Texas cities including Dallas, Houston, Austin, and San Antonio</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">24/7 Emergency Response</h3>
                      <p className="text-gray-600">Round-the-clock emergency services for critical facility issues</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/texas-facility-team.png"
                  alt="PrimeFix US professional team reviewing facility plans"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
 
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100">
                Contact us today for immediate assistance or to schedule a service
              </p>
            </div>
 
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-blue-100 mb-2">24/7 Emergency Hotline</p>
                  <a href="tel:+19292088175" className="text-2xl font-bold hover:text-blue-200">
                    (929) 208-8175
                  </a>
                </CardContent>
              </Card>
 
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-blue-100 mb-2">Get a quote or ask questions</p>
                  <a href="mailto:info@primefixus.com" className="text-lg hover:text-blue-200">
                    info@primefixus.com
                  </a>
                </CardContent>
              </Card>
 
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Service Area</h3>
                  <p className="text-blue-100 mb-2">Statewide Coverage</p>
                  <p className="text-lg">All Major Texas Cities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
 
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/primefix-logo.svg"
                  alt="PrimeFix US Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="text-lg font-bold">PrimeFix US</h3>
                </div>
              </div>
              <p className="text-gray-400">
                Texas's premier facility management company providing comprehensive
                maintenance and repair services statewide.
              </p>
            </div>
 
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>HVAC Services</li>
                <li>Electrical Services</li>
                <li>Plumbing Services</li>
                <li>Security Systems</li>
                <li>General Maintenance</li>
                <li>Emergency Services</li>
              </ul>
            </div>
 
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dallas-Fort Worth</li>
                <li>Houston</li>
                <li>Austin</li>
                <li>San Antonio</li>
                <li>El Paso</li>
                <li>Statewide Coverage</li>
              </ul>
            </div>
 
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+19292088175" className="hover:text-white">
                    (929) 208-8175
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:info@primefixus.com" className="hover:text-white">
                    info@primefixus.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24/7 Emergency Service
                </p>
              </div>
            </div>
          </div>
 
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PrimeFix US. All rights reserved. Licensed & Insured in Texas.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
