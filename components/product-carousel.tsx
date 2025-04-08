"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

interface Product {
  id: string
  name: string
  image: string
  description: string
}

interface ProductCarouselProps {
  products: Product[]
  category: string
}

export default function ProductCarousel({ products, category }: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleRequestQuote = (productName: string) => {
    const subject = encodeURIComponent(`Quote Request for ${productName}`)
    const body = encodeURIComponent(
      `I would like to request a quote for ${productName}.\n\nPlease provide details on pricing and specifications.\n\nThank you.`,
    )
    window.location.href = `mailto:riyanshienterprises13@gmail.com?subject=${subject}&body=${body}`
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const scrollToIndex = (index: number) => {
    setActiveIndex(index)
    const itemWidth = carouselRef.current?.querySelector(".carousel-item")?.clientWidth || 0
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      })
    }
  }

  // Update active index based on scroll position
  const handleScroll = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0
      const index = Math.round(carouselRef.current.scrollLeft / itemWidth)
      if (index !== activeIndex) {
        setActiveIndex(index)
      }
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll)
      return () => carousel.removeEventListener("scroll", handleScroll)
    }
  }, [activeIndex])

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center p-4"
            id={`${category}/${product.id}`}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="relative h-64">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button onClick={() => handleRequestQuote(product.name)} className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
