"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const productCategories = {
  conveyors: [
    "loading-conveyor",
    "slat-conveyor",
    "bend-conveyor",
    "packing-conveyor",
    "visual-inspection-conveyor",
    "roller-conveyor",
    "elevator-conveyor",
    "material-transfer-conveyor",
  ],
  furniture: [
    "cross-over-bench",
    "ss-locker",
    "ms-locker",
    "apron-locker",
    "book-almirah",
    "computer-table",
    "powder-sampler",
    "step-ladder",
    "sink-table",
    "almirah",
    "chair",
    "diepunch-cabinet",
    "dustbin",
    "ipc",
    "mug",
    "pallet",
    "petri-stand",
    "scoop",
    "sop-stand",
    "spatulla",
    "ss-ms-pallet-truck",
    "ss-container",
    "stool",
    "table",
    "toolbox",
    "tray",
    "ampoules-tray",
    "wallguard",
    "stirir",
  ],
  racking: ["pallet-racking", "cantilever-racking", "mezzazine-racking"],
  trolleys: ["utility-trolleys", "material-handling-trolleys", "clean-room-trolleys"],
}

const formatName = (name: string) => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [showDropdown, setShowDropdown] = useState<string | null>(null)
  const router = useRouter()

  const allProducts = [
    ...productCategories.conveyors.map((item) => ({ name: item, category: "conveyors" })),
    ...productCategories.furniture.map((item) => ({ name: item, category: "furniture" })),
    ...productCategories.racking.map((item) => ({ name: item, category: "racking" })),
    ...productCategories.trolleys.map((item) => ({ name: item, category: "trolleys" })),
  ]

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const results = allProducts
      .filter((product) => formatName(product.name).toLowerCase().includes(searchQuery.toLowerCase()))
      .map((product) => `${product.category}/${product.name}`)

    setSearchResults(results)
  }

  const handleSearchItemClick = (path: string) => {
    router.push(`#${path}`)
    setSearchQuery("")
    setSearchResults([])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  useEffect(() => {
    if (searchQuery) {
      handleSearch()
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-1 ">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold">Riyanshi Enterprises</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#home" className="px-1 py-2 hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="px-3 py-2 hover:text-primary">
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShowDropdown("conveyors")}
              onMouseLeave={() => setShowDropdown(null)}
            >
              <Link href="#conveyors" className="px-3 py-2 hover:text-primary">
                Conveyors
              </Link>
              {showDropdown === "conveyors" && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10">
                  {productCategories.conveyors.map((item) => (
                    <Link key={item} href={`#conveyors/${item}`} className="block px-4 py-2 hover:bg-gray-100">
                      {formatName(item)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setShowDropdown("furniture")}
              onMouseLeave={() => setShowDropdown(null)}
            >
              <Link href="#furniture" className="px-3 py-2 hover:text-primary">
                Furniture Items
              </Link>
              {showDropdown === "furniture" && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10 max-h-96 overflow-y-auto">
                  {productCategories.furniture.map((item) => (
                    <Link key={item} href={`#furniture/${item}`} className="block px-4 py-2 hover:bg-gray-100">
                      {formatName(item)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setShowDropdown("racking")}
              onMouseLeave={() => setShowDropdown(null)}
            >
              <Link href="#racking" className="px-3 py-2 hover:text-primary">
                Racking
              </Link>
              {showDropdown === "racking" && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10">
                  {productCategories.racking.map((item) => (
                    <Link key={item} href={`#racking/${item}`} className="block px-4 py-2 hover:bg-gray-100">
                      {formatName(item)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setShowDropdown("trolleys")}
              onMouseLeave={() => setShowDropdown(null)}
            >
              <Link href="#trolleys" className="px-3 py-2 hover:text-primary">
                Trolleys
              </Link>
              {showDropdown === "trolleys" && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10">
                  {productCategories.trolleys.map((item) => (
                    <Link key={item} href={`#trolleys/${item}`} className="block px-4 py-2 hover:bg-gray-100">
                      {formatName(item)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="#clients" className="px-3 py-2 hover:text-primary">
              Clients
            </Link>
            <Link href="#contact" className="px-3 py-2 hover:text-primary">
              Contact Us
            </Link>

            <div className="relative ml-4">
              <div className="flex items-center border rounded-full px-3 py-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none w-40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Search className="h-5 w-5 text-gray-400 cursor-pointer" onClick={handleSearch} />
              </div>

              {searchResults.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10 max-h-96 overflow-y-auto">
                  {searchResults.map((result) => (
                    <button
                      key={result}
                      onClick={() => handleSearchItemClick(result)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {formatName(result.split("/")[1])}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="relative mr-4">
              <div className="flex items-center border rounded-full px-3 py-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none w-32"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Search className="h-5 w-5 text-gray-400 cursor-pointer" onClick={handleSearch} />
              </div>

              {searchResults.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10 max-h-96 overflow-y-auto">
                  {searchResults.map((result) => (
                    <button
                      key={result}
                      onClick={() => handleSearchItemClick(result)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {formatName(result.split("/")[1])}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#home" className="block px-3 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#about" className="block px-3 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <div className="relative">
            <Link
              href="#conveyors"
              className="block px-3 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Conveyors
            </Link>
            <div className="pl-6 space-y-1">
              {productCategories.conveyors.map((item) => (
                <Link
                  key={item}
                  href={`#conveyors/${item}`}
                  className="block px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {formatName(item)}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <Link
              href="#furniture"
              className="block px-3 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Furniture Items
            </Link>
            <div className="pl-6 space-y-1">
              {productCategories.furniture.map((item) => (
                <Link
                  key={item}
                  href={`#furniture/${item}`}
                  className="block px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {formatName(item)}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <Link
              href="#racking"
              className="block px-3 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Racking
            </Link>
            <div className="pl-6 space-y-1">
              {productCategories.racking.map((item) => (
                <Link
                  key={item}
                  href={`#racking/${item}`}
                  className="block px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {formatName(item)}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <Link
              href="#trolleys"
              className="block px-3 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Trolleys
            </Link>
            <div className="pl-6 space-y-1">
              {productCategories.trolleys.map((item) => (
                <Link
                  key={item}
                  href={`#trolleys/${item}`}
                  className="block px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {formatName(item)}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="#clients"
            className="block px-3 py-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Clients
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
