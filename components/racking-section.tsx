import ProductCarousel from "./product-carousel"

const rackingProducts = [
  {
    id: "pallet-racking",
    name: "Pallet Racking",
    image: "/racking/palletracking.jpeg",
    description: "Heavy-duty pallet racking systems for efficient warehouse storage.",
  },
  {
    id: "cantilever-racking",
    name: "Cantilever Racking",
    image: "/racking/cantilever.jpg",
    description: "Versatile cantilever racking for long or irregularly shaped items.",
  },
  {
    id: "mezzazine-racking",
    name: "Mezzanine Racking",
    image: "/racking/mezzanine.jpg",
    description: "Space-optimizing mezzanine racking systems for multi-level storage.",
  },
]

export default function RackingSection() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Racking Systems</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our pharmaceutical-grade racking systems maximize storage efficiency while ensuring compliance with industry
            standards.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <ProductCarousel products={rackingProducts} category="racking" />
      </div>
    </div>
  )
}
