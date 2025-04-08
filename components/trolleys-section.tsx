import ProductCarousel from "./product-carousel"

const trolleyProducts = [
  {
    id: "utility-trolleys",
    name: "Utility Trolleys",
    image: "/trolleys/utilitytrolley.jpeg",
    description: "Versatile utility trolleys for various pharmaceutical applications.",
  },
  {
    id: "material-handling-trolleys",
    name: "Material Handling Trolleys",
    image: "/trolleys/materialhandling.webp",
    description: "Specialized trolleys for safe and efficient material transport.",
  },
  {
    id: "clean-room-trolleys",
    name: "Clean Room Trolleys",
    image: "/trolleys/cleanroom.jpeg",
    description: "Trolleys designed specifically for clean room environments with minimal particle generation.",
  },
]

export default function TrolleysSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trolleys</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our range of pharmaceutical trolleys are designed for specific applications, ensuring efficient material
            handling in controlled environments.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <ProductCarousel products={trolleyProducts} category="trolleys" />
      </div>
    </div>
  )
}
