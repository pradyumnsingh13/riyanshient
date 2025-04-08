"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Clock, PenToolIcon as Tool } from "lucide-react"

export default function HomeSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const images = [
    "/racking/cantilever.jpg",
    "/conveyors/slat.webp",
    "/furniture/ampoulestray.webp",
    "/furniture/crossoverbench.jpg",
    "/conveyors/elevatorconveyor.webp",
  ]

  useEffect(() => {
    // Simulate images loading after 1 second
    const timer = setTimeout(() => {
      setImagesLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [imagesLoaded, images.length])

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Enhanced left side with light colors and interactive elements */}
        <div className="relative space-y-6 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-gray-50 border border-gray-100 shadow-sm">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full opacity-20 -mr-8 -mt-8"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-100 rounded-full opacity-20 -ml-4 -mb-4"></div>

          {/* Accent line */}
          <div className="w-20 h-1 bg-blue-500 rounded mb-4"></div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-600">Premium</span> Pharmaceutical Equipment Manufacturer
          </h1>

          <p className="text-lg text-gray-600 relative z-10">
            Riyanshi Enterprises is a leading manufacturer of high-quality pharmaceutical equipment, providing
            innovative solutions for the pharmaceutical industry with a focus on quality, reliability, and customer
            satisfaction.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-3 gap-2 py-2">
            <div className="flex flex-col items-center text-center p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-300">
              <Award className="h-6 w-6 text-blue-500 mb-1" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-300">
              <Clock className="h-6 w-6 text-green-500 mb-1" />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-300">
              <Tool className="h-6 w-6 text-amber-500 mb-1" />
              <span className="text-sm font-medium">Expert Support</span>
            </div>
          </div>

          <div className="flex space-x-4 pt-2">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Explore Products
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Right side image carousel */}
        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
          {imagesLoaded ? (
            <>
              {images.map((src, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-1000"
                  style={{ opacity: currentImage === index ? 1 : 0 }}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Pharmaceutical equipment ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${currentImage === index ? "bg-blue-600" : "bg-gray-300"}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <div className="animate-pulse text-center">
                <p className="text-gray-500">Loading images...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
