import { Mail, Phone, FileText } from "lucide-react"
import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* GST Information - centered on mobile, left-aligned on desktop */}
        <div className="flex items-center">
          <span className="font-semibold mr-2">GST:</span>
          <span>02EZYPK9510E1Z1</span>
        </div>

        {/* Contact Information - stacked on mobile, horizontal on desktop */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Link href="mailto:riyanshienterprises13@gmail.com" className="flex items-center hover:text-primary">
            <Mail className="h-4 w-4 mr-1" />
            <span>riyanshienterprises13@gmail.com</span>
          </Link>

          <Link href="tel:+917880006141" className="flex items-center hover:text-primary">
            <Phone className="h-4 w-4 mr-1" />
            <span>+91 7880006141</span>
          </Link>

          <Link href="/riyanshicatlogue.pdf" className="flex items-center hover:text-primary">
            <FileText className="h-4 w-4 mr-1" />
            <span>Download Catalogue</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
