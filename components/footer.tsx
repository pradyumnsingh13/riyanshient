import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Riyanshi Enterprises</h3>
            <p className="text-gray-400 mb-4">
              Premium pharmaceutical equipment manufacturer providing innovative solutions for the pharmaceutical
              industry.
            </p>
            <p className="text-gray-400">GST: 02EZYPK9510E1Z1</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  About
                </Link>
              </li>
              <li>
                <Link href="#conveyors" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Conveyors
                </Link>
              </li>
              <li>
                <Link href="#furniture" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Furniture Items
                </Link>
              </li>
              <li>
                <Link href="#racking" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Racking
                </Link>
              </li>
              <li>
                <Link href="#trolleys" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Trolleys
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#conveyors/loading-conveyor" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Loading Conveyor
                </Link>
              </li>
              <li>
                <Link href="#furniture/ss-locker" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  SS Locker
                </Link>
              </li>
              <li>
                <Link href="#racking/pallet-racking" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Pallet Racking
                </Link>
              </li>
              <li>
                <Link href="#trolleys/clean-room-trolleys" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Clean Room Trolleys
                </Link>
              </li>
              <li>
                <Link href="#furniture/computer-table" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Computer Table
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Malku-majra Post-Bhud tehsil- Baddi,H.P., 173205</li>
              <li>
                <a href="tel:+917880006141" className="hover:text-white">
                  +91 7880006141
                </a>
              </li>
              <li>
                <a href="tel:+918627852818" className="hover:text-white">
                  +91 8627852818
                </a>
              </li>
              <li>
                <a href="mailto:riyanshienterprises13@gmail.com" className="hover:text-white">
                  riyanshienterprises13@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Riyanshi Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
