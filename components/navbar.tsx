"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X, ChevronDown } from "lucide-react"

// Product categories for dropdown menus
const productCategories = {
  conveyors: [
    { name: "Loading Conveyor", id: "loading-conveyor" },
    { name: "Slat Conveyor", id: "slat-conveyor" },
    { name: "Bend Conveyor", id: "bend-conveyor" },
    { name: "Packing Conveyor", id: "packing-conveyor" },
    { name: "Visual Inspection Conveyor", id: "visual-inspection-conveyor" },
    { name: "Roller Conveyor", id: "roller-conveyor" },
    { name: "Elevator Conveyor", id: "elevator-conveyor" },
    { name: "Material Transfer Conveyor", id: "material-transfer-conveyor" },
  ],
  furniture: [
    { name: "Cross Over Bench", id: "cross-over-bench" },
    { name: "SS Locker", id: "ss-locker" },
    { name: "MS Locker", id: "ms-locker" },
    { name: "Apron Locker", id: "apron-locker" },
    { name: "Book Almirah", id: "book-almirah" },
    { name: "Computer Table", id: "computer-table" },
    { name: "Powder Sampler", id: "powder-sampler" },
    { name: "Step Ladder", id: "step-ladder" },
    { name: "Sink Table", id: "sink-table" },
    { name: "Almirah", id: "almirah" },
    { name: "Chair", id: "chair" },
    { name: "Diepunch Cabinet", id: "diepunch-cabinet" },
    { name: "Dustbin", id: "dustbin" },
    { name: "IPC", id: "ipc" },
    { name: "Mug", id: "mug" },
    { name: "Pallet", id: "pallet" },
    { name: "Petri Stand", id: "petri-stand" },
    { name: "Scoop", id: "scoop" },
    { name: "SOP Stand", id: "sop-stand" },
    { name: "Spatulla", id: "spatulla" },
    { name: "SS & MS Pallet Truck", id: "ss-ms-pallet-truck" },
    { name: "SS Container", id: "ss-container" },
    { name: "Stool", id: "stool" },
    { name: "Table", id: "table" },
    { name: "Toolbox", id: "toolbox" },
    { name: "Tray", id: "tray" },
    { name: "Ampoules Tray", id: "ampoules-tray" },
    { name: "Wallguard", id: "wallguard" },
    { name: "Stirir", id: "stirir" },
  ],
  racking: [
    { name: "Pallet Racking", id: "pallet-racking" },
    { name: "Cantilever Racking", id: "cantilever-racking" },
    { name: "Mezzazine Racking", id: "mezzazine-racking" },
  ],
  trolleys: [
    { name: "Utility Trolleys", id: "utility-trolleys" },
    { name: "Material Handling Trolleys", id: "material-handling-trolleys" },
    { name: "Clean Room Trolleys", id: "clean-room-trolleys" },
  ],
}

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Array<{ name: string; category: string; id: string }>>([])
  const [showDropdown, setShowDropdown] = useState<string | null>(null)

  // Combine all products for search
  const allProducts = [
    ...productCategories.conveyors.map((item) => ({ ...item, category: "conveyors" })),
    ...productCategories.furniture.map((item) => ({ ...item, category: "furniture" })),
    ...productCategories.racking.map((item) => ({ ...item, category: "racking" })),
    ...productCategories.trolleys.map((item) => ({ ...item, category: "trolleys" })),
  ]

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = allProducts.filter((product) => product.name.toLowerCase().includes(query))

    setSearchResults(results)
  }

  const handleSearchItemClick = (category: string, id: string) => {
    // Navigate to the section and product on the main page
    window.location.href = `/#${category}-${id}`
    setSearchQuery("")
    setSearchResults([])
    setIsMenuOpen(false)
  }

  // Smooth scroll to section when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # character
        const targetId = hash.substring(1)

        // Give time for the DOM to render
        setTimeout(() => {
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    }

    // Handle hash on initial load
    handleHashChange()

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange)

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Search when query changes
  useEffect(() => {
    handleSearch()
  }, [searchQuery])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo - reduced width on mobile */}
          <div className="flex-shrink-0 w-auto max-w-[140px] sm:max-w-none mr-2">
            <Link href="/" className="font-bold text-lg md:text-xl truncate block">
              Riyanshi Enterprises
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 flex-grow justify-center">
            <Link href="/#home" className="px-2 py-2 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/#about" className="px-2 py-2 hover:text-gray-900 font-medium">
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShowDropdown("conveyors")}
              onMouseLeave={() => setShowDropdown(null)}
            >
              <button className="flex items-center px-2 py-2 hover:text-gray-900 font-medium">
                Conveyors
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showDropdown === "conveyors" && (
                <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md py-2 z-10 max-h-96 overflow-y-auto">
                  {productCategories.conveyors.map((item) => (
                    <Link
                      key={item.id}
                      href={`/#conveyors-${item.id}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowDropdown(null)}
                    >
                      {item.name}
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
              <button className="flex items-center px-2 py-2 hover:text-gray-900 font-medium">
                Furniture Items
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showDropdown === "furniture" && (
                <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md py-2 z-10 max-h-96 overflow-y-auto">
                  {productCategories.furniture.map((item) => (
                    <Link
                      key={item.id}
                      href={`/#furniture-${item.id}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowDropdown(null)}
                    >
                      {item.name}
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
              <button className="flex items-center px-2 py-2 hover:text-gray-900 font-medium">
                MS Racking
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showDropdown === "racking" && (
                <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md py-2 z-10">
                  {productCategories.racking.map((item) => (
                    <Link
                      key={item.id}
                      href={`/#racking-${item.id}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowDropdown(null)}
                    >
                      {item.name}
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
              <button className="flex items-center px-2 py-2 hover:text-gray-900 font-medium">
                Trolleys
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showDropdown === "trolleys" && (
                <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md py-2 z-10">
                  {productCategories.trolleys.map((item) => (
                    <Link
                      key={item.id}
                      href={`/#trolleys-${item.id}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#clients" className="px-2 py-2 hover:text-gray-900 font-medium">
              Clients
            </Link>
            <Link href="/#contact" className="px-2 py-2 hover:text-gray-900 font-medium">
              Contact Us
            </Link>
          </nav>

          {/* Search and Mobile Menu Button - Flex container with space-between */}
          <div className="flex items-center ml-auto space-x-2">
            {/* Desktop Search */}
            <div className="hidden lg:flex relative">
              <div className="flex items-center border rounded-full px-3 py-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none w-40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <Search className="h-5 w-5 text-gray-400 cursor-pointer" onClick={handleSearch} />
              </div>

              {searchResults.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10 max-h-96 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearchItemClick(result.category, result.id)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      <span className="font-medium">{result.name}</span>
                      <span className="text-sm text-gray-500 block capitalize">{result.category}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Search - Reduced width */}
            <div className="lg:hidden relative flex-shrink">
              <div className="flex items-center border rounded-full px-2 py-1">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none w-16 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <Search className="h-4 w-4 text-gray-400 cursor-pointer" onClick={handleSearch} />
              </div>

              {searchResults.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10 max-h-96 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearchItemClick(result.category, result.id)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      <span className="font-medium">{result.name}</span>
                      <span className="text-sm text-gray-500 block capitalize">{result.category}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button - Ensure it's visible */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/#home"
                className="px-3 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="px-3 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <div className="space-y-1">
                <div className="font-medium px-3 py-2">Conveyors</div>
                <div className="pl-4 space-y-1 max-h-40 overflow-y-auto">
                  {productCategories.conveyors.map((item) => (
                    <Link
                      key={item.id}
                      href={`/#conveyors-${item.id}`}
                      className="block px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-medium px-3 py-2">Furniture Items</div>
                <div className="pl-4 space-y-1 max-h-40 overflow-y-auto">
                  {productCategories.furniture.map((item) => (
                    <Link
                      key={item.id}
                      href={`/#furniture-${item.id}`}
                      className="block px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-medium px-3 py-2">MS Racking</div>
                <div className="pl-4 space-y-1">
                  {productCategories.racking.map((item) => (
                    <Link
                      key={item.id}
                      href={`/#racking-${item.id}`}
                      className="block px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-medium px-3 py-2">Trolleys</div>
                <div className="pl-4 space-y-1">
                  {productCategories.trolleys.map((item) => (
                    <Link
                      key={item.id}
                      href={`/#trolleys-${item.id}`}
                      className="block px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/#clients"
                className="px-3 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </Link>
              <Link
                href="/#contact"
                className="px-3 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
