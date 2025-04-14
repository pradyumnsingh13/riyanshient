import { Mail, Phone, FileText } from "lucide-react"
import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-gray-100 py-2 text-sm overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Use a more stacked approach on mobile */}
        <div className="flex flex-col items-center w-full">
          {/* GST Information - centered and full width */}
          <div className="flex items-center justify-center w-full mb-2">
            <span className="font-semibold mr-2">GST:</span>
            <span>02EZYPK9510E1Z1</span>
          </div>

          {/* Contact Information - grid layout for better spacing */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 w-full max-w-3xl mx-auto text-center">
            <Link
              href="mailto:riyanshienterprises13@gmail.com"
              className="flex items-center justify-center hover:text-primary"
            >
              <Mail className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="truncate text-xs sm:text-sm">riyanshienterprises13@gmail.com</span>
            </Link>

            <Link href="tel:+917880006142" className="flex items-center justify-center hover:text-primary">
              <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-xs sm:text-sm">+91 7880006142</span>
            </Link>

            <Link
              href="/riyanshicatlogue.pdf"
              className="flex items-center justify-center hover:text-primary col-span-1 xs:col-span-2 sm:col-span-1"
            >
              <FileText className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Download Catalogue</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
