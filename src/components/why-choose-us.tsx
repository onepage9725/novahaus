"use client";

import { StickyFeatureSection, StickyFeature } from "@/components/ui/sticky-scroll-cards-section"

const LANDLORD_PHASES: StickyFeature[] = [
  {
    prefix: "01",
    title: "Expert Property Management",
    description:
      "We specialize in managing student accommodation around Sunway and Subang, providing a premium, hassle-free experience. Our comprehensive services include tenant sourcing, property maintenance, and defect checks for new units.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
  {
    prefix: "02",
    title: "Landlord Rental Protection Plan",
    description:
      "Our rental protection plan ensures timely rental payments, offering peace of mind that your income is secure.​",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-stone-50",
    textColor: "text-gray-600"
  },
  {
    prefix: "03",
    title: "Interior Design & Maintenance",
    description:
      "We help maximize the potential of your property with premium interior designs, ongoing unit maintenance, and thorough defect checks for newly acquired units.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
  {
    prefix: "04",
    title: "Reliable & Transparent Service",
    description:
      "With us, you’ll experience fast, reliable, & transparent services, ensuring your property is well-maintained and your tenants are happy.",
    imageUrl: "/images/rts.jpg",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
]

const TENANT_PHASES: StickyFeature[] = [
  {
    prefix: "01",
    title: "Convenient Student Accommodation",
    description:
      "We provide fully furnished units with premium interior designs to ensure comfort, safety, and convenience. Our properties are designed to create a home-like environment that supports academic success.",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
  {
    prefix: "02",
    title: "Free Shuttle Bus Service",
    description:
      "Tenants enjoy the added benefit of a free shuttle bus service to schools (excluding weekends), making commuting easy and hassle-free.",
    imageUrl: "/images/freeshuttle.jpg",
    bgColor: "bg-stone-50",
    textColor: "text-gray-600"
  },
  {
    prefix: "03",
    title: "Fast and Transparent Services",
    description:
      "From your initial inquiry to move-in day, we ensure smooth and efficient processes, with all details and terms communicated clearly.",
    imageUrl: "/images/fast.jpg",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
  {
    prefix: "04",
    title: "Tailored Support for Students",
    description:
      "Our team is dedicated to helping students find the perfect accommodation, offering support and advice to ensure their experience is positive and stress-free.",
    imageUrl: "/images/support.jpg",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
]

export const WhyChooseUs = () => {
  return (
    <div className="flex flex-col">
      <StickyFeatureSection 
        title={<>Why Choose Us: <span className="text-[#34a0a4]">Landlord</span></>}
        subtitle="NovaHaus Property Management offers a full suite of services that provide both landlords and tenants with peace of mind. Discover how our hassle-free process can benefit you."
        features={LANDLORD_PHASES}
      />
      <div className="h-20 bg-[#ead7c7]" /> {/* Spacer between sections */}
      <StickyFeatureSection 
        title={<>Why Choose Us: <span className="text-[#34a0a4]">Tenant</span></>}
        subtitle="We focus on ensuring our students have a comfortable, well-supported stay. Focus on your studies while we take care of your living spaces."
        features={TENANT_PHASES}
      />
    </div>
  )
}
