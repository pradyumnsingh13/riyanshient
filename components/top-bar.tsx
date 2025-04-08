import { Mail, Phone, FileText } from "lucide-react"
import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="font-semibold mr-2">GST:</span>
            <span>02EZYPK9510E1Z1</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center space-x-4">
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
