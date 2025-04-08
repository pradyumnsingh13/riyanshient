import type { Metadata } from "next"
import TopBar from "@/components/top-bar"
import Navbar from "@/components/navbar"
import HomeSection from "@/components/home-section"
import AboutSection from "@/components/about-section"
import ConveyorsSection from "@/components/conveyors-section"
import FurnitureSection from "@/components/furniture-section"
import RackingSection from "@/components/racking-section"
import TrolleysSection from "@/components/trolleys-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Riyanshi Enterprises | Premium Pharmaceutical Equipment Manufacturer",
  description:
    "Leading manufacturer of premium pharmaceutical equipment including conveyors, furniture items, racking systems, and trolleys for pharmaceutical industry.",
  keywords:
    "pharmaceutical equipment, conveyor systems, pharmaceutical furniture, racking systems, trolleys, clean room equipment",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="conveyors">
        <ConveyorsSection />
      </section>
      <section id="furniture">
        <FurnitureSection />
      </section>
      <section id="racking">
        <RackingSection />
      </section>
      <section id="trolleys">
        <TrolleysSection />
      </section>
      <section id="clients">
        <ClientsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
