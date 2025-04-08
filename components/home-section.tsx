"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HomeSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const images = [
    "/racking/palletracking.jpeg",
    "/conveyors/slat.webp",
    "/trolleys/materialhandling.webp",
    "/conveyors/rollerconveyor.jpg",
    "/conveyors/elevatorconveyor.webp",
  ]

  useEffect(() => {
    // Simulate images loading after 2 seconds
    const timer = setTimeout(() => {
      setImagesLoaded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [imagesLoaded, images.length])

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Premium Pharmaceutical Equipment Manufacturer
          </h1>
          <p className="text-lg text-gray-600">
            Riyanshi Enterprises is a leading manufacturer of high-quality pharmaceutical equipment, providing
            innovative solutions for the pharmaceutical industry with a focus on quality, reliability, and customer
            satisfaction.
          </p>
          <div className="flex space-x-4">
            <Button>
              Explore Products
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>

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
                    className={`w-2 h-2 rounded-full ${currentImage === index ? "bg-primary" : "bg-gray-300"}`}
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
