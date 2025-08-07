"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  ChevronUp,
  MessageCircle,
  Instagram,
  Facebook,
  ArrowRight,
  Users,
  Award,
  MapIcon,
} from "lucide-react";

export default function GreenAcresRealty() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showBackToTop
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <span className="text-xl font-bold text-stone-800">
                Abhinav Properties
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-stone-700 hover:text-blue-800 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-stone-700 hover:text-blue-800 transition-colors font-medium"
              >
                Properties
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-stone-700 hover:text-blue-800 transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className=" shadow-2xl bg-blue-200 hover:bg-blue-700 text-black hover:text-white px-4 py-2 rounded-lg transition-colors font-medium"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-stone-600 hover:text-emerald-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => {
                    scrollToSection("about");
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-stone-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToSection("gallery");
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-stone-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors font-medium"
                >
                  Properties
                </button>
                <button
                  onClick={() => {
                    scrollToSection("testimonials");
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-stone-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors font-medium"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors font-medium"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header/Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.avif?height=1080&width=1920"
            alt="Scenic plot of land in India"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div
          className="relative z-10 text-center te
        xt-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl text-white md:text-7xl font-bold mb-6 animate-fade-in">
            Abhinav Properties
          </h1>
          <p className="text-xl text-white md:text-2xl mb-8 font-light">
            Discover the Land Where Your Dreams Take Root
          </p>
          <Button
            size="lg"
            className="bg-blue-300 hover:bg-blue-800 hover:text-white text-black px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-stone-800 mb-8">
              About Abhinav Properties
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              With over 20+ years of expertise in the Indian real estate market,
              Abhinav Properties specializes in connecting you with premium
              lands and plots across Haryana. From agricultural lands in Punjab
              to residential plots in Bangalore, we understand the unique
              landscape of Indian real estate. Our commitment to transparency,
              legal compliance, and customer satisfaction has made us a trusted
              partner for thousands of property investors and homebuyers.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  1000+ Happy Clients
                </h3>
                <p className="text-stone-600">
                  Trusted by families across India
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  20+ Years Experience
                </h3>
                <p className="text-stone-600">
                  Two decades of real estate expertise
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapIcon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  Legal Compliance
                </h3>
                <p className="text-stone-600">
                  100% verified and documented properties
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              onClick={() => scrollToSection("gallery")}
            >
              Explore Our Offerings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-stone-600">
              Discover premium lands and plots across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                location: "Bangalore, Karnataka",
                type: "Residential Plot",
                area: "2,400 sq ft",
                nearby: [
                  "Electronic City - 5km",
                  "Silk Board - 3km",
                  "Hospitals & Schools nearby",
                ],
                features: [
                  "DTCP Approved",
                  "Ready for Construction",
                  "Gated Community",
                ],
              },
              {
                location: "Gurgaon, Haryana",
                type: "Commercial Land",
                area: "5,000 sq ft",
                nearby: [
                  "Cyber Hub - 2km",
                  "IGI Airport - 15km",
                  "Metro Station - 1km",
                ],
                features: [
                  "Prime Location",
                  "High ROI Potential",
                  "All Utilities Available",
                ],
              },
              {
                location: "Pune, Maharashtra",
                type: "Agricultural Land",
                area: "2 Acres",
                nearby: [
                  "Pune City - 25km",
                  "Highway Access",
                  "Water Source Available",
                ],
                features: [
                  "Fertile Soil",
                  "Irrigation Facility",
                  "Clear Title",
                ],
              },
              {
                location: "Chennai, Tamil Nadu",
                type: "Villa Plot",
                area: "3,200 sq ft",
                nearby: ["OMR - 8km", "IT Parks - 10km", "Beach - 12km"],
                features: ["Corner Plot", "East Facing", "Premium Locality"],
              },
              {
                location: "Hyderabad, Telangana",
                type: "Investment Plot",
                area: "1,800 sq ft",
                nearby: [
                  "HITEC City - 12km",
                  "Airport - 20km",
                  "Outer Ring Road - 5km",
                ],
                features: [
                  "Rapid Appreciation",
                  "Developing Area",
                  "Infrastructure Ready",
                ],
              },
              {
                location: "Kochi, Kerala",
                type: "Waterfront Land",
                area: "4,500 sq ft",
                nearby: [
                  "Backwaters - Adjacent",
                  "City Center - 15km",
                  "Tourist Spots nearby",
                ],
                features: [
                  "Scenic Views",
                  "Tourism Potential",
                  "Unique Location",
                ],
              },
            ].map((property, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-emerald-500"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-stone-800 mb-1">
                      {property.type}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-stone-600 flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1 text-emerald-600" />
                        {property.location}
                      </p>
                      <p className="text-lg font-semibold text-emerald-600">
                        {property.area}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-stone-700 mb-2 flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                        Nearby Places
                      </h4>
                      <ul className="space-y-1">
                        {property.nearby.map((place, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-stone-600 flex items-center"
                          >
                            <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2" />
                            {place}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-stone-700 mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-emerald-600" />
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {property.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-stone-600">Hear from families who found their dream properties with us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                location: "Bangalore, Karnataka",
                rating: 5,
                review:
                  "Green Acres Realty helped us find the perfect residential plot in Electronic City. Their transparency and legal expertise gave us complete confidence. The entire process was smooth and hassle-free.",
                property: "Residential Plot",
              },
              {
                name: "Priya Sharma",
                location: "Gurgaon, Haryana",
                rating: 5,
                review:
                  "Excellent service! They guided us through every step of purchasing our commercial land. Their knowledge of local regulations and market trends is outstanding. Highly recommended!",
                property: "Commercial Land",
              },
              {
                name: "Arun Patel",
                location: "Pune, Maharashtra",
                rating: 5,
                review:
                  "We bought 3 acres of agricultural land through Green Acres Realty. Their team's expertise in rural properties and water rights was invaluable. Very professional and trustworthy.",
                property: "Agricultural Land",
              },
              {
                name: "Meera Nair",
                location: "Kochi, Kerala",
                rating: 5,
                review:
                  "Found our dream waterfront property with their help. The team's local knowledge and attention to detail made all the difference. The legal documentation was perfect.",
                property: "Waterfront Land",
              },
              {
                name: "Vikram Singh",
                location: "Hyderabad, Telangana",
                rating: 5,
                review:
                  "Invested in multiple plots through Green Acres Realty over the past 5 years. Their market insights and investment advice have been spot-on. Great returns on all properties!",
                property: "Investment Plots",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-emerald-600 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                      <p className="text-sm text-stone-600">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed mb-3">"{testimonial.review}"</p>

                  <div className="pt-3 border-t border-stone-200">
                    <span className="text-xs text-emerald-600 font-medium">{testimonial.property}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-stone-600 mb-6">Join thousands of satisfied customers who trust Green Acres Realty</p>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Share Your Experience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-stone-600">
              Ready to find your perfect plot? Let's discuss your requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold"
                >
                  Submit Inquiry
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-2xl font-semibold text-stone-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-stone-700">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-stone-700">
                      info@greenacresrealty.com
                    </span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                    <span className="text-stone-700">
                      123, MG Road, Bangalore, Karnataka, India - 560001
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-stone-800 mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-pink-500 p-3 rounded-full text-white hover:bg-pink-600 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>

              {/* Google Maps */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-4">
                  Find Us
                </h3>
                <div className="w-full h-64 bg-stone-200 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1604.4865274024376!2d76.6618865130959!3d28.887923796750208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d9b60a8c74ed5%3A0xe2bf17d43a6e7072!2sAbhinav%20Properties!5e0!3m2!1sen!2sin!4v1754553203092!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Green Acres Realty</h3>
            <p className="text-stone-300 mb-6">
              Your trusted partner in finding the perfect plot
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="#"
                className="text-stone-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-stone-300 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
            </div>
            <p className="text-stone-400">
              © 2025 Green Acres Realty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
