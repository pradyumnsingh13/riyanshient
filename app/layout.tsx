import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Riyanshi Enterprises | Top Fabricators in Baddi | Industrial Fabrication Services",
  description:
    "Riyanshi Enterprises in Baddi offers expert fabrication and industrial services tailored for pharma and manufacturing companies. Trusted fabricators in Baddi.",
  keywords:
    "Riyanshi Enterprises, fabricators in Baddi, industrial fabrication Baddi, welding services Baddi, metal work Baddi, fabrication company Himachal Pradesh, Baddi pharma fabricators",
  authors: [{ name: "Riyanshi Enterprises" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
